---
title: The Line Studio — Rotated Card Page Transitions & Lenis Scroll
domain: reference
summary: Rotated card page transition mechanics tilting leaving pages rotate(4deg) and entering pages rotate(-4deg) with Lenis
  smooth scroll inertia.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- The Line Studio — Rotated Card Page Transitions & Lenis Scroll
- Rotated Card Page Transition Animation Engine
- Lenis Smooth Scroll Easing
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/22-the-line-studio-rotated-card-transitions-and-lenis.md
- When reading context for The Line Studio Motion
tags:
- reference
- awwwards
- the-line-studio
- rotated-card-transition
- lenis-scroll
updated: '2026-08-08'
---

# The Line Studio — Rotated Card Page Transitions & Lenis Scroll

THE LINE Studio engineers **Rotated Card Page Transitions** with Lenis smooth scroll inertia.

---

## Rotated Card Page Transition Animation Engine

```javascript
// Rotated Card SPA Page Transition
import { gsap } from 'gsap';

export function animatePageExit(leavingPage, onComplete) {
  gsap.to(leavingPage, {
    yPercent: -100,
    rotate: 4,
    duration: 0.9,
    ease: "cubic-bezier(0.44, 0.14, 0.28, 1)",
    onComplete
  });
}

export function animatePageEnter(enteringPage) {
  gsap.fromTo(enteringPage,
    { yPercent: 100, rotate: -4 },
    {
      yPercent: 0,
      rotate: 0,
      duration: 0.9,
      ease: "cubic-bezier(0.44, 0.14, 0.28, 1)"
    }
  );
}
```

---

## Lenis Smooth Scroll Easing

- **Duration**: `1.2` seconds
- **Easing Formula**: `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`
- **GPU Transform Compositing**: Sticky hero elements use `will-change: transform`.
