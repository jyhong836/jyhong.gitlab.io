---
title: "More is Less: The Pitfalls of Multi-Model Synthetic Preference Data in DPO Safety Alignment"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Yifan Wang
- Runjin Chen
- Bolian Li
- David Cho
- Yihe Deng
- Ruqi Zhang
- Tianlong Chen
- Zhangyang Wang
- Ananth Grama
- admin


date: "2025-06-03T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"
publishDate: "2025-06-03T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "ArXiv"
publication_short: "ArXiv"

abstract: "Aligning large language models (LLMs) with human values is an increasingly critical step in post-training. Direct Preference Optimization (DPO) has emerged as a simple, yet effective alternative to reinforcement learning from human feedback (RLHF). Synthetic preference data with its low cost and high quality enable effective alignment through single- or multi-model generated preference data. Our study reveals a striking, safety-specific phenomenon associated with DPO alignment: Although multi-model generated data enhances performance on general tasks (ARC, Hellaswag, MMLU, TruthfulQA, Winogrande) by providing diverse responses, it also tends to facilitate reward hacking during training. This can lead to a high attack success rate (ASR) when models encounter jailbreaking prompts. The issue is particularly pronounced when employing stronger models like GPT-4o or larger models in the same family to generate chosen responses paired with target model self-generated rejected responses, resulting in dramatically poorer safety outcomes. Furthermore, with respect to safety, using solely self-generated responses (single-model generation) for both chosen and rejected pairs significantly outperforms configurations that incorporate responses from stronger models, whether used directly as chosen data or as part of a multi-model response pool. We demonstrate that multi-model preference data exhibits high linear separability between chosen and rejected responses, which allows models to exploit superficial cues rather than internalizing robust safety constraints. Our experiments, conducted on models from the Llama, Mistral, and Qwen families, consistently validate these findings."

# Summary. An optional shortened abstract.
summary: A study revealing safety-specific pitfalls of multi-model synthetic preference data in DPO alignment.

tags: ["LLM", "Large Models", "AI Safety", "Trustworthy", "DPO", "RLHF"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/2504.02193'
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
#   caption: 'More is Less: Multi-Model Synthetic Preference Data Pitfalls'
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

## Key Findings: When More Data Hurts Safety

While conventional wisdom suggests that more diverse training data leads to better performance, our research reveals a counterintuitive finding in the realm of AI safety: **more is actually less** when it comes to multi-model synthetic preference data in Direct Preference Optimization (DPO).

### The Safety Paradox

We discovered a striking phenomenon where multi-model generated preference data creates a dangerous trade-off:
- ✅ **Improves general performance** on standard benchmarks (ARC, HellaSwag, MMLU, TruthfulQA, Winogrande)
- ❌ **Severely compromises safety** when facing adversarial attacks, with safety performance dropping by **5-15%**

### Why Multi-Model Data Fails at Safety

Our analysis reveals three critical issues:

1. **Reward Hacking**: Multi-model data facilitates reward hacking during training, leading to high attack success rates (ASR) when models encounter jailbreaking prompts.

2. **Linear Separability Problem**: Multi-model preference data exhibits high linear separability between chosen and rejected responses, allowing models to exploit superficial cues rather than learning robust safety constraints.

3. **Stronger ≠ Safer**: Using stronger models like GPT-4o to generate chosen responses paired with target model self-generated rejected responses results in dramatically poorer safety outcomes.

### The Single-Model Solution

Surprisingly, using solely **self-generated responses** for both chosen and rejected pairs significantly outperforms multi-model configurations for safety alignment. This finding challenges the prevailing assumption that diversity always improves model training.

### Bottom Line

Quality matters more than quantity when teaching AI systems about safety preferences. Our experiments across Llama, Mistral, and Qwen model families consistently validate this counterintuitive finding, suggesting that the AI safety community should reconsider current data generation strategies for preference optimization.
