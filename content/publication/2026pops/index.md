---
title: "POPS: Recovering Unlearned Multi-Modality Knowledge in MLLMs with Prompt-Optimized Parameter Shaking"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Zhangheng Li
- admin
- Jianing Zhu
- Sungmin Eum
- Shuowen Hu
- Suya You
- Zhangyang Wang


date: "2026-06-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"
publishDate: "2026-06-01T00:00:00Z"

# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

publication: "Transactions on Machine Learning Research"
publication_short: "TMLR"

abstract: "Multimodal Large Language Models (MLLMs) have demonstrated impressive performance on cross-modal tasks by jointly training on large-scale textual and visual data, where privacy-sensitive examples could be unintentionally encoded, raising concerns about privacy or copyright violation. To this end, Multi-modality Machine Unlearning (MMU) was proposed as a mitigation that can effectively force MLLMs to forget private information. However, the robustness of such unlearning methods is not fully exploited when the model is published and accessible to malicious users. In this paper, we propose a novel adversarial strategy, namely Prompt-Optimized Parameter Shaking (POPS), aiming to recover the supposedly unlearned multi-modality knowledge from the MLLMs. Our method elicits the victim MLLMs to generate potential private examples via prompt-suffix optimization, and then exploits these synthesized outputs to fine-tune the models so they disclose the true private information. The experiments on the different MMU benchmarks reveal substantial weaknesses in the existing MMU algorithms. Our POPS can even achieve a near-complete recovery of supposedly erased sensitive information on the unlearned MLLMs, exposing fundamental vulnerabilities that challenge the foundational robustness of representative MMU-based privacy protections."

# Summary. An optional shortened abstract.
summary: An adversarial attack that recovers supposedly unlearned multi-modality knowledge from MLLMs via prompt-suffix optimization and fine-tuning, exposing vulnerabilities in machine unlearning defenses.

tags: ["MLLM", "Large Models", "Machine Unlearning", "Privacy", "Trustworthy", "Multi-Modality"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
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
#   caption: 'POPS: Prompt-Optimized Parameter Shaking'
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
