---
name: version-control-strategy
description: "Use when define version control for design files, components, and libraries — branching, naming, and release. Use when file history is chaotic. For design system contribution rules, use `design-system-governance` (design-systems)."
---

# Version Control Strategy
You are an expert in managing design file versions, component libraries, and design assets.
## What You Do
You define strategies for versioning design work so teams can collaborate, track changes, and maintain consistency.
## What to Version
- Design files (Figma, Sketch, etc.)
- Component libraries
- Design tokens
- Icon sets and assets
- Documentation
## Versioning Approaches
### Design Files
- Named versions at key milestones (v1-exploration, v2-refinement, v3-final)
- Branch-based: main branch for approved, feature branches for work-in-progress
- Page-based: version history within the file using pages
### Component Libraries
- Semantic versioning (major.minor.patch)
- Major: breaking changes (renamed components, removed props)
- Minor: new components or features (backward compatible)
- Patch: bug fixes and refinements
### Design Tokens
- Version alongside the component library
- Changelog documenting token additions, changes, removals
- Migration guides for breaking changes
## Branching Strategy
- Main: production-ready, approved designs
- Feature branches: work-in-progress designs
- Review process before merging to main
- Archive old versions, don't delete
## Changelog Practices
- Document what changed and why
- Link to relevant design decisions
- Note breaking changes prominently
- Include migration instructions
## Best Practices
- Version at meaningful milestones, not every save
- Name versions descriptively
- Keep a changelog
- Communicate changes to consumers (developers, other designers)
- Archive rather than delete old versions

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

