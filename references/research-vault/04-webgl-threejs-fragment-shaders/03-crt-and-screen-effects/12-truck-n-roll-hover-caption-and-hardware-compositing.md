---
title: Truck 'n Roll — Hover Caption Metadata Layer & GPU Layer Compositing
domain: reference
summary: Hover Caption metadata layer (HoverCaption-B_8cR76t.js) revealing tour concert logistics specs and GPU layer compositing.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Truck 'n Roll — Hover Caption Metadata Layer & GPU Layer Compositing
- Hover Caption Metadata Layer Logic
- Locomotive ComponentManager Controller Architecture
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/27-truck-n-roll-hover-caption-and-hardware-compositing.md
- When reading context for Truck 'n Roll Hover Layer
tags:
- reference
- awwwards
- truck-n-roll
- hover-caption-layer
- component-manager
updated: '2026-08-08'
---

# Truck 'n Roll — Hover Caption Metadata Layer & GPU Layer Compositing

Truck 'n Roll incorporates a pointer **Hover Caption Metadata Layer** (`HoverCaption-B_8cR76t.js`) displaying tour logistics specifications.

---

## Hover Caption Metadata Layer Logic

```javascript
// Hover Caption Mouse Proximity Follower
const captionElement = document.querySelector('.c-hover-caption');

document.querySelectorAll('[data-hover-caption]').forEach(card => {
  card.addEventListener('mouseenter', (e) => {
    const text = card.getAttribute('data-hover-caption');
    if (captionElement) {
      captionElement.textContent = text;
      captionElement.classList.add('is-active');
    }
  });

  card.addEventListener('mouseleave', () => {
    if (captionElement) captionElement.classList.remove('is-active');
  });
});
```

---

## Locomotive ComponentManager Controller Architecture

- **Attribute-Based Controller Mount**: Elements declare JS controllers using HTML data attributes (`data-component="Rail"` or `data-component="Accordion"`).
- **GPU Layer Compositing**: Applied CSS `will-change: transform` to sticky headers and modal dialogs to eliminate layout recalculation overhead during scroll.
