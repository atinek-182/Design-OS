# Forensic Retrospective Post-Mortem Report

- **Date**: {{DATE}}
- **Active Project**: `{{PROJECT_NAME}}`
- **Conversation Transcript**: `{{TRANSCRIPT_PATH}}`
- **Engine**: Antigravity Design OS `design-evolve`

---

## 1. Executive Summary
Brief narrative explaining what was achieved in this session, what incidents or unexpected behaviors occurred, and how the system reacted and adapted.

---

## 2. Transcript Incident Ledger

| Step # | Event Type | Failure Signal / User Intervention | Immediate Tactical Fix |
| :--- | :--- | :--- | :--- |
| `{{STEP}}` | `[TOOL_FAIL]` | Error message or traceback | Surgical file edit |
| `{{STEP}}` | `[USER_CORRECTION]` | User correction directive | Behavioral alignment |

---

## 3. Adversarial Root-Cause Analysis (`/roast`)

### The Contrarian (Red Team)
- Critical diagnosis of why the failure occurred.

### The Logician (First Principles)
- Deterministic mechanism design: how code or AST checks can make this failure impossible to repeat.

---

## 4. Multi-Tier Compounding Ledger

### Tier 1: Active Project Updates
- Modified project files, tokens, or specs.

### Tier 2: Originating Skill Updates
- Templates, scripts, and instructions updated in `.agents/skills/<skill-name>/`.

### Tier 3: Universal Design OS Rules
- Rules merged into `.agents/rules/` and `GEMINI.md`.

---

## 5. Certification & Verification Evidence
- **Syntax Check**: `[PASS]`
- **Skills Catalog Validation (`npm run validate`)**: `[PASS]` (134/134 skills, 0 errors, 0 warnings)
- **Synchronous Git Push**: `[PASS]` (Clean push to `origin/<branch>`)
