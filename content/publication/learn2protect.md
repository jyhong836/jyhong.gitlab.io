+++
title = "Learning Model-Based Privacy Protection under Budget Constraints"
date = 2021-01-20T13:08:20+08:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["**Junyuan Hong**", "Haotao Wang", "Zhangyang Wang", "Jiayu Zhou"]

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
publication = "In *The 35th AAAI Conference on Artifical Intelligence*"
publication_short = "In *AAAI'21*"

# Abstract and optional shortened version.
abstract = "Protecting privacy in gradient-based learning has become increasingly critical as more sensitive information is being used. Many existing solutions seek to protect the sensitive gradients by constraining the overall privacy cost within a constant budget, where the protection is hand-designed and empirically calibrated to boost the utility of the resulting model. However, it remains challenging to choose the proper protection adapted for specific constraints so that the utility is maximized. To this end, we propose a novel *Learning-to-Protect* algorithm that automatically learns a model-based protector from a set of non-private learning tasks. The learned protector can be applied to private learning tasks to improve utility within the specific privacy budget constraint. Our empirical studies on both synthetic and real datasets demonstrate that the proposed algorithm can achieve a superior utility with a given privacy constraint and generalize well to new private datasets distributed differently as compared to the hand-designed competitors."
abstract_short = "We propose a novel *Learning-to-Protect* algorithm that automatically learns a model-based protector from a set of non-private learning tasks."

# Featured image thumbnail (optional)
image_preview = ""

# Is this a selected publication? (true/false)
selected = true

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter the filename (excluding '.md') of your project file in `content/project/`.
#   E.g. `projects = ["deep-learning"]` references `content/project/deep-learning.md`.
projects = []

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Privacy", "Classification", "Meta-Learning"]

# Links (optional).
url_pdf = "http://34.94.61.102/paper_AAAI-7394.html"
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
