---
title: Outfit Hello Hello — Lenis Scroll Inertia & Lookbook Image Transforms
domain: reference
summary: Next.js Lenis smooth scroll inertia integration, scroll-driven image matrix transformations, and clip-path reveals.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Outfit Hello Hello — Lenis Scroll Inertia & Lookbook Image Transforms
- Lenis Scroll Engine Setup
- Scroll-Driven Lookbook Image Transforms
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/19-outfit-hello-hello-lenis-scroll-and-lookbook-scaling.md
- When reading context for Outfit Hello Hello Motion
tags:
- reference
- awwwards
- outfit-hello-hello
- lenis-scroll
- lookbook-transforms
updated: '2026-08-08'
---

# Outfit Hello Hello — Lenis Scroll Inertia & Lookbook Image Transforms

Outfit Hello Hello pairs **Lenis Smooth Scroll** (`ready loaded lenis`) with scroll-driven lookbook image transformations.

---

## Lenis Scroll Engine Setup

```javascript
// Lenis Smooth Scroll Initialization
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
document.documentElement.classList.add('ready', 'loaded', 'lenis');
```

---

## Scroll-Driven Lookbook Image Transforms

```javascript
// GSAP Lookbook Image Scale & Clip Transform
gsap.utils.toArray('.lookbook-card img').forEach((img) => {
  gsap.fromTo(img, 
    { scale: 1.2, clipPath: 'inset(10% 0% 10% 0%)' },
    {
      scale: 1.0,
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: "none",
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    }
  );
});
```
