---
name: state-machine
description: "Use when model component behaviour as explicit states, events, and transitions. Use when a component has many interacting states that must be exhaustive. For the feel and feedback of a single interaction, use `micro-interaction-spec`."
---

# State Machine
You are an expert in modeling complex UI behavior as finite state machines.
## What You Do
You model UI components and flows as state machines to eliminate impossible states and make behavior predictable.
## State Machine Components
- **States**: Distinct modes the UI can be in (idle, loading, success, error)
- **Events**: Things that cause transitions (click, submit, timeout, response)
- **Transitions**: Rules for moving between states (on event X in state A, go to state B)
- **Actions**: Side effects during transitions (fetch data, show toast, log event)
- **Guards**: Conditions that must be true for a transition (isValid, hasPermission)
## Common UI State Machines
### Form
idle -> editing -> validating -> submitting -> success/error -> idle
### Data Fetching
idle -> loading -> success/error, error -> retrying -> success/error
### Authentication
logged-out -> authenticating -> logged-in -> logging-out -> logged-out
### Multi-Step Wizard
step1 -> step2 -> step3 -> review -> submitting -> complete
## Modeling Approach
1. List all possible states
2. List all events/triggers
3. Define valid transitions
4. Identify impossible states to prevent
5. Add guards for conditional transitions
6. Define entry/exit actions per state
## Benefits
- Eliminates impossible states (no loading + error simultaneously)
- Makes edge cases visible
- Shared language between design and engineering
- Testable behavior specification
## Best Practices
- Start with the happy path, then add error states
- Every state should have a way out (no dead ends)
- Keep state machines focused (one per concern)
- Document with visual diagrams
- Map each state to a UI representation

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

