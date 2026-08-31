---
title: Obys Agency — Power Line Kinetic Typography & ScrollTrigger Scrollytelling
domain: reference
summary: GSAP ScrollTrigger kinetic typography reveals anchored to Van De Graaff power lines and Lenis smooth scroll inertia.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Obys-Agency-Design-System.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Obys Agency — Power Line Kinetic Typography & ScrollTrigger Scrollytelling
- Power Line Anchored SplitText Kinetic Animation
- Lenis Smooth Scroll Inertia Pipeline
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/11-obys-agency-kinetic-typography-and-power-line-motion.md
- When reading context for Obys Agency Kinetic Motion
tags:
- reference
- awwwards
- obys-agency
- kinetic-typography
- gsap
- scrolltrigger
updated: '2026-08-08'
---

# Obys Agency — Power Line Kinetic Typography & ScrollTrigger Scrollytelling

Obys Agency anchors GSAP SplitText kinetic headline reveals directly to Van De Graaff diagonal power lines.

---

## Power Line Anchored SplitText Kinetic Animation

```javascript
// Obys Agency Power Line Kinetic Headline Reveal
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const headline = document.querySelector('.obys-powerline-headline');
const split = new SplitText(headline, { type: 'lines, words' });

gsap.from(split.words, {
  y: 120,
  rotateX: -45,
  opacity: 0,
  duration: 1.2,
  stagger: 0.04,
  ease: "power4.out",
  scrollTrigger: {
    trigger: headline,
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});
```

---

## Lenis Smooth Scroll Inertia Pipeline

- **Scroll Engine**: Lenis 1.3+ smooth scroll configuration.
- **Velocity Tracker**: Dynamic scroll speed multiplier driving blur displacement filters on rapid scroll.
