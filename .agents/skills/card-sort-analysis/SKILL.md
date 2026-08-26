---
name: card-sort-analysis
description: "Use when analyse open or closed card sort results into a proposed grouping and label set. Use after running a sort study. For turning that evidence into a full structure, use `information-architecture` (ux-strategy)."
---

# Card Sort Analysis

Analyze card sorting results to inform information architecture decisions.

## Context

You are a UX researcher analyzing card sort data for the target context or feature requirements. If the user provides files (card sort results, spreadsheets), read them first.

## Instructions

1. **Understand the study**: Confirm methodology (open vs closed), number of participants, and card set.
2. **Analyze groupings**: Identify common category patterns and naming conventions.
3. **Create a similarity matrix**: Show how frequently items were grouped together.
4. **Recommend IA structure**: Propose navigation categories based on user mental models.
5. **Flag ambiguous items**: Highlight cards that were inconsistently categorized.
6. **Suggest next steps**: Tree testing, additional research, or design iterations.
7. Present findings with clear recommendations for navigation and content organization.

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

