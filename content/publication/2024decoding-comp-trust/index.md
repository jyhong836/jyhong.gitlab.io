---
title: "Decoding Compressed Trust: Scrutinizing the Trustworthiness of Efficient LLMs Under Compression"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Jinhao Duan
- Chenhui Zhang
- Zhangheng Li
- Chulin Xie
- Kelsey Lieberman
- James Diffenderfer
- Brian Bartoldson
- Ajay Jaiswal
- Kaidi Xu
- Bhavya Kailkhura
- Dan Hendrycks
- Dawn Song
- Zhangyang Wang
- Bo Li

# Author notes (optional)
author_notes:
- "Equal contribution"
- "Equal contribution"
- "Equal contribution"
- "Equal contribution"

date: "2024-03-06T13:08:20+08:00"
doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"
publishDate: "2024-03-06T13:08:20+08:00"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *ICLR 2024 Workshop on Secure and Trustworthy Large Language Models*
publication_short: SeT@ICLR

abstract: Compressing high-capability Large Language Models (LLMs) has emerged as a favored strategy for resource-efficient inferences. While state-of-the-art (SoTA) compression methods boast impressive advancements in preserving benign task performance, the potential risks of compression in term of safety and trustworthiness have been largely neglected. This study conducts the first, thorough evaluation of **three (3) leading LLMs** using **five (5) SoTA compression techniques** across **eight (8) trustworthiness dimensions**. Our experiments highlight the intricate interplay between compression and trustworthiness, revealing some interesting patterns. We find that quantization is currently a more effective approach than pruning in achieving efficiency and trustworthiness simultaneously. For instance, a 4-bit quantized model retains the trustworthiness of its original counterpart, but model pruning significantly degrades trustworthiness, even at 50% sparsity.  Moreover, employing quantization within a moderate bit range could unexpectedly improve certain trustworthiness dimensions such as privacy and fairness. Conversely, extreme quantization to very low bit levels (3 bits) tends to significantly reduce trustworthiness. This increased risk cannot be uncovered by looking at benign performance alone, in turn, mandating comprehensive trustworthiness evaluation in practice. These findings culminate in practical recommendations for simultaneously achieving high utility, efficiency, and trustworthiness in LLMs. 

# Summary. An optional shortened abstract.
summary: A comprehensive trustworthiness assessment of compressed LLMs.

tags: ["Trustworthy", "Selected", "Large Models", "Compression", "Pruning", "Quantization"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://openreview.net/pdf?id=rACfuoNKBU'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
# url_custom:
links:
  - name: Models
    url: "https://huggingface.co/compressed-llm"
  - name: Website
    url: "https://decoding-comp-trust.github.io"

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

