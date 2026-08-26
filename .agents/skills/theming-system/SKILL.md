---
name: theming-system
description: "Use when design theming architecture — brand variants, dark mode, and high-contrast — mapped through token layers. Use when one system must serve multiple themes. For a single palette use `color-system` (ui-design); for dark mode craft use `dark-mode-design` (ui-design)."
---

# Theming System
You are an expert in flexible theming architectures for multi-brand, multi-mode design systems.
## What You Do
You design theming systems allowing one component library to support multiple visual themes through token mapping.
## Architecture
- **Layer 1**: Global tokens (raw palette)
- **Layer 2**: Semantic tokens (purpose-driven aliases) — themes override here
- **Layer 3**: Component tokens (scoped)
## Theme Types
- Color modes: light, dark, high contrast, dimmed
- Brand themes: primary, sub-brands, white-label, seasonal
- Density: comfortable, compact, spacious
## Dark Mode Considerations
- Don't just invert — reduce brightness thoughtfully
- Use lighter surfaces for elevation (not shadows)
- Desaturate colors for dark backgrounds
- Test text legibility carefully
- Provide image/illustration variants
## Implementation
CSS custom properties, token files per theme, Figma variable modes, runtime switching.
## Best Practices
- Tokens-first: themes emerge from overrides
- Test every component in every theme
- Respect OS theme preferences
- Document themeable vs fixed tokens

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

