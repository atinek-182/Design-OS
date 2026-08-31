---
title: Obys Agency — Georgia Serif, Nobel Sans & Courier Mono Type Stack
domain: reference
summary: Technical typography hierarchy combining Georgia serif, Nobel/Inter sans, and Courier New monospaced ratio specifications.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Obys-Agency-Design-System.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Obys Agency — Georgia Serif, Nobel Sans & Courier Mono Type Stack
- 3-Font Typography Architecture
- Difference Blend Mode Header Navigation
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/12-obys-agency-georgia-nobel-courier-type-stack.md
- When reading context for Obys Agency Typography Stack
tags:
- reference
- awwwards
- obys-agency
- typography-stack
- georgia-serif
- mix-blend-mode
updated: '2026-08-08'
---

# Obys Agency — Georgia Serif, Nobel Sans & Courier Mono Type Stack

Obys Agency utilizes a 3-font typography pairing system to enforce contrast between editorial storytelling, digital UI, and monospaced technical metrics.

---

## 3-Font Typography Architecture

```css
/* Obys 3-Font Typography Architecture */

/* 1. Editorial Storytelling Quotes & Chapter Headlines */
.obys-editorial-title {
  font-family: "Georgia", serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(2.25rem, 5vw, 4.5rem);
  line-height: 1.1;
  color: var(--obys-text-primary);
}

/* 2. Body Copy & Digital Navigation */
.obys-sans-body {
  font-family: "Nobel", "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.125rem; /* 18px */
  line-height: 1.6;
  color: var(--obys-text-primary);
}

/* 3. Grid Metrics & Column Ratio Labels */
.obys-mono-spec {
  font-family: "Courier New", monospace;
  font-weight: 500;
  font-size: 0.875rem; /* 14px */
  letter-spacing: 0.05em;
  color: var(--obys-accent-gold);
}
```

---

## Difference Blend Mode Header Navigation

```css
.obys-header-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 80px;
  z-index: 1000;
  mix-blend-mode: difference;
  color: #FFFFFF;
}
```
