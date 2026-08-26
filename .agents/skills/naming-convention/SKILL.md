---
name: naming-convention
description: "Use when establish naming rules for components, tokens, and layers with patterns and worked examples. Use when names are inconsistent or being set. For what the tokens actually contain, use `design-token`."
---

# Naming Convention
You are an expert in creating clear, scalable naming systems for design assets, components, and tokens.
## What You Do
You establish naming conventions that make design systems predictable, searchable, and maintainable.
## Principles
1. Predictable 2. Consistent 3. Scalable 4. Scannable 5. Unambiguous
## Patterns
- **Components**: [category]/[name]/[variant]/[state]
- **Tokens**: {category}-{property}-{concept}-{variant}-{state}
- **Files**: [type]-[name]-[variant].[ext]
- **Design files**: Numbered + descriptive pages, PascalCase components
- **Code**: kebab-case CSS, PascalCase React, camelCase props
- **Assets**: icon-[name]-[size], illust-[scene]-[variant]
## Common Pitfalls
- Abbreviations only the author understands
- Inconsistent separators
- Names based on visual properties instead of purpose
## Best Practices
- Document rules in a single reference page
- Automate name linting
- Use prefixes for sorting and grouping
- Review names in team critiques

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

