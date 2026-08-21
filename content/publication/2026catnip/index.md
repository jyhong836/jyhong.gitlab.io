---
title: "CALIBURN: Self-Calibrated LLM Unlearning Alignment"

authors:
- Zhengbang Yang
- Yisheng Zhong
- admin
- Zhuangdi Zhu

date: "2026-08-21T00:00:00Z"
doi: ""

publishDate: "2026-08-21T00:00:00Z"

# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

publication: In *Empirical Methods in Natural Language Processing*
publication_short: "EMNLP (Main)"

abstract: "LLM unlearning aims to remove the influence of undesirable knowledge from pretrained language models, which offers a practical mechanism for addressing safety and privacy concerns. Existing unlearning approaches, such as Gradient Ascent, are prone to catastrophic forgetting. Alignment-based approaches provide an alternative direction, yet their effectiveness is limited by the quality of the reference model. In realistic settings, both methods still require large retention datasets to preserve general knowledge. We propose a principled method that quantifies the target LLM's confidence in undesirable knowledge and uses it to calibrate the model's unlearning gradient updates more precisely. It enables fine-grained control over forgetting while better preserving model utility, thus reducing the dependence on retention data or prohibitive unlearning training data. Extensive evaluations on multiple benchmarks, including MUSE and WMDP, show that our method achieves effective unlearning and improves the trade-off between knowledge removal and utility preservation compared with state-of-the-art methods."

summary: "A retention-data-free LLM unlearning method that uses a self-calibrated term to forget targeted knowledge more precisely while preserving general capabilities."

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
