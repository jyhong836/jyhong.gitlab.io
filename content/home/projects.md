---
# An instance of the Portfolio widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: blank  # portfolio

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 15

title: Research
subtitle: ''

content:
  # Page type to display. E.g. project.
  page_type: project

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  filter_default: 0

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
  - name: Selected
    tag: Selected
  - name: All
    tag: '*'

design:
  # Choose how many columns the section has. Valid values: '1' or '2'.
  columns: '2'

  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   5 = Showcase
  view: 3

  # For Showcase view, flip alternate rows?
  flip_alt_rows: false
---

My research vision is to **harmonize, understand, and deploy Responsible AI**: *Optimizing AI systems that balance real-world constraints in computational **efficiency**, data **privacy**, and **ethical** norms through comprehensive threat analysis and the development of integrative trustworthy, resource-aware collaborative learning frameworks.* Guided by this principle, I aim to lead a research group combining rigorous theoretical foundations with a commitment to developing algorithm tools that have a meaningful real-world impact, particularly in **healthcare applications**.

<img src="img/teaser.png" alt="RAI" style="width:80%;">

### T1: *Harmonizing* Multifaceted Values in AI Trust.

Trust in AI is complex, reflecting the intricate web of social norms and values. Pursuing only one aspect of trustworthiness while neglecting others may lead to unintended consequences.
For instance, overzealous privacy protection can come at the price of transparency, robustness, or fairness. To address these challenges, I have developed innovative collaborative learning approaches that balance key aspects of trustworthy AI, including privacy-preserving learning [<a href="/publication/2023_hybrid_fl_fin/" class="cite-link">FL4DM23&PETs23 <i class="fa fa-trophy"></i></a>] with fairness guarantees [<a href="/publication/fade2021kdd/" class="cite-link">KDD21</a>, <a href="/publication/fair-robust2023tmlr/" class="cite-link">TMLR23</a>], enhanced robustness [<a href="/publication/frp2023/" class="cite-link">AAAI23</a>, <a href="/publication/mecta2023/" class="cite-link">ICLR23a</a>], and provable computation and data efficiency [<a href="/publication/split_mix/" class="cite-link">ICLR22</a>, <a href="/publication/ondynamic/" class="cite-link">FAccT22</a>, <a href="/publication/ecos/" class="cite-link">NeurIPS22a</a>, <a href="/publication/2023dp_opt/" class="cite-link">ICLR24</a>]. These methods are designed to create AI systems that uphold individual privacy while remaining efficient, fair, and accountable.

<div class="col-lg-16 project-item isotope-item js-id-Privacy js-id-Selected js-id-LLM js-id-Large-Models">
  <div class="row align-items-center">
  <div class="col-12 col-md-6">
    <div class="summary-style mb-0 mt-0"><a href="/publication/2023dp_opt/" class="cite-link">[ICLR24]</a> <span href="/publication/2023dp_opt/" style="color: black;">DP-OPT: Make Large Language Model Your Privacy-Preserving Prompt Engineer</span></div>
    <div class="stream-meta article-metadata">
    <div>
      <span class="author-highlighted">Junyuan Hong</span>, <span>Jiachen T. Wang</span>, <span>Chenhui Zhang</span>, <span>Zhangheng Li</span>, <span>Bo Li</span>, <span>Zhangyang Wang</span>
    </div>
    </div>
  </div>
  <div class="col-12 col-md-6 order-first ">
  <a href="/publication/2023dp_opt/">
    <img src="/publication/2023dp_opt/featured.png" alt="DP-OPT: Make Large Language Model Your Privacy-Preserving Prompt Engineer" loading="lazy">
  </a>
  </div>
  </div>
</div>


<div class="col-lg-16 project-item isotope-item js-id-Privacy js-id-Selected js-id-LLM js-id-Large-Models">
  <div class="row align-items-center">
  <div class="col-12 col-md-6">
    <div class="summary-style mb-0 mt-0"><a href="/publication/fade2021kdd/" class="cite-link">[KDD21]</a> <span href="/publication/fade2021kdd/" style="color: black;">Federated Adversarial Debiasing for Fair and Transferable Representations</span></div>
    <div class="stream-meta article-metadata">
    <div>
    <span class="author-highlighted">
        Junyuan Hong</span>, <span>
        Zhuangdi Zhu</span>, <span>
        Shuyang Yu</span>, <span>
        Hiroko Dodge</span>, <span>
        Zhangyang Wang</span>, <span>
        Jiayu Zhou</span>
    </div>
    </div>
  </div>
  <div class="col-12 col-md-6 order-first ">
  <a href="/publication/fade2021kdd/">
    <img src="/publication/fade2021kdd/featured.png" alt="DP-OPT: Make Large Language Model Your Privacy-Preserving Prompt Engineer" loading="lazy">
  </a>
  </div>
  </div>
