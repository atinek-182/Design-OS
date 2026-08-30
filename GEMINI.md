# Antigravity Design OS: Master Guidelines & System Contract

You are inside the **Antigravity Design OS** — a universal, high-end design engineering repository containing a curated library of **131+ skills**, interactive demos, hardened deterministic Python math utilities, and prompt-generation engines calibrated for **Gemini 3.7 Flash (High)**.

---

## 1. Core Operating Philosophy

1. **Rich Aesthetics & Zero Slop by Default**: Never build generic, plain, or corporate-slop interfaces. Every web page must feel custom-crafted, memorable, and visually stunning at first glance (Awwwards level).
2. **Deterministic Token & Contrast Flooring**: Always verify color combinations against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using mathematical contrast matrices (`python scripts/design_os.py contrast` or `palette`).
3. **Macrostructure Rotation (Anti-Monoculture)**: Never repeat the generic "Hero $\rightarrow$ 3 Cards $\rightarrow$ CTA" skeleton. Rotate across 7 distinct macrostructures recorded in `.tastemaker/log.json`.
4. **Persistent Style-Lock Contracts**: Before building across sessions, scan for or establish `.tastemaker/style-lock.md` to lock tokens, typography, and assets.
5. **Zero-Placeholder Smart Asset Pipeline**: Never emit broken placeholder URLs or "Lorem ipsum". Use keyless Openverse CC0 photography (`python scripts/design_os.py photos`), Iconify SVG vectors (`python scripts/design_os.py icons`), and Antigravity `generate_image`.
6. **Multi-Stack Native Execution**:
   - **React / Next.js (App Router)**: SSR-safe client components (`'use client'`), `useGSAP` / `useEffect` lifecycle cleanups (`ctx.revert()`), and Tailwind v3/v4 utilities.
   - **Vite (Vanilla/React)**: High-performance ESM imports, clean semantic HTML5, and mathematical CSS easing variables.
7. **Absolute Zero-Emoji Mandate**: NEVER EVER use emojis anywhere across chat responses, source code, comments, documentation, specs, terminal output, or git commit messages. Use clean, deterministic ASCII text markers (`[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`).
8. **Mandatory VibeSec Pre-flight**: At the start of every work session or chat, execute the `vibesec` cybersecurity protocol to ensure zero secret leaks, strict CSP enforcement, dependency hygiene, and SVG asset sanitization before writing any code.
9. **Deterministic Windows PowerShell Execution**: When running commands in Windows PowerShell, never chain commands with `&&` (which causes syntax errors in Windows PowerShell 5.1). Use `;` as the statement separator or run commands sequentially via deterministic Python utilities.
10. **Deterministic Tool & Inspection Hygiene**: Never call `view_file` on speculative build or configuration files (`tsconfig.json`, `package.json`, `vite-env.d.ts`, `main.tsx`) without first verifying directory contents via `list_dir`. In subprojects under `projects/*/*`, remember dependencies and build scripts reside at workspace root `d:/Design-OS/package.json` unless locally scaffolded. For multi-step Python tasks in PowerShell, run dedicated `.py` files instead of complex nested-quote one-liners.
11. **Vite Subproject & Windows NTFS Junctions**: For projects created in `projects/*/*`, always normalize Vite `root` using `fs.realpathSync(process.cwd())` in `vite.config.ts`, alias all 4 React entrypoints (`react`, `react-dom`, `react/jsx-runtime`, `react/jsx-dev-runtime`), and exclude pure ESM libraries like `lucide-react` from `optimizeDeps` to prevent duplicate React dispatchers and synthetic CJS default export errors.
12. **React DOM Reconciliation with GSAP & ScrollTrigger**: Never mutate `element.textContent = ''` directly in text splitting effects. Use React-native masked spans (`HEADLINE_WORDS.map(...)`) so React retains DOM reconciliation ownership. For GSAP pinned ScrollTrigger sections, pin an inner wrapper ref (`pinTargetRef.current`) inside the container `<section>` to prevent GSAP's `.pin-spacer` from interfering with React unmounting (`NotFoundError: Failed to execute 'removeChild' on 'Node'`).

