+++
title = "Add 3rd part dynamic library (.dylib) to Xcode target"
date = 2015-07-29T18:11:46+08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Xcode", "OS X"]
categories = ["tech"]

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

<!-- {% include JB/setup %} -->

Dynamic library (with .dylib suffix at UNIX-like OS) is a kind of library discriminated from static library (with .a suffix). Static library will be linked at linking stage instantly after codes are compiled, before binary product output. And instead library is loaded at runtime, I mean load but not link. Load means the executable file will search for binary library when they need it. That's why some app will announce you that it lack a lib when you double click them for running happily. In contrast, static library will compile these needed part into you app, so the user will not be bothered.

#### Then why we use dynamic library?

That's file size! A static library is several times bigger than a same function dynamic library. For example the SDL lib at OS X, which is located at /usr/local/Cellar/sdl2/2.0.3/lib/  if you install it through Homebrew.

```bash
$ ls /usr/local/Cellar/sdl2/2.0.3/lib/ -lh
-r--r--r-- 1 user admin 850K Jul 20 22:18 libSDL2-2.0.0.dylib
-r--r--r-- 1 user admin 1.5M Oct 22  2014 libSDL2.a
```

There are two method to add 3rd-part dynamic library to a Xcode target:

+ Install the library into your system
+ Copy your library into your product.

### Method 1: Install the library

For most library, 3rd part library can be installed into system, at `/usr/local/lib or /usr/lib`. Then just add header path to `Xcode target > Build Setting`, if the header file is not be found by Xcode. Finally, link your library at `Xcode target > Build Phase > Linked Libraries and Frameworks`.

However, this method doesn't allow your app user to use app freely, since it require the user to install the library too. That's terrible for an app.

### Method 2: Copy .dylib file into your product

So it's obvious that a better way to use dynamic library is bundle the .dylib with .app file. Path relative  yourself is better than relative to system.

How the executable binary file inform system which and where library is needed?

Since a program starts from its binary file, file is the only one from who system can get information about linked library. Or we can say the binary file is the bridge between developer and user's system, compiler and linker are the builders. So, we should ask the binary file for the answer directly with  otool provided by OS X.

Assume I have a project named Vivi, output file Vivi.app . Vivi used two of my framework named ViviSwiften.framework and ViviInterface.framework , they are in the same project as Vivi. Although you run an App by double click it, but it's not a binary file indeed. The executable binary file is located at AppName.app/Contents/MacOS/AppName instead.

Ask Vivi binary file:

```bash
$ otool -L Vivi.app/Contents/MacOS/Vivi 
Vivi.app/Contents/MacOS/Vivi:
    @rpath/ViviInterface.framework/Versions/A/ViviInterface (compatibility version 1.0.0, current version 1.0.0)
    @rpath/ViviSwiften.framework/Versions/A/ViviSwiften (compatibility version 1.0.0, current version 1.0.0)
    /usr/lib/libSystem.B.dylib (compatibility version 1.0.0, current version 1223.0.0)
    /System/Library/Frameworks/AppKit.framework/Versions/C/AppKit (compatibility version 45.0.0, current version 1387.1.0)
    /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation (compatibility version 150.0.0, current version 1225.0.0)
    /usr/lib/libobjc.A.dylib (compatibility version 1.0.0, current version 228.0.0)
    @rpath/libswiftAppKit.dylib (compatibility version 0.0.0, current version 0.0.0)
    @rpath/libswiftCore.dylib (compatibility version 0.0.0, current version 0.0.0)
    @rpath/libswiftCoreData.dylib (compatibility version 0.0.0, current version 0.0.0)
    @rpath/libswiftCoreGraphics.dylib (compatibility version 0.0.0, current version 0.0.0)
        ...
```

It seems that otool  print the list of path of all linked libraries and their version messages.

