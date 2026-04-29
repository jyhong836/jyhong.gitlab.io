---
title: "DeepOSets: Non-Autoregressive In-Context Learning of Supervised Learning Operators"

authors:
- Shao-Ting Chiu
- admin
- Ulisses Braga-Neto

date: "2024-12-14T00:00:00Z"
doi: ""

publishDate: "2024-12-14T00:00:00Z"

# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

publication: In *NeurIPS 2024 Workshop on Foundation Models for Science (FM4Science)*
publication_short: FM4Science

abstract: "We introduce DeepSets Operator Networks (DeepOSets), an efficient, non-autoregressive neural network architecture for in-context operator learning. In-context learning allows a trained machine learning model to learn from a user prompt without further training. DeepOSets adds in-context learning capabilities to Deep Operator Networks (DeepONets) by combining it with the DeepSets architecture. As the first non-autoregressive model for in-context operator learning, DeepOSets allow the user prompt to be processed in parallel, leading to significant computational savings. Here, we present the application of DeepOSets in the problem of learning supervised learning algorithms, which are operators mapping a finite-dimensional space of labeled data into an infinite-dimensional hypothesis space of prediction functions. In an empirical comparison with a popular autoregressive (transformer-based) model for in-context learning of the least-squares linear regression algorithm, DeepOSets reduced the number of model weights by several orders of magnitude and required a fraction of training and inference time. Furthermore, DeepOSets proved to be less sensitive to noise, significantly outperforming the transformer model in noisy settings."

summary: "A non-autoregressive architecture combining DeepONets with DeepSets for in-context operator learning, achieving orders-of-magnitude parameter reduction and stronger noise robustness over transformer baselines."

tags: ["In-Context Learning", "Deep Operator Network", "DeepSets", "Operator Learning", "Foundation Models", "Scientific Machine Learning"]

featured: false

url_pdf: 'https://arxiv.org/abs/2410.09298'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

projects: []

slides: ""

math: true
---
