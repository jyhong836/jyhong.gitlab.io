+++
title = "Federated Robustness Propagation: Sharing Adversarial Robustness in Federated Learning"
date = 2023-01-02T13:08:20+08:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["admin", "Haotao Wang", "Zhangyang Wang", "Jiayu Zhou"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference paper
# 2 = Journal article
# 3 = Manuscript
# 4 = Report
# 5 = Book
# 6 = Book section
publication_types = ["1"]

# Publication name and optional abbreviated version.
publication = "Proceedings of the Thirty-Seventh AAAI Conference on Artificial Intelligence"
publication_short = "AAAI (oral)"

# Abstract and optional shortened version.
abstract = "Federated learning (FL) emerges as a popular distributed learning schema that learns a model from a set of participating users without requiring raw data to be shared. One major challenge of FL comes from heterogeneity in users, which may have distributionally different (or non-iid) data and varying computation resources. Just like in centralized learning, FL users also desire model robustness against malicious attackers at test time. Whereas adversarial training (AT) provides a sound solution for centralized learning, extending its usage for FL users has imposed significant challenges, as many users may have very limited training data as well as tight computational budgets, to afford the data-hungry and costly AT. In this paper, we study a novel learning setting that propagates adversarial robustness from high-resource users that can afford AT, to those low-resource users that cannot afford it, during the FL process. We show that existing FL techniques cannot effectively propagate adversarial robustness among non-iid users, and propose a simple yet effective propagation approach that transfers robustness through carefully designed batch-normalization statistics. We demonstrate the rationality and effectiveness of our method through extensive experiments. Especially, the proposed method is shown to grant FL remarkable robustness even when only a small portion of users afford AT during learning. Codes can be accessed at [github](https://github.com/illidanlab/FedRBN)."
abstract_short = "As AT is computation-intensive and users in FL have heterogeneous computation resources, Federated Robustness Propagation (FRP) aims to share the AT users' robustness with ST users. We propose the first simple yet effective algorithm to conduct FRP."

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
selected = true

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
#   E.g. `projects = ["deep-learning"]` references `content/project/deep-learning.md`.
projects = ["federated-learning"]

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Federated-Learning", "Robustness", "Selected"]

# Links (optional).
url_pdf = ""
url_preprint = "https://arxiv.org/abs/2106.10196"
url_code = "https://github.com/illidanlab/FedRBN"
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = "poster.pdf"
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