Well, there is so many stuffs. Hey, I found there is my frameworks,  ViviSwiften.framework and ViviInterface.framework. Okay, I know `ViviInterface.framework/Versions/A/ViviInterface` is the path point to the binary file of the framework (Different from .app file, framework's binary file is located at FrameworkName.framework/Versions/A/FrameworkName commonly), but what the @rpath means.

#### What's @excutable_path, @loader_path and @rpath?[^1] [^2] [^3]

<!-- Reference: [OS X Man Page: dyld(1)](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/dyld.1.html)(this also can be found by running `man dyld` at OS X), [Run-Path Dependent Libraries](https://developer.apple.com/library/mac/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/RunpathDependentLibraries.html). -->

The three variable is defined at runtime:

+ **@executable_path**, this always point to the product executable binary file path,  `AppName.app/Contents/MacOS/AppName`.
+ **@loader_path**, this is dependent on which is the loader. For example, my Vivi.app load the `ViviSwiften.framework`, then a dylib linked by ViviSwiften.framework could get two variable `@loader_path=/path/to/ViviSwiften.framework/Versions/A/`, and `@executable_path=/path/to/Vivi.app/Contents/MacOS/`.
+ **@rpath**, this is just a path stored some predefined path. You can set it at `Xcode target > Build Setting > Runpath Search Path`. Often there will include `@executable_path/../Frameworks` for an App target, `@executable_path/../Frameworks and @loader_path/Frameworks` for a Framework target, `@executable_path/../Frameworks` and `@loader_path/../Frameworks` for a Unit Test target.

Now we know Vivi.app used ViviSwiften.framework and ViviInterface.framework created by myself, and other system frameworks or libraries. But there is no 3rd part dynamic libraries added by myself (the dylib linked in Vivi.app is auto added by Xcode). The libraries is libSwiften.3.0.dylib which is linked in ViviSwiften.framework. Let's ask ViviSwiften if that is true.

```bash
$ otool -L ViviSwiften.framework/Versions/A/ViviSwiften
ViviSwiften.framework/Versions/A/ViviSwiften:
    @rpath/ViviSwiften.framework/Versions/A/ViviSwiften (compatibility version 1.0.0, current version 1.0.0)
    @loader_path/Frameworks/libSwiften.3.0.dylib (compatibility version 3.0.0, current version 3.0.0)
    /System/Library/Frameworks/Security.framework/Versions/A/Security (compatibility version 1.0.0, current version 57301.0.0)
    ...
```

You can see that ViviSwiften.framework used a 3rd part dynamic library libSwiften.dylib  with path `@loader_path/Frameworks/libSwiften.3.0.dylib`.

#### How system find these libraries or frameworks? (Vivi example)

1. User double clicks to run Vivi.app.
2. Vivi.app executes `Vivi.app/Contents/MacOS/Vivi`.
3. Search for dynamic libraries and frameworks needed by Vivi.app.
4. Found `@rpath/ViviSwiften.framework/Versions/A/ViviSwiften`, which is transferred to  `@executable_path/../Frameworks/ViviSwiften/`  then transferred to `Vivi.app/Contents/MacOS/Vivi/../Frameworks/ViviSwiften`.framework .
5. Search for dynamic libraries and frameworks needed by `ViviSwiften.framework`.
6. Found `@loader_path/Frameworks/libSwiften.3.0.dylib` which has been transferred to `ViviSwiften.framework/Version/A/Frameworks/libSwiften.3.0.dylib`.

#### How these messages are written into binary file?

Well, we know the messages are inside the binary file, but how they get into there? There are two hard woking builder: compiler and linker. Compiler will mark the needed symbols and pass to linker, Linker will find symbols in libraries you told it. Finally linker will write the needed libraries into executable binary file. If you provide a static library, linker will write the whole file into binary file. Or if you provide a dynamic library, only library path will be written into binary file.

#### Where does linker get the path from?

Unfortunately the path is not provided by developer of the App but the 3rd part library developer. So you can not let Xcode use the path relative your product or use path provided by yourself.

Let's review ViviSwiften.framework's answer to otool:

```bash
$ otool -L ViviSwiften.framework/Versions/A/ViviSwiften
ViviSwiften.framework/Versions/A/ViviSwiften:
    @rpath/ViviSwiften.framework/Versions/A/ViviSwiften (compatibility version 1.0.0, current version 1.0.0)
    @loader_path/Frameworks/libSwiften.3.0.dylib (compatibility version 3.0.0, current version 3.0.0)
        ...
```

We found the first line is the path to ViviSwiften itself. So...that's it.

The path describing the self path is called install_name.

The path provided by ViviSwiften.framework is the correct path as described above. But will the 3rd part library always provide correct path as we expected? No!

#### What path will compiled 3rd part library provide?

There is two situations:

1. You have installed the library with Homebrew or from source (like make install ). The library will provide path like: `/usr/lib/libxxx.dylib`, `/usr/local/lib/libxx.dylib`.
2. You just compiled source with `./configure` && make , then the library may provide path like: `libxx.dylib` without prefix.

Both situation is not expected.

### Change the install_name to expected

OS X provide another tool named install_name_tool  for change install_name and linked lib install_name.

```bash
# change linked lib path
$ install_name_tool -change old new bin_file
# change the library install_name
$ install_name_tool -id new_install_name bin_file
```

### The whole strategy

As a conclusion, the strategy for adding 3rd part dynamic library into Xcode target is:

1. Add library to Build Phase, and add header to search path. This guarantee no compile and link error will occur.
2. Let Xcode copy .dylib file into product after compiled. Add "New Copy Files Phase", name it "Copy Libraries" {{< figure src="/img/post/new_copy_phase.jpg" title="new copy phase" numbered="true" width="60%" >}}
3. Set the "Destination" to "Frameworks". Add your dylib here.link_dynamic_lib ![link dynamic lib](/img/post/link_dynamic_lib.jpg)
4. Change install_name of library:
    ```
    $ install_name_tool -id @loader_path/Frameworks/libSwiften.3.0.dylib libSwiften.3.0.dylib
    ```

That's all.

### Reference

[^1]: [Build Settings中的变量@rpath,@loader_path,@executable_path.](http://www.tanhao.me/pieces/1361.html/)
[^2]: [OS X Man Page: dyld(1)](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/dyld.1.html) – Apple Developer
[^3]: [Run-Path Dependent Libraries](https://developer.apple.com/library/mac/documentation/DeveloperTools/Conceptual/DynamicLibraries/100-Articles/RunpathDependentLibraries.html) – Apple Developer