---

## 2. The Universal 12-Stage / 48-Phase Design Engineering Pipeline

When designing or building any interface, execute through the 12-stage sequential, non-conflicting lifecycle (see [`docs/workflows/MASTER_WORKFLOW_ENGINE.md`](docs/workflows/MASTER_WORKFLOW_ENGINE.md)):

```
[Phase I: Strategic Discovery & Creative Inception]
  ├── Stage 1: Socratic Problem Framing, UX Strategy & Stack Inception (Phases 1.1–1.4)
  ├── Stage 2: Multi-Modal Reference Ingestion, Awwwards Vault & Mood Lock (Phases 2.1–2.3)
  └── Stage 3: Information Architecture, Content Strategy & User Flows (Phases 3.1–3.4)

[Phase II: Mathematical Tokens, Spatial Grids & Surface Craft]
  ├── Stage 4: Mathematical Token Generation & Contrast Flooring (Phases 4.1–4.4)
  ├── Stage 5: Macrostructure Rotation, Section Rhythm & Obys Grid (Phases 5.1–5.4)
  └── Stage 6: Surface Aesthetics, Materiality & Atmospheric Shaders (Phases 6.1–6.3)

[Phase III: Component Engineering, Kinetic Physics & Asset Pipeline]
  ├── Stage 7: Component Engineering, Form UX & State Machines (Phases 7.1–7.4)
  ├── Stage 8: Motion Choreography, Kinetic Physics & WebGL FX (Phases 8.1–8.4)
  └── Stage 9: Deterministic Asset Binding & Media Pipeline (Phases 9.1–9.3)

[Phase IV: Quality Hardening, Multi-Engine Audits & Handoff]
  ├── Stage 10: Edge-Case Stress Testing & Platform Adaptation (Phases 10.1–10.3)
  ├── Stage 11: Multi-Engine Quality Gates: Visual QA, VibeSec & SEO/GEO (Phases 11.1–11.5)
  └── Stage 12: Design Operations, Governance & Business Value Handoff (Phases 12.1–12.4)
```

### 3 Dedicated Execution Tracks
- **`--mode awwwards`**: Fast-track for creative digital flagships (Obys 140px spatial rhythm, Lenis scroll, Radiant WebGL shaders, 24-repo vault sourcing).
- **`--mode product`**: Full 12-stage enterprise product & design system lifecycle.
- **`--mode component`**: Micro-sprint for single-component crafting and visual QA.

---

## 3. The 8-File Design Context Foundation & Multi-Session Resume

To guarantee zero context loss across chat sessions:
1. `context/1-brand-and-vision.md`: Purpose, audience, 3 creative pillars, and target tech stack.
2. `context/2-design-tokens.json`: OKLCH color palette, contrast ratios, and typography scale.
3. `context/3-ui-manifest.md`: Component specifications, state matrix, and Keep-vs-Discard decisions.
4. `context/4-motion-choreography.md`: GSAP timelines, ScrollTrigger parameters, and cubic-bezier easings.
5. `context/5-code-standards.md`: Stack-specific AST rules, compilation safeguards, and VibeSec security gates.
6. `context/6-progress-tracker.md`: Active stage & sub-phase tracker, DoD sign-offs, and multi-session resume anchor.
7. `context/7-seo-and-a11y.md`: Heading hierarchy, GEO AI citation index, ARIA roles, focus ring tokens, and metadata.
8. `reference/MANIFEST.md`: Reference deconstruction, Awwwards vault assets, and Keep-vs-Discard decisions.
9. `docs/wayfinder/design-map.md`: Cross-session navigational road map and mermaid state diagram.

*In any fresh session, immediately invoke `/design-os resume` or `npm run design:resume` to restore 100% accurate project state.*

