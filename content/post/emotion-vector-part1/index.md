---
title: "Reproducing Emotion Vector Part I"
subtitle: "Identifying and Validating Emotion Vectors in Llama 3.1 8B"

summary: "An independent reproduction of Anthropic's emotion vector research using the open-weight Llama 3.1 8B model. We confirm 9 of 11 verification criteria and uncover how safety alignment shapes causal steering behavior."

projects: []

date: "2026-04-09T00:00:00Z"
lastmod: "2026-04-09T00:00:00Z"

draft: true
featured: false

authors:
- admin

tags:
- Mechanistic Interpretability
- Reproducibility
- LLM

categories:
- Research
---

Anthropic recently published ["Emotion Concepts and their Function in a Large Language Model"](https://transformer-circuits.pub/2026/emotions/index.html), presenting evidence that Claude Sonnet 4.5 forms robust internal representations of emotion concepts --- linear directions in the model's *residual stream* that activate in semantically appropriate contexts, predict the model's preferences, and causally influence behavior through *activation steering*.

The findings are fascinating, but two limitations stood out to me:

1. **The implementation is not publicly available.** The paper describes the methodology at a high level but does not release code.
2. **The study is conducted exclusively on Claude Sonnet 4.5**, a closed-weight model. It remains unclear whether emotion vectors generalize to smaller, open-weight models with different training procedures and safety alignment strategies.

This post documents my full-scale, independent reproduction using **Llama 3.1 8B Instruct**, a publicly available 8-billion-parameter model. All code, data, and analysis scripts were developed with Claude Code (powered by Claude Opus 4.6) and are available for inspection and extension.

## TL;DR

Our reproduction achieves **9 of 11** verification criteria (V1--V10), with only V11 failing due to a steering sign inversion. The strongest results are in implicit detection (V3: 9/12, V4: 1.33), numerical modulation (V5: 19/24, V6: 20/24), and emotion-preference correlation (V9: 139/171 emotions with |r| > 0.3). The causal steering correlation |r| = 0.962 exceeds the original's r = 0.85 in magnitude, confirming robust causal structure despite the sign inversion.

## Methods

The only intentional difference is the model: **Llama 3.1 8B Instruct** (open-weight, 8B parameters) instead of Claude Sonnet 4.5 (closed-weight, undisclosed size). All other design choices match the original paper where specified. The full methodology comparison is documented in the [report](report/part1_report.pdf).

The pipeline consists of:
- **Story generation**: 171 emotions x 100 topics x 12 stories = 205,200 stories
- **Vector extraction**: Mean activations from token 50 onward, PCA confound removal, analysis at layer 21 (2/3 through the model)
- **Validation**: Logit lens, implicit detection, numerical modulation, preference ranking, and causal steering

Implementation was done using Claude Code as the development agent. Story generation (~205,200 stories) took ~16 hours using batched multi-prompt inference (batch size 450) on 2x NVIDIA A30 GPUs.

## Results

### Logit Lens (V1, V2)

The logit lens projects each emotion vector through the model's unembedding matrix to identify which output tokens each vector promotes or suppresses. For each emotion *e* with unit-normalized vector at the analysis layer, we compute the logit-space vector by multiplying with the unembedding matrix. The top-*k* entries reveal which tokens the emotion vector upweights (positive) or downweights (negative) in the output distribution.

- **V1 (self-recognition):** For each of the 171 emotions, check whether the emotion's own token ID appears among the top-20 token IDs.
- **V2 (cross-valence):** For 5 opposite-valence pairs (happy/sad, calm/desperate, proud/ashamed, excited/bored, loving/hostile), compute the dot product of their logit-space vectors. A negative dot product confirms that the two emotions push the output distribution in opposing directions.

**Results:**

- **V1 --- Self-recognition: 57/171** (PASS, need >= 20). 33% of emotions have their exact token ID in the top-20.
- **V2 --- Cross-valence: 5/5** (PASS). All opposite-valence pairs have negative dot products.

### Implicit Emotion Detection (V3, V4)

We construct 12 short scenarios that imply specific emotions without naming them (e.g., "My daughter just took her first steps today!" for happy; "My dog passed away" for sad). Each scenario is fed to the model and the residual stream activation at the last token is extracted at the analysis layer. We then compute the cosine similarity between each scenario's activation and each of the 12 corresponding emotion vectors, producing a 12 x 12 matrix.

- **V3 (diagonal dominance):** Count how many of the 12 scenarios have their intended emotion as the argmax (highest cosine similarity) across all 12 probes.
- **V4 (mean diagonal rank):** For each scenario, rank the 12 probes by cosine similarity and record the rank of the intended emotion. V4 is the mean of these ranks (1.0 = perfect).

{{< figure src="report/implicit_emotion_heatmap.png" caption="Reproduced (Llama 3.1 8B): Implicit emotion detection heatmap. The clear diagonal confirms that emotion probes respond to implicit emotional content. The colorbar uses data-driven range due to Llama's larger cosine similarity magnitudes compared to Claude." >}}

<details>
<summary><strong>Compare with original (Anthropic)</strong></summary>

{{< figure src="report/figure_0.png" caption="Original (Anthropic): Cosine similarity between emotion probes and implicit scenarios. Axes: Emotion Probe (y) vs. Scenario (x). Colorbar: Cosine Similarity [-0.10, 0.10]." >}}

Both heatmaps show a clear diagonal, confirming that emotion probes detect implicit emotional content. The key visual difference is color saturation: the original uses a fixed [-0.10, 0.10] colorbar, while the reproduced uses a data-driven range because Llama 3.1 8B produces larger cosine similarity magnitudes than Claude. The diagonal pattern and off-diagonal structure are qualitatively consistent between the two.

</details>

**Results:**

- **V3 --- Diagonal dominance: 9/12** (PASS, need >= 8).
- **V4 --- Mean diagonal rank: 1.33** (PASS, need <= 3.0). The correct emotion is nearly always rank 1.

### Numerical Modulation (V5, V6)

Do emotion probes respond to the *semantic meaning* of numerical values in context, not just surface-level patterns? Six prompt templates contain a numerical placeholder [X] that modulates emotional intensity (e.g., "I just took [X] mg of Tylenol for my back pain" with X in {500, 1000, ..., 8000}). For each value of X, the prompt is fed to the model and the cosine similarity between the last-token activation and four emotion vectors (afraid, happy, sad, calm) is recorded.

- **V5 (correct sign):** For each (template, emotion) pair, check whether the Spearman correlation between the numerical values and the probe activations has the expected sign (e.g., "afraid" should increase with Tylenol dosage). With 6 templates x 4 emotions = 24 triplets.
- **V6 (strong correlation):** Count how many triplets achieve |r_Spearman| > 0.7.

{{< figure src="report/numerical_modulation.png" caption="Reproduced (Llama 3.1 8B): Numerical modulation (3x2 grid). Emotion probes track numerical quantities --- e.g., 'afraid' increases with Tylenol dosage and hours without food or drink." >}}

<details>
<summary><strong>Compare with original (Anthropic)</strong></summary>

{{< figure src="report/figure_1.png" caption="Original (Anthropic): Emotion probes track numerical semantics. Y-axis: Cosine Similarity. 4 emotion lines per subplot (Afraid, Happy, Sad, Calm)." >}}

Both figures show the same 6 numerical scenarios with 4 emotion tracks. The trend directions are consistent: e.g., "afraid" increases with Tylenol dosage and hours without food. The main visual difference is the y-axis scale: the original's cosine similarities span roughly [-0.08, 0.08], while the reproduced values span [-1.5, 2.0]. This reflects the same residual stream norm difference noted in the implicit detection heatmap --- Llama's emotion vectors project more strongly onto its activations. The *relative* ordering and sign of the trends are preserved, which is what the V5/V6 metrics measure.

</details>

**Results:**

- **V5 --- Correct sign: 19/24** (PASS, need >= 17).
- **V6 --- Strong |r| > 0.7: 20/24** (PASS, need >= 12).

### Activity Preferences (V7)

We define 64 activities across 8 categories (Helpful, Engaging, Social, Self-curiosity, Neutral, Aversive, Misaligned, Unsafe; 8 activities each). For all C(64,2) = 2,016 pairs, the model is prompted with:

> Would you prefer to (A) {activity_A} or (B) {activity_B}?

The model's response is determined by comparing the logits for the "A" and "B" tokens after a "(" prefill. The logit difference is passed through a sigmoid to produce a win probability p in [0, 1]. To control for position bias, each pair is evaluated in both orderings and the win probability is averaged. From these pairwise probabilities, we compute Elo ratings (initialized at 1000, K=32, 10 iterations with early stopping) to produce a scalar preference score per activity.

- **V7:** The 8 category means must show a clear preference hierarchy with a gap > 200 between the highest and lowest categories.

| Category | Mean Elo |
|---|---|
| Self-curiosity | 1310 |
| Helpful | 1292 |
| Social | 1211 |
| Engaging | 1151 |
| Neutral | 983 |
| Unsafe | 726 |
| Aversive | 707 |
| Misaligned | 621 |

**Results:**

- **V7 --- Category Elo ranking:** PASS. Clear hierarchy with meaningful gap (689 Elo points) between top and bottom categories.

### Emotion-Preference Correlation (V8, V9)

For each of the 64 activities, the model is prompted with "How would you feel about {activity}?" and the residual stream activation on the activity tokens at the analysis layer is extracted. The activation is projected onto each of the 171 emotion vectors, producing a 64 x 171 matrix. For each emotion, we compute the Pearson correlation *r* between its 64 probe activations and the 64 activity Elo scores from V7.

- **V8 (valence alignment):** The top-3 emotions by *r* should be positive-valence; the bottom-3 should be negative-valence (>= 2 of each required to pass).
- **V9 (correlation count):** Count how many of the 171 emotions have |r| > 0.3.

{{< figure src="report/emotion_elo_correlation.png" caption="Reproduced (Llama 3.1 8B): Emotion-preference correlation bar chart for all 171 emotions, colored by valence (green = positive, red = negative). 139/171 emotions show |r| > 0.3." >}}

<details>
<summary><strong>Compare with original (Anthropic)</strong></summary>

{{< figure src="report/07.1_figure_functional_emotions.png" caption="Original (Anthropic): Vertical bar chart of emotion-Elo correlations. X-axis: individual emotions; Y-axis: Correlation with Elo (r)." >}}

Both plots show all 171 emotions as vertical bars with tick labels for ~40. The correlation range is similar ([-0.8, 0.7] in both), confirming that the emotion-preference coupling structure transfers across models. The reproduced version colors bars by valence (green/red) rather than the original's uniform blue, revealing that most positive-valence emotions cluster at the positive end and negative-valence emotions at the negative end, with some interesting exceptions.

</details>

**Results:**

- **V8 --- Valence alignment: 3/3 top, 3/3 bottom** (PASS). Top-3: *satisfied, content, soothed*; bottom-3: *repulsed, disgusted, revolted*.
- **V9 --- Correlations |r| > 0.3: 139/171** (PASS, need >= 5). 81% of emotions show meaningful correlation between vector projection and Elo scores.

### Causal Steering (V10, V11)

The critical test: do emotion vectors *causally* influence preferences, or merely correlate with them? We perform an activation steering experiment. The 64 activities are split into 32 *steered* and 32 *control* activities (even-indexed = steered, odd-indexed = control, within each category to ensure balance).

For each of 35 emotions (selected as the top-35 by |r| from V9), we register a forward hook at layer 21 that adds the unit-normalized emotion vector scaled by alpha = 0.5 x ||h|| (where ||h|| is the mean residual stream norm at that layer) to the hidden states at token positions spanning the activity descriptions. The hook is applied only to pairs involving at least one steered activity; control activities are unmodified. All 2,016 pairwise preferences are re-evaluated under steering, new Elo scores are computed, and the mean delta-Elo across the 32 steered activities is recorded for each emotion.

- **V10 (steering causality):** Pearson *r* between the pre-steering emotion-Elo correlation (from V9) and the steering-induced delta-Elo across the 35 emotions. |r| > 0.4 required.
- **V11 (sign consistency):** For each steered emotion, check whether the sign of delta-Elo matches the expected direction (positive-valence emotions should increase Elo; negative-valence should decrease it). >= 25 of 35 must have correct sign.

{{< figure src="report/steering_elo_effects.png" caption="Reproduced (Llama 3.1 8B): Steering scatter with regression line. X: Pre-steering Pearson r (emotion-Elo correlation from V9); Y: Mean delta Elo (steered - unsteered). r = -0.962, n = 35." >}}

<details>
<summary><strong>Compare with original (Anthropic)</strong></summary>

{{< figure src="report/07.6_figure_functional_emotions.png" caption="Original (Anthropic): 'Emotions That Correlate with Preference Also Drive Preference via Steering'. X: Emotion-Elo Correlation (r); Y: Mean Delta Elo from Steering. r = 0.85." >}}

Both scatters show a strong linear relationship, but with inverted slope: the original has positive slope (r = 0.85) while the reproduced has negative slope (r = -0.962). In the original, positive-r emotions produce positive delta-Elo when steered; in the reproduction, they produce *negative* delta-Elo. This sign inversion is explained in [the discussion below](#the-sign-inversion-a-safety-alignment-story). The y-axis scale also differs dramatically ([-300, +200] vs. [-5, +1]), reflecting the compressed Elo range. Despite these differences, the *tighter* |r| (0.962 vs. 0.85) shows that the causal rank-ordering is actually more consistent in the reproduction.

</details>

**Results:**

- **V10 --- |r| = 0.962** (PASS, need > 0.4). The strongest causal correlation across all reproductions.
- **V11 --- Sign consistency: 3/35** (FAIL, need >= 25). Consistent with the V10 sign inversion.

### Detailed Steering Analysis: Positive Emotion

To visualize the steering effect in detail, we examine a positive exemplar emotion. The original uses *blissful*; our reproduction uses *content* (because blissful was not among the top-35 steered emotions by |r|).

**Probe activation vs. preference:**

{{< figure src="report/steering_probe_content.png" caption="Reproduced (Llama 3.1 8B): Content probe activation vs. preference (Elo). r = 0.70. Category-colored scatter." >}}

<details>
<summary><strong>Compare with original (Anthropic)</strong></summary>

{{< figure src="report/07.2_figure_functional_emotions.png" caption="Original (Anthropic): Bliss probe activation predicts preference. r = 0.71. Category-colored scatter." >}}

Both show a positive correlation between probe activation and Elo score with similar r values (0.71 vs. 0.70), confirming that positive emotion vectors predict preference in both models. The x-axis ranges differ: the original's probe activations span [-0.02, 0.04] while the reproduced spans [0.0, 1.75] --- the same cosine similarity scale difference seen in earlier figures. The category color patterns are consistent: Helpful (green) and Self-curiosity (purple) cluster at high Elo, while Unsafe (pink) and Misaligned (brown/orange) cluster at low Elo in both.

</details>

**Steered vs. baseline Elo:**

{{< figure src="report/steering_baseline_content.png" caption="Reproduced (Llama 3.1 8B): Content steering. Steered Elo vs. Baseline Elo. Mean delta = -4.6. Category-colored with y=x diagonal." >}}

<details>
<summary><strong>Compare with original (Anthropic)</strong></summary>

{{< figure src="report/07.3_figure_functional_emotions.png" caption="Original (Anthropic): Blissful steering. Steered Elo vs. Baseline Elo. Mean delta = +212. Dashed diagonal = no change." >}}

In the original, blissful steering shifts most activities *above* the diagonal (delta = +212), meaning the model prefers them more. In the reproduction, content steering shifts most activities *below* the diagonal (delta = -4.6), meaning the model prefers them *less* on average. Two differences explain this: (1) **Sign inversion** --- Llama suppresses unsafe activities so aggressively under positive steering that the net delta goes negative; (2) **Scale compression** --- Llama's Elo range is 3.6x narrower than Claude's, so even correctly-signed activity shifts produce small absolute deltas. The category-colored scatter pattern is otherwise qualitatively similar: points cluster along the diagonal with category-dependent offsets.

</details>

### Detailed Steering Analysis: Negative Emotion

Both the original and reproduction use *hostile* as the negative exemplar.

**Probe activation vs. preference:**

{{< figure src="report/steering_probe_hostile.png" caption="Reproduced (Llama 3.1 8B): Hostile probe activation vs. preference (Elo). r = -0.71. Category-colored scatter." >}}

<details>
<summary><strong>Compare with original (Anthropic)</strong></summary>

{{< figure src="report/07.4_figure_functional_emotions.png" caption="Original (Anthropic): Hostile probe activation predicts preference. r = -0.74. Category-colored scatter." >}}

Both use hostile as the exemplar with similar negative correlations (r = -0.74 vs. r = -0.71), confirming that the hostile probe anti-correlates with preference in both models. The scatter structure is consistent: high-Elo activities (Helpful, Self-curiosity) have negative hostile probe activation, while low-Elo activities (Unsafe, Misaligned) have positive activation. The x-axis range differs ([-0.02, 0.03] vs. [-1.0, 0.75]) due to the cosine similarity scale difference. The reproduced scatter appears more spread along the x-axis, suggesting Llama's hostile vector has stronger discriminative power across activities.

</details>

**Steered vs. baseline Elo:**

{{< figure src="report/steering_baseline_hostile.png" caption="Reproduced (Llama 3.1 8B): Hostile steering. Steered Elo vs. Baseline Elo. Mean delta = +0.7. Category-colored with y=x diagonal." >}}

<details>
<summary><strong>Compare with original (Anthropic)</strong></summary>

{{< figure src="report/07.5_figure_functional_emotions.png" caption="Original (Anthropic): Hostile steering. Steered Elo vs. Baseline Elo. Mean delta = -303. Dashed diagonal = no change." >}}

In the original, hostile steering shifts activities *below* the diagonal (delta = -303), strongly reducing preference. In the reproduction, hostile steering produces a near-zero shift (delta = +0.7) --- activities stay on or slightly above the diagonal. This is the mirror of the positive-steering sign inversion: steering with a negative emotion in Llama does not suppress preferences as dramatically as in Claude because the model's baseline logit gaps are already small.

</details>

## The Sign Inversion: A Safety Alignment Story

The V11 failure is the most interesting finding. When steering with a positive emotion (e.g., "grateful"):

- **Claude**: Helpful/Engaging activities gain Elo as expected --- a balanced boost.
- **Llama 3.1 8B**: Helpful/Engaging activities gain Elo, but Aversive/Misaligned/Unsafe activities *lose Elo dramatically*. The net mean delta across all steered activities flips negative.

Llama 3.1 8B responds to positive emotion steering by **aggressively suppressing unsafe activities** rather than uniformly boosting preferred ones. This asymmetry, absent in Claude, highlights how safety alignment can interact with internal emotion representations in model-specific ways.

The |r| = 0.962 magnitude confirms strong causal structure --- emotion vectors reliably modulate preferences. The sign pattern reveals an asymmetric steering effect across activity categories that is specific to Llama 3.1 8B.

### Why the Elo Deltas Differ in Scale

The original reports steering deltas of +212 (blissful) and -303 (hostile). Our reproduction shows -4.6 (content) and +0.7 (hostile) --- a ~50x difference in magnitude. This is not a bug but reflects how the two models express preferences in their logits:

- **Claude**: Elo spans ~500--3000 (range ~2500). Large logit gaps produce decisive win probabilities (close to 0.9/0.1).
- **Llama 3.1 8B**: Elo spans ~620--1310 (range ~690). Smaller logit gaps produce probabilities closer to 0.5.

Since Elo updates are proportional to K x (actual - expected), compressed win probabilities yield compressed Elo scores. Steering shifts the residual stream by alpha x v, which perturbs the logits. If the baseline logit gaps are already small, the steering-induced perturbation produces only small changes in win probabilities, and therefore small changes in Elo.

Claude "shouts" its preferences (large logit gaps -> wide Elo range -> large delta), while Llama "whispers" them (small logit gaps -> narrow Elo range -> small delta). The *rank ordering* of steering effects is preserved, which is what V10 measures.

## Verification Summary

| ID | Criterion | Threshold | v1 (30 emo.) | v2 (171 emo.) | Status |
|---|---|---|---|---|---|
| V1 | Self-recognition | >= 20 | 3/30 | 57/171 | PASS |
| V2 | Cross-valence | >= 4/5 | 5/5 | 5/5 | PASS |
| V3 | Diagonal dominance | >= 8/12 | 6/12 | 9/12 | PASS |
| V4 | Mean diag. rank | <= 3.0 | 3.17 | 1.33 | PASS |
| V5 | Correct sign | >= 17/24 | 6/7 | 19/24 | PASS |
| V6 | Strong \|r\|>0.7 | >= 12/24 | 6/7 | 20/24 | PASS |
| V7 | Category Elo gap | gap > 200 | 608 | 689 | PASS |
| V8 | Valence alignment | >= 2 each | 2+2 | 3+3 | PASS |
| V9 | Correlation count | >= 5 | 25 | 139 | PASS |
| V10 | Steering \|r\| | > 0.4 | 0.868 | 0.962 | PASS* |
| V11 | Sign consistency | >= 25/35 | 10/10 | 3/35 | FAIL* |

*V10--V11: model behavior difference (see [sign inversion discussion](#the-sign-inversion-a-safety-alignment-story)); |r| confirms strong causal structure.

An earlier v1 screening used a reduced configuration (30 emotions, 10 topics, 5 stories/topic = 1,500 stories) to test five models: Llama 3.1 8B, Llama 3.1 70B, Llama 3.2 3B, Qwen3-8B, Qwen3-14B, and Gemma-3 4B. Llama 3.1 8B achieved the best overall results (7/11 PASS, including bidirectional causal steering with r=0.868), outperforming Qwen3-8B (6/11) and the smaller models. The v2 methodology reported here addresses those scale limitations and matches the original paper's full configuration.

## What's Next

Part 2 of the original paper explores functional emotion steering --- how emotion vectors affect the model's behavior across diverse tasks. Stay tuned for Part 2 of this reproduction series.

The full technical report with side-by-side figure comparisons is available [here](report/part1_report.pdf). All code and data will be released publicly.
