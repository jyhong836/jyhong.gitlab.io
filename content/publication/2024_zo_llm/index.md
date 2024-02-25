---
title: "Revisiting Zeroth-Order Optimization for Memory-Efficient LLM Fine-Tuning: A Benchmark"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Yihua Zhang
- Pingzhi Li
- admin
- Jiaxiang Li
- Yimeng Zhang
- Wenqing Zheng
- Pin-Yu Chen
- Jason D. Lee
- Wotao Yin
- Mingyi Hong
- Zhangyang Wang
- Sijia Liu
- Tianlong Chen

# Author notes (optional)
author_notes:
- "Equal contribution"
- "Equal contribution"
- "Equal contribution"

date: "2024-02-18T13:08:20+08:00"
doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"
publishDate: "2024-02-18T13:08:20+08:00"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: In *Preprint*
publication_short: Preprint

abstract: In the evolving landscape of natural language processing (NLP), fine-tuning pre-trained Large Language Models (LLMs) with first-order (FO) optimizers like SGD and Adam has become standard. Yet, as LLMs grow {in size}, the substantial memory overhead from back-propagation (BP) for FO gradient computation presents a significant challenge. Addressing this issue is crucial, especially for applications like on-device training where memory efficiency is paramount. This paper proposes a shift towards BP-free, zeroth-order (ZO) optimization as a solution for reducing memory costs during LLM fine-tuning, building on the initial concept introduced by MeZO. Unlike traditional ZO-SGD methods, our work expands the exploration to a wider array of ZO optimization techniques, through a comprehensive, first-of-its-kind benchmarking study across five LLM families (Roberta, OPT, LLaMA, Vicuna, Mistral), three task complexities, and five fine-tuning schemes. Our study unveils previously overlooked optimization principles, highlighting the importance of task alignment, the role of the forward gradient method, and the balance between algorithm complexity and fine-tuning performance. We further introduce novel enhancements to ZO optimization, including block-wise descent, hybrid training, and gradient sparsity. Our study offers a promising direction for achieving further memory-efficient LLM fine-tuning. The code is available at [the URL](https://github.com/ZO-Bench/ZO-LLM).

# Summary. An optional shortened abstract.
summary: Zeroth-order optimization for LLM.

tags: ["Selected", "LLM", "Zeroth-order optimization"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: https://arxiv.org/abs/2402.11592
url_code: 'https://github.com/ZO-Bench/ZO-LLM'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''
# url_custom:
links:
  - name: "👨‍🏫Tutorial"
    url: "https://sites.google.com/view/zo-tutorial-aaai-2024/"

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
projects: []
  # - "llm"

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""  # example

math: true
---

Zeroth-order (ZO) optimization methods are often preferred for its gradient-free nature which makes it more memory efficient and probably computation efficient.
Though first-order (FO) optimization methods are more accurate in gradient computation, it is hard for LLM to fit into a memory-limited devices leading to strong demand for memory-efficient optimization methods.
In the benchmark, we empirically get insights into the battle between FO and ZO. Importantly, we answer these questions
* When ZO methods have strong memory efficiency compared to all FO methods?
* How is the performance of ZO methods compared to the FO methods?
* Are ZO methods really faster than FO methods?

## Delayed Memory Inefficiency of SGD

Memory peak is the bottleneck for adopting a LLM into a memory-limited device.
To find the memory peak, we need to look at the process of optimization which can be unfolded in four steps:
* **Step 0: Model Loading**: Initialize the model with parameter $\mathbf{x}$;
* **Step 1: Forward Pass**: Compute loss $\ell(x)$, and save forward pass states $\mathbf{s}\_{\text{fwd}}$;
* **Step 2: Backward Pass**: Calculate gradients *w.r.t.* $\mathbf{x}$, and generate backward states $\mathbf{s}\_{\text{bwd}}$;
* **Step 3: Optimization Step**: Update $\mathbf{x}$ and $\mathbf{s}\_{\text{opt}}$ using gradients and utilize temporal state $\mathbf{s}\_{\text{opt}}'$ that will be released immediately;

In the below figure, we provide a theoretic analysis based on the general pipeline.
A interesting observation is the $\max$ operation in the peak memory estimation because the peak memory is been chosen from the three steps with dynamic memory allocation.
For example, FO-SGD consumes $|\mathbf{x}| + \max [ \frac{1}{2}|\mathbf{a}| + \frac{1}{2}|\mathbf{x}|, |\mathbf{x}| ]$.
In comparison, ZO-SGD requires $\frac{1}{2} |\mathbf{x}| + \max_l \frac{1}{2} |\mathbf{x}_l|$ memory.
The memory efficiency advantage of ZO-SGD will be gradually increased by $\frac{1}{2}|\mathbf{a}|$ if activation memory overwelms the parameters', *i.e.*, $\frac{1}{2}|\mathbf{a}| > \frac{1}{2}|\mathbf{x}|$.
That means if the model is not very large and the activation is very dense, then the advantage of ZO methods will be reduced.
<figure>
<img src="mem_theory.png" width=50% title="">
<figcaption>Fig: Comparison of total memory complexity of different optimizers when fine-tuning the full model. $|\mathbf{x}|$ denotes the memory of parameters (or gradients in the same size) in full precision.
    $|\mathbf{a}|$ denotes the memory consumption of intermediate results saved for post-hoc backward during forward.
    $|\mathbf{x}_l|$ and $|\mathbf{a}_l|$ represents the parameter and intermediate memory of a specific layer $l$.</figcaption>
</figure>

We empirically demonstrate the advantage delayed memory inefficiency of FO-SGD in the below figure.
Obviously, the memory inefficiency of FO-SGD is augmented with long context just like inference.
<figure>
<img src="memory_seqlen_ablation.png" width=70% title="">
<figcaption>Fig: Memory comparison between FO-SGD and ZO-SGD full fine-tuning across various sequence lengths with a fixed effective batch size of $2$. Memory evaluation was conducted using synthetic text generated from random sequences of the specified shapes. For shorter sequences (i.e., $< 700$), the memory usage of FO-SGD remains relatively stable since the memory consumption for storing gradients during BP surpasses that needed for activations.</figcaption>
</figure>

<!-- ## ZO Methods Are Still Behind FO Methods

TBA

## ZO Methods Are Faster with Larger Batches

TBA -->
