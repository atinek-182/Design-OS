# Zorixel Brand Website - AI Agent Instructions

> **CRITICAL MANDATE FOR ALL AI SESSIONS:**
> Before writing any code, modifying files, or taking actions, you MUST read all context files in `context/` and check `reference/MANIFEST.md`.

## Mandatory Reading Order
1. `context/project-overview.md` - Core intent, scope, user journey, and success criteria.
2. `context/architecture.md` - Tech stack, folder boundaries, and system invariants.
3. `context/code-standards.md` - TypeScript, Next.js App Router, Zod, and security rules (VibeSec/OWASP).
4. `context/ui-context.md` - OKLCH color tokens, Havock/Rosehot typography, component sourcing priority chain.
5. `context/ai-workflow-rules.md` - Execution rules, single-spec boundary enforcement, zero speculative changes.
6. `context/progress-tracker.md` - Living log of phase progress, open questions, and active tickets.
7. `context/seo-context.md` - Technical SEO, GEO AI search citations, and JSON-LD schema markup.
8. `reference/MANIFEST.md` - Visual source of truth and reference asset deconstruction rules.

## Core Project Invariants
- **Strict Pre-Coding Lock (1 to 2 Weeks):** ABSOLUTELY ZERO code writing, file modifications, or code generation until Atinek Maurya explicitly gives the command to start coding by himself.
- **Zero Rush & Zero Prompting to Move Forward:** Do NOT rush planning. NEVER suggest moving forward to code, never prompt the user to start writing code, and never ask "Should we start coding?".
- **Strict Zero-Gradient Ban:** NEVER use gradients (color gradients, radial gradients, mesh gradients, text clip gradients, or soft blurred color glows) anywhere throughout the website, styling, assets, or docs.
- **Strict Zero-Glassmorphism Ban:** NEVER use glassmorphism, backdrop blurs (`backdrop-filter: blur()`), semi-transparent glass cards, or glass borders anywhere throughout the website.
- **Trash Asset Ban (`favicon.svg` & `public/previews/`):** `favicon.svg` and all SVG graphics under `public/previews/` are discarded as AI-slop. Never use them, reference them, or generate similar assets.
- **User Design Reference Mandate:** Strictly await and build according to the exact design reference provided directly by Atinek Maurya. Do NOT improvise layouts or styles outside his reference.
- **Zero-Emoji Mandate:** No emojis anywhere in code, markdown, comments, commit messages, or UI output.
- **Token Theme Discipline:** Never use inline hex colors or un-tokenized font stacks. Use CSS tokens defined in `ui-context.md`.
- **Surgical Code Edits:** When coding is authorized in the future, touch only what is requested in the active ticket/spec. Never refactor surrounding untouched code.
- **Verification Gate:** No task is complete without automated verification (Playwright 5-viewport visual QA and zero-error builds).
- **7-Agent STORM Project Research Mandate:** Always use `/storm-research-project` (`d:\AI-OS\.agents\skills\storm-research-project`) with the 7-agent suite (Systems Architect, Vibesec Pen-Tester, DB/Scaling Specialist, Frontend UX Lead, Product Economist, AI/LLM Specialist, Developer Ergonomics Auditor) for all project research. Do not use the 5-agent version in project codebases.
- **Mandatory Humanizer Writing Discipline:** Strictly apply `humanizer` (33 AI pattern cleanup rules) to ALL text, chat replies, headlines, copy drafts, messages, email auto-responders, docs, and artifacts across the AIOS and website project. Eliminate em dashes (`—` / `–`), inflated symbolism (*'testament/tapestry/fostering'*), promotional puffery, rule of three overuse, sycophancy, meta signposting (*'Let's dive in'*), and tailing negations. Use sentence case for headings and straight quotes (`"..."`).


