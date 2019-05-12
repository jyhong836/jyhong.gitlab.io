+++
title = "Variant Grassmann Manifolds: A Representation Augmentation Method for Action Recognition"
date = 2019-05-11T23:52:06-04:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["**Junyuan Hong**", "Yang Li", "Huanhuan Chen"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference paper
# 2 = Journal article
# 3 = Manuscript
# 4 = Report
# 5 = Book
# 6 = Book section
publication_types = ["2"]

# Publication name and optional abbreviated version.
publication = "ACM Transactions on Knowledge Discovery from Data"
publication_short = "TKDD"

# Abstract and optional shortened version.
abstract = "In classification tasks, classifiers trained with finite examples might generalize poorly to new data with unknown variance. For this issue, data augmentation is a successful solution where numerous artificial examples are added to training sets. In this article, we focus on the data augmentation for improving the accuracy of action recognition, where action videos are modeled by linear dynamical systems and approximately represented as linear subspaces. These subspace representations lie in a non-Euclidean space, named Grassmann manifold, containing points as orthonormal matrixes. It is our concern that poor generalization may result from the variance of manifolds when data come from different sources or classes. Thus, we introduce infinitely many variant Grassmann manifolds (VGM) subject to a known distribution, then represent each action video as different Grassmann points leading to augmented representations. Furthermore, a prior based on the stability of subspace bases is introduced, so the manifold distribution can be adaptively determined, balancing discrimination and representation. Experimental results of multi-class and multi-source classification show that VGM softmax classifiers achieve lower test error rates compared to methods with a single manifold."
abstract_short = ""

# Is this a selected publication? (true/false)
selected = false

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
tags = ["Subspace", "Grassmann manifolds", "Noise"]

# Links (optional).
url_pdf = "https://dl.acm.org/citation.cfm?id=3314203"
url_preprint = ""
url_code = ""
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = ""
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# url_custom = [{name = "Custom Link", url = "http://example.org"}]

# Digital Object Identifier (DOI)
doi = "10.1145/3314203"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""
+++
