Junyuan Hong's website
=======

[![Hugo Theme](https://img.shields.io/badge/Hugo-black.svg?style=flat&logo=Hugo&color=orange&label=Theme)](https://github.com/jyhong836/junyuan-academic-theme) [![Demo](https://img.shields.io/badge/Hugo-black.svg?style=flat&logo=Hugo&color=orange&label=Demo)](https://jyhong.gitlab.io/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This [repo](https://github.com/jyhong836/jyhong.gitlab.io) contains Hugo source codes for [Junyuan's website](https://jyhong.gitlab.io/).
The website use the [Junyuan-customized theme](https://github.com/jyhong836/junyuan-academic-theme) which is based on below materials.

If you like my website, feel free fork the repo. I appreciate if you could mention [my website](https://jyhong.gitlab.io/) or [repo](https://github.com/jyhong836/jyhong.gitlab.io) on your new one.
If you have any questions, please open an issue at GitHub.

### How to use

Setup
```bash
# clone template
git clone git@github.com:jyhong836/jyhong.gitlab.io.git
cd jyhong.gitlab.io
mkdir themes & cd themes
# clone theme
git clone git@github.com:jyhong836/junyuan-academic-theme.git
cd ..
```
Debug by `hugo server -D`. Build html files to `public` folder by `hugo`. You can directly upload everything under `public` folder to your `<your_name>.github.io` repo for publishing.

Requires Hugo **extended**, tested with v0.166.0 (`brew install hugo`). The theme was patched in Oct 2026 for Hugo ≥ 0.156; older Hugo releases (e.g. 0.99) no longer build it.

### How I publish

`public` is a symlink to `gitlab_public/public`, and `gitlab_public/` is a separate git repo (`git@gitlab.com:jyhong/jyhong.gitlab.io.git`, branch `main`) that GitLab Pages serves as-is. Pushing this source repo does **not** update the live site.

```bash
hugo                                  # build into public/ -> gitlab_public/public/
cd gitlab_public
git add -A && git commit -m "Rebuild site" && git push
```

`hugo` does not delete pages that were removed from `content/`; their old HTML stays in `gitlab_public/public/` until deleted by hand.

Automatic publication generation with copilot agent. Prompt:
```
Use fetch tool to retrieve the content from <arxiv-html-page-url>.
Then use the index.md under 2025seal as template, create a new publication page.
```

