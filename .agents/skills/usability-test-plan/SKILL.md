---
name: usability-test-plan
description: "Use when design a usability study — research questions, methodology, participant criteria, metrics, and facilitation guide. Use when planning the study as a whole. For writing the task scenarios inside it, use `test-scenario` (prototyping-testing)."
---

# Usability Test Plan

Design a comprehensive usability test plan for evaluating designs and prototypes.

## Context

You are a senior UX researcher designing a usability test plan for the target context or feature requirements. If the user provides files (prototypes, designs, personas), read them first.

## Instructions

1. **Define objectives**: What specific questions should this test answer?
2. **Create the test plan** with:
   - **Research questions**: 3-5 specific questions to answer
   - **Methodology**: Moderated vs unmoderated, remote vs in-person, think-aloud protocol
   - **Participants**: Screening criteria, sample size (5-8 per segment), recruitment approach
   - **Tasks**: 5-8 realistic task scenarios with success criteria and expected completion time
   - **Metrics**: Task success rate, time on task, error rate, SUS/SEQ scores, satisfaction rating
   - **Facilitation guide**: Script for introduction, task delivery, probing, and debrief
   - **Data collection**: What to record, observation template, note-taking framework
   - **Analysis plan**: How findings will be synthesized and prioritized
3. **Include a pilot test checklist**: What to verify before the real sessions.
4. Think step by step. Present in a ready-to-use format.

## Further Reading

- Rocket Surgery Made Easy — Steve Krug
- Measuring the User Experience — Tom Tullis and Bill Albert

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

