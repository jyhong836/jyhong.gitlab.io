---
# Display name
title: Junyuan Hong

# Is this the primary user of the site?
superuser: true

# Role/position/tagline
role: Postdoctoral Fellow

# Organizations/Affiliations to show in About widget
organizations:
- name: IFML & WNCG at UT Austin
  url: https://www.utexas.edu/

# Short bio (displayed in user profile at end of posts)
bio: My research interest lies in the interaction of human-centered AI and healthcare.

# Interests to show in About widget
interests:
- "Healthcare"
- "Privacy"
- "Trustworthy Machine Learning"
- "Federated Learning"
- "Large Language/Vision Models"

# Education to show in About widget
education:
  courses:
  - course: "PhD in CSE"
    institution: "Michigan State University"
    year: 2023
  - course: "MSc in Computer Science"
    institution: "University of Science and Technology of China"
    year: 2018
  - course: "BSc in Physics, minor in CS."
    institution: "University of Science and Technology of China"
    year: 2015

# Social/Academic Networking
# For available icons, see: https://wowchemy.com/docs/getting-started/page-builder/#icons
#   For an email link, use "fas" icon pack, "envelope" icon, and a link in the
#   form "mailto:your-email@example.com" or "/#contact" for contact widget.
social:
- icon: envelope
  icon_pack: fas
  link: 'mailto:jyhong@utexas.edu'
- icon: google-scholar  # Alternatively, use `graduation-cap` icon from fas icon_pack
  icon_pack: ai
  link: https://scholar.google.com/citations?user=7Cbv6doAAAAJ
- icon: github
  icon_pack: fab
  link: https://github.com/jyhong836
- icon: twitter
  icon_pack: fab
  link: https://twitter.com/hjy836
# - icon: linkedin
#   icon_pack: fab
#   link: https://linkedin.com/in/jyhong836
# - icon: cv
#   icon_pack: ai
#   link: files/cv.pdf

# Link to a PDF of your resume/CV.
# To use: copy your resume to `static/uploads/resume.pdf`, enable `ai` icons in `params.toml`, 
# and uncomment the lines below.
# - icon: cv
#   icon_pack: ai
#   link: uploads/resume.pdf

# Enter email to display Gravatar (if Gravatar enabled in Config)
email: "jyhong836@gmail.com"

# Highlight the author in author lists? (true/false)
highlight_name: yes
---

