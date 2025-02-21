---
title: "MedHallu: A Comprehensive Benchmark for Detecting Medical Hallucinations in Large Language Models"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Shrey Pandit
- Jiawei Xu
- admin
- Zhangyang Wang
- Tianlong Chen
- Kaidi Xu
- Ying Ding

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"
# - "Equal contribution"
# - "Equal contribution"

date: "2025-02-19T13:08:20+08:00"
doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"
publishDate: "2025-02-19T13:08:20+08:00"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
# publication: In *ICLR 2024 Workshop on Secure and Trustworthy Large Language Models*
# publication_short: SeT@ICLR
publication: In *ArXiv*
publication_short: ArXiv

abstract: Advancements in Large Language Models (LLMs) and their increasing use in medical question-answering necessitate rigorous evaluation of their reliability. A critical challenge lies in hallucination, where models generate plausible yet factually incorrect outputs. In the medical domain, this poses serious risks to patient safety and clinical decision-making. To address this, we introduce MedHallu, the first benchmark specifically designed for medical hallucination detection. MedHallu comprises 10,000 high-quality question-answer pairs derived from PubMedQA, with hallucinated answers systematically generated through a controlled pipeline. Our experiments show that state-of-the-art LLMs, including GPT-4o, Llama-3.1, and the medically fine-tuned UltraMedical, struggle with this binary hallucination detection task, with the best model achieving an F1 score as low as 0.625 for detecting "hard" category hallucinations. Using bidirectional entailment clustering, we show that harder-to-detect hallucinations are semantically closer to ground truth. Through experiments, we also show incorporating domain-specific knowledge and introducing a "not sure" category as one of the answer categories improves the precision and F1 scores by up to 38% relative to baselines. 

# Summary. An optional shortened abstract.
summary: Benchmark for medical hallucination by LLMs.

tags: ["Trustworthy", "Selected", "Large Models", "Health", "Safety"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2502.14302'
url_code: 'https://github.com/MedHallu/MedHalu'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
# url_custom:
links:
  - name: "🤗 Dataset"
    url: "https://huggingface.co/datasets/UTAustin-AIHealth/MedHallu"
  - name: "🌍 Website"
    url: "https://medhallu.github.io"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Outsourcing Training without Uploading Data'
#   focal_point: "center"
#   preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - "holistic-trustworthy"

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""  # example

math: true
---

