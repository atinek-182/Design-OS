# System Rule: Absolute Zero-Emoji Mandate & Continuous VibeSec Security OS

> **Scope**: Universal and immutable across the entire Antigravity Design OS repository, all subagents, tool invocations, codebases, documentation, terminal outputs, and chat dialogues.

---

## 1. Absolute Zero-Emoji Mandate (Non-Negotiable System Invariant)

### 1.1 Directive
Under no circumstance shall any AI agent, subagent, code generator, or linter emit or embed a Unicode emoji character anywhere. Emojis are strictly banned from every layer of the system.

### 1.2 Explicit Prohibition Surface
1. **Chat Responses & Agent Dialogue**: Never use emojis in conversational replies, status updates, lists, questions, or system summaries.
2. **Source Code Files**: Never insert emojis into source code (`.ts`, `.tsx`, `.js`, `.jsx`, `.py`, `.css`, `.html`, `.glsl`, `.json`, `.sql`, etc.).
3. **Code Comments & Docstrings**: Never use emojis in JSDoc, inline comments, Python docstrings, or module headers.
4. **Documentation & Specs**: Never use emojis in Markdown files (`.md`), PRDs, architectural decision records, wireframe specs, or UI contracts.
5. **Terminal & CLI Output**: Never print emojis in stdout/stderr output from Python scripts, Node scripts, or shell utilities.
6. **Git History & Tagging**: Never use emojis in git commit messages, pull request titles, branch names, or git tag release notes.
7. **UI Text & Status Pills**: Never render emojis in web components, buttons, navigation pills, badges, toasts, or mermaid state diagrams.

### 1.3 Technical & Aesthetic Rationale
- **Shell Encoding Integrity**: Windows PowerShell environments running on `cp1252` character encodings frequently throw fatal `UnicodeEncodeError: 'charmap' codec can't encode character` when encountering emojis, abruptly crashing deterministic CI/CD pipelines and gatekeeper scripts.
- **Visual Anti-Slop Discipline**: Emojis are the defining trademark of generic corporate AI slop. High-end design engineering (Awwwards, Linear, Stripe, Apple) communicates status and hierarchy through typographical weight, spatial layout, and precise monochrome markers, never cartoon pictograms.
- **Token Efficiency**: Multi-byte UTF-8 emoji sequences consume unnecessary token budget and introduce parsing ambiguities across cross-AI models.

### 1.4 Approved Deterministic Text Replacement Dictionary

| Semantic Meaning | Banned Emoji Examples | Mandatory ASCII Replacement |
| :--- | :---: | :--- |
| Verification Success | `✅`, `✔️`, `🟢` | `[PASS]` or `[OK]` |
| Verification Failure | `❌`, `🔴`, `⛔` | `[FAIL]` or `[ERROR]` |
| Active / In Progress | `⚡`, `🟡`, `⏳`, `🔄` | `[ACTIVE]` or `[IN_PROGRESS]` |
| Pending / Queued | `⚪`, `⏸️`, `📋` | `[PENDING]` or `[QUEUED]` |
| Warning / Caution | `⚠️`, `🚨`, `🔔` | `[WARN]` or `[CAUTION]` |
| Security / Shield | `🛡️`, `🔒`, `🔐` | `[SECURITY]` or `[GATE]` |
| System / Architecture | `🚀`, `🏗️`, `🏛️` | `[SYSTEM]` or `[ARCH]` |
| Information / Note | `💡`, `ℹ️`, `📌` | `[INFO]` or `[NOTE]` |
| Release / Milestone | `🎉`, `🏆`, `📦` | `[RELEASE]` or `[MILESTONE]` |
| Direction / Flow | `👉`, `➡️`, `⬇️` | `->`, `-->`, `v` |

### 1.5 Self-Correction Requirement
If an agent detects an emoji in its own output buffer or proposed edits, it must immediately edit and strip it, substituting the corresponding bracketed ASCII token before concluding the turn.

---

## 2. Mandatory VibeSec Pre-Flight Security Protocol

### 2.1 Directive
At the inception of **every** development session, chat turn, or implementation phase, the agent must execute the VibeSec cybersecurity protocol adhering to [`vibesec`](file:///d:/Design-OS/.agents/skills/vibesec/SKILL.md) before inspecting tasks, asking questions, or modifying code.

### 2.2 The 5 Core Security Gates

```
+------------------------------------------------------------------------+
| VIBESEC CONTINUOUS PRE-FLIGHT PIPELINE                                 |
+------------------------------------------------------------------------+
  |-- Gate 1: Secret Hygiene & Git Guardian (Zero hardcoded credentials)
  |-- Gate 2: Content Security Policy (Strict CSP headers & script bounds)
  |-- Gate 3: Vector Asset Sanitization (Deterministic SVG DOM XSS wash)
  |-- Gate 4: Dependency Allowlist (Approved packages only)
  \-- Gate 5: WebGL Canvas & Input Bounds (Buffer overflow & shader safety)
```

#### Gate 1: Secret Hygiene & Git Guardian
- Scan all tracked files and staged diffs to ensure no API keys, bearer tokens, JWT secrets, private keys, or `.env` credentials are committed.
- Verify that `.gitignore` excludes local environment variables, credentials, build caches, and private tokens.
- Immediate remedy if found: remove secret, rotate immediately, and scrub git history.

#### Gate 2: Content Security Policy (CSP) & Header Integrity
- Guarantee all HTML entrypoints contain strict Content Security Policy meta directives:
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https:; worker-src 'self' blob:;">
  ```
- Disallow `unsafe-inline` scripts. Never use `eval()` or unvalidated `Function()` constructors.

#### Gate 3: Vector Asset Sanitization (Anti-XSS SVG Pipeline)
- Unsanitized SVG files are vectors for stored DOM XSS through embedded `<script>` tags and inline event handlers (`onload`, `onerror`, `onclick`).
- **Rule**: Every SVG asset imported, generated, or copied into `src/assets/` must pass through `python scripts/sanitize_svg.py`.
- Strips: `<script>`, `<!ENTITY>`, `<!DOCTYPE>`, `onload`, `onerror`, `onclick`, `onmouseover`, and `javascript:` URIs.

#### Gate 4: Approved Dependency Whitelist
- Restrict installed packages strictly to verified, audited libraries listed in `APPROVED_DEPS.json` and `context/5-code-standards.md`:
  - `gsap`, `@gsap/react`, `lenis`, `three`, `@types/three`, `lucide-react`, `@iconify/react`, `sonner`, `clsx`, `tailwind-merge`.
- Any external library addition requires explicit human authorization during Socratic planning.

#### Gate 5: WebGL Canvas & Input Bounds Security
- Verify that WebGL canvas elements, Three.js shaders, and interactive physics do not accept unvalidated string inputs as GLSL uniforms.
- Ensure device pixel ratios are clamped (`Math.min(window.devicePixelRatio, 2)`) to eliminate GPU memory exhaustion and denial-of-service crashes.
- Enforce full lifecycle cleanup (`ctx.revert()`, `renderer.dispose()`) on unmount.

---

## 3. Enforcement & Verification

- **Automated Validation**: `npm run validate` and `python scripts/phase_gate.py` enforce these rules.
- **Immediate Rejection**: Any PR, code change, or phase sign-off containing emojis or failing VibeSec compliance must be rejected with exit code 1.
