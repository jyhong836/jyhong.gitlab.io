---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "About Private Learning, Why and How"
subtitle: ""
summary: ""
authors: [admin]
tags: [privacy, deep learning]
categories: []
date: 2021-05-31T15:01:28-04:00
lastmod: 2021-05-31T15:01:28-04:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

## Why Do We Need Private Learning?

### Examples of attacks

Membership Inference Attack (MIA), gradient reverse-engineering, Model Inversion (MI)

## How Do We Protect Privacy?

### Protection based on probabilistic privacy measure

We can measure the probability of the occurrence of privacy leakage.
Before defining the risk, we have to define the privacy leakage.

*Limitation*: This method will introduce utility degradation to the trained model as randomness are required during training.

### Encryption-based protection

This method can make sure no one can recover the data from the encrypted data.

*Limitation*: However, in terms of DP, this method does not protect the knowledge of data as long as the input-output is one-one mapping.

### Adversarial game between attackers and protectors

In addition, we may design a game between an attacker and a protector to empower the protection as the attacker become stronger.

*Limitation*: This method is quite limited to the attacker types.
