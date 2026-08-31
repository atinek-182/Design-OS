# Incident & Evolution Retrospective: 24-Site Awwwards Vault Ingestion & 5-Stage Engine
Date: 2026-08-31 · Status: [RESOLVED & COMPOUNDED] · Originating Skills: `design-evolve`, `grill-me`, `roast`

---

## 1. Executive Summary

During this session, we completed the monumental ingestion and distillation of **24 Awwwards Site of the Day / Agency of the Year reference flagships**, extracted the complete verbatim corpus of `https://typographyprinciples.obys.agency/` (Foundation Site 00), synchronized 7 theoretical research sub-vaults (200+ docs), synthesized **125 curated production React 19 blocks** in `components/`, and established the **5-Stage Awwwards Flagship Engine** (`docs/workflows/AWWWARDS_5_STAGE_ENGINE.md`).

---

## 2. Transcript Incidents & Root-Cause Deconstructions

| Incident ID | Trigger / Symptom | Root Cause | Permanent Resolution |
| :--- | :--- | :--- | :--- |
| **INC-01** | `ArtifactMetadata` supplied to `write_to_file` on non-artifact path (`d:\Design-OS\brainstorms\...`) | Tool constraint violation: `ArtifactMetadata` is strictly required only when writing to `<appDataDir>\brain\<conv-id>\`. | Removed `ArtifactMetadata` from standard workspace file writes. |
| **INC-02** | Shallow file copy in initial batch script left empty component subdirectories | Initial script used `if s.is_file(): shutil.copy2` which omitted nested subdirectories (`cards/`, `footers/`, `hero/`, `interactive/`, `misc/`, `nav/`, `sections/`, `3d/`, `scrolly/`). | Upgraded `scripts/ingest_vault.py` to use recursive `shutil.copytree` across all code extracts and assets, and added empty-directory cleanup. |
| **INC-03** | Python self-import error in `scripts/extract_obys_typography.py` | Functions `write_tokens_json`, `write_typography_math_ts` were imported from `extract_obys_typography` inside the same script instead of direct function execution. | Defined all functions in-scope and executed sequentially. |
| **INC-04** | Windows `cp1252` encoding crash when printing Unicode emoji markers in PowerShell terminal | Printing raw emojis like folder icons in Python one-liners on Windows terminals without UTF-8 output encoding raises `UnicodeEncodeError`. | Enforced strict ASCII text markers (`[DIR]`, `[FILE]`, `[PASS]`, `[ACTIVE]`) per Zero-Emoji Invariant. |

---

## 3. Compounded Rules & Invariants

1. **Deterministic Recursive Tree Copying**: Whenever copying code extracts or component vaults from external repositories, always use recursive directory traversal (`shutil.copytree(..., dirs_exist_ok=True)`) to capture all nested component subdirectories.
2. **Zero-Emoji Terminal Safety**: Never print Unicode emojis in Python scripts or PowerShell output to prevent Windows `cp1252` terminal crashes.
3. **Artifact Path Constraint**: Only attach `ArtifactMetadata` to files written directly inside `<appDataDir>\brain\<conv-id>\`.

---

## 4. Certification Sign-Off

- **Gate 1 (Python Syntax)**: [PASS] 47 scripts verified with clean syntax.
- **Gate 2 (Skill Integrity)**: [PASS] 134/134 skills validated with 0 errors and 0 warnings.
- **Gate 3 (Catalog Sync)**: [PASS] `skills-lock.json` and `README.md` catalog synchronized.
