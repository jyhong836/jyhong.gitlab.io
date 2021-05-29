---
title: "Disturbance Grassmann Kernels for Subspace-Based Learning"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Huanhuan Chen
- Feng Lin

# Author notes (optional)
# author_notes:
# - "Equal contribution"
# - "Equal contribution"

date: "2018-06-11T13:08:32+08:00"
doi: "10.1145/3219819.3219959"

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"
publishDate: "2018-06-11T13:08:32+08:00"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *The 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining*
publication_short: KDD (Oral)

abstract: In this paper, we focus on subspace-based learning problems, where data elements are linear subspaces instead of vectors. To handle this kind of data, Grassmann kernels were proposed to measure the space structure and used with classifiers, e.g., Support Vector Machines (SVMs). However, the existing discriminative algorithms mostly ignore the instability of subspaces, which would cause the classifiers to be misled by disturbed instances. Thus we propose considering all potential disturbances of subspaces in learning processes to obtain more robust classifiers. Firstly, we derive the dual optimization of linear classifiers with disturbances subject to a known distribution, resulting in a new kernel, Disturbance Grassmann (DG) kernel. Secondly, we research into two kinds of disturbance, relevant to the subspace matrix and singular values of bases, with which we extend the Projection kernel on Grassmann manifolds to two new kernels. Experiments on action data indicate that the proposed kernels perform better compared to state-of-the-art subspace-based methods, even in a worse environment.

# Summary. An optional shortened abstract.
summary: In this paper, we focus on subspace-based learning problems, where data elements are linear subspaces instead of vectors. To handle this kind of data, Grassmann kernels were proposed to measure the space structure and used with classifiers, e.g., Support Vector Machines (SVMs). However, the existing discriminative algorithms mostly ignore the instability of subspaces, which would cause the classifiers to be misled by disturbed instances. Thus we propose considering all potential disturbances of subspaces in learning processes to obtain more robust classifiers.

tags: ["Subspace", "Grassmann manifolds", "Kernel", "Noise", "Classification", "Supervised learning"]

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://arxiv.org/abs/1802.03517'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: 'https://www.youtube.com/watch?v=1qLHgSrcZ4M'
# url_custom:
links:
  - name: Supplementary
    url: "/files/sigkdd_supp.pdf"
#[{name: "Supplementary", url: "/files/sigkdd_supp.pdf"}]

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: true

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  - "subspace-learning"

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""  # example
---


![dg_manifold](/img/publication/dg_manifold.png)

<!-- {{% callout note %}}
Click the *Cite* button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}} -->

<!-- Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
