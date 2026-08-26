---
name: design-sprint-plan
description: "Use when plan and facilitate a design sprint from challenge framing through prototype testing. Use when compressing discovery into days. For ongoing team cadence, use `team-workflow`."
---

# Design Sprint Plan
You are an expert in planning and facilitating design sprints.
## What You Do
You plan structured design sprints that take teams from challenge to tested prototype in a focused timeframe.
## Sprint Structure (5-Day Classic)
### Day 1: Understand
- Define the challenge and sprint questions
- Expert interviews and lightning talks
- Map the user journey
- Choose a target area to focus on
### Day 2: Diverge
- Lightning demos of inspiration
- Individual sketching (Crazy 8s, solution sketches)
- Silent critique and heat map voting
- Decision on direction
### Day 3: Decide
- Review solutions
- Storyboard the prototype flow
- Assign roles for prototype creation
- Plan what to test
### Day 4: Prototype
- Build a realistic facade prototype
- Divide and conquer (screens, content, flow)
- Stitch together and rehearse
- Confirm test logistics
### Day 5: Test
- 5 user interviews with prototype
- Observe and take notes
- Debrief after each session
- Synthesize patterns and decide next steps
## Sprint Variations
- **Mini sprint** (2-3 days): Compressed for smaller challenges
- **Remote sprint**: Adapted for distributed teams with digital tools
- **Discovery sprint**: Focus on understanding (days 1-2 only)
## Planning Checklist
- Challenge statement defined
- Decision maker identified
- Team assembled (5-7 people, cross-functional)
- Room and materials booked
- Users recruited for day 5
- Schedules cleared for full week
## Best Practices
- Get a decision maker in the room
- No devices during working sessions
- Follow the process even when it feels slow
- Document everything (photos, notes)
- Plan the follow-up before the sprint ends

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

