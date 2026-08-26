---
name: ingest-design-skills
description: Use when autonomously ingest, audit, adapt, and install design skills, WebGL shaders, UI component libraries, deterministic Python math utilities, or research studies from any GitHub repository into the Antigravity Design OS. Use when the user provides a GitHub repo link, asks to 'ingest this design repo', 'import skills from github', 'adapt this UI library for Antigravity', or runs /ingest-design-skills.
---

# Ingest Design Skills Engine (`/ingest-design-skills`)

An autonomous, multi-artifact engine for turning any external GitHub repository (e.g. Tastemaker, DesignCode, Emil Kowalski, Cruip, Aceternity, Shadcn, Ibelick, or custom repos) into clean, production-grade **Antigravity skills** optimized for **Gemini 3.7 Flash (High)** and **React / Next.js / Vite**.

---

## ⚡ The Full-Spectrum 6-Phase Ingestion Workflow

```
GitHub Repo URL
      │
      ▼
1. Clone & Discovery ────► Sandbox clone & /grill-me discovery checkpointing
      │
      ▼
2. Multi-Artifact Scan ──► Scan Skills, Python/Node Utilities, Research, Showcase Sites
      │
      ▼
3. Adversarial /roast ───► 5-Persona Council Gate (Contrarian, Expansionist, Logician, Researcher, Buyer)
      │
      ▼
4. Sanitize & Calibrate ─► Antigravity path cleaning, Gemini 3.7 Flash 7-layer contract, UTF-8 safety
      │
      ▼
5. Multi-Artifact Deploy ─► Deploy skills, centralized scripts, docs/research, and docs/showcase
      │
      ▼
6. Sync & Quality Audit ─► Auto-scaffold, sync catalog & lockfile, run audit-design-os.mjs
```

---

## Step 1: Isolated Ingestion & Tree Mapping

1. **Create Isolated Scratch Directory**:
   ```bash
   git clone --depth 1 <repo_url> scratch/ingest-<repo-slug>
   ```
2. **Scan Multi-Artifact Ecosystem**:
   - **Skills**: Identify all `SKILL.md` files or sub-skill directories (`.agents/skills/` & global config).
   - **Deterministic Tooling**: Python scripts (`scripts/*.py`), Node utilities, AST linters, contrast calculators.
   - **Research Studies**: Research papers (`research/*.md`, `docs/research/`).
   - **Showcase / Comparison Sites**: Interactive before/after comparators (`site/*.html`, `demos/`).
   - **System Templates & Style Locks**: Style lock contracts (`.tastemaker/`, `.system/`).

---

## Step 2: Adversarial `/roast` Council Gate

Before writing code or finalizing ingestion, convene the 5-persona review council:
1. **Contrarian (Red Team)**: Attacks dependencies, token bloat, and rule overlap with existing skills.
2. **Expansionist (Bull)**: Uncovers 10x leverage, adjacent workflows, and prompt engineering value.
3. **Logician (First Principles)**: Verifies architectural simplicity and separation of concerns.
4. **Researcher (Evidence)**: Gathers web benchmarks and community feedback.
5. **Buyer (Lead Designer)**: Confirms speed of workflow and real daily usability.

---

## Step 3: Antigravity Sanitization & Progressive Disclosure

Every imported skill must be sanitized before writing to `.agents/skills/<skill-name>/`:

1. **Clean Platform Baggage**:
   - Remove hardcoded macOS paths (`/Users/...`) $\rightarrow$ replace with workspace-relative paths.
   - Replace Codex in-app browser references $\rightarrow$ Antigravity `browser_subagent` / Playwright.
   - Replace Claude/Cursor plugin mentions $\rightarrow$ Native Antigravity Design OS Skills.
   - Replace Fable 5 mentions $\rightarrow$ **Gemini 3.7 Flash (High)**.
2. **Enforce Progressive Disclosure Frontmatter**:
   - Format `SKILL.md` YAML frontmatter with an explicit, non-overlapping `Use when...` trigger.

---

## Step 4: Deterministic Tooling & Research Vault Deployment

1. **Centralized Script Deployment**:
   - Deploy Python/Node scripts to `scripts/<repo-name>/`.
   - Wrap scripts with UTF-8 encoding support for Windows consoles.
   - Auto-generate unified CLI helper `scripts/<repo-name>/run.py`.
2. **Research & Showcase Ingestion**:
   - Ingest research studies to `docs/research/<repo-name>/`.
   - Ingest interactive showcase sites to `docs/showcase/<repo-name>/`.
   - Wire static routes into `scripts/serve-demos.mjs` on port 4173.

---

## Step 5: Automated Scaffolding & Master Catalog Sync

Run the automation pipeline to register the newly ingested assets:

```bash
# 1. Auto-scaffold visual proofs and prompt cards
node scripts/scaffold-demo-prompt.mjs

# 2. Update skills-lock.json and rebuild README.md catalog
node scripts/sync-skills-catalog.mjs

# 3. Validate YAML triggers and progressive disclosure
node scripts/validate-skills.mjs
```

---

## Step 6: Multi-Engine Quality Audit & Verification

Execute the full quality audit suite:

```bash
# Run comprehensive 4-pass Design OS verification
npm run audit:full
# or: node scripts/audit-design-os.mjs
```

1. **Verify 0 Errors**: Confirm all skill frontmatters, Python tools, and contrast engines pass with 100% precision.
2. **Clean Scratch Directory**: Automatically purge temporary sandbox clone directory.
3. **Launch Studio Dashboard**: Test on `http://localhost:4173`.
