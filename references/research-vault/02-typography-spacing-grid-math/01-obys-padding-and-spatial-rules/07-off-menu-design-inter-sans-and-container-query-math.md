---
title: Off Menu Design — Inter Sans & CSS Container Query Math
domain: reference
summary: Technical typography hierarchy using Inter font stack, tight tracking (-0.02em), and CSS container queries.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Off Menu Design — Inter Sans & CSS Container Query Math
- Inter Sans-Serif Typographic Scale
- CSS Container Query & Zoom Offset Math
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/17-off-menu-design-inter-sans-and-container-query-math.md
- When reading context for Off Menu Design Typography Math
tags:
- reference
- awwwards
- off-menu-design
- inter-sans
- container-queries
updated: '2026-08-08'
---

# Off Menu Design — Inter Sans & CSS Container Query Math

Off Menu Design relies on the **Inter** sans-serif font stack with tight tracking (`tracking-tight`) to project a sleek tech-forward product aesthetic.

---

## Inter Sans-Serif Typographic Scale

```css
/* Off Menu Headline Display */
.offmenu-headline {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: clamp(2.5rem, 6vw, 5.25rem);
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: #FFFFFF;
}

/* Off Menu Subtitle */
.offmenu-subtitle {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.125rem; /* 18px */
  line-height: 1.6;
  color: #71717A;
}
```

---

## CSS Container Query & Zoom Offset Math

```css
/* Off Menu Responsive Container Query Rig */
.offmenu-card-container {
  container-type: inline-size;
  --zoom-offset: 1.05;
  --tilt-offset-x: 12px;
}

@container (min-width: 400px) {
  .offmenu-card-item {
    padding: 24px;
    font-size: 1rem;
  }
}
```
