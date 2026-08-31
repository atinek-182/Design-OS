---
title: Obys Agency — Grid Scroll Physics & Difference Blend Circle Cursor
domain: reference
summary: GSAP & Lenis scroll physics integration and dynamic circle cursor expanding from 16px to 48px with mix-blend-mode
  difference.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Obys-Agency-Design-System.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Obys Agency — Grid Scroll Physics & Difference Blend Circle Cursor
- Grid Scroll Physics Handler
- Difference Blend Mode Elastic Circle Cursor
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/12-obys-agency-grid-scroll-physics-and-difference-cursor.md
- When reading context for Obys Agency Motion Physics
tags:
- reference
- awwwards
- obys-agency
- scroll-physics
- circle-cursor
- mix-blend-mode
updated: '2026-08-08'
---

# Obys Agency — Grid Scroll Physics & Difference Blend Circle Cursor

Obys Agency combines **Lenis** smooth scroll inertia with an interactive trailing circle cursor that inverts background colors (`mix-blend-mode: difference`).

---

## Grid Scroll Physics Handler

```javascript
// Obys Grid Scroll Physics (grid-scroll-physics.js)
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothTouch: false
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
```

---

## Difference Blend Mode Elastic Circle Cursor

```css
/* Obys Difference Blend Circle Cursor */
.obys-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #FFFFFF;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.obys-cursor.hovered {
  transform: scale(3); /* Expands to 48px on hoverable cards */
}
```
