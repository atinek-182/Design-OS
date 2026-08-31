---
title: Champions 4 Good — Card Swipe Rotational Torque & Font Hydration Gates
domain: reference
summary: Mathematical formulas for rotational torque during card swipe interactions and DOM font hydration gate states.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Kinetic-Type-Scroll.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Champions 4 Good — Card Swipe Rotational Torque & Font Hydration Gates
- Rotational Drag Torque Mathematical Formula
- Web Font Hydration Gate (.is-ready.fonts-loaded)
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/07-champions-4-good-card-swipe-torque-math.md
- When reading context for Champions 4 Good Torque & Font Math
tags:
- reference
- awwwards
- champions-4-good
- torque-math
- font-hydration
updated: '2026-08-08'
---

# Champions 4 Good — Card Swipe Rotational Torque & Font Hydration Gates

Champions 4 Good uses physical torque formulas to apply believable tilt to interactive drag elements and delays stage initialization until custom web fonts are fully hydrated.

---

## Rotational Drag Torque Mathematical Formula

When dragging card elements horizontally, angular displacement ($\theta$) is derived from instantaneous pointer velocity ($v_x$):

$$\theta = \text{clamp}\left( v_x \times k_{torque}, -\theta_{max}, \theta_{max} \right)$$

Where:
- $v_x = x_{current} - x_{previous}$ (pixel delta per frame)
- $k_{torque} = 0.4$ (stiffness constant)
- $\theta_{max} = 12^\circ$ (maximum tilt angle clamp)

---

## Web Font Hydration Gate (`.is-ready.fonts-loaded`)

To eliminate Layout Instability (CLS) during page render:

```javascript
// Champions 4 Good Font Hydration Listener
document.fonts.ready.then(() => {
  document.body.classList.add('is-ready', 'fonts-loaded');
  // Initialize draggable card physics post-font hydration
});
```