I am a postdoctoral fellow advised by [Dr. Zhangyang Wang](https://vita-group.github.io/) at the Institute for Foundations of Machine Learning ([IFML](https://www.ifml.institute/)) and the Wireless Networking and Communications Group ([WNCG](https://www.ece.utexas.edu/research/groups/wireless-networking-and-communications-group-wncg)) at [UT Austin](https://www.utexas.edu/). I obtained my Ph.D. in Computer Science and Engineering from Michigan State University, where I was advised by [Dr. Jiayu Zhou](https://jiayuzhou.github.io/). I hold a B.S. in Physics and an M.S. in Computer Science from the University of Science and Technology of China.
I was honored as one of the [MLCommons Rising Stars](https://mlcommons.org/2024/06/2024-mlc-rising-stars/) in 2024.

My long-term research vision is to establish **Holistic Trustworthy AI for Healthcare**.
My recent research is driven by the emergent challenges in *AI for Dementia Healthcare*, and centers around *Privacy-Centric Trustworthy Machine Learning* toward Responsible AI where I pursue fairness, robustness, security and inclusiveness under privacy constraints.
![](img/privacy_trust_ml.png)
Most of my work (including GenAI <span class="badge badge-pill badge-red">GAI</span>) follows these principles to trade-off efficiency, utility and privacy: edge-edge (federated learning) <span class="badge badge-pill badge-blue">FL</span> and edge-cloud (pre-training fine-tuning, transfer learning) <span class="badge badge-pill badge-organge">EC</span> collaboration.
* Dementia [**Healthcare**] ⨉ Generative AI: 
  * [Disease modeling](/publication/ad2020) and from [distributed devices](/publication/fade2021kdd)<span class="badge badge-pill badge-blue">FL</span>.
  * [Conversational AI](/publication/2024_a_conect) for dementia simulation and prevention <span class="badge badge-pill badge-red">GAI</span>.
* [**Privacy**] ⨉ Collaborative ML ⨉ Large Vision/Language Models:
  * **Tools**: [Efficient auditing tools](/publication/2023neurips_i2f/), and [adaptive private learning](/publication/learn2protect).
  * **Foundation Models**: Privacy risks of [diffusion models](/publication/2023finetune_privacy/)<span class="badge badge-pill badge-organge">EC</span> and [private offsite prompt tuning of ChatGPT](/publication/2023dp_opt/)<span class="badge badge-pill badge-organge">EC</span> <span class="badge badge-pill badge-red">GAI</span>.
  * **Applications** for distributed vision, [finance](/publication/2023_hybrid_fl_fin) and [disease](/publication/fade2021kdd) modeling.
* [**Trustworthy ML**] ⨉ Privacy:
  * **Benchmark** the multi-dimensional [trustworthiness of compressed LLMs](/publication/2024decoding-comp-trust/) <span class="badge badge-pill badge-red">GAI</span>.
  * **AI Safety** via [automatic guardrail](/publication/2024guardagent/) <span class="badge badge-pill badge-red">GAI</span>.
  * **Fair** [unsupervised training](/publication/faircl2022)<span class="badge badge-pill badge-organge">EC</span> and [multi-group learning](/publication/fade2021kdd)<span class="badge badge-pill badge-blue">FL</span>.
  * **Robustness** acquired from collaboration, against [adversarial samples](/publication/frp2023)<span class="badge badge-pill badge-blue">FL</span> and [OoD inference](/publication/foster2023)<span class="badge badge-pill badge-blue">FL</span>.
  * **Security** in [data-free distillation](/publication/datafree_backdoor2023icml)<span class="badge badge-pill badge-blue">FL</span> and [model copyright](/publication/2023one_image_watermark/)<span class="badge badge-pill badge-organge">EC</span>.
  * **Inclusive** efficient system for for low-end devices by [offsite prompt tuning](/publication/2023dp_opt/)<span class="badge badge-pill badge-organge">EC</span><span class="badge badge-pill badge-red">GAI</span>, [on-device model adaptation](/publication/mecta2023)<span class="badge badge-pill badge-organge">EC</span>, [private outsourcing training](/publication/ecos)<span class="badge badge-pill badge-organge">EC</span> and [customizable models](/publication/split_mix)<span class="badge badge-pill badge-blue">FL</span>.

<!-- **I am on the job market!**  -->
Check my {{< staticref "files/cv.pdf" "newtab" >}}curricula vitae{{< /staticref >}} and feel free to [drop me an email](mailto:jyhong@utexas.edu) if you are interested in collaboration.

### News

<!-- <font size=4> -->
* <span class="badge badge-grey">July, 2024</span> We are exciting to organize the GenAI for Health: Potential, Trust and Policy Compliance workshop ([GenAI4Health 2024](https://genai4health.github.io/)) at NeurIPS.
* <span class="badge badge-grey">June, 2024</span> New benchmark on [LLM privacy](/publication/2024llm_pbe) is accepted to VLDB!
* <span class="badge badge-grey">June, 2024</span> New paper on [safeguarding LLM agent](/publication/2024guardagent) is online!
* <span class="badge badge-grey">June, 2024</span> 🏁 Thrilled to co-organize The [LLM and Agent Safety Competition 2024](https://www.llmagentsafetycomp24.com/) at NeurIPS 2024!
* <span class="badge badge-grey">June, 2024</span> 🌟 Grateful to receive API grants from the OpenAI’s [Researcher Access Program](https://openai.com/form/researcher-access-program/)!
* <span class="badge badge-grey">May, 2024</span> 🏁 Thrilled to co-organize [The NeurIPS 2024 LLM Privacy Challenge](https://llm-pc.github.io/)! Join us for the competition!
* <span class="badge badge-grey">May, 2024</span> 🌟 I am honored to be selected one of [ML and Systems Rising Stars](https://mlcommons.org/2024/06/2024-mlc-rising-stars/) by ML Commons, 2024!
* <span class="badge badge-grey">May, 2024</span> 🎉 Two benchmark papers are accepted at ICML 2024: [how to obtain trustworthy compressed LLMs](https://decoding-comp-trust.github.io/) and [how to optimize LLMs with less memory](/publication/2024_zo_llm/).
* <span class="badge badge-grey">April, 2024</span> I am honored to give a invited talk on [conversational AI for dementia health](/publication/2024_a_conect) at UT school of information.
* <span class="badge badge-grey">March, 2024</span> I am honored to give a talk on the new privacy risk of GenAI at [UT Good System Symposium 2024](https://gssymposium2024.splashthat.com/).
* <span class="badge badge-grey">March, 2024</span> We are exciting to organize the International Joint Workshop on Federated Learning for Data Mining and Graph Analytics ([FedKDD 2024](https://fedkdd.github.io/)).
* <span class="badge badge-grey">March, 2024</span> Our benchmark work, [Decoding Compressed Trust](https://decoding-comp-trust.github.io/), has been accepted to [SET LLM @ICLR](https://set-llm.github.io/). A curated set of compressed models are available at [huggingface](https://huggingface.co/compressed-llm).
* <span class="badge badge-grey">Feb, 2024</span> New benchmark preprint on [zeroth-order optimization for LLMs](/publication/2024_zo_llm/).
* <span class="badge badge-grey">Jan, 2024</span> 🎉 Three papers are accepted: The [first local privacy-preserving prompt tuning](/publication/2023dp_opt/) as **Spotlight** at ICLR, [robust watermarking from one image](/publication/2023one_image_watermark/) as poster at ICLR, [the generalization of unsupervised pretraining](/publication/2024unsupervised_pretrain/) at AISTATS!


<details>
<summary>More</summary>

* <span class="badge badge-grey">Dec, 2023</span> 🍾 Our paper on [amplifying privacy risks via fine-tuning](/publication/2023finetune_privacy) (Shake-To-Leak) is accepted to SaTML.
* <span class="badge badge-grey">Nov, 2023</span> 🏅 Grateful to be selected as [Top Reviewer](https://nips.cc/Conferences/2023/ProgramCommittee#top-reivewers) at NeurIPS 2023.
* <span class="badge badge-grey">Dec, 2023</span> Our new preprint on [private prompt engineering for close-source LLMs](/publication/2023dp_opt/) is online.
* <span class="badge badge-grey">Dec, 2023</span> :airplane: 🎷 I will be at New Orleans for presenting our recent work on [understanding gradient privacy](/publication/2023neurips_i2f/) (NeurIPS'23 ) and [tracking IP leakage in FL](/publication/2023_fl_ip_track/) (NeurIPS-RegML). 
* <span class="badge badge-grey">Nov, 2023</span> 🤖 We are releasing a set of compressed LLMs at [compressed-llm](https://huggingface.co/compressed-llm) for public benchmarks.
* <span class="badge badge-grey">Nov, 2023</span> Our work on [tracking IP leakage in FL](/publication/2023_fl_ip_track/) is accepted to NeurIPS'23 Workshop on Regulated ML (NeurIPS-RegML).
* <span class="badge badge-grey">Sep, 2023</span> Our work on understanding gradient privacy via [inversion influence functions](/publication/2023neurips_i2f/) is accepted to NeurIPS'23.
* <span class="badge badge-grey">Sep, 2023</span> Our new work on [watermarking models using one image](/publication/2023one_image_watermark/) is online.
* <span class="badge badge-grey">August, 2023</span> 👥 We are organizing a KDD workshop on federated learning for distributed data mining ([FL4Data-Mining](https://fl4data-mining.github.io/)) on August 7th at Long Beach🌴.
* <span class="badge badge-grey">July, 2023</span> I am going to travel for ICML 2023 at Hawaii 🌺. Come and talk to me about [data-free backdoor](/publication/datafree_backdoor2023icml/)!
* <span class="badge badge-grey">July, 2023</span> 🏅 Honored to receive Research Enhancement Award for organizing FL4DataMining workshop! Thank you to MSU Graduate School!
* <span class="badge badge-grey">July, 2023</span> 🎓 I successfully defended my thesis. Many thanks to my collaborators, advisor and committees.
* <span class="badge badge-grey">May, 2023</span> My new website is online with released [junyuan-academic-theme](https://github.com/jyhong836/junyuan-academic-theme) including many cool new features.
* <span class="badge badge-grey">April, 2023</span> One paper on [data-free backdoor](/publication/datafree_backdoor2023icml/) got accepted to ICML'23.
* <span class="badge badge-grey">March, 2023</span> 🏆 Our ILLIDAN Lab team just won the 3rd place in [the U.S. PETs prize challenge](https://drivendata.co/blog/federated-learning-pets-prize-winners-phases-2-3). Media cover by [The White House](https://www.whitehouse.gov/ostp/news-updates/2023/03/31/us-uk-annouce-winners-innovation-pets-democratic-values/), [MSU EGR news](https://www.egr.msu.edu/news/2023/04/04/privacy-enhancing-research-earns-international-attention) and [MSU Office of Research and Innovation](https://research.msu.edu/news/privacy-enhancing-research-earns-international-attention).
* <span class="badge badge-grey">Jan, 2022</span> Two papers got accepted to ICLR'23: OoD detection by FL (splotlight!), memory-efficient CTA.
* <span class="badge badge-grey">Sep, 2022</span> Our work on federated robustness sharing has been accepted to AAAI'23 (oral).
* <span class="badge badge-grey">Nov, 2022</span> Two papers got accepted to NeurIPS'22: outsourcing training, backdoor defense.
* <span class="badge badge-grey">May, 2022</span> Our work on connection-resilient FL got accepted to ICML'22.
</details>
<!-- </font> -->
