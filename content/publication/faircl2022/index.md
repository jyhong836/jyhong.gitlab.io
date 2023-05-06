+++
title = "Precautionary Unfairness in Self-Supervised Contrastive Pre-training"
date = 2022-11-20T13:08:20+08:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["admin", "Haotao Wang", "Haobo Zhang", "Zhangyang Wang", "Jiayu Zhou"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference paper
# 2 = Journal article
# 3 = Manuscript
# 4 = Report
# 5 = Book
# 6 = Book section
publication_types = ["3"]

# Publication name and optional abbreviated version.
publication = "Preprint"
publication_short = "Preprint"

# Abstract and optional shortened version.
abstract = "Recently, self-supervised contrastive pre-training has become the de facto regime, that allows for efficient downstream fine-tuning. Meanwhile, its fairness issues are barely studied, though they have drawn great attention from the machine learning community, where structured biases in data can lead to biased predictions against under-presented groups. Most existing fairness metrics and algorithms focus on supervised settings, e.g., based on disparities in prediction performance, and they become inapplicable in the absence of supervision. We are thus interested in the challenging question: how does the pre-training representation (un)fairness transfer to the downstream task (un)fairness, and can we define and pursue fairness in unsupervised pre-training? Firstly, we empirically show that imbalanced groups in the pre-training data indeed lead to unfairness in the pre-trained representations, and that cannot be easily fixed by fairness-aware fine-tuning without sacrificing efficiency. Secondly, motivated by the observation that the majority group of the pre-training data dominates the learned representations, we design the first unfairness metric that can be applicable to self-supervised learning, and leverage that to guide the contrastive pre-training for fairness-aware representations. Our experiments demonstrate that the underestimated representation disparities strike over 10% surges on the proposed metric and our algorithm improves 10 out of 13 tasks on the 1%-labeled CelebA dataset. Codes will be released upon acceptance. "
abstract_short = "Fairness in pre-training."

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
selected = true

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
#   E.g. `projects = ["deep-learning"]` references `content/project/deep-learning.md`.
projects = ["fairness"]

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Unsupervised learning", "Trustworthy", "Private Edge-Cloud Collaboration"]

# Links (optional).
url_pdf = ""
url_preprint = "https://openreview.net/pdf?id=l2FXO1RJ5Hs"
url_code = ""
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = ""
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# links = [{name = "Supplementary", url = "l2p_aaai21_supl.pdf"}]

# Does this page contain LaTeX math? (true/false)
math = false

# Does this page require source code highlighting? (true/false)
highlight = true

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
[header]
image = ""
caption = ""

+++
