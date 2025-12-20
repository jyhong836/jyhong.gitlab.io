---
title: "AD-VF: LLM-Automatic Differentiation Enables Fine-Tuning-Free Robot Planning from Formal Methods Feedback"

authors:
- Yunhao Yang
- admin
- Gabriel Jacob Perin
- Zhiwen Fan
- Li Yin
- Zhangyang Wang
- Ufuk Topcu

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2025-09-22T00:00:00Z"
doi: ""

publishDate: "2025-09-22T00:00:00Z"

publication_types: ["3"]

publication: "ArXiv"
publication_short: "ArXiv"

abstract: "Large language models (LLMs) can translate natural language instructions into executable action plans for robotics, autonomous driving, and other domains. Yet, deploying LLM-driven planning in the physical world demands strict adherence to safety and regulatory constraints, which current models often violate due to hallucination or weak alignment. Traditional data-driven alignment methods, such as Direct Preference Optimization (DPO), require costly human labeling, while recent formal-feedback approaches still depend on resource-intensive fine-tuning. In this paper, we propose LAD-VF, a fine-tuning-free framework that leverages formal verification feedback for automated prompt engineering. By introducing a formal-verification-informed text loss integrated with LLM-AutoDiff, LAD-VF iteratively refines prompts rather than model parameters. This yields three key benefits: (i) scalable adaptation without fine-tuning; (ii) compatibility with modular LLM architectures; and (iii) interpretable refinement via auditable prompts. Experiments in robot navigation and manipulation tasks demonstrate that LAD-VF substantially enhances specification compliance, improving success rates from 60% to over 90%. Our method thus presents a scalable and interpretable pathway toward trustworthy, formally-verified LLM-driven control systems."

summary: "A framework leveraging formal verification feedback for scalable and interpretable LLM-driven robot planning."

tags: 
- "LLM"
- "Robotics"
- "Formal Verification"
- "Prompt Engineering"

featured: false

url_pdf: 'https://arxiv.org/abs/2509.18384'
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