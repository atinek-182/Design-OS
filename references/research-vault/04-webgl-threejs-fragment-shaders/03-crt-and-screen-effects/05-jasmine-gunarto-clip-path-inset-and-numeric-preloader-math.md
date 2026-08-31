---
title: Jasmine Gunarto — Clip-Path Inset Transitions & Numeric Preloader Math
domain: reference
summary: CSS clip-path inset morphing calculations, image scale physics (1.2x to 2.0x), and staggered numeric preloader digit
  rolls.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Jasmine Gunarto — Clip-Path Inset Transitions & Numeric Preloader Math
- CSS Clip-Path Inset Transition Formulas
- Numeric Preloader Counter Math
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/14-jasmine-gunarto-clip-path-inset-and-numeric-preloader-math.md
- When reading context for Jasmine Gunarto Transition Math
tags:
- reference
- awwwards
- jasmine-gunarto
- clip-path-inset
- preloader-math
updated: '2026-08-08'
---

# Jasmine Gunarto — Clip-Path Inset Transitions & Numeric Preloader Math

Jasmine Gunarto combines CSS `clip-path: inset(...)` reveal masks with staggered numeric counter preloader rolls.

---

## CSS Clip-Path Inset Transition Formulas

To morph from closed overlay to full stage reveal:

$$\text{Closed State} = \text{inset}(0\text{px } 0\text{px } 100\text{\% } 0\text{px})$$

$$\text{Open State} = \text{inset}(0\text{px } 0\text{px } 0\text{\% } 0\text{px})$$

```css
/* Clip-Path Transition Class */
.jasmine-reveal-card {
  clip-path: inset(0px 0px 100% 0px);
  transition: clip-path 0.8s cubic-bezier(0.77, 0, 0.175, 1),
              transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
  transform: scale(1.15);
}

.jasmine-reveal-card.active {
  clip-path: inset(0px 0px 0% 0px);
  transform: scale(1);
}
```

---

## Numeric Preloader Counter Math

```javascript
// Staggered Numeric Digit Roll
function updatePreloaderNumber(percent) {
  const currentDigit = Math.floor(percent / 10);
  const nextDigit = Math.min(9, currentDigit + 1);
  
  const numWrap = document.querySelector('.num-wrap');
  numWrap.style.transform = `translateY(-${percent}%)`;
}
```
