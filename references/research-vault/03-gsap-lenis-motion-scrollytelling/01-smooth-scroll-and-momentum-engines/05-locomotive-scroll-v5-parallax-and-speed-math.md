---
title: Locomotive Agency — Locomotive Scroll v5 & Parallax Speed Math
domain: reference
summary: Locomotive Scroll v5 smooth inertia engine implementation, data-scroll-speed attributes, and GSAP SplitText reveals.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Locomotive-Scroll-Engine.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Locomotive Agency — Locomotive Scroll v5 & Parallax Speed Math
- Locomotive Scroll v5 Engine Architecture
- Parallax Speed Delta Math & GSAP SplitText
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/14-locomotive-scroll-v5-parallax-and-speed-math.md
- When reading context for Locomotive Scroll v5 Motion Math
tags:
- reference
- awwwards
- locomotive-agency
- locomotive-scroll-v5
- parallax-speed
updated: '2026-08-08'
---

# Locomotive Agency — Locomotive Scroll v5 & Parallax Speed Math

Locomotive Agency created **Locomotive Scroll v5**, establishing open-source smooth inertia scrolling standards.

---

## Locomotive Scroll v5 Engine Architecture

```javascript
// Locomotive Scroll v5 Initialization Engine
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 1.0,
  lerp: 0.08,
  touchMultiplier: 2.0
});

scroll.on('scroll', (args) => {
  // Pass scroll position to WebGL shaders
  const speed = args.speed;
  document.documentElement.style.setProperty('--scroll-speed', speed);
});
```

---

## Parallax Speed Delta Math & GSAP SplitText

```html
<!-- Locomotive Parallax Attribute -->
<div data-scroll data-scroll-speed="2">
  <img src="portfolio-item.webp" alt="Locomotive Showcase" class="parallax-img" />
</div>
```

$$\mathbf{Y}_{\text{render}} = \mathbf{Y}_{\text{scroll}} \times \text{data-scroll-speed}$$

When scrolling at high speed ($\Delta y > 20$), `parallax-img` applies dynamic WebGL liquid wave distortion.
