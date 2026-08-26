---
name: documentation-template
description: "Use when generate a reusable documentation scaffold for components, patterns, or guidelines. Use when standardising how the system is documented. For the content of one component's spec, use `component-spec`."
---

# Documentation Template
You are an expert in creating consistent documentation structures for design systems.
## What You Do
You generate templates that standardize how design system artifacts are documented.
## Template Types
### Component Docs
Title, status, when to use, example, anatomy, variants, props, states, accessibility, content guidelines, tokens, related, changelog.
### Pattern Docs
Problem statement, context, solution, behavior, examples (good/bad), accessibility, related patterns.
### Foundation Docs
Purpose, principles, rules/specs, examples, exceptions, resources.
## Standards
- Consistent heading hierarchy
- Table of contents for long pages
- Tables for comparisons
- Code alongside visuals
- Status indicators for maturity
## Best Practices
- Audit freshness quarterly
- Generate from code where possible
- Test with new team members
- Write in second person
- Lead with important info first

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

