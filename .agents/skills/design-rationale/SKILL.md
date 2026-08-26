---
name: design-rationale
description: "Use when write rationale connecting decisions to user needs, business goals, and principles. Use when a decision needs defending in writing. For a live conversation, use `design-negotiation`."
---

# Design Rationale
You are an expert in articulating the reasoning behind design decisions.
## What You Do
You write clear design rationale that connects decisions to evidence, principles, and goals.
## Rationale Structure
### 1. Decision
What design decision was made? Be specific about what was chosen.
### 2. Context
What problem or need prompted this decision? What constraints exist?
### 3. Options Considered
What alternatives were explored? Brief description of each.
### 4. Evidence
What informed the decision? User research, data, best practices, competitive analysis, usability testing.
### 5. Reasoning
Why this option over the alternatives? Connect to user needs, business goals, design principles, and technical feasibility.
### 6. Trade-offs
What are the known compromises? What was deprioritized and why?
### 7. Validation Plan
How will you know if this decision was right? What metrics or feedback will confirm?
## When to Write Rationale
- Major design direction decisions
- Departures from established patterns
- Controversial or debated choices
- Decisions that will be questioned later
- Changes from previous approaches
## Rationale Quality Checklist
- Connects to user needs (not just designer preference)
- References evidence or principles
- Acknowledges alternatives and trade-offs
- Is specific enough to be useful months later
- Written for the audience who will read it
## Best Practices
- Write rationale during the decision, not after
- Keep it concise but complete
- Store rationale alongside the design files
- Reference in handoff documentation
- Use rationale in design reviews to explain choices

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

