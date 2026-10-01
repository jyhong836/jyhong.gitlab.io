# CLAUDE.md 

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Junyuan Hong, built with **Hugo** using a custom fork of the Wowchemy Academic theme ([junyuan-academic-theme](https://github.com/jyhong836/junyuan-academic-theme)). Published to GitLab Pages from the separate `gitlab_public/` repo — see Deployment.

## Build & Development

```bash
# Local dev server (includes drafts)
hugo server -D

# Production build
hugo --gc --minify
```

The theme must be present at `themes/junyuan-academic-theme/` (clone it manually). It is its own git repo (`github.com:jyhong836/junyuan-academic-theme`, branch `main`); this repo records it only as a gitlink with no `.gitmodules` entry, so a theme change is a commit and push in the theme repo, then a commit here to bump the pointer. Hugo modules also pull `wowchemy-hugo-modules/wowchemy-cms` via `go.mod`.

**Hugo version:** builds with Hugo Extended **0.166.0** (Homebrew). In Oct 2026 the theme was patched for Hugo ≥ 0.156 (`site.Data` → `hugo.Data`, `site.LanguageCode` → `site.Language.Locale`, `.IsNode` → `.IsPage`, `site.AllPages` → `hugo.Sites`, `site.GoogleAnalytics` → `site.Config.Services.GoogleAnalytics.ID`, partial names without the `partials/` prefix), so Hugo 0.99 and older no longer build it. One `.Site.Data` deprecation warning remains; it comes from the upstream `wowchemy-cms` module, not from this repo. `netlify.toml` and `.gitlab-ci.yml` pin 0.166.0 but are not how the site is published (see Deployment).

## Architecture

- **`config/_default/`** — Hugo config split into `config.yaml` (site settings, modules, permalinks), `params.yaml` (theme params, color scheme `junyuan_austin`, analytics), `menus.yaml` (nav), `languages.yaml`.
- **`content/`** — All site content. Key sections:
  - `home/` — Widget-based homepage. Each `.md` controls a widget section via YAML frontmatter (`widget`, `active`, `weight` for ordering). Files ending in `.Rmd` are inactive (disabled sections).
  - `publication/` — One folder per paper (e.g., `2025seal/index.md`). Naming convention: `{year}{short_name}` or `{year}_{short_name}`.
  - `authors/admin/` — Primary author profile.
  - `post/`, `project/`, `event/`, `slides/` — Blog posts, projects, talks, presentations.
- **`themes/junyuan-academic-theme/`** — Custom theme (local clone, not a Hugo module).

## Adding a Publication

Each publication lives in `content/publication/<folder>/index.md`. Use an existing publication (e.g., `2025seal/index.md`) as a template. Key frontmatter fields:

- `authors` — Use `admin` for the site owner (links to profile automatically)
- `publication_types` — `["1"]` conference, `["2"]` journal, `["3"]` preprint, etc.
- `publication` / `publication_short` — Full venue name and abbreviation
- `url_pdf`, `url_code`, `url_dataset` — External links
- `featured` — Set `true` to appear in the Featured widget
- `publishDate` — Controls when the page goes live (future dates = scheduled)

**Automated workflow**: Fetch an arXiv HTML page and use `2025seal/index.md` as a template to generate a new publication page.

## Homepage Widgets

Homepage sections in `content/home/` are controlled by frontmatter:
- `active: true/false` — Enable/disable a section
- `weight: N` — Controls display order (lower = higher on page)
- `headless: true` — Required for widget sections
- Files with `.Rmd` extension are inactive/disabled sections

## Deployment

**Pushing this repo does not publish.** This repo's only remote is GitHub, so its `.gitlab-ci.yml` never runs. The live site at https://jyhong.gitlab.io is served from a second repo:

- `public` is a symlink to `gitlab_public/public` (both gitignored here).
- `gitlab_public/` is its own git repo (`git@gitlab.com:jyhong/jyhong.gitlab.io.git`, branch `main`), and its `.gitlab-ci.yml` serves the prebuilt HTML as-is.

To publish: commit and push the source here, run `hugo` from this repo's root, then commit and push `gitlab_public/`. Check `git -C gitlab_public status` after a build: a failed build can still leave partial output there. Hugo never removes HTML for deleted or drafted pages from `gitlab_public/public/`, so stale pages persist there until deleted by hand. Never put build output anywhere except `public/` or a temp directory.

`netlify.toml` is still in the tree; whether a Netlify site is connected is not recorded here.
