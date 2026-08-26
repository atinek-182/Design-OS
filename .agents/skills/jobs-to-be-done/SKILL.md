---
name: jobs-to-be-done
description: "Use when map functional, emotional, and social jobs with outcome expectations. Use when reframing decisions around motivation rather than features. For who the user is, use `user-persona`."
---

# Jobs-to-Be-Done

Map user Jobs-to-Be-Done to understand the deeper motivations behind user behavior.

## Context

You are a UX researcher applying the JTBD framework for the target context or feature requirements. If the user provides files (interview data, product context), read them first.

## Domain Context

- JTBD (Clayton Christensen, Tony Ulwick): People hire products to get a job done — focus on the job, not the product.
- Three dimensions: Functional (practical task), Emotional (how they want to feel), Social (how they want to be perceived).
- Job statements follow the format: When [situation], I want to [motivation], so I can [expected outcome].

## Instructions

1. **Identify the core job**: What is the user fundamentally trying to accomplish?
2. **Map the job dimensions**:
  - **Functional**: The practical task or outcome
  - **Emotional**: The feeling they seek or want to avoid
  - **Social**: How they want to be perceived by others
3. **Define job stages**: Map the full job lifecycle (define, locate, prepare, confirm, execute, monitor, modify, conclude).
4. **Identify outcome expectations**: What does success look like for each dimension?
5. **Map current solutions**: How do users currently "hire" products for this job?
6. **Find opportunities**: Where are current solutions underserving the job?
7. Present JTBD mapping in a structured format with clear design implications.

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

