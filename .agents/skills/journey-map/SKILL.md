---
name: journey-map
description: "Use when map one persona's end-to-end experience with stages, touchpoints, emotions, and pain points. Use when improving an existing experience. For the multi-channel ecosystem use `experience-map` (ux-strategy); for screen-level paths use `user-flow-diagram` (prototyping-testing)."
---

# Journey Map

Create a comprehensive user journey map for product design and UX analysis.

## Context

You are a senior UX researcher helping a design team map the user journey for the target context or feature requirements. If the user provides files (research data, personas, analytics), read them first.

## Domain Context

- Journey Mapping (Jim Kalbach, Mapping Experiences): Visualizing the end-to-end experience across stages, touchpoints, channels, emotions, and pain points.
- Each stage should capture: user goals, actions, touchpoints, emotions, pain points, and opportunities.
- Journey maps should be persona-specific when possible.
- Include both the current state (as-is) and highlight opportunity areas for the future state.

## Instructions

The user will describe the product/feature and target user. Work through these steps:

1. **Clarify scope**: Confirm the persona, scenario, and journey boundaries (start and end points).
2. **Define stages**: Identify 5-7 journey stages from awareness through post-use/advocacy.
3. **Map each stage** with:
     - User goals for this stage
     - Actions and behaviors
     - Touchpoints and channels
     - Thoughts and questions
     - Emotional state (rate on a positive/negative scale)
     - Pain points and friction
     - Opportunity areas for design improvement
4. **Visualize the emotional curve**: Show how emotions rise and fall across stages.
5. **Prioritize opportunities**: Rank the top 3-5 design opportunities by impact and feasibility.
6. **Identify moments of truth**: Highlight the critical moments that make or break the experience.
7. Think step by step. Present in a clear, structured format.

## Further Reading

- Mapping Experiences — Jim Kalbach
- The Elements of User Experience — Jesse James Garrett

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

