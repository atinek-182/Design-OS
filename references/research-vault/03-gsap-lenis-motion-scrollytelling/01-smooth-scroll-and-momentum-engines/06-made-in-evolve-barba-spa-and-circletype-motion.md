---
title: Made In Evolve — Barba SPA Transitions & CircleType Motion
domain: reference
summary: Barba.js SPA transition containers, CircleType.js curved SVG text path mechanics, and GSAP ScrambleText reveals.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Made In Evolve — Barba SPA Transitions & CircleType Motion
- Barba.js SPA Transition Architecture
- CircleType.js Curved Text Path Motion Engine
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/15-made-in-evolve-barba-spa-and-circletype-motion.md
- When reading context for Made In Evolve Motion Mechanics
tags:
- reference
- awwwards
- made-in-evolve
- barba-js
- circletype
- scramble-text
updated: '2026-08-08'
---

# Made In Evolve — Barba SPA Transitions & CircleType Motion

Made In Evolve uses **Barba.js** (`data-barba="wrapper"`) for page transitions and **CircleType.js** (`circletype.min.js`) for curved SVG badge typography.

---

## Barba.js SPA Transition Architecture

```javascript
// Barba.js SPA Transition Handler
import barba from '@barba/core';
import { gsap } from 'gsap';

barba.init({
  transitions: [{
    name: 'fade-transition',
    leave({ current, next, trigger }) {
      return gsap.to(current.container, {
        opacity: 0,
        scale: 0.98,
        duration: 0.5,
        ease: "power2.inOut"
      });
    },
    enter({ current, next, trigger }) {
      return gsap.from(next.container, {
        opacity: 0,
        scale: 1.02,
        duration: 0.5,
        ease: "power2.inOut"
      });
    }
  }]
});
```

---

## CircleType.js Curved Text Path Motion Engine

```javascript
// CircleType Curved Text SVG Badge Generator
import CircleType from 'circletype';

const badgeText = document.getElementById('curved-badge');
const circleType = new CircleType(badgeText);
circleType.radius(120).dir(1);

// Continuous slow rotation physics
gsap.to(badgeText, {
  rotate: 360,
  duration: 20,
  repeat: -1,
  ease: "none"
});
```
