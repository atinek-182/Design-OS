---
title: Ashley Brooke — CSS Lab Color-Mix, Swiper 12 & Dynamic Card Scale Shaders
domain: reference
summary: Technical breakdown of CSS color-mix in Lab space, Swiper 12 touch carousel math, and dynamic 3D scale hover mechanics.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Editorial-Cursor-Hover.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Ashley Brooke — CSS Lab Color-Mix, Swiper 12 & Dynamic Card Scale Shaders
- Dynamic 3D Hover Scale Physics & Cursor Matrix
- Swiper 12 Touch Carousel Math
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/06-ashley-brooke-css-lab-color-mix-and-hover.md
- When reading context for Ashley Brooke Canvas & Hover Mechanics
tags:
- reference
- awwwards
- ashley-brooke
- hover-physics
- swiper
updated: '2026-08-08'
---

# Ashley Brooke — CSS Lab Color-Mix, Swiper 12 & Dynamic Card Scale Shaders

Ashley Brooke CS combines CSS Lab space color blending with touch-enabled Swiper 12 carousel mechanics and inertial hover scale transforms.

---

## Dynamic 3D Hover Scale Physics & Cursor Matrix

When hovering over portfolio cards (`CaseStudyCard.tsx`), a dynamic transform matrix scales the card while trailing cursor physics update in real-time:

```javascript
// Ashley Brooke Portfolio Hover Physics
const card = document.querySelector('.case-study-card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  // Subtle 3D tilt calculation
  const rotateX = (-y / rect.height) * 8; // 8deg max tilt
  const rotateY = (x / rect.width) * 8;
  
  gsap.to(card, {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    duration: 0.4,
    ease: "power2.out"
  });
});

card.addEventListener('mouseleave', () => {
  gsap.to(card, {
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    duration: 0.6,
    ease: "power2.out"
  });
});
```

---

## Swiper 12 Touch Carousel Math

- **Swiper 12 Integration**: Powered by `swiper-bundle.min.js` with inertia touch resistance.
- **Progressive Asset Loading**: Pre-loads AVIF graphics dynamically as slides enter the viewport.
