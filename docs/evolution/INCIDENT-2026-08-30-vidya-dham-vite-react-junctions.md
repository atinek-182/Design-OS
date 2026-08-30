# Incident Post-Mortem: Vite NTFS Junctions & React GSAP Reconciliation

**Date**: 2026-08-30  
**Project**: Vidya Dham Academy (`projects/Products/vidya-dham-academy`)  
**Scope**: Vite Subproject Configuration, React Dispatcher Resolution, GSAP DOM Reconciliation

---

## 1. Incident Summary & Trigger

During the construction of the Vidya Dham Academy Awwwards web application, three distinct runtime defects occurred:
1. `TypeError: Cannot read properties of undefined (reading 'imports')` in Vite's dependency optimizer on Windows Node 26.
2. `TypeError: Cannot read properties of null (reading 'useState')` (duplicate React dispatcher / invalid hook call).
3. `NotFoundError: Failed to execute 'removeChild' on 'Node'` during SPA view switching.

---

## 2. Adversarial Root-Cause Deconstruction

1. **Windows NTFS Directory Junction Mismatch**:
   - `d:\Design-OS\projects` is an NTFS junction link pointing to `D:\projects`.
   - When Vite started in `D:\Design-OS\projects\Products\...`, `process.cwd()` differed from `fs.realpathSync(process.cwd())`.
   - Esbuild emitted relative paths based on `process.cwd()`, causing `esbuildOutputFromId` to look up paths that did not match normalized cache keys, resulting in `undefined` output and subsequent dispatcher fragmentation.

2. **Lucide React Synthetic CJS Interop**:
   - `lucide-react` is pure named ESM exports. When Vite marked it with `needsInterop`, it added an artificial `default` export requirement that broke in the browser.

3. **React DOM Mutation vs. Reconciliation**:
   - `splitTextIntoMaskedWords` wiped `element.textContent = ''` directly in the DOM.
   - GSAP `ScrollTrigger.create({ pin: true })` wrapped sections in `.pin-spacer` elements outside React's knowledge.
   - When switching views, React attempted to unmount nodes from their original parent and crashed with `removeChild`.

---

## 3. Multi-Tier Remediation

| Tier | File Modified | Change Summary |
| :--- | :--- | :--- |
| **Project** | `vite.config.ts` | Configured `root: fs.realpathSync(process.cwd())`, aliased all 4 React entrypoints, and excluded `lucide-react` from `optimizeDeps`. |
| **Project** | `MonumentalHero.tsx` | Replaced direct DOM mutation with React-native masked spans (`HEADLINE_WORDS.map(...)`). |
| **Project** | `SingleItemScrollytelling.tsx` | Pinned inner `pinTargetRef.current` inside `<section>` to isolate `.pin-spacer`. |
| **Global** | `GEMINI.md` | Added Rules 11 and 12 encoding Windows junction normalization and GSAP React reconciliation standards. |

---

## 4. Verification Evidence

- `npm run build`: `[PASS]` Built in 1.73s (0 errors).
- `python scripts/design_os.py scan`: `[PASS]` 39 files scanned, 0 findings.
- Triple-Gate Certification: `[PASS]` 134/134 skills validated.
