---
title: Follow Art — Sticky Layer Scrollytelling & Button Hover Accent Animations
domain: reference
summary: GSAP ScrollTrigger sticky layer pinning (.section__layer--sticky), button hover accent line scaling, and Lenis scroll
  integration.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Gallery-Cursor-Physics.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Follow Art — Sticky Layer Scrollytelling & Button Hover Accent Animations
- Sticky Layer Scrollytelling Architecture
- Button Hover Accent Line Micro-Interactions
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/08-follow-art-sticky-layers-and-btn-hover-accents.md
- When reading context for Follow Art Sticky Layer Motion
tags:
- reference
- awwwards
- follow-art
- sticky-layers
- hover-accents
- gsap
updated: '2026-08-08'
---

# Follow Art — Sticky Layer Scrollytelling & Button Hover Accent Animations

Follow Art utilizes GSAP ScrollTrigger pinned sticky layers (`.section__layer--sticky`) to stack gallery sections seamlessly during page scroll.

---

## Sticky Layer Scrollytelling Architecture

```javascript
// Follow Art Sticky Section Pinning Pipeline
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const layers = document.querySelectorAll('.section__layer--sticky');
layers.forEach((layer, i) => {
  ScrollTrigger.create({
    trigger: layer,
    start: 'top top',
    pin: true,
    pinSpacing: false,
    snap: 1 / (layers.length - 1)
  });
});
```

---

## Button Hover Accent Line Micro-Interactions

CTA buttons feature an expanding accent line (`.btn__hover-accent`) that scales dynamically on hover:

```css
/* Follow Art Button Hover Accent */
.btn {
  position: relative;
  overflow: hidden;
}

.btn__hover-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #0000FF;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn:hover .btn__hover-accent {
  transform: scaleX(1);
}
```
