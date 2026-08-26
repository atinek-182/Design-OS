# Antigravity Design OS: Demos, Scripts & Tooling Guide

The **Antigravity Design OS** includes a built-in suite of zero-dependency Node.js and Python automation scripts for inspecting demos, managing skills, executing mathematical contrast checks, and auditing code for AI-slop patterns.

---

## 1. Interactive Design Studio & Control Center (`scripts/serve-demos.mjs` / `npm start`)

Launch the local studio dashboard on port 4173 to browse interactive demos, prompt cards, and live visual benchmarks:

```bash
npm start
# or: node scripts/serve-demos.mjs
```

### Features:
- **Port:** `http://localhost:4173` (configurable via `PORT`).
- **Interactive Studio Dashboard:** Dark-mode control center hosting all 51 installed skills with live search, tags, and category filtering.
- **⚡ Anti-Slop Benchmark Lab:** Direct side-by-side interactive comparison sliders (`/showcase/tastemaker/compare.html`) contrasting generic AI output with artisan craft.
- **Live Demo Previews:** Direct sandbox execution of WebGL shaders, Three.js scenes, GSAP animations, Tastemaker contrast calculators, and CSS layouts.
- **1-Click Superprompts:** Instant clipboard copy of 7-layer Gemini 3.7 Flash technical prompts for every skill.

---

## 2. Tastemaker Deterministic Tooling Suite (`scripts/tastemaker/run.py`)

A local suite of 13 deterministic Python utilities executing color math, contrast calculations, and AST linter checks:

```bash
# Run AST Anti-Slop linter against HTML, CSS, or JS/TS files
npm run lint:slop <path/to/file.html>

# Run procedural palette generator with WCAG 2.2 AA contrast matrix
npm run palette:generate -- --mood technical --mode dark

# Check arbitrary color contrast ratios against WCAG 2.2 AA standards
npm run check:contrast -- text=#ffffff bg=#090d16 primary=#3b82f6

# Fetch keyless, zero-attribution CC0 photography from Openverse
npm run photos:fetch -- "modern workspace architecture" --out design/assets/photos

# Fetch SVG vector icons from Iconify
npm run icons:fetch -- "lucide:sparkles" --out design/assets/icons
```

---

## 3. Multi-Engine Full Quality Auditor (`scripts/audit-design-os.mjs` / `npm run audit:full`)

Run the comprehensive 4-pass verification suite to audit the entire Design OS:

```bash
npm run audit:full
# or: node scripts/audit-design-os.mjs
```

### What it verifies:
1. **Skill Frontmatters & Progressive Disclosure**: Validates all 51 skills in `.agents/skills/`.
2. **Deterministic Python Suite**: Verifies all 14 Tastemaker scripts and dependencies.
3. **Palette & Contrast Engines**: Executes live WCAG 2.2 AA math calculations with 100% precision.
4. **Research & Showcase Assets**: Verifies 5 research studies and 12 comparison showcase assets.

---

## 4. Catalog & Lockfile Synchronizer (`scripts/sync-skills-catalog.mjs` / `npm run sync:catalog`)

Run this script whenever you add, remove, or modify skills in `.agents/skills/`:

```bash
npm run sync:catalog
# or: node scripts/sync-skills-catalog.mjs
```

### What it does:
1. Scans all directories in `.agents/skills/`.
2. Extracts names, descriptions, and demo availability from each `SKILL.md`.
3. Categorizes skills by tier (Tier 1, Tier 2, Tier 3, Tier 4 Anti-Slop, Apple/Emil Foundation).
4. Updates `skills-lock.json` with installation timestamps and source hashes.
5. Rebuilds the root `README.md` catalog automatically.

---

## 5. Autonomous Repo Ingestion CLI (`scripts/ingest-skills.mjs`)

Directly ingest an external GitHub repository containing skills, UI components, or design templates:

```bash
node scripts/ingest-skills.mjs <github-repo-url>
```
