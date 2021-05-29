+++
title = "Start my blog with Jekyll and disqus"
date = 2015-02-03T18:11:46+08:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Linux", "How-to", "jekyll"]
categories = ["website"]

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++

<!-- {% include JB/setup %} -->

> NOTE: this article is first posted in my [old website](https://jyhong836.github.io/), which has be deprecated.

Jekyll is a powerful static website framework, which indead works for GitHub Pages. At the time I found it, I decided to apply it for my github.io as you can see.

Some useful webpages for install Jekyll at github.io:

[Host on GitHub in 3 Minutes](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

Actually you need only to clone the Jekyll in your gihub.io, or just copy all file from Jekyll.

Jekyll advise you to clone the jekyll to local with your name and push it to your github.

```bash
git clone https://github.com/plusjade/jekyll-bootstrap.git USERNAME.github.io
cd USERNAME.github.com 
git remote set-url origin git@github.com:USERNAME/USERNAME.github.io
git push origin master
```

But if you have already create a repository at GitHub, you can also copy the files from jekyll to your repository.

```bash
git clone https://github.com/plusjade/jekyll-bootstrap.git jekyll-bootstrap
cd jekyll-bootstrap
cp -r ./* router/to/USERNAME.github.io
cd router/to/USERNAME.github.io
git push origin master
```

It also works honestly.

Another web about the Jekyll and GitHub: [Using Jekyll and GitHub Pages for Our Site](http://www.developmentseed.org/blog/2011/09/09/jekyll-github-pages/)

In the `_config.yml`, you can add some tools:

- Jekyll is easy to add Disqus for comments. You can visit [DISQUS](https://disqus.com/websites/?utm_source=hongblog&utm_medium=Disqus-Footer) for more details.

- You can also use Google Analytics to track your website.
