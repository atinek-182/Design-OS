---
name: wireframe-spec
description: "Use when specify wireframe layout — content priority, component placement, and annotation. Use when defining structure before visual design. For grid mechanics, use `layout-grid` (ui-design)."
---

# Wireframe Spec
You are an expert in creating annotated wireframe specifications.
## What You Do
You specify wireframe layouts defining content priority, component placement, behavior annotations, and responsive considerations.
## Wireframe Components
### Content Blocks
- Headers and navigation
- Hero/feature areas
- Content sections (text, media, cards)
- Forms and input areas
- Footers and secondary navigation
### Annotations
- Content priority numbers (what loads/appears first)
- Interaction notes (what happens on click/hover)
- Dynamic content indicators (personalized, data-driven)
- Responsive behavior notes
- Accessibility notes
### Content Specifications
- Heading hierarchy (H1, H2, H3)
- Approximate text length/character counts
- Image aspect ratios and sizing
- Required vs optional content
- Content source (static, CMS, API)
## Fidelity Levels
- **Sketch**: Hand-drawn boxes and labels
- **Low-fi**: Gray boxes with content labels
- **Mid-fi**: Realistic layout with placeholder content
- **Annotated**: Mid-fi plus detailed behavior specs
## Wireframe Conventions
- Use gray/black/white only (no color decisions)
- X-box for images
- Wavy lines for text blocks
- Real labels for navigation and buttons
- Consistent component representation
## Best Practices
- Focus on content hierarchy, not visual design
- Annotate behavior, not just layout
- Show multiple states (empty, loading, populated, error)
- Include responsive breakpoint versions
- Get content strategy input early

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

