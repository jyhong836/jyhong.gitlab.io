+++
title = "Disturbance Grassmann Kernels for Subspace-Based Learning"
date = 2018-06-11T13:08:32+08:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["**Junyuan Hong**", "Huanhuan Chen", "Feng Lin"]

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
publication = "In *The 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining*"
publication_short = "In *KDD'18*"

# Abstract and optional shortened version.
abstract = "In this paper, we focus on subspace-based learning problems, where data elements are linear subspaces instead of vectors. To handle this kind of data, Grassmann kernels were proposed to measure the space structure and used with classifiers, e.g., Support Vector Machines (SVMs). However, the existing discriminative algorithms mostly ignore the instability of subspaces, which would cause the classifiers to be misled by disturbed instances. Thus we propose considering all potential disturbances of subspaces in learning processes to obtain more robust classifiers. Firstly, we derive the dual optimization of linear classifiers with disturbances subject to a known distribution, resulting in a new kernel, Disturbance Grassmann (DG) kernel. Secondly, we research into two kinds of disturbance, relevant to the subspace matrix and singular values of bases, with which we extend the Projection kernel on Grassmann manifolds to two new kernels. Experiments on action data indicate that the proposed kernels perform better compared to state-of-the-art subspace-based methods, even in a worse environment."
abstract_short = "In this paper, we focus on subspace-based learning problems, where data elements are linear subspaces instead of vectors. To handle this kind of data, Grassmann kernels were proposed to measure the space structure and used with classifiers, e.g., Support Vector Machines (SVMs). However, the existing discriminative algorithms mostly ignore the instability of subspaces, which would cause the classifiers to be misled by disturbed instances. Thus we propose considering all potential disturbances of subspaces in learning processes to obtain more robust classifiers."

# Is this a selected publication? (true/false)
selected = true

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = []

# Slides (optional).
#   Associate this page with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides = ""

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Subspace", "Grassmann manifolds", "Kernel", "Noise", "Classification", "Supervised learning"]

# Links (optional).
url_pdf = "https://arxiv.org/abs/1802.03517"
url_preprint = ""
url_code = ""
url_dataset = ""
url_project = ""
url_slides = ""
url_video = "https://www.youtube.com/watch?v=1qLHgSrcZ4M"
url_poster = ""
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
url_custom = [{name = "Supplementary file", url = "/files/sigkdd_supp.pdf"}]

# Digital Object Identifier (DOI)
doi = "10.1145/3219819.3219959"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""
  preview_only = true
+++

![dg_manifold](/img/publication/dg_manifold.png)

{{< youtube 1qLHgSrcZ4M >}}