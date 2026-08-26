# Brainstorm & System Spec: Continuous Evolution & Transcript Learning Engine (`design-evolve`)

> **Date**: 2026-08-26  
> **Topic**: Autonomous Post-Session Retrospective, Transcript Mining, Self-Correction, and Multi-Tier Rule Compounding  
> **Status**: [SPEC_FINALIZED]  

---

## 1. User Intent & Core Challenge

Traditional AI setups have zero memory across chats:
- Mistakes get repeated (e.g. using emojis, missing standard CSS properties, adding non-resolving schema URLs, breaking terminal stdout on Windows cp1252).
- User corrections and preferences given in Chat 3 are forgotten by Chat 8.
- Skills remain static and never improve from their real-world battle test.

The user desires a dedicated **Meta-Learning & Self-Correction Skill** run at the end of any chat session (or on demand) that:
1. Ingests the full conversation transcript (`transcript.jsonl`).
2. Extracts all errors, tool failures, IDE warnings, and user corrections.
3. Runs an adversarial `/roast` council to stress-test and distill the root causes.
4. Updates 3 tiers of persistent intelligence:
   - **Tier A (Project Level)**: Project context, `project-GEMINI.md`, `specs/`.
   - **Tier B (Skill Level)**: Updates the specific skill's instructions (`SKILL.md`), scripts, or templates so future runs never repeat the error.
   - **Tier C (Universal Design OS Level)**: Compounds global rules in `.agents/rules/`, `GEMINI.md`, and master workflows.
5. Saves an exhaustive forensic learning report.
6. Synchronizes Git sequentially: runs `git add .`, waits synchronously for `git commit` to complete, detects the active branch, and pushes cleanly to `origin <branch>` without concurrency race conditions.

---

## 2. Adversarial Council Roast (/roast) Analysis

### The Brief
*A deterministic post-session meta-learning skill that mines `transcript.jsonl`, extracts errors/corrections/preferences, runs a 5-persona `/roast` filter to prevent rule bloat and contradictory instructions, compiles surgical patches into Project, Skill, and Global Design OS rules, emits a comprehensive audit report, and securely synchronizes git without race conditions.*

### Persona Stances:
1. **The Contrarian (Red Team)**:  
   *Stance: Rule bloat, catastrophic instruction creep, and git race hazards.*  
   If an agent adds a new rule for every trivial mistake, `GEMINI.md` and `SKILL.md` will balloon to 50,000 words. Furthermore, naive async commands like `git commit & git push` corrupt indices or push stale commits. The system needs a **strict deduplication, distillation, and aging mechanism** and **hard synchronous git sequence verification**.
2. **The Expansionist (Bull)**:  
   *Stance: The true self-improving autonomous engineering OS.*  
   This turns Design OS from a static library of skills into an adaptive, self-hardening intelligence. Every bug encountered once is permanently eliminated across all future projects. It creates a compounding competitive moat where the OS becomes exponentially smarter with every hour of human pair programming.
3. **The Logician (First Principles)**:  
   *Stance: Hierarchy of Mutability & Invariant Soundness.*  
   Errors must be classified into 3 distinct buckets: (1) Deterministic Tool Bugs (fix the code/script); (2) Architectural Preferences (update project context/tokens); (3) Systemic Behavioral Failures (update rules). Never use a markdown prompt rule to fix what can be prevented by a deterministic Python validator or linter script.
4. **The Researcher (Evidence)**:  
   *Stance: Validated by Memory & Reflection Architectures (Reflexion, MemGPT, Claude-Mem).*  
   Literature on agent self-reflection demonstrates that raw transcript append leads to hallucinations. Successful systems extract structured observations (Trigger -> Failure -> Root Cause -> Invariant Rule -> Verification Test) and store them in indexed knowledge or targeted skill files.
5. **The Buyer (Voice of Customer / Developer)**:  
   *Stance: Zero manual overhead, zero git headache, and total transparency.*  
   "I don't want to explain how to fix the script or manually babysit git. I want to say `/evolve` at the end of the chat, and it shows me what it learned, patches the files, verifies 0 warnings, commits, waits, and pushes cleanly to origin. It must be 1-command simple."

### Judge's Verdict: GO (With Strict Guardrails & Synchronous Git Engine)
- **Confidence**: HIGH
- **Key Decision**: The skill must be a **Surgical Distiller, Script Hardener, and Synchronous Git Guardian**, NOT a naive text appender or fire-and-forget shell runner.

---

## 3. Decisions Log

### Round 1 Decisions:
- **Decision 1.1: Unified Tri-Pillar Architecture**: Combine all three concepts (`design-evolve`, `reflect-and-harden`, `session-retrospective`) into one unified master skill named **`design-evolve`** (with aliases `/reflect-and-harden` and `/session-retro`).
- **Decision 1.2: Autonomous Multi-Tier Compounding with Review Diff (Option A)**:
  - Write authority spans Project (`projects/`), Skill (`.agents/skills/<skill>/`), and Global Design OS (`.agents/rules/`, `GEMINI.md`).
  - Outputs an executive forensic diff table and runs `npm run validate` to guarantee 0 regressions.

### Round 2 Decisions:
- **Decision 2.1: Hybrid Incident Extraction Pipeline (Option A)**:
  - Phase 1: Deterministic Python utility `scripts/mine_transcript.py` parses `transcript.jsonl`.
  - Phase 2: Adversarial Roast Distiller analyzes only the extracted incidents to determine root cause and design the permanent fix.
- **Decision 2.2: Consolidated Living Contracts with Section Merging (Option A)**:
  - Never blind-append rules. Read target rule files, locate relevant section/table, and merge synthesized entries cleanly.
  - Archive full deep post-mortem reports to `docs/evolution/INCIDENT-[YYYY-MM-DD]-[slug].md`.

### Round 3 Decisions:
- **Decision 3.1: Dual-Mode Auto-Attribution with Manual Override (Option A)**:
  - Automatically traces all files read, written, or generated during the session back to their originating skill package under `.agents/skills/<skill-name>/` and patches templates/scripts.
- **Decision 3.2: Full Triple-Gate Certification (Option A)**:
  - Gate 1: Linter & Syntax Pass on modified scripts.
  - Gate 2: `npm run validate` verifying 100% of skills pass with 0 errors and 0 warnings.
  - Gate 3: `npm run sync:catalog` synchronizing `skills-lock.json` and `README.md`.

### Round 4 Decisions (Git Operations & Security Hardening):
- **Decision 4.1: Deterministic Synchronous Git Sync Engine (`git_sync.py`)**:
  - Eliminates the async git race condition.
  - Pre-flight VibeSec secret scan on staged diff.
  - Runs `git add -A`.
  - Strictly waits for `git commit` to terminate and validates exit code 0.
  - Dynamically resolves current branch (`git rev-parse --abbrev-ref HEAD`).
  - Sequentially runs `git push origin <current-branch>` and verifies clean push.
- **Decision 4.2: Hardened `.gitignore`**:
  - Recursive directory exclusions for `**/node_modules/`, `**/.next/`, `**/dist/`, `**/build/`.
  - VibeSec secret file patterns (`**/.env*`, `**/*.pem`, `**/*.key`, `**/secrets.json`).
  - OS garbage (`desktop.ini`, `ehthumbs.db`, `Thumbs.db`, `.DS_Store`).

---

## 4. Final Directory Structure of `design-evolve`

```
.agents/skills/design-evolve/
├── SKILL.md                          # Master specification, triggers (/design-evolve, /reflect-and-harden, /session-retro)
├── demo/
│   ├── index.html                    # Visual incident explorer & compounding diff studio
│   └── PROMPT.md                     # Gemini 3.7 Flash Technical Superprompt
├── scripts/
│   ├── mine_transcript.py            # High-speed deterministic transcript parser
│   ├── synthesize_patches.py         # Multi-tier patch planner & section merger
│   ├── certify_os.py                 # Automated triple-gate verification runner
│   └── git_sync.py                   # Hardened synchronous git add/commit/push engine
└── templates/
    └── report-template.md            # Forensic retrospective post-mortem schema
```