</div>

### T2: *Understanding* Multi-faceted Emerging Risks in GenAI Trust.

As AI evolves from traditional machine learning to generative AI (GenAI), new privacy and trust challenges arise, yet remain opaque due to the complexity of AI models. My research aims to anticipate and address these challenges by developing theoretical frameworks that generalize privacy risk analysis across AI architectures [<a href="/publication/2023neurips_i2f/" class="cite-link">NeurIPS23</a>], introducing novel threat models for generation-driven transfer learning [<a href="/publication/datafree_backdoor2023icml/" class="cite-link">ICML23</a>] and pre-trained foundation models [<a href="/publication/2023finetune_privacy/" class="cite-link">SaTML24</a>], and leveraging insights from integrative benchmarks [<a href="https://llm-pbe.github.io" class="cite-link">VLDB24 <i class="fa fa-award"></i></a>, <a href="https://decoding-comp-trust.github.io/" class="cite-link">ICML24</a>]. This deeper understanding of GenAI risks further informs the creation of collaborative or multi-agent learning paradigms that prioritize privacy [<a href="/publication/2023dp_opt/" class="cite-link">ICLR24</a>] and safety [<a href="/publication/2024guardagent/" class="cite-link">arXiv24</a>].

<div class="col-lg-16 project-item isotope-item js-id-Privacy js-id-Selected js-id-LLM js-id-Large-Models">
  <div class="row align-items-center">
  <div class="col-12 col-md-6">
    <div class="summary-style mb-0 mt-0"><a href="https://decoding-comp-trust.github.io/" class="cite-link">[ICML24]</a> <span style="color: black;">Decoding Compressed Trust: Scrutinizing the Trustworthiness of Efficient LLMs Under Compression</span></div>
    <div class="stream-meta article-metadata">
    <div>
    

  <span class="author-highlighted">
      Junyuan Hong</span><i class="author-notes fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Equal contribution"></i>, <span>
      Jinhao Duan</span><i class="author-notes fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Equal contribution"></i>, <span>
      Chenhui Zhang</span><i class="author-notes fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Equal contribution"></i>, <span>
      Zhangheng Li</span><i class="author-notes fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Equal contribution"></i>, <span>
      Chulin Xie</span>, <span>
      Kelsey Lieberman</span>, <span>
      James Diffenderfer</span>, <span>
      Brian Bartoldson</span>, <span>
      Ajay Jaiswal</span>, <span>
      Kaidi Xu</span>, <span>
      Bhavya Kailkhura</span>, <span>
      Dan Hendrycks</span>, <span>
      Dawn Song</span>, <span>
      Zhangyang Wang</span>, <span>
      Bo Li</span>
  </div>
    </div>
  </div>
  <div class="col-12 col-md-6 order-first ">
  <a href="https://decoding-comp-trust.github.io/"">
    <img src="/publication/2024decoding-comp-trust/featured.png" alt="Decoding Compressed Trust: Scrutinizing the Trustworthiness of Efficient LLMs Under Compression" loading="lazy">
  </a>
  </div>
  </div>
</div>