---

## 4. Tooling & Automation Scripts

Run these scripts whenever updating skills, testing palettes, or auditing code:

```bash
# Start Interactive Studio Dashboard (Gallery, Benchmark Lab, Contrast Matrix) on Port 4173
npm start
# or: node scripts/serve-demos.mjs

# Run full multi-engine Design OS quality audit (Skills, Linters, Contrast Math)
npm run audit:full
# or: node scripts/audit-design-os.mjs

# Run AST Anti-Slop scan against any HTML, CSS, or JS/TS file
npm run lint:slop [paths...]
# or: python scripts/design_os.py scan

# Run procedural palette generator with WCAG 2.2 AA contrast matrix
npm run palette:generate -- --mood technical --mode dark
# or: python scripts/design_os.py palette --mood technical --mode dark

# Check arbitrary color contrast ratios
npm run check:contrast -- text=#ffffff bg=#090d16 primary=#3b82f6
# or: python scripts/design_os.py contrast text=#ffffff bg=#090d16

# Synchronize catalog, update skills-lock.json, and regenerate README.md
npm run sync:catalog

# Validate YAML frontmatters and progressive disclosure triggers
npm run validate
```

---

## 5. Deep Documentation Index

For complete system documentation, refer to the guides in `docs/`:
- **Master Workflow Engine (12 Stages / 48 Phases)**: [`docs/workflows/MASTER_WORKFLOW_ENGINE.md`](file:///d:/Design-OS/docs/workflows/MASTER_WORKFLOW_ENGINE.md)
- **System Architecture**: [`docs/ARCHITECTURE.md`](file:///d:/Design-OS/docs/ARCHITECTURE.md)
- **Skills Catalog Index (122+ Skills)**: [`docs/SKILLS_INDEX.md`](file:///d:/Design-OS/docs/SKILLS_INDEX.md)
- **Tastemaker Research Papers**: [`docs/research/tastemaker/`](file:///d:/Design-OS/docs/research/tastemaker)
- **Anti-Slop Benchmark Showcase**: [`docs/showcase/tastemaker/`](file:///d:/Design-OS/docs/showcase/tastemaker)
- **Gemini 3.7 Flash Prompting Guide**: [`docs/GEMINI_37_FLASH_PROMPTING.md`](file:///d:/Design-OS/docs/GEMINI_37_FLASH_PROMPTING.md)
- **Repo Ingestion & Extensibility**: [`docs/INGESTION_GUIDE.md`](file:///d:/Design-OS/docs/INGESTION_GUIDE.md)
- **Demos & Script Tooling**: [`docs/DEMOS_AND_TOOLING.md`](file:///d:/Design-OS/docs/DEMOS_AND_TOOLING.md)

---

## 6. Project Creation & Folder Routing Rules

Whenever instructed to create or scaffold a new website, web app, landing page, UI prototype, or project:
1. **Mandatory Destination**: Always create it inside the [`projects/`](file:///d:/Design-OS/projects) directory (junction link to `D:\projects\`), never in the root `Design-OS` directory.
2. **Category Routing**:
   - **`projects/Websites/<project-name>`**: Websites, marketing pages, landing pages, client projects, portfolios.
   - **`projects/Products/<project-name>`**: Full web applications, SaaS tools, platforms, dashboards.
   - **`projects/Sandbox/<project-name>`**: Experimental mockups, rapid visual spikes, temporary sandboxes.
   - **`projects/For design/<project-name>`**: UI component systems, design tool experiments, design kits.
   - **`projects/For AIOS/<project-name>`**: AI OS integrations, subagent frameworks, and AI workflows.
   - **`projects/Learning/<project-name>`**: Tutorials, learning exercises, and educational builds.
   - **`projects/Zorixel brand/<project-name>`**: Zorixel-branded digital properties and assets.
   - **`projects/My advisors/<project-name>`**: Advisory and client consultancy projects.

