---
title: "Scaling Textual Gradients via Sampling-Based Momentum"

authors:
- Zixin Ding
- admin
- Zhan Shi
- Jiachen T. Wang
- Zinan Lin
- Li Yin
- Meng Liu
- Zhangyang Wang
- Yuxin Chen

# Author notes (optional)
author_notes:
- "Equal contribution"
- "Equal contribution"

date: "2025-05-31T00:00:00Z"
doi: ""

publishDate: "2025-05-31T00:00:00Z"

publication_types: ["3"]

publication: "ArXiv"
publication_short: "ArXiv"

abstract: "LLM-based prompt optimization, that uses LLM-provided \"textual gradients\" (feedback) to refine prompts, has emerged an effective method for automatic prompt engineering. However, its scalability and stability are unclear when using more data in training. We systematically investigate the potential and challenges of scaling training data in textual gradient descent. We show that naively scaling training examples is infeasible due to both explicit context-length limits and an implicit context wall, where long-context degradation yields diminishing returns. Inspired by prior wisdom in stochastic gradient descent, we propose Textual Stochastic Gradient Descent with Momentum (TSGD-M), which reweights updates through momentum sampling, using bootstrapped minibatch validation accuracy as importance weights over historical prompts. We introduce Gumbel-Top-k sampling for prompt generation, balancing exploration--exploitation and improving sampling efficiency while maintaining a low-variance running mean estimator. TSGD-M integrates seamlessly into existing prompt optimization frameworks, including TextGrad, DSPy-COPRO, and AdalFlow, and achieves consistent gains across 5 benchmarks."

summary: "A momentum-based, sampling-driven method for scaling textual gradient optimization in LLM prompt engineering, improving performance and efficiency across diverse NLP tasks."

tags: ["LLM", "Prompt Optimization", "Gradient Descent", "Sampling", "Momentum", "NLP"]

featured: false

url_pdf: 'https://arxiv.org/abs/2506.00400'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

projects:
  - ""

slides: ""

math: true
---