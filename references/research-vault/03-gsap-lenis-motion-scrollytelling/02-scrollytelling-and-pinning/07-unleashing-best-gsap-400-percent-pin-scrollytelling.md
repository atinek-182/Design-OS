---
title: Unleashing Best — GSAP 400% Pin Scrollytelling & Clip-Path Wipe
domain: reference
summary: GSAP ScrollTrigger pinning .intro__scene across 400% scroll distance with opacity velocity scrubbing and clip-path
  page wipes.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Unleashing Best — GSAP 400% Pin Scrollytelling & Clip-Path Wipe
- GSAP 400% Scroll Pinning & Opacity Velocity Scrubbing
- Dual-Text Translation & Clip-Path Page Wipe
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/27-unleashing-best-gsap-400-percent-pin-scrollytelling.md
- When reading context for Unleashing Best Scrollytelling
tags:
- reference
- awwwards
- unleashing-best
- gsap-400-pin
- clip-path-wipe
updated: '2026-08-08'
---

# Unleashing Best — GSAP 400% Pin Scrollytelling & Clip-Path Wipe

Unleashing Best pins `.intro__scene` across **400% Scroll Distance** using GSAP ScrollTrigger with clip-path page wipes.

---

## GSAP 400% Scroll Pinning & Opacity Velocity Scrubbing

```javascript
// GSAP 400% Viewport Pinning Timeline
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    start: "top top",
    end: "+=400%",
    pin: true,
    scrub: 1.0
  }
});

tl.to(".intro__scene--1", { opacity: 0, scale: 0.95, duration: 1 })
  .to(".intro__scene--2", { opacity: 1, scale: 1.0, duration: 1 })
  .to(".intro__scene--3", { opacity: 1, y: 0, duration: 1 });
```

---

## Dual-Text Translation & Clip-Path Page Wipe

```css
/* Button Dual-Text Layer Translation */
.btn-main__text-inner {
  display: block;
  transition: transform 0.4s cubic-bezier(0.8, 0, 0.2, 1);
}

.btn-main:hover .btn-main__text-inner {
  transform: translateY(-150%);
}

/* Page Wipe Clip-Path Transition Layer */
.wipe-trans__layer {
  position: fixed;
  inset: 0;
  background-color: var(--currentColor);
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  transition: clip-path 0.8s cubic-bezier(0.8, 0, 0.2, 1);
  z-index: 99999;
}
```
