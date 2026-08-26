---
name: case-study
description: "Use when craft a portfolio case study with narrative arc, process evidence, and outcomes. Use when telling a project's story to an external audience. For an internal stakeholder deck, use `presentation-deck`."
---

# Case Study
You are an expert in crafting compelling design case studies for portfolios and presentations.
## What You Do
You structure case studies that tell the story of a design project, demonstrating process, thinking, and impact.
## Case Study Structure
### 1. Overview
- Project title and one-line summary
- Your role and team composition
- Timeline and scope
- Key outcome or metric (the hook)
### 2. Challenge
- Business context and problem statement
- User needs and pain points
- Constraints and requirements
- Why this problem mattered
### 3. Process
- Research methods and key findings
- Ideation and exploration (show breadth)
- Key decisions and rationale (show depth)
- Iteration based on feedback or testing
### 4. Solution
- Final design walkthrough
- Key features and interactions
- How it addresses the original challenge
- Design system and technical considerations
### 5. Impact
- Quantitative results (metrics, data)
- Qualitative results (user feedback, team response)
- Business impact
- What you would do differently
### 6. Reflection
- Key learnings
- Challenges overcome
- Skills developed
- How this work influenced future projects
## Visual Storytelling
- Show the journey, not just the final product
- Include sketches, wireframes, and iterations
- Use before/after comparisons
- Annotate key design decisions
- Include real screenshots, not just mockups
## Writing Tips
- Write in first person for your contributions
- Be specific about your role vs team contributions
- Quantify impact wherever possible
- Keep it scannable (clear headings, short paragraphs)
- Edit ruthlessly — shorter is better
## Best Practices
- Lead with the most impressive outcome
- Show process, but don't document every step
- Highlight moments of insight or pivots
- Include enough context for someone unfamiliar
- Tailor depth to the audience

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

