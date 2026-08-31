---
title: Truck 'n Roll — Swup.js SPA Router & Lenis Parallax Engine
domain: reference
summary: Swup.js SPA transition container setup (#swup, .c-transition) and ParallaxImage displacement driven by Lenis inertia
  scroll.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Truck 'n Roll — Swup.js SPA Router & Lenis Parallax Engine
- Swup.js SPA Transition Architecture
- Lenis Inertia Scroll Parallax Script
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/26-truck-n-roll-swup-spa-transitions-and-parallax.md
- When reading context for Truck 'n Roll Swup Motion
tags:
- reference
- awwwards
- truck-n-roll
- swup-js-router
- lenis-parallax
updated: '2026-08-08'
---

# Truck 'n Roll — Swup.js SPA Router & Lenis Parallax Engine

Truck 'n Roll uses **Swup.js** (`#swup`, `.c-transition`) for smooth page transition routing coupled with Lenis scroll parallax.

---

## Swup.js SPA Transition Architecture

```javascript
// Swup.js SPA Route Transition Engine
import Swup from 'swup';

const swup = new Swup({
  containers: ['#swup'],
  animateHistoryBrowsing: true
});

swup.hooks.on('page:view', () => {
  document.body.classList.add('is-ready');
  // Re-initialize Locomotive ComponentManager controllers
});
```

---

## Lenis Inertia Scroll Parallax Script

```javascript
// Parallax Displacement Loop (ParallaxImage-D-Hx3zFW.js)
import { gsap } from 'gsap';

export function initParallaxImage(element) {
  gsap.to(element, {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
}
```
