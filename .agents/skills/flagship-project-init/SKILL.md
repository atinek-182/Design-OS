---
name: flagship-project-init
description: Master entrypoint skill for scaffolding and orchestrating Awwwards-tier digital flagships and websites in Antigravity Design OS. Establishes the 8-file context foundation, project-specific GEMINI.md contract, single-anchor RESUME.md, live DESIGN_MAP.mermaid, and an editable 24-chat prompt library with strict blast-radius isolation, intra-phase /grill-me and /roast loops, mandatory vibesec pre-flights, zero emojis, and zero command memorization. Use whenever starting a new website, landing page, portfolio, or web application, or when the user says "create a website", "build a flagship site", or "/flagship-project-init".
argument-hint: "[optional: --name <project-slug> --category <category> --stack <stack> --vibe <vibe>]"
---

# Flagship Project Init (`flagship-project-init`)

> **The Master Scaffolding Engine for Building Awwwards-Tier Masterpiece Websites across 24 Atomic Chat Sessions with Zero Slop, Zero Emojis, Zero Security Vulnerabilities, Zero Context Loss, and Zero Command Memorization.**

---

## Core Philosophy: Why This Skill Exists

Traditional AI coding assistants fail on complex websites because:
1. **The Single-Prompt Slop Trap**: Asking an AI to "build a site" in one turn causes it to rush, fall back on generic Tailwind defaults (`bg-gray-900`, purple gradients), standard hero-card layouts, and fake placeholders.
2. **Context Bloat & Amnesia**: Trying to do 12 stages in one chat burns context window memory and causes the AI to ignore its 133+ specialized skills.
3. **Command Memorization Tax**: Developers forget arbitrary terminal commands (`npm run design:next`), causing projects to stall.
4. **Security & Slop Neglect**: Without mandatory security pre-flights, AI code introduces DOM XSS in SVG vector assets, insecure shader inputs, and unvetted CDN dependencies.

**The Solution**: `flagship-project-init` bootstraps a hardened, file-anchored workspace where:
- **Each phase runs in its own dedicated chat session** (24 Atomic Chats across 7 Waves).
- **Mandatory VibeSec Pre-flight**: Every chat starts with a cybersecurity check (`vibesec`) before touching code.
- **Absolute Zero-Emoji Mandate**: Emojis are strictly banned from chat responses, code, comments, documentation, and commit messages.
- **Every chat starts with an interactive Socratic discovery interview** (`/grill-me` with 2-3 questions per turn) and a pre-write adversarial audit (`/roast`), allowing up to 2 hours of planning before writing a single line of code.
- **The system self-bootstraps via `RESUME.md`**: The user never has to memorize terminal commands. Simply prompting `Resume from RESUME.md` automatically restores 100% project state.
- **Hard Blast-Radius Gates**: An automated gatekeeper (`phase_gate.py`) blocks edits outside `ALLOWED_WRITE_PATHS` and verifies that every skill cited contains mathematical formulas and AST rule receipts.

---

## Step 1: Interactive Socratic Inception

When this skill is invoked, conduct the interactive inception interview **in structured batches of 2 questions**:

### Turn 1: Project Identity & Category Routing
1. **Project Name & Brand Mission**: What is the name and primary mission of the website? (Derive the project slug, e.g. `lumina-ai`).
2. **Workspace Category Selection**: Adhering to Design OS folder routing, select the target folder inside `projects/`:
   - `Websites/` (Websites, landing pages, marketing pages, portfolios) *(Standard)*
   - `Products/` (Full web applications, SaaS tools, platforms, dashboards)
   - `Sandbox/` (Experimental prototypes, rapid visual spikes)
   - `For design/` (UI component systems, design kits)
   - `Zorixel brand/` (Zorixel-branded digital properties)

### Turn 2: Technical Stack & Aesthetic Direction
3. **Target Technology Stack**:
   - (A) **Vite React (TypeScript)**: Ultra-fast ESM, lightweight canvas, optimal for creative scrollytelling. *(Recommended)*
   - (B) **Next.js (App Router)**: SSR-safe client components, server metadata, dynamic routing.
   - (C) **HTML5 + Vanilla CSS**: Zero dependency, mathematical CSS variables, pure web standards.
4. **Aesthetic Archetype (Select dynamically per project)**:
   - (A) **Dark Mesh Gradient & Planetary Depth** (`mesh-gradient-dark-blue-clean`)
   - (B) **Editorial Magazine & Product-Tech Detailing** (`editorial-tech`)
   - (C) **Clean Minimal Beige & Warm Neutral Light Mode** (`clean-minimal-beige-light-mode`)
   - (D) **High-Contrast Skeuomorphic & Paper Tactile** (`high-contrast-skeuomorphic-clean`)
   - (E) **Dark Glassmorphism & Frosted Glow Borders** (`glass-dark-ui`)

---

## Step 2: Deterministic Workspace Scaffolding

Once the 4 inception answers are locked, execute the deterministic scaffolding CLI:

```powershell
python d:/Design-OS/.agents/skills/flagship-project-init/scripts/init_project.py --name "<project-slug>" --category "<category>" --stack "<stack>" --vibe "<vibe>"
```