<div class="col-lg-16 project-item isotope-item js-id-Privacy js-id-Selected js-id-LLM js-id-Large-Models">
  <div class="row align-items-center">
  <div class="col-12 col-md-6">
    <div class="summary-style mb-0 mt-0"><a href="https://llm-pbe.github.io/" class="cite-link">[VLDB24 <i class="fa fa-award"></i>]</a> <span style="color: black;">LLM-PBE: Assessing Data Privacy in Large Language Models</span></div>
    <div class="stream-meta article-metadata">
    <div>
    <span>
        Qinbin Li</span><i class="author-notes fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Equal contribution"></i>, <span class="author-highlighted">
        Junyuan Hong</span><i class="author-notes fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Equal contribution"></i>, <span>
        Chulin Xie</span><i class="author-notes fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Equal contribution"></i>, <span>
        Jeffrey Tan</span>, <span>
        Rachel Xin</span>, <span>
        Junyi Hou</span>, <span>
        Xavier Yin</span>, <span>
        Zhun Wang</span>, <span>
        Dan Hendrycks</span>, <span>
        Zhangyang Wang</span>, <span>
        Bo Li</span>, <span>
        Bingsheng He</span>, <span>
        Dawn Song</span>
    </div>
    </div>
  </div>
  <div class="col-12 col-md-6 order-first ">
  <a href="https://llm-pbe.github.io/">
    <img src="/publication/2024llm_pbe/featured.png" alt="LLM-PBE: Assessing Data Privacy in Large Language Models" loading="lazy">
  </a>
  </div>
  </div>
</div>

### T3: *Deploying* AI Aligned with Human Norms in Dementia Healthcare.

<!-- ![](/img/health.png) -->

To ground my research in **real-world impacts**, I am actively exploring applications in *healthcare, a domain where trust, privacy, and fairness are paramount*. My projects include clinical-protocol-compliant conversational AI for dementia prevention [<a href="https://a-conect.github.io/project/" class="cite-link">ICLRW24</a>] and fair, in-home AI-driven early dementia detection [<a href="/publication/fade2021kdd/" class="cite-link">KDD21</a>, <a href="/publication/ad2020/" class="cite-link">AD20</a>]. These initiatives serve as testbeds for responsible AI principles, particularly in ensuring ethical considerations like patient autonomy, data confidentiality, and equitable access to technology, while demonstrating AI's potential to improve lives.


<div class="col-lg-16 project-item isotope-item js-id-Privacy js-id-Selected js-id-LLM js-id-Large-Models">
  <div class="row align-items-center">
  <div class="col-12 col-md-6">
    <div class="summary-style mb-0 mt-0"><a href="https://a-conect.github.io/project/" class="cite-link">[ICLRW24]</a> <span style="color: black;">A-CONECT: Designing AI-based Conversational Chatbot for Early Dementia Intervention</span></div>
    <div class="stream-meta article-metadata">
    <div>
    <span class="author-highlighted">
        Junyuan Hong</span><i class="author-notes fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Equal contribution"></i>, <span>
        Wenqing Zheng</span><i class="author-notes fas fa-info-circle" data-toggle="tooltip" title="" data-original-title="Equal contribution"></i>, <span>
        Han Meng</span>, <span>
        Siqi Liang</span>, <span>
        Anqing Chen</span>, <span>
        Hiroko H. Dodge</span>, <span>
        Jiayu Zhou</span>, <span>
        Zhangyang Wang</span>
    </div>
    </div>
  </div>
  <div class="col-12 col-md-6 order-first ">
  <a href="https://a-conect.github.io/project/">
    <img src="/publication/2024_a_conect/featured.png" alt="A-CONECT: Designing AI-based Conversational Chatbot for Early Dementia Intervention" loading="lazy">
  </a>
  </div>
  </div>
</div>


<div class="col-lg-16 project-item isotope-item js-id-Privacy js-id-Selected js-id-LLM js-id-Large-Models">
  <div class="row align-items-center">
  <div class="col-12 col-md-6">
    <div class="summary-style mb-0 mt-0"><a href="/publication/ad2020" class="cite-link">[AD20]</a> <span style="color: black;">Detecting MCI using real-time, ecologically valid data capture methodology: How to improve scientific rigor in digital biomarker analyses</span></div>
    <div class="stream-meta article-metadata">
    <div>
    <span class="author-highlighted">
        Junyuan Hong</span>, <span>
        Jeffrey Kaye</span>, <span>
        Hiroko H Dodge</span>, <span>
        Jiayu Zhou</span>
    </div>
    </div>
  </div>
  <div class="col-12 col-md-6 order-first ">
  <a href="/publication/ad2020">
    <img src="/publication/ad2020/featured.jpeg" alt="Detecting MCI using real-time, ecologically valid data capture methodology: How to improve scientific rigor in digital biomarker analyses" loading="lazy">
  </a>
  </div>
  </div>
</div>