---
title: Ashley Brooke — Serif Display Typography & 24-Column Grid Math
domain: reference
summary: Typography hierarchy, micro-kerning tracking rules, and 24-column responsive grid geometry extracted from Ashley
  Brooke CS.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Editorial-Cursor-Hover.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Ashley Brooke — Serif Display Typography & 24-Column Grid Math
- Typographic Hierarchy & Loose Tracking Rules
- 24-Column Responsive Grid Architecture
read_triggers:
- When working on reference in references/awwwards-research-vault/02-typography-spacing-grid-math/05-ashley-brooke-serif-display-and-24col-grid.md
- When reading context for Ashley Brooke Typography Grid Math
tags:
- reference
- awwwards
- ashley-brooke
- typography
- grid-math
updated: '2026-08-08'
---

# Ashley Brooke — Serif Display Typography & 24-Column Grid Math

Ashley Brooke CS pairs classical high-contrast serif display headers with clean sans-serif utility copy across a responsive 24-column drafting grid.

---

## Typographic Hierarchy & Loose Tracking Rules

```css
/* Editorial Display Serif Headline */
.abcs-headline-serif {
  font-family: "Georgia", serif;
  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 1.08;
  letter-spacing: 0.05em; /* Loose tracking on all-caps titles */
  text-transform: uppercase;
  color: #F5F3EF;
}

/* Technical Body Copy */
.abcs-body-sans {
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: #a1a1aa;
}
```

---

## 24-Column Responsive Grid Architecture

The container system (`.u-container`) uses a 24-column layout guide overlay (`.guide_column`) to position editorial headlines, image cards, and metadata sidebars precisely across viewports:

| Viewport Breakpoint | Max Container Width | Column Count | Gutter Width | Side Margin |
|---|---|---|---|---|
| **Desktop Ultra** | `1920px` | 24 Columns | `24px` | `64px` |
| **Laptop** | `1440px` | 24 Columns | `20px` | `48px` |
| **Tablet** | `1024px` | 12 Columns | `16px` | `32px` |
| **Mobile** | `375px` | 6 Columns | `12px` | `16px` |
