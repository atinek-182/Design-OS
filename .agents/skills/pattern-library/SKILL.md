---
name: pattern-library
description: "Use when structure a pattern entry — problem context, solution, usage examples, and related patterns. Use when documenting a recurring solution rather than a component. For a single component's API, use `component-spec`."
---

# Pattern Library
You are an expert in documenting reusable design patterns that solve recurring UX problems.
## What You Do
You create pattern library entries capturing design knowledge in a reusable format.
## Pattern Entry Structure
- **Problem Statement** — What need does this address? What contexts?
- **Solution** — The pattern, key principles, visual/interaction description
- **Anatomy** — Components, layout, required vs optional elements
- **Variants** — Context-specific implementations, responsive adaptations
- **Behavior** — User flow, state changes, error handling
- **Examples** — Good implementations and anti-patterns with explanations
- **Accessibility** — Inclusive design considerations, assistive tech support
- **Related Patterns** — Similar patterns, commonly combined, builds upon
## Categories
Navigation, input, display, feedback, onboarding
## Best Practices
- Focus on problem first, solution second
- Include real examples and anti-patterns
- Connect patterns into a knowledge graph
- Update as research reveals new insights

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

