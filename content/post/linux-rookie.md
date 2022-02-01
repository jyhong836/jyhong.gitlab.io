+++
title = "Linux Rookie Book"
date = 2018-06-11T18:11:46+08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Linux", "How-to"]
categories = ["How-to"]

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

As a MS student, I am going to leave my lab at USTC. With this post, I'd like to share my experiences on the Linux system, especially for those who are new to such a system.

<!--more-->

# Part 1: Introduction

## For whom is the post written?

The audiances are expected to be 

+ The first-year student for MSc of CS.
+ He/She is to do research on fields, including Software Developing, Maching Learning and related directions.
+ He/She eager to pay time to solve issues by themselves in the future.

In addition, it's better to clarify who is not the potential audiances:

+ *Who expect to find all solutions to their works on Linux.* The space is limit so as not possible to do that.
+ *Who expect to be a master of the problems introduced here.* This is an small cookbook, not encyclopedia.

Most importantly, remember that I am just a student, but not a master in these fields. Thus, there is hich chance that I could be wrong.

## Why English rather than Chinese?

You may wonder why the post is written in English, while the readers are mostly speaking Chinese.
This is just my opinion that:

+ English is more efficient for people to find answers from Google, stackoverflow and so on.
+ English is in every corner of the programmers' world, in the documents of python language, in the books of cutting-edge techniques and so on.
+ The comments and programming variables are in English. When you are familiar with English, esp. some special terminologies, it's more possible for you to understand the comments, variables and therefore the codes.

## How this post will be organized?

Basically, I will organize the post centered in several crucial tasks:

+ How to access files you want?
+ How to run Matlab codes?
+ How to submit a PBS job?

These questions are under the conditions:

+ There is no monitor (or screen) if not specified.

Some concepts:

+ shell: it is actually the command line tool you used in the Linux to interact with the whole system.
+ bash: it is one kind of shell. If not specified, I refer shell to bash here. Both `bash` and `shell` are softwares.
+ Ubuntu: A Linux system.

Now, let's rock!

# Part 2: Access your files

This is the very first question to every Linux user: *Where can I find my files?* or *How can I handle my files?*
This question could include several parts. I will demonstrate them with comments (started with `#`). The exected shell commands are displayed with a `$` at the begining.

```shell
$ ls  # (l)i(s)t all files under current folder
$ cd hello # (C)hange (D)irectory to 'hello' folder
$ vim aa.txt # edit text file or any other files. `vim` is a software
$ rm aa.txt # (R)e(M)ove file
$ cp aa.txt bb.txt # (c)o(p)y from aa.txt to bb.txt
$ man cp # open the manual of command `cp`, and press `q` to quit.
$ cat aa.txt # print the content
$ ssh jyhong@129.0.0.1 # log into server: `ssh <username>@<server address or IP>`
```

<!-- To record terminal: https://asciinema.org/docs/embedding

<script src="https://asciinema.org/a/MFy5RicpxMVrcFqfFvaEH8WgY.js" id="asciicast-MFy5RicpxMVrcFqfFvaEH8WgY" async></script> -->

# Part 3: Run Matlab codes

There are two ways to do that. One is with your familiar window, while the other is simply a commandline tool.

## Run locally-like

You must be familiar with Matlab's Graphic User Interface (GUI). It could freak me out when I found I can do things with the familiar interface. But, soon, it turns out that it's unnecessary.
The strategy is based on forwarding x-window. See [Use GUI software remotely](#use-gui-software-remotely) for more information. Here are commands:
```shell
$ ssh -X ubri # '-X' means the remote GUI display will be forwarded to local.
$ jyhong@ubri > matlab # run the matlab
```
Then you should get into your familiar zone.
If no GUI window appears, try one of these:

1. Run Matlab using absolute path.
2. Check the `~/.bashrc` file, if there is a setting of `matlab` to disable GUI, e.g., `matlab -nodisplay` will do that.

## Run in command line

It is straightforward to run Matlab in command line. Just run `matlab`.
If the command is not found, add below line to your `~/.bashrc`
```bash
alias matlab="/opt/MATLAB/R2016a/bin/matlab -nodisplay -singleCompThread"
```
which use the command `matlab` to represent the later long one.

# Part 4: Submit a PBS job

When you first log into the server, you could see some information about the job management sysetm, torque[^1] [^2].

Some common steps:

1. Copy the `template.pbs` file: `cp template.pbs myjob.pbs`
2. Add your run command to the last line of the `pbs` file.
3. Submit it:
```
qsub myjob.pbs
```
or 
```
qsub -d `pwd` myjob.pbs
```


# Part 5: Useful tools

## Use GUI software remotely

Basically, you can run any GUI software remotely after you log in with below comnand:
```
$ ssh -X urbi
```
Unless the remote system is not GUI-based. For example, the server version of Ubuntu. The operation is supported natively by most Linux desktop system. If you want to use it at Windows, try [XShell](https://www.netsarang.com/products/xsh_key_features.html) (See '*Launch X Applications Through an SSH Tunnel*' feature), which is a powerful tool for using `ssh`.



[^1]: http://bicmr.pku.edu.cn/~wenzw/pages/batch.html
[^2]: http://docs.adaptivecomputing.com/torque/4-0-2/Content/topics/commands/qsub.htm
