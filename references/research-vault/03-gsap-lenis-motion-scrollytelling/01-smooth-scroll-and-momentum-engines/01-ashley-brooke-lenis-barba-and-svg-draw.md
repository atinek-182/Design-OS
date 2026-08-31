---
title: Ashley Brooke — Lenis Smooth Scroll, Barba.js SPA & GSAP SVG Animations
domain: reference
summary: Technical implementation of Lenis smooth scroll, Barba.js page transition wrapper, and GSAP DrawSVGPlugin icon animations.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Editorial-Cursor-Hover.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Ashley Brooke — Lenis Smooth Scroll, Barba.js SPA & GSAP SVG Animations
- Barba.js SPA Seamless Page Transition Architecture
- GSAP DrawSVGPlugin & Lenis Scroll Pipeline
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/05-ashley-brooke-lenis-barba-and-svg-draw.md
- When reading context for Ashley Brooke Motion Stack
tags:
- reference
- awwwards
- ashley-brooke
- lenis
- barba-js
- gsap
updated: '2026-08-08'
---

# Ashley Brooke — Lenis Smooth Scroll, Barba.js SPA & GSAP SVG Animations

Ashley Brooke CS builds a zero-latency Single Page Application (SPA) experience using **Barba.js** combined with **Lenis 1.3.15** inertial scroll and **GSAP 3.13.0**.

---

## Barba.js SPA Seamless Page Transition Architecture

```javascript
// Barba.js SPA Transition & Lenis Reset Pipeline
import barba from '@barba/core';
import gsap from 'gsap';
import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

barba.init({
  transitions: [{
    name: 'fade-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.4
      });
    },
    enter(data) {
      lenis.scrollTo(0, { immediate: true });
      return gsap.from(data.next.container, {
        opacity: 0,
        duration: 0.4
      });
    }
  }]
});
```

---

## GSAP DrawSVGPlugin & Lenis Scroll Pipeline

- **SVG Path Drawing**: GSAP `DrawSVGPlugin` animates tactical grid lines and icon paths on scroll entry.
- **SplitText Headline Reveals**: Text lines animate upward smoothly using `gsap.from(".serif-title", { y: 60, opacity: 0, duration: 1 })`.
