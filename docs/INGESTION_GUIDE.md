# Antigravity Design OS: Repository Ingestion & Extensibility Guide

This guide explains how to autonomously import, sanitize, adapt, and install new skills, component kits, and WebGL shaders from any GitHub repository into the **Antigravity Design OS**.

---

## 1. Quick Ingestion Methods

### Method A: Natural Language via Antigravity Chat (Recommended)
Paste any GitHub repository link and tell the agent:
> *"Ingest this repo into my Design OS: `https://github.com/owner/repo-name`"*

Antigravity will automatically invoke the [`ingest-design-skills`](file:///d:/Design-OS/.agents/skills/ingest-design-skills/SKILL.md) skill and execute the 6-phase pipeline autonomously.

### Method B: Terminal CLI Command
From the root of the workspace, run:
```bash
node scripts/ingest-skills.mjs <github-repo-url>
```
*Example:*
```bash
node scripts/ingest-skills.mjs https://github.com/ibelick/ui
```

---

## 2. The 6-Phase Ingestion Pipeline

```
GitHub Repository
       │
       ▼
[Phase 1: Isolated Clone & Scan] ──────► Clones repo to scratch/, scans SKILL.md, TSX, CSS, Shaders
       │
       ▼
[Phase 2: Architectural Audit] ────────► Assigns Tier (Tier 1: Core, Tier 2: Mood/FX, Tier 3: Workflows)
       │
       ▼
[Phase 3: Antigravity Sanitization] ───► Cleans macOS paths, removes Fable 5, formats 'Use when...' YAML
       │
       ▼
[Phase 4: Gemini & Stack Calibration] ─► Generates 7-layer Gemini contracts + React/Next.js/Vite recipes
       │
       ▼
[Phase 5: Lockfile & Catalog Sync] ────► Updates skills-lock.json & rebuilds README.md
       │
       ▼
[Phase 6: Validation & Demo Test] ─────► Runs validate-skills.mjs & serves live demo on port 4173
```

---

## 3. Creating a Custom Skill from Scratch

If you design a custom UI component or interaction in your project and want to save it as a permanent skill:

1. Create a folder in `.agents/skills/<skill-name>/`.
2. Add `SKILL.md` with explicit YAML frontmatter:
   ```yaml
   ---
   name: your-skill-name
   description: "Use when [clear description of the visual/interaction goal and tech stack]."
   ---

   # Skill Title

   ## Use When
   - Specific triggering scenarios...

   ## Tokens & System Contract
   - Color variables, easing curves, spacing...

   ## React / Next.js Implementation
   ...

   ## Vite / Vanilla Implementation
   ...
   ```
3. (Optional) Add `demo/index.html` and `demo/PROMPT.md`.
4. Run the sync command:
   ```bash
   node scripts/sync-skills-catalog.mjs
   ```
5. Run the validation linter:
   ```bash
   node scripts/validate-skills.mjs
   ```
