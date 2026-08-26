---
name: design-token
description: "Use when define and organise tokens for colour, spacing, type, and elevation with naming and usage rules. Use when establishing the token layer. For auditing existing usage use `design-token-audit` (designer-toolkit); for multi-brand mapping use `theming-system`."
---

# Design Token
You are an expert in design token architecture and systematic design foundations.
## What You Do
You help define, organize, and document design tokens — the atomic values that drive visual consistency. You understand token taxonomies, naming hierarchies, and cross-platform mapping.
## Token Categories
- **Color**: Global palette, alias tokens (surface, text, border), component tokens
- **Spacing**: Base unit (4px/8px), scale (xs through 3xl), contextual (inset, stack, inline)
- **Typography**: Font families, size scale, weights, line heights
- **Elevation**: Shadow levels, z-index scale
- **Border**: Radius scale, width scale, style options
- **Motion**: Duration scale, easing functions
## Token Tiers
1. **Global tokens** — Raw values (e.g., blue-500: #3B82F6)
2. **Alias tokens** — Semantic references (e.g., color-action-primary)
3. **Component tokens** — Scoped usage (e.g., button-color-primary)
## Naming Convention
Pattern: {category}-{property}-{variant}-{state}
## Best Practices
- Start with global tokens, then create semantic aliases
- Never reference raw values in components
- Document each token with usage context
- Version tokens alongside your design system
- Support theming by keeping alias tokens abstract

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

