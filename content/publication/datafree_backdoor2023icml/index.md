---
title: "Revisiting Data-Free Knowledge Distillation with Poisoned Teachers"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- admin
- Yi Zeng
- Shuyang Yu
- Lingjuan Lyu
- Ruoxi Jia
- Jiayu Zhou

# Author notes (optional)
author_notes:
- "Equal contribution"
- "Equal contribution"
- "Equal contribution"

date: "2023-04-25T13:08:20+08:00"
doi: ""

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"
publishDate: "2023-04-25T13:08:20+08:00"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *The Fortieth International Conference on Machine Learning*
publication_short: ICML

abstract: Data-free knowledge distillation (KD) helps transfer knowledge from a pre-trained model (known as the teacher model) to a smaller model (known as the student model) without access to the original training data used for training the teacher model. However, the security of the synthetic or out-of-distribution (OOD) data required in data-free KD is largely unknown and under-explored. In this work, we make the first effort to uncover the security risk of data-free KD w.r.t. untrusted pre-trained models. We then propose Anti-Backdoor Data-Free KD (ABD), the first plug-in defensive method for data-free KD methods to mitigate the chance of potential backdoors being transferred. We empirically evaluate the effectiveness of our proposed ABD in diminishing transferred backdoor knowledge while maintaining compatible downstream performances as the vanilla KD. We envision this work as a milestone for alarming and mitigating the potential backdoors in data-free KD. Codes are released at https://github.com/illidanlab/ABD.

# Summary. An optional shortened abstract.
summary: We uncover the security risk of data-free distillation from a poisoned teacher and propose the first countermeasure.

tags: ["Backdoor", "Data-free Distillation", "Federated Learning", "Private Edge-Cloud Collaboration", "Selected", "Security", "Trustworthy"]

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
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
#   caption: 'Outsourcing Training without Uploading Data'
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

To tailor the highly performant large models for the budget-constrained devices, knowledge distillation (KD) and more recently data-free KD, has emerged as a fundamental tool in the DL community. 
Data-free KD, in particular, can transfer knowledge from a pre-trained large model (known as the *teacher model*) to a smaller model (known as the *student model*) without access to the original training data of the teacher model. The non-requirement of training data generalizes KD to broad real-world scenarios, where data access is restricted for privacy and security concerns. 
For instance, many countries have strict laws on accessing facial images, financial records, and medical information.

Despite the benefits of data-free KD and the vital role it has been playing, a major security concern has been overlooked in its development and implementation: *Can a student trust the knowledge transferred from an untrusted teacher?*
The untrustworthiness comes from the non-trivial chance that pre-trained models could be retrieved from non-sanitized or unverifiable sources, for example, third-party model vendors or malicious clients in federated learning. 
One significant risk is from the *backdoor* pre-implanted into a teacher model, which alters model behaviors drastically in the presence of predesigned triggers but remains silent on clean samples.
As traditional attacks typically require to poison training data, it remains unclear if student models distilled from a poisoned teacher will suffer from the same threat without using the poisoned data. 

<figure>
<img src="data-free_results_acc.png" width=100% title="Backdoor attacks">
<figcaption>
  Fig 1: Backdoor Attack Success Rates (<b>ASRs</b>) of the distilled student model using the vanilla KD with clean in-distribution samples (a) and data-free KD using synthetic (b, c) or OOD (d) samples. The clean accuracy (<b>Acc</b>) of each figure is plotted with standard deviations among different attack-poisoned CIFAR-10. We run each KD method with different but sufficient training epochs to ensure convergence. Existing data-free KD methods may lead to the transfer of backdoor knowledge when poisoned teachers' participation.
  </figcaption>
</figure>

<figure>
<img src="all_trigger.png" width=85% title="Backdoor triggers">
<figcaption>
  Fig 2: Trigger visualization and teacher model performances on CIFAR-10. The performance (<b>ASR/Acc</b>) of the poisoned teacher using each backdoor attack is provided beneath each trigger's name. We envision the backdoored example for each attack on CIFAR-10.
  </figcaption>
</figure>

In this paper, we take the first leap to uncover the *data-free backdoor transfer* from a poisoned teacher to a student through comprehensive experiments on 10 backdoor attacks.
We evaluated one vanilla KD using clean training data and three training-data-free KD method which use synthetic data (ZSKT[^1] \& CMI [^2]) or out-of-distribution (OOD) data as surrogate distillation data[^3].

Our main observations are summarized as follows and essentially imply two identified risks in data-free KD.
1. Vanilla KD does not transfer backdoors by using clean in-distribution data, while all three training-data-free distillations suffer from backdoor transfer by 3 to 8 types of triggers out of 10 with a more than 90\% attack success rate. Contradicting the two results indicates the **poisonous nature of the surrogate distillation** data in data-free KD.
2. The successful attack on distillation using trigger-free out-of-distribution (OOD) data demonstrate that triggers are not essential for backdoor injection, but the **poisoned teacher supervision** is.


<figure>
<img src="ABD_benchmark.png" width=75% title="Benchmark">
<figcaption>
  Fig 3: ABD is effective in different data-free distillation methods on CIFAR-10 with WRN16-2 (Teacher) and WRN16-1 (student). 
  </figcaption>
</figure>

Upon observing the two identified risks, we propose a plug-in defensive method, Anti-Backdoor Data-Free KD (**ABD**), that works with general data-free KD frameworks. ABD aims to suppress and remove any backdoor knowledge being transferred to the student, thus mitigating the impact of backdoors. The high-level idea of ABD is two-fold:
**(SV) Shuffling Vaccine** during distillation:~suppress samples containing potential backdoor knowledge being fed to the teacher (mitigating backdoor information participates in the KD); Student
**(SR) Self-Retrospection** after distillation:~ synthesize potential learned backdoor knowledge and unlearns them at later training epochs (the backstop to unlearn acquired malicious knowledge).
ABD is effective on defending various backdoor attacks with different patterns and is a plug-in defense that can be used seamlessly with all three types of data-free KD.




[^1]: Micaelli, P., & Storkey, A. J. (2019). Zero-shot knowledge transfer via adversarial belief matching. NeurIPS.
[^2]: Fang, G., Song, J., Wang, X., Shen, C., Wang, X., & Song, M. (2021). Contrastive model inversion for data-free knowledge distillation. IJCAI.
[^3]: Asano, Y. M., & Saeed, A. (2023). Extrapolating from a single image to a thousand classes using distillation. ICLR.

