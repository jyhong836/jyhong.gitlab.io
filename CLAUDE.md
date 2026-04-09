# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal academic website for Junyuan Hong, built with **Hugo** using a custom fork of the Wowchemy Academic theme ([junyuan-academic-theme](https://github.com/jyhong836/junyuan-academic-theme)). Deployed to GitLab Pages and Netlify.

## Build & Development

```bash
# Local dev server (includes drafts)
hugo server -D

# Production build
hugo --gc --minify
```

The theme must be present at `themes/junyuan-academic-theme/` (clone it manually; it's not a submodule tracked in-tree). Hugo modules also pull `wowchemy-hugo-modules/wowchemy-cms` via `go.mod`.

CI uses Hugo Extended 0.99.1 (GitLab) / 0.83.1 (Netlify). Output goes to `public/`.

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

- **GitLab Pages**: Push to `master` triggers `.gitlab-ci.yml` pipeline
- **Netlify**: Configured via `netlify.toml`, builds on push with deploy previews for branches
