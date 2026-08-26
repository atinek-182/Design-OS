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

---

## 2. Adversarial Council Roast (/roast) Analysis

### The Brief
*A deterministic post-session meta-learning skill that mines `transcript.jsonl`, extracts errors/corrections/preferences, runs a 5-persona `/roast` filter to prevent rule bloat and contradictory instructions, and compiles surgical patches into Project, Skill, and Global Design OS rules, emitting a comprehensive audit report.*

### Persona Stances:
1. **The Contrarian (Red Team)**:  
   *Stance: Rule bloat and catastrophic instruction creep.*  
   If an agent adds a new rule for every trivial mistake, `GEMINI.md` and `SKILL.md` will balloon to 50,000 words. Future agents will suffer from instruction conflict, prompt dilution, and high token costs. The system needs a **strict deduplication, distillation, and aging mechanism**—rules must be synthesized, not appended as an endless laundry list.
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
   *Stance: Zero manual overhead and total transparency.*  
   "I don't want to explain how to fix the script. I want to say `/evolve` at the end of the chat, and it shows me: 'Detected 2 errors: (1) JSON schema 404; (2) Missing background-clip. Patched in templates and added to AST linter. 0 warnings remaining.' It must be 1-command simple."

### Judge's Verdict: GO (With Strict 4-Tier Guardrails)
- **Confidence**: HIGH
- **Key Decision**: The skill must be a **Surgical Distiller & Script Hardener**, NOT a naive text appender. It must follow the "Code > Validator > Rule" hierarchy: if a bug can be blocked by a Python assertion or AST check, update the code first; only emit a markdown rule for subjective or behavioral guidance.

---

## 3. Decisions Log

### Round 1 Decisions:
- **Decision 1.1: Unified Tri-Pillar Architecture**: Combine all three concepts (`design-evolve`, `reflect-and-harden`, `session-retrospective`) into one unified master skill named **`design-evolve`** (with aliases `/reflect-and-harden` and `/session-retro`).
  - *Pillar 1: Retrospective Mining*: Parses `transcript.jsonl` to detect user interventions, explicit corrections ("don't do that", "remove yellow squigglies"), and failed tool calls.
  - *Pillar 2: Defensive Hardening*: Generates or updates deterministic Python validation checks and AST linter rules to make regression physically impossible.
  - *Pillar 3: Evolutionary Compounding*: Synthesizes clean invariant rules and applies updates across Project, Skill, and Global Design OS layers.
- **Decision 1.2: Autonomous Multi-Tier Compounding with Review Diff (Option A)**:
  - Write authority spans Project (`projects/`), Skill (`.agents/skills/<skill>/`), and Global Design OS (`.agents/rules/`, `GEMINI.md`).
  - Outputs an executive forensic diff table and runs `npm run validate` to guarantee 0 regressions.

### Round 2 Decisions:
- **Decision 2.1: Hybrid Incident Extraction Pipeline (Option A)**:
  - Phase 1: Deterministic Python utility `scripts/mine_transcript.py` parses `<appDataDir>\brain\<conv-id>\.system_generated\logs\transcript.jsonl`, extracting failed tool calls, non-zero exits, and user corrective turns into an incident manifest (`.tastemaker/incident-manifest.json`).
  - Phase 2: Adversarial Roast Distiller analyzes only the extracted incidents to determine root cause and design the permanent fix. Fast, token-efficient, zero blind spots.
- **Decision 2.2: Consolidated Living Contracts with Section Merging (Option A)**:
  - Never blind-append rules. Read target rule files, locate relevant section/table, and merge synthesized entries cleanly.
  - Archive full deep post-mortem reports to `docs/evolution/INCIDENT-[YYYY-MM-DD]-[slug].md` for permanent traceability without active prompt bloat.

### Round 3 Decisions:
- **Decision 3.1: Dual-Mode Auto-Attribution with Manual Override (Option A)**:
  - Automatically traces all files read, written, or generated during the session back to their originating skill package under `.agents/skills/<skill-name>/` and patches templates/scripts. Supports `--skill <skill-name>` for targeted execution.
- **Decision 3.2: Full Triple-Gate Certification (Option A)**:
  - Gate 1: Linter & Syntax Pass on any modified Python/Node scripts.
  - Gate 2: `npm run validate` verifying 100% of skills pass with 0 errors and 0 warnings.
  - Gate 3: `npm run sync:catalog` synchronizing `skills-lock.json` and `README.md`.

---

## 4. Architectural Blueprint of `design-evolve`

```
.agents/skills/design-evolve/
├── SKILL.md                          # Master specification, triggers (/design-evolve, /reflect-and-harden)
├── demo/
│   ├── index.html                    # Visual incident explorer & compounding diff studio
│   └── PROMPT.md                     # Gemini 3.7 Flash Technical Superprompt
├── scripts/
│   ├── mine_transcript.py            # Deterministic transcript extractor (failures, exits, user corrections)
│   ├── synthesize_patches.py         # Multi-tier patch planner & section merger
│   └── certify_os.py                 # Triple-gate validator (syntax, validate, sync:catalog)
└── templates/
    └── report-template.md            # Forensic retrospective post-mortem schema
```
