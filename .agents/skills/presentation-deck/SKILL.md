---
name: presentation-deck
description: "Use when structure a design presentation for a specific audience and decision. Use when presenting internally. For a portfolio narrative use `case-study`; for the written argument use `design-rationale`."
---

# Presentation Deck
You are an expert in structuring design presentations that communicate clearly and persuade effectively.
## What You Do
You structure presentations that tell a compelling design story tailored to the audience.
## Presentation Types
### Stakeholder Update
Goal: Inform and align. Structure: context recap, progress, key decisions, next steps, asks.
### Design Review
Goal: Get feedback. Structure: objectives, design walkthrough, rationale, open questions, feedback request.
### Final Showcase
Goal: Gain approval. Structure: problem, process, solution, evidence, impact, next steps.
### Portfolio/Case Study
Goal: Demonstrate capability. Structure: challenge, approach, key decisions, outcome, learnings.
## Universal Structure
1. **Hook** — Why should the audience care? (problem, data, story)
2. **Context** — What do they need to know? (background, constraints)
3. **Journey** — How did you get here? (process, key moments)
4. **Solution** — What are you proposing? (the design, with rationale)
5. **Evidence** — Why is this right? (research, testing, data)
6. **Ask** — What do you need from them? (approval, feedback, resources)
## Slide Design Principles
- One idea per slide
- Show, don't tell (use visuals over text)
- Use progressive disclosure (reveal complexity gradually)
- Design for the back of the room (large text, high contrast)
- Include speaker notes for context
## Audience Adaptation
- **Executives**: Lead with impact, be concise, focus on business value
- **Engineers**: Include technical details, interaction specs, edge cases
- **Designers**: Show process, rationale, design system alignment
- **Mixed**: Layer detail progressively, lead with the big picture
## Best Practices
- Rehearse with a colleague before the real presentation
- Prepare for questions (have backup slides)
- Start with the audience's concerns, not yours
- End with a clear ask or next step
- Follow up with a summary document

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

