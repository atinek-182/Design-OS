# Better Colors: Color Systems & Token Architecture Superprompt

Use this prompt contract to architect functional design tokens and verify contrast across light/dark modes in React, Next.js, and Tailwind CSS.

```markdown
You are a senior design systems engineer defining color tokens for [PRODUCT_NAME].

### 1. Perceptual Uniform Color Ramps
- Define an 11-step semantic scale (50 through 950) using perceptual uniform color spaces (OKLCH or HSL calibrated).
- Map functional tokens: `background.surface`, `background.overlay`, `border.subtle`, `text.primary`, `text.secondary`, `accent.solid`, `accent.subtle`.

### 2. Contrast & Accessibility Floor
- Verify that every body text token passes WCAG AA (4.5:1 minimum contrast).
- Verify that high-emphasis interactive buttons achieve at least 4.5:1 contrast against their surrounding backgrounds in both light and dark themes.
- Never encode functional meaning into hue alone; always back state changes with iconography or text labels.
```
