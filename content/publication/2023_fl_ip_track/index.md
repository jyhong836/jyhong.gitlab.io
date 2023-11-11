---
title: "Who Leaked the Model? Tracking IP Infringers in Accountable Federated Learning"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Shuyang Yu
- admin
- Yi Zeng
- Fei Wang
- Ruoxi Jia
- Jiayu Zhou

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2023-11-01T13:08:20+08:00"
doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"
publishDate: "2023-11-01T13:08:20+08:00"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *NeurIPS 2023 Workshop on Regulatable ML*
publication_short: NeurIPS-RegML

abstract: Federated learning (FL) emerges as an effective collaborative learning framework to coordinate data and computation resources from massive and distributed clients in training. Such collaboration results in non-trivial intellectual property (IP) represented by the model parameters that should be protected and shared by the whole party rather than an individual user. Meanwhile, the distributed nature of FL endorses a malicious client the convenience to compromise IP through illegal model leakage to unauthorized third parties. To block such IP leakage, it is essential to make the IP identifiable in the shared model and locate the anonymous infringer who first leaks it. The collective challenges call for accountable federated learning, which requires verifiable ownership of the model and is capable of revealing the infringer's identity upon leakage. In this paper, we propose Decodable Unique Watermarking (DUW) for complying with the requirements of accountable FL. Specifically, before a global model is sent to a client in an FL round, DUW encodes a client-unique key into the model by leveraging a backdoor-based watermark injection. To identify the infringer of a leaked model, DUW examines the model and checks if the triggers can be decoded as the corresponding keys. Extensive empirical results show that DUW is highly effective and robust, achieving over 99% watermark success rate for Digits, CIFAR-10, and CIFAR-100 datasets under heterogeneous FL settings, and identifying the IP infringer with 100% accuracy even after common watermark removal attempts.

# Summary. An optional shortened abstract.
summary: Tracking IP leakage in federated learning.

tags: ["Federated Learning", "Trustworthy", "IP Protection"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: https://openreview.net/pdf?id=qhP1aHHyeA
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
# url_custom:
# links:
#   - name: Supplementary
#     url: "/files/sigkdd_supp.pdf"

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# image:
#   caption: 'Federated Split-Mix'
#   focal_point: "left"
#   preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - "federated-learning"
  - "holistic-trustworthy"

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""  # example

math: true
---

