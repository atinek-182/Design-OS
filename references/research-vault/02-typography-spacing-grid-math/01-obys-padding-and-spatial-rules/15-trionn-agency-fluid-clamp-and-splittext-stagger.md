---
title: TRIONN Agency — Fluid Clamp Typography & SplitText Staggering Math
domain: reference
summary: Fluid clamp typography formulas clamp(2.5rem, 6vw, 5.5rem) and GSAP SplitText character-level staggering (stagger
  0.015s).
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- TRIONN Agency — Fluid Clamp Typography & SplitText Staggering Math
- Fluid Clamp Typographic Scale
- GSAP SplitText Character Staggering Script
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/25-trionn-agency-fluid-clamp-and-splittext-stagger.md
- When reading context for TRIONN Agency Typography Math
tags:
- reference
- awwwards
- trionn-agency
- fluid-clamp
- splittext-stagger
updated: '2026-08-08'
---

# TRIONN Agency — Fluid Clamp Typography & SplitText Staggering Math

TRIONN Agency calculates responsive display text with **Fluid Clamp Formulas** and GSAP SplitText character staggering.

---

## Fluid Clamp Typographic Scale

```css
/* Hero Primary Headline Clamp */
.trionn-hero-headline {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #FFFFFF;
}

/* Sub-headline Section Title */
.trionn-section-title {
  font-size: clamp(1.75rem, 3.5vw, 3.25rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
}
```

---

## GSAP SplitText Character Staggering Script

```javascript
// GSAP SplitText Character Reveal Stagger
import { gsap } from 'gsap';

export function animateTextReveal(selector) {
  gsap.fromTo(selector, 
    { opacity: 0, y: 40, rotateX: -45 },
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.8,
      stagger: 0.015,
      ease: "power3.out"
    }
  );
}
```
