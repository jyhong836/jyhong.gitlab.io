---
# An instance of the Pages widget.
# Documentation: https://wowchemy.com/docs/page-builder/
# widget: pages
widget: portfolio

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 20

title: Publications
subtitle: ''

content:
  # Page type to display. E.g. post, talk, publication...
  page_type: publication
  # Choose how much pages you would like to display (0 = all pages)
  count: 0
  # Choose how many pages you would like to offset by
  offset: 0
  # Page order: descending (desc) or ascending (asc) date.
  order: desc
  # # Filter on criteria. Use with widget=pages
  # filters:
  #   tag: 'selected'
  #   category: ''
  #   publication_type: ''
  #   author: ''
  #   exclude_featured: false
  
  # Use with widget=portfolio
  filter_default: 0
  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
  - name: Selected
    tag: Selected
  - name: Healthcare
    tag: Healthcare
  - name: Privacy
    tag: Privacy
  - name: Trustworthy
    tag: Trustworthy
  - name: Large Models
    tag: Large Models
  # - name: Edge-Cloud (PECC)
  #   tag: Private Edge-Cloud Collaboration
  # - name: Other
  #   tag: Demo
  - name: FL
    tag: Federated Learning
  - name: All
    tag: '*'
design:
  # Choose a view for the listings:
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   4 = Citation (publication only)
  view: 4
---

<!-- {{% callout note %}}
Find a full list of publications [here](./publication/) or in my [google scholar](https://scholar.google.com/citations?user=7Cbv6doAAAAJ).
{{% /callout %}} -->
