---
title: "A Physics-Grounded Benchmark for Multi-Agent Dynamics in World Models"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Nuo Chen
- Lulin Liu
- Zihao Li
- Ziyao Zeng
- Zihao Zhu
- Wenyan Cong
- admin
- Yunhao Yang
- Zhengzhong Tu
- Yan Wang
- Boris Ivanovic
- Marco Pavone
- Zhangyang Wang
- Yang Zhou
- Zhiwen Fan


date: "2026-05-27T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"
publishDate: "2026-05-27T00:00:00Z"

# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

publication: "CVPR 2026 Workshop on Foundations of Multi-agent Evaluation and Analysis (FMEA)"
publication_short: "FMEA@CVPR"

abstract: "Generative world models hold promise as scalable simulators for autonomous systems, particularly for rare safety-critical multi-agent interactions such as vehicle collisions. However, current evaluation paradigms index heavily on visual fidelity and semantic alignment, leaving a critical blind spot: they rarely quantify whether generated dynamics obey the physical laws required for reliable simulation. To bridge this gap, we introduce CrashTwin, a physics-grounded evaluation framework designed to stress-test the physical trustworthiness of world models. CrashTwin combines 25K synthetic sequences and 12K real-world crash sequences with a calibration-free reconstruction pipeline that recovers metric-scale physical attributes from uncalibrated videos. We evaluate spatio-temporal consistency, momentum and energy conservation, and world-dynamics integrity. Benchmarking representative world models reveals that high perceptual quality can mask severe physical violations during complex interactions. By quantitatively exposing these failure modes, CrashTwin provides a vital diagnostic tool for developing physically grounded world models capable of reliable real-world simulation."

# Summary. An optional shortened abstract.
summary: A physics-grounded benchmark, CrashTwin, that stress-tests whether generative world models obey physical laws in safety-critical multi-agent collisions, exposing physical violations hidden behind high perceptual quality.

tags: ["World Models", "Physics-grounded Evaluation", "Collision Generation", "Benchmark", "Multi-Agent", "Autonomous Systems"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://openreview.net/pdf?id=RlMArW0XQ4'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
# url_custom:
# links:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'CrashTwin: A Physics-Grounded Benchmark for World Models'
#   focal_point: "center"
#   preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""  # example

math: true
---
