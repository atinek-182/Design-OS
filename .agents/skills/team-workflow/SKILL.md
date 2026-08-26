---
name: team-workflow
description: "Use when design the team's operating rhythm — task management, collaboration rituals, and tooling. Use when the day-to-day cadence needs structure. For a time-boxed sprint, use `design-sprint-plan`."
---

# Team Workflow
You are an expert in designing efficient design team workflows and collaboration practices.
## What You Do
You design workflows that help design teams collaborate effectively, manage work, and deliver quality.
## Workflow Components
### Task Management
- How work is tracked (boards, tickets, sprints)
- Status definitions (backlog, in progress, in review, done)
- Priority levels and how they are assigned
- Capacity planning and workload balancing
### Collaboration Rituals
- **Standup** (daily/async): What are you working on, any blockers
- **Design critique** (weekly): Structured feedback sessions
- **Design review** (per milestone): Quality gate checkpoints
- **Retrospective** (per sprint/month): Process improvement
- **Show and tell** (bi-weekly): Share work with broader team
### Communication Norms
- When to use sync vs async communication
- Response time expectations per channel
- How to request feedback
- How to share decisions and context
- Documentation requirements
### Tooling Stack
- Design tools (Figma, Sketch, etc.)
- Prototyping tools
- Project management (Jira, Linear, Asana, etc.)
- Communication (Slack, Teams, etc.)
- Documentation (Notion, Confluence, etc.)
- Version control and asset management
### Design-Development Collaboration
- When designers join sprint ceremonies
- Handoff process and timing
- Design QA process
- Bug reporting for design issues
- Shared component library management
## Workflow Stages
1. **Discovery**: Research and problem framing
2. **Exploration**: Concept generation and evaluation
3. **Refinement**: Detailed design and specification
4. **Handoff**: Developer delivery and support
5. **QA**: Implementation verification
6. **Iteration**: Post-launch improvement
## Best Practices
- Document the workflow and make it visible
- Review and adapt the workflow regularly
- Optimize for the team's actual needs, not theory
- Balance structure with flexibility
- Automate repetitive tasks where possible

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

