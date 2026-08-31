---
title: Follow Art — WebGL Intro Canvas & Rotational 3D Physics Math
domain: reference
summary: Vide Infra WebGL intro canvas wrapper, rotational 3D physics math, and loading screen keyframe loops.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Gallery-Cursor-Physics.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Follow Art — WebGL Intro Canvas & Rotational 3D Physics Math
- WebGL Canvas Stage & Keyframe Decoration Loop
- 3D Rotational Physics Torque Math
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/09-follow-art-webgl-canvas-and-rotational-physics.md
- When reading context for Follow Art WebGL Rotational Physics
tags:
- reference
- awwwards
- follow-art
- webgl
- rotational-physics
updated: '2026-08-08'
---

# Follow Art — WebGL Intro Canvas & Rotational 3D Physics Math

Follow Art incorporates a 3D WebGL intro canvas stage (`landing-1-intro-webgl__canvas-wrapper`) to render rotating 3D gallery cards.

---

## WebGL Canvas Stage & Keyframe Decoration Loop

Loading elements animate continuously until the `.promo--loaded` entrance state unlocks the interactive canvas stage:

```css
/* Follow Art Preloader Changing Elements Keyframe Loop */
@keyframes changingElements {
  0% { transform: scale(0.9) rotate(0deg); opacity: 0.2; }
  50% { transform: scale(1.05) rotate(180deg); opacity: 1; }
  100% { transform: scale(0.9) rotate(360deg); opacity: 0.2; }
}

.loading-screen__element {
  animation: changingElements 2.4s infinite cubic-bezier(0.45, 0, 0.55, 1);
}
```

---

## 3D Rotational Physics Torque Math

- **Rotational Y-Axis Angle**: Floating cards update dynamic 3D rotational Y angles based on viewport scroll offset:
  $$\theta_Y = -251^\circ + (S_{scroll} \times 0.12)$$
