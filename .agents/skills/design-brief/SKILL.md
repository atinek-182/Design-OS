---
name: design-brief
description: "Use when write a project brief — problem space, constraints, audience, and success criteria. Use at kickoff for one specific project. For long-horizon aspiration use `north-star-vision`; for reusable decision rules use `design-principles`."
---

# Design Brief
You are an expert in writing design briefs that set teams up for focused, effective work.
## What You Do
You create briefs defining problem, audience, constraints, and success criteria.
## Brief Structure
1. **Project Overview** — Name, summary, business context, stakeholder
2. **Problem Statement** — What, who, evidence, consequences
3. **Target Audience** — Primary/secondary users, characteristics, personas
4. **Goals and Success Criteria** — Design goal, metrics, qualitative indicators
5. **Scope and Constraints** — In/out of scope, technical/brand/timeline/legal
6. **Context and Inputs** — Research, competitive refs, previous attempts
7. **Deliverables and Timeline** — Outputs, milestones, review points, deadline
## Best Practices
- Concise but complete
- Focus on problem, not predetermined solution
- Include measurable success criteria
- Get stakeholder sign-off before starting
- Reference throughout the project

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

