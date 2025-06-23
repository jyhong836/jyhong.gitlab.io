---
title: "Scaling Textual Gradients via Sampling-Based Momentum"

authors:
- Zixin Ding
- admin
- Jiachen T. Wang
- Zinan Lin
- Zhangyang Wang
- Yuxin Chen

date: "2025-05-31T00:00:00Z"
doi: ""

publishDate: "2025-05-31T00:00:00Z"

publication_types: ["3"]

publication: "ArXiv"
publication_short: "ArXiv"

abstract: "As prompts play an increasingly critical role in large language models (LLMs), optimizing textual prompts has become a crucial challenge. The Textual Gradient Descent (TGD) framework has emerged as a promising data-driven approach that iteratively refines textual prompts using LLM-suggested updates (or textual gradients) over minibatches of training samples. In this paper, we empirically demonstrate that scaling the number of training examples initially improves but later degrades TGD's performance across multiple downstream NLP tasks. However, while data scaling improves results for most tasks, it also significantly increases the computational cost when leveraging LLMs. To address this, we draw inspiration from numerical gradient descent and propose Textual Stochastic Gradient Descent with Momentum (TSGD-M) - a method that facilitates scalable in-context learning by reweighting prompt sampling based on past batch distributions. Across nine NLP tasks spanning three domains - including BIG-Bench Hard (BBH), natural language understanding tasks, and reasoning tasks - TSGD-M significantly outperforms TGD baselines that do not incorporate reweighted sampling, while also reducing variance in most tasks."

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