---
title: Tresmares Capital — Taxi.js SPA Router & Button Underline Offset
domain: reference
summary: Taxi.js SPA page swapper router setup (data-taxi-view="default") and button underline offset transitions.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Tresmares Capital — Taxi.js SPA Router & Button Underline Offset
- Taxi.js SPA Transition Engine
- Interactive Button Underline Offset Hover
read_triggers:
- When working on reference in references/awwwards-research-vault/03-gsap-lenis-motion-scrollytelling/24-tresmares-capital-taxi-js-spa-transitions.md
- When reading context for Tresmares Capital Taxi Motion
tags:
- reference
- awwwards
- tresmares-capital
- taxi-js-router
- underline-offset
updated: '2026-08-08'
---

# Tresmares Capital — Taxi.js SPA Router & Button Underline Offset

Tresmares Capital uses **Taxi.js** (`data-taxi`, `data-taxi-view="default"`) for client-side page transitions.

---

## Taxi.js SPA Transition Engine

```javascript
// Taxi.js SPA Transition Configuration
import { Core } from '@unjs/taxi';

const taxi = new Core({
  links: 'a:not([target="_blank"]):not([href^="#"])',
  views: {
    default: {
      onEnter({ to, trigger }) {
        gsap.fromTo(to.page, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      },
      onLeave({ from, trigger, done }) {
        gsap.to(from.page, { opacity: 0, y: -30, duration: 0.4, ease: "power2.in", onComplete: done });
      }
    }
  }
});
```

---

## Interactive Button Underline Offset Hover

```css
/* Subrayado Underline Transition */
.button-subrayado {
  text-decoration: underline;
  text-underline-offset: 0.2em;
  transition: text-underline-offset 0.3s ease, color 0.3s ease;
}

.button-subrayado:hover {
  text-underline-offset: 0.5em;
  color: #D94A38;
}
```
