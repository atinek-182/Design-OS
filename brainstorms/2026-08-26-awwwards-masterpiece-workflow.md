# Awwwards Masterpiece Multi-Session Workflow: Brainstorm & Strategy Notes
Date: 2026-08-26 · Goal: Create a deterministic, phase-by-phase execution guide and interactive setup to build Awwwards-tier websites without context loss across chats or collapsing into AI slop.

## Summary / Key Decisions
- **Problem Diagnosed**: High-level prompts ("build a website") cause LLMs to rush, dump generic boilerplate (Tailwind defaults, fake stock photos, standard hero-card-cta), and ignore installed skills.
- **Granular Execution Mandate**: Approved a **20–24 Chat Granular Architecture**, giving each sub-phase and its designated skills dedicated space, full context window depth, and zero cognitive rush.
- **Skill Name Locked**: `flagship-project-init`.
- **Prompt Structure Locked**: 24 flat numbered files (`prompts/chat-01.md` to `prompts/chat-24.md`) with wave grouping metadata in headers.
- **Zero Command Memorization Mandate**: The workspace self-bootstraps via a single entry point: `RESUME.md` and project `GEMINI.md` auto-discovery.
- **Hard Gatekeeper Block**: If un-cited rules or out-of-bounds writes are detected, `phase_gate.py` issues a hard block.
- **Structured Socratic Pacing**: 2–3 questions per turn with concept explanations and expert recommendations.
- **Local Asset Caching**: 100% local caching in `src/assets/` with automated SVG sanitization.
- **Retrograde Pivot Engine**: Safe, cascading invalidation when later chats (e.g. Chat 15) revise earlier decisions (e.g. Chat 2).
- **Multi-Modal Reference Ingestion Sensor**: Automatic routing of video, image, or URL references to `video-to-superprompt`, `explain-interface`, or `html-to-interaction-prompts`.
- **Creative Extremism Safety Net**: Allowing bold art-directed scale choices (e.g. 100px text) while enforcing responsive clamps and contrast floors.
- **Ambient Umbrella Skills**: Persistent skills spanning 5–10 chats locked into `context/5-code-standards.md`.
- **Continuous Wave Scoring**: Quality gate audits at each wave boundary using `interface-review` and `better-interface`.

## Q&A Log
### Q1 — Granular Session Architecture & Blast Radius
- **User Directive**: Discard 5-chat model. Use at least 20+ chats across stages and phases. Require a detailed master checklist where each chat only completes its designated part, never touches the next area, and never checks future items.
- **Captured**: Designed a 24-Chat Granular Roadmap mapping 1-to-1 with the core sub-phases of the 12-Stage Pipeline. Implemented strict blast-radius prompt guards and an exhaustive 48-item Definition-of-Done (DoD) checklist in `context/6-progress-tracker.md`.

### Q2 — Master Skill Architecture & Pre-Write `/roast` Council
- **User Directive**: Create a master skill that handles initial project setup inside `projects/<category>/<name>`, includes project-level `GEMINI.md`, an editable library of all 24+ chat prompts and instructions, workflow scripts, and strict tracking. Do not create the skill yet—first plan everything and run `/roast`.

### Q3 — Skill Naming & Directory Layout
- **User Directive**: Skill name: `flagship-project-init`. Prompt structure: 24 flat numbered files (`prompts/chat-01.md` to `prompts/chat-24.md`).

### Q4 — Interactive Inception & Intra-Phase Deep Socratic Planning
- **User Directive**: Interactive Socratic Q&A for inception (Option A for 1). Prompt to select category folder (Option B for 2). Eliminate need to remember commands. Mandate `/grill-me` (5–10 questions) and `/roast` inside every single chat prompt. User is comfortable with 2 hours of deep planning per phase. Audit workflows, checklist, security, and structure with a 7-persona council.

### Q5 — Pacing, Local Assets, Skill Rigor, Conflicts & Dynamic Routing
- **User Directive**: Batch socratic questions in groups of 2–3 (Option A for 1). Fully automate local asset caching in `src/assets/` (Option A for 2). Investigate: (1) How rigorously skills are used; (2) What happens when conflicts occur; (3) How the agent and skill decide which skill to run and when. Run `/roast` to find the permanent solutions.

### Q6 — Mid-Flight Pivots, Reference Sensors, Creative Extremism & Umbrella Skills
- **User Directive**: Hard block for gatekeeper; 2–3 questions per turn. Resolve: (1) Mid-stream direction reversals (Chat 15 changing Chat 2); (2) Multi-modal reference ingestion (videos, images, URLs); (3) Creative rule-breaking (100px text vs 20px skill default); (4) Multi-chat umbrella skills spanning 5–10 chats; (5) Continuous cross-cutting scoring skills.
- **Captured**: Round 5 7-Persona Audit initiated to architect the Retrograde Pivot Engine, Multi-Modal Sensor Hook, Creative Safety Net, Ambient Umbrella Contracts, and Wave Scoring Gates.
- **Status**: Executing Round 5 Roast & Architecture Lock.

## Open Flags (Pending Input)
- Target website brand/domain for the upcoming build -> User
- Preferred aesthetic mood and visual archetype -> User
- Stack invariant (Vite React/TS vs. Next.js App Router) -> User
