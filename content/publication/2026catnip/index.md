---
title: "CATNIP: LLM Unlearning via Calibrated and Tokenized Negative Preference Alignment"

authors:
- Zhengbang Yang
- Yisheng Zhong
- admin
- Zhuangdi Zhu

date: "2026-02-02T00:00:00Z"
doi: ""

publishDate: "2026-02-02T00:00:00Z"

# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

publication: "arXiv preprint arXiv:2602.02824"
publication_short: "arXiv"

abstract: "Pretrained knowledge memorized in LLMs raises critical concerns over safety and privacy, which has motivated LLM Unlearning as a technique for selectively removing the influences of undesirable knowledge. Existing approaches, rooted in Gradient Ascent (GA), often degrade general domain knowledge while relying on retention data or curated contrastive pairs, which can be either impractical or data and computationally prohibitive. Negative Preference Alignment has been explored for unlearning to tackle the limitations of GA, which, however, remains confined by its choice of reference model and shows undermined performance in realistic data settings. These limitations raise two key questions: i) Can we achieve effective unlearning that quantifies model confidence in undesirable knowledge and uses it to calibrate gradient updates more precisely, thus reducing catastrophic forgetting? ii) Can we make unlearning robust to data scarcity and length variation? We answer both questions affirmatively with CATNIP (Calibrated and Tokenized Negative Preference Alignment), a principled method that rescales unlearning effects in proportion to the model's token-level confidence, thus ensuring fine-grained control over forgetting. Extensive evaluations on MUSE and WMDP benchmarks demonstrated that our work enables effective unlearning without requiring retention data or contrastive unlearning response pairs, with stronger knowledge forgetting and preservation tradeoffs than state-of-the-art methods."

summary: "A token-level confidence-calibrated negative preference alignment method for LLM unlearning that removes undesirable knowledge without requiring retention data or contrastive pairs."

tags: ["LLM", "Unlearning", "Safety", "Privacy", "Preference Alignment", "Large Models"]

featured: false

url_pdf: 'https://arxiv.org/abs/2602.02824'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

projects:
  - "holistic-trustworthy"
  - "private-learning"

slides: ""

math: true
---