### What Is Generated in `projects/<category>/<project-slug>/`:
```
projects/<category>/<project-slug>/
├── GEMINI.md                         # Subfolder Precedence Contract & 4-Tier Constitution
├── RESUME.md                         # Single-Anchor Self-Bootstrapping Resume File
├── NEXT_CHAT_PROMPT.md               # Hydrated Ready-to-Run Prompt for Chat 01
├── .design-lock.json                 # State Mutex & Active Phase Tracker
├── docs/
│   └── DESIGN_MAP.mermaid            # Live Visual 24-Phase Architecture Diagram
├── context/                          # The 8-File Design Context Foundation
│   ├── 1-brand-and-vision.md         # Purpose, Audience, 3 Creative Pillars
│   ├── 2-design-tokens.json          # OKLCH Palette, Contrast Matrix, Fluid Typography
│   ├── 3-ui-manifest.md              # Sections, Component Inventory, State Machine
│   ├── 4-motion-choreography.md      # Lenis Parameters, GSAP Timelines, Spring Physics
│   ├── 5-code-standards.md           # Stack AST Rules, Ambient Umbrella Skills, VibeSec
│   ├── 6-progress-tracker.md         # 24-Phase Checklist with DoD & Wave Anchors
│   └── 7-seo-and-a11y.md             # Schema.org JSON-LD, ARIA Map, Contrast Floors
├── prompts/                          # 24 Editable Flat Numbered Prompt Templates
│   ├── chat-01.md to chat-24.md      # Full, non-summarized templates with Socratic loops
├── scripts/
│   ├── phase_gate.py                 # Hard-block git diff whitelist & skill-citation enforcer
│   ├── hydrate_prompt.py             # JIT template hydrator compiling NEXT_CHAT_PROMPT.md
│   └── sanitize_svg.py               # Deterministic SVG security sanitizer
├── specs/                            # Intermediate Phase Specs & Formula Receipts
└── audits/
    └── visual-qa/                    # 5-Viewport Playwright Screenshot Receipts
```

---

## Step 3: The 24-Chat Execution Protocol

To build the website, the user moves through **24 discrete chat sessions** across **7 Master Waves**:

```
[WAVE 1: Strategy]       Chat 01 (1.1) -> Chat 02 (1.2) -> Chat 03 (1.3) -> Chat 04 (1.4) -> [Wave 1 Gate]
                                  |
[WAVE 2: Mood Lock]      Chat 05 (2.1) -> Chat 06 (2.3) -> [Wave 2 Gate]
                                  |
[WAVE 3: Architecture]   Chat 07 (3.1) -> Chat 08 (3.4) -> [Wave 3 Gate]
                                  |
[WAVE 4: Tokens]         Chat 09 (4.1) -> Chat 10 (4.3) -> [Wave 4 Gate]
                                  |
[WAVE 5: Surfaces]       Chat 11 (5.1) -> Chat 12 (5.4) -> Chat 13 (6.1) -> Chat 14 (6.3) -> [Wave 5 Gate]
                                  |
[WAVE 6: Motion/Assets]  Chat 15 (7.1) -> Chat 16 (7.3) -> Chat 17 (8.1) -> Chat 18 (8.3) -> Chat 19 (8.4) -> Chat 20 (9.1) -> [Wave 6 Gate]
                                  |
[WAVE 7: Hardening/QA]   Chat 21 (10.1) -> Chat 22 (11.1) -> Chat 23 (11.3) -> Chat 24 (12.1) -> [PROJECT COMPLETE]
```

### Every Chat Follows the Standard 6-Step Lifecycle:
1. **Auto-Wake & Status Audit**: Reads `RESUME.md`, renders `docs/DESIGN_MAP.mermaid`, confirms active phase.
2. **Security Pre-Flight (VibeSec Protocol)**: Runs [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) audit checklist (zero secrets, CSP verification, dependency hygiene, SVG sanitization).
3. **Socratic Phase Interview (`/grill-me`)**: Asks 2-3 questions per turn (5-10 total) with concepts, options, and recommended answers.
4. **Pre-Write Adversarial Audit (`/roast`)**: 3-persona mini-audit stress-tests decisions and emits `specs/phase-[X.Y]-spec.md` with formula receipts.
5. **Gated Implementation**: Edits files strictly within `ALLOWED_WRITE_PATHS` and passes `python scripts/phase_gate.py`.
6. **Handoff & Resume Update**: Checks the DoD box, calls JIT hydrator (`hydrate_prompt.py`), updates `RESUME.md`, prints the next chat prompt, and stops.

---

## Non-Negotiable Invariants & Rules

1. **Absolute Zero-Emoji Mandate**: Emojis are strictly banned across all chat responses, code, comments, documentation, specs, terminal output, and git commits. Use clean text markers like `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`.
2. **Mandatory VibeSec Pre-Flight**: The agent must run the VibeSec cybersecurity audit at the start of every chat before modifying any files.
3. **Zero Command Memorization**: The user never needs to remember an npm script. Simply prompting `Resume project at projects/<category>/<name>` triggers automatic detection via `RESUME.md`.
4. **Hard Blast-Radius Gatekeeper**: Any tool call modifying files outside `ALLOWED_WRITE_PATHS` causes `phase_gate.py` to exit with code 1 and block progress.
5. **Formula & Citation Proof**: The agent must quote exact rule names and computed formulas in `specs/phase-[X.Y]-spec.md`. No performative compliance.
6. **Retrograde Pivot Engine**: If the user wants to change earlier decisions (e.g. Chat 15 changing Chat 2's mood), the agent re-runs `better-colors` palette math, updates `context/2-design-tokens.json`, and relies on CSS token indirection to shift the mood across all components with zero rewrite.
7. **Creative Safety Net**: Bold art direction (e.g. 100px headlines) is accommodated via fluid mathematical clamping (`clamp(3.5rem, 12vw, 8.5rem)`) and large-text contrast floors (3:1).
8. **Continuous Wave Quality Scorecard**: At each of the 7 wave boundaries, a quality audit runs via `better-interface`. The score must reach >= 85/100 before the wave gate can clear.
