---
title: Sondaven — KTF Metro Roman Serif & Scrollbar-Lock Math
domain: reference
summary: KTF Metro Roman display serif typography hierarchy, SplitText accessibility wrappers, and exact scrollbar width scroll-lock
  math.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Sondaven — KTF Metro Roman Serif & Scrollbar-Lock Math
- KTF Metro Roman Typographic Scale
- Scrollbar Width Scroll-Lock Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/21-sondaven-ktf-metro-roman-and-scrollbar-lock-math.md
- When reading context for Sondaven Typography Math
tags:
- reference
- awwwards
- sondaven
- ktf-metro-roman
- scroll-lock-math
updated: '2026-08-08'
---

# Sondaven — KTF Metro Roman Serif & Scrollbar-Lock Math

Sondaven pairs **KTF Metro Roman** display serif typography (`letter-spacing: -0.02em`) with KTF Metro Blueline body copy.

---

## KTF Metro Roman Typographic Scale

```css
/* Sondaven Luxury Hotel Headline */
.sondaven-h1 {
  font-family: "KTF Metro Roman", serif;
  font-size: clamp(2.5rem, 6vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
  color: #2C2824;
}

/* Body Text Scale */
.sondaven-body {
  font-family: "KTF Metro Blueline", sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1.15rem);
  line-height: 1.6;
  color: rgba(44, 40, 36, 0.85);
}
```

---

## Scrollbar Width Scroll-Lock Math

```javascript
// Exact Scrollbar Width Scroll Lock Rig (Prevents Layout Jump)
function lockScroll() {
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.documentElement.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
  document.body.style.paddingRight = "var(--scrollbar-width)";
  document.documentElement.style.overflow = "hidden";
  if (window.lenis) window.lenis.stop();
}

function unlockScroll() {
  document.documentElement.style.removeProperty("--scrollbar-width");
  document.body.style.paddingRight = "";
  document.documentElement.style.overflow = "";
  if (window.lenis) window.lenis.start();
}
```
