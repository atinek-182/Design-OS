---
name: design-evolve
description: Use when closing a session, conducting a post-mortem retrospective, analyzing errors from a conversation transcript, hardening rules against regressions, synchronizing git commits, or when the user says "/design-evolve", "/reflect-and-harden", "/session-retro", "evolve the system", or "learn from this session". Mines conversation transcripts for errors and user corrections, runs an adversarial root-cause roast, synthesizes living rules across Project, Skill, and Global Design OS layers, and executes deterministic synchronous git synchronization.
argument-hint: "[optional: --transcript <path> --skill <skill-name> --commit-msg <msg> --no-push]"
---

# Design Evolve (`design-evolve`)

> **Autonomous Retrospective Mining, Multi-Tier Rule Compounding, and Synchronous Git OS for Antigravity Design OS.**

---

## Core Philosophy: Why This Skill Exists

Traditional AI development environments suffer from **amnesia and repeated failure loops**:
1. **Error Recurrence**: Bugs resolved in one chat (e.g. non-resolving schema URLs, missing standard CSS properties, Windows cp1252 charmap crashes) recur in later chats because learnings are lost when the context window resets.
2. **Preference Drift**: User rules and aesthetic constraints (e.g. zero emojis, mandatory VibeSec pre-flights, 2-question batching) given in earlier turns get forgotten.
3. **Rule Bloat & Conflict**: Naive systems append endless laundry lists of markdown rules, causing instruction dilution, contradictory constraints, and token waste.
4. **Git Concurrency Race Conditions**: AI agents often execute `git push` concurrently while `git commit` is still processing, causing index lock collisions (`.git/index.lock`) or pushing stale commits.

**The Solution**: `design-evolve` is a closed-loop meta-learning operating system that runs at the end of any session. It mines the transcript, conducts an adversarial `/roast` root-cause analysis, applies the **Code > Validator > Living Rule** hierarchy, certifies repository integrity via a triple-gate audit, and executes deterministic, sequential Git synchronization.

---

## Non-Negotiable System Invariants

1. **Absolute Zero-Emoji Mandate**: Emojis are strictly banned from all outputs, code, comments, reports, logs, and git commit messages. Use clean text markers: `[PASS]`, `[FAIL]`, `[ACTIVE]`, `[PENDING]`, `[OK]`, `[INFO]`, `[SECURITY]`, `[GATE]`, `[EVOLVE]`.
2. **Hierarchy of Mutability**:
   - If a failure can be blocked by a Python check or AST linter, patch the code or script first.
   - If an error reflects a project preference, update project context (`context/`).
   - Only emit a Markdown rule if the constraint is behavioral or architectural.
3. **No Blind-Appending (Living Contracts)**: Rules are merged into existing sections and tables of `.agents/rules/` and `GEMINI.md`. Full incident post-mortems are archived in `docs/evolution/` to prevent active prompt bloat.
4. **Synchronous Git Engine**: Never execute `git push` without waiting for `git commit` to complete with exit code 0.

---

## The 6-Stage Evolution Lifecycle

```
[Stage 1: Transcript Mining]    --> Extracts failed tool calls, non-zero exits, and user corrections
              |
[Stage 2: Adversarial Roast]     --> 5-Persona /roast separates surface symptoms from root causes
              |
[Stage 3: Multi-Tier Compounding]--> Surgically updates Project, Skill, and Global Design OS layers
              |
[Stage 4: Triple-Gate Audit]     --> Syntax check -> npm run validate (0 warnings) -> npm run sync:catalog
              |
[Stage 5: Forensic Reporting]   --> Emits docs/evolution/INCIDENT-[YYYY-MM-DD]-[slug].md
              |
[Stage 6: Synchronous Git Sync]  --> Secret scan -> git add -> synchronous git commit -> git push origin <branch>
```

---

## Step-by-Step Execution Protocol

### Step 1: Ingest & Mine Session Transcript
Execute the high-speed Python transcript parser:

```powershell
python d:/Design-OS/.agents/skills/design-evolve/scripts/mine_transcript.py
```

- Automatically locates the active conversation's `transcript.jsonl` in `<appDataDir>/brain/<conv-id>/.system_generated/logs/transcript.jsonl`.
- Scans for:
  - Non-zero command exits, tracebacks, and exceptions (`UnicodeEncodeError`, `404`, syntax errors).
  - User corrective interventions (`"don't"`, `"never"`, `"error"`, `"warning"`, `"yellow"`, `"upgrade"`, `"fix"`, `"broken"`).
  - All modified file paths mapped to their originating skill packages.
- Compiles the structured incident manifest at `.tastemaker/incident-manifest.json`.

### Step 2: Adversarial Root-Cause Roast (`/roast`)
Run a focused 5-persona `/roast` audit on the extracted incidents:
- **The Contrarian**: What is the root cause? Is this an agent hallucination, a missing validator, or an ambiguous instruction?
- **The Logician**: How can this be made physically impossible to repeat using code or deterministic linters rather than prompt text?
- **The Researcher**: Does Design OS already have a pattern or tool that should have handled this?
- **The Buyer**: What is the simplest, zero-overhead user experience for this fix?
- **The Expansionist**: Can this fix be generalized into a reusable utility for all 133+ skills?

### Step 3: Multi-Tier Surgical Compounding
Execute the patch planner and section merger:

```powershell
python d:/Design-OS/.agents/skills/design-evolve/scripts/synthesize_patches.py
```

- **Tier 1 (Active Project)**: Updates project-specific files (`context/`, `specs/`, `RESUME.md`).
- **Tier 2 (Originating Skill)**: Updates templates, scripts, or instructions in `.agents/skills/<target-skill>/` so future projects never inherit the defect.
- **Tier 3 (Universal Design OS)**: Merges synthesized invariant rules into `.agents/rules/` and `GEMINI.md`.

### Step 4: Triple-Gate Certification
Verify that the entire repository remains 100% compliant and healthy:

```powershell
python d:/Design-OS/.agents/skills/design-evolve/scripts/certify_os.py
```

1. **Python Syntax Pass**: Compiles all modified scripts to prevent runtime syntax crashes.
2. **Skill Integrity Audit**: Executes `npm run validate` to ensure 100% of skills pass with 0 errors and 0 warnings.
3. **Catalog Synchronization**: Executes `npm run sync:catalog` to update `skills-lock.json` and `README.md`.

### Step 5: Emit Forensic Post-Mortem Report
Write an exhaustive post-mortem incident report to `docs/evolution/INCIDENT-[YYYY-MM-DD]-[slug].md` containing:
- Incident summary & trigger dialogue.
- Root-cause deconstruction.
- Multi-tier diff table (Project, Skill, Global).
- Verification & certification evidence.

### Step 6: Synchronous Git Sync & Remote Push
Safely commit and push all compounded learnings without concurrency race conditions:

```powershell
python d:/Design-OS/.agents/skills/design-evolve/scripts/git_sync.py --message "[EVOLVE]: <summary of learnings>"
```

1. Runs pre-flight VibeSec secret scan on staged diff.
2. Executes `git add -A`.
3. Verifies staged diff and executes `git commit -m "[EVOLVE]: ..."` synchronously, blocking until exit code 0 is returned.
4. Resolves the active branch (`git rev-parse --abbrev-ref HEAD`).
5. Executes `git push origin <branch>` and verifies push exit code 0.
