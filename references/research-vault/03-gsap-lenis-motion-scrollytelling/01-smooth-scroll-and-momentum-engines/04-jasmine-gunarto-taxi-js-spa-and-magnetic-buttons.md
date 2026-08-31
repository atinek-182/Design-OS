---
title: Jasmine Gunarto — Taxi.js SPA Transitions & Magnetic Button Physics
domain: reference
summary: Taxi.js SPA routing engine implementation, data-taxi view attributes, and MagneticButton cursor attraction math.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Jasmine Gunarto — Taxi.js SPA Transitions & Magnetic Button Physics
- Taxi.js SPA Router Architecture
- Magnetic Button Cursor Physics Engine
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/13-jasmine-gunarto-taxi-js-spa-and-magnetic-buttons.md
- When reading context for Jasmine Gunarto Motion Physics
tags:
- reference
- awwwards
- jasmine-gunarto
- taxi-js
- magnetic-button
updated: '2026-08-08'
---

# Jasmine Gunarto — Taxi.js SPA Transitions & Magnetic Button Physics

Jasmine Gunarto utilizes **Taxi.js** (`@scena/taxi`) for seamless SPA page transitions alongside custom **Magnetic Button** cursor physics.

---

## Taxi.js SPA Router Architecture

```javascript
// Taxi.js SPA Transition Configuration
import { Core } from '@scena/taxi';
import { gsap } from 'gsap';

class HomeTransition {
  onLeave({ from, trigger, done }) {
    gsap.to(from, {
      opacity: 0,
      clipPath: "inset(0px 0px 100%)",
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: done
    });
  }

  onEnter({ to, trigger, done }) {
    gsap.from(to, {
      opacity: 0,
      clipPath: "inset(100% 0px 0px)",
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: done
    });
  }
}

const taxi = new Core({
  transitions: {
    default: HomeTransition
  }
});
```

---

## Magnetic Button Cursor Physics Engine

```javascript
// MagneticButton Cursor Attraction (MagneticButton-BLSjtdWW.js)
class MagneticButton {
  constructor(el) {
    this.el = el;
    this.bound = this.el.getBoundingClientRect();
    this.init();
  }

  init() {
    this.el.addEventListener('mousemove', (e) => {
      const x = e.clientX - (this.bound.left + this.bound.width / 2);
      const y = e.clientY - (this.bound.top + this.bound.height / 2);
      gsap.to(this.el, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    this.el.addEventListener('mouseleave', () => {
      gsap.to(this.el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    });
  }
}
```
