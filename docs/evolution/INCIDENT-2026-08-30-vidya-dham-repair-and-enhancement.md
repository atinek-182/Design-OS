# Incident Retrospective & Evolution Report: Vidya Dham Academy
Date: 2026-08-30 · Scope: `projects/Products/vidya-dham-academy` · System: Antigravity Design OS

---

## 1. Incident Summary

During the initialization and preview of the Vidya Dham Academy web application on Windows, the user encountered a runtime black/dark screen defect (`TypeError: Cannot read properties of null (reading 'useState')`), TypeScript compilation errors in `vite.config.ts`, and excessive AI-slop visual patterns (background grid lines, radial blur glow blobs, and chunky rounded pill badge boxes).

Through an exhaustive `/grill-me` discovery interview, the root causes were isolated, resolved, and verified against the live preview environment, culminating in an Awwwards/Obys-level architectural overhaul.

---

## 2. Root Cause Deconstruction & Technical Roast

### Defect 1: Dual React Module Instances Across Windows NTFS Junctions
- **Symptom**: Browser threw `Warning: Invalid hook call` followed by `TypeError: Cannot read properties of null (reading 'useState')` upon mounting components.
- **Root Cause**: `d:\Design-OS\projects` is an NTFS junction pointing to `D:\projects`. When Vite performed initial dependency pre-bundling, React components were resolving `chunk-*.js` and `chunk-*.js?v=...` as two separate module instances.
- **Remediation**: Added `resolve.dedupe: ['react', 'react-dom']` and `optimizeDeps: { exclude: ['lucide-react'] }` in `vite.config.ts`, wiped corrupted `.vite` caches, and rebuilt the bundle.

### Defect 2: Lenis SmoothScroll Lifecycle Memory Leak in StrictMode
- **Symptom**: On React 18 StrictMode unmount/remount cycles, the Lenis smooth scroll ticker retained destroyed instance callbacks.
- **Root Cause**: Missing export and execution of `destroySmoothScroll()` during `App.tsx` unmount.
- **Remediation**: Exported `destroySmoothScroll()` with clean `gsap.ticker` callback detachment and invoked in `useEffect` cleanup.

### Defect 3: TypeScript Node Type Specifiers in Subproject Config
- **Symptom**: `tsc --project tsconfig.node.json --noEmit` failed with `TS2307: Cannot find module 'fs'` and `TS2580: Cannot find name 'process'`.
- **Root Cause**: Subproject `package.json` lacked `@types/node` in `devDependencies`, and `vite.config.ts` used non-prefixed `fs`/`process`.
- **Remediation**: Installed `@types/node` in subproject and updated imports to `node:fs` and `node:process`.

### Defect 4: Visual Slop & AI Monoculture (Background Grids & Chunky Badges)
- **Symptom**: Page relied on generic `.obys-grid-lines`, ambient radial gradient glow blobs, and bulky rounded neon pill badges.
- **Remediation**: Complete removal of background grid patterns and radial gradient blobs in favor of deep, architectural matte dark surfaces (`#0c0d10`, `#111317`, `#171920`). Redesigned `Badge.tsx` and all section headers to use pure unboxed uppercase monospace typography (`font-mono text-xs uppercase tracking-wider`).

---

## 3. Multi-Tier Compounding Matrix

| Tier | File / Target | Modification Applied |
| :--- | :--- | :--- |
| **Tier 1: Project** | `vite.config.ts` | Added `resolve.dedupe: ['react', 'react-dom']` and `node:*` imports |
| **Tier 1: Project** | `src/lib/lenis.ts` | Added deterministic `destroySmoothScroll()` cleanup |
| **Tier 1: Project** | `src/components/home/MonumentalHero.tsx` | Removed grids, gradient blur blobs, and redesigned badges |
| **Tier 1: Project** | `src/components/home/InstitutionalPillars.tsx` | Converted 3-card row into 65%/35% asymmetrical editorial split |
| **Tier 1: Project** | `src/components/home/DerivationSandbox.tsx` | Added interactive first-principles calculus derivation widget |
| **Tier 1: Project** | `src/components/home/FacultyDoubtDesk.tsx` | Added faculty mentor profiles & 1-on-1 whiteboard consultation ledger |
| **Tier 1: Project** | `src/components/home/MarqueeTicker.tsx` | Added high-velocity continuous running typography bridge |
| **Tier 1: Project** | `src/components/pages/FacultyPage.tsx` | Created dedicated Faculty directory with search & subject filtering |
| **Tier 1: Project** | `src/components/layout/MobileStickyBar.tsx` | Upgraded to floating architectural glass dock |
| **Tier 3: Global OS** | `GEMINI.md` | Invariant Rule 10 & 11 locked for NTFS junctions and deduplication |

---

## 4. Triple-Gate Certification Evidence

- **Gate 1 (Python Syntax Check)**: 45 scripts compiled with 0 syntax errors [PASS].
- **Gate 2 (Skill Integrity `npm run validate`)**: 134/134 skills validated with 0 errors and 0 warnings [PASS].
- **Gate 3 (Catalog Sync `npm run sync:catalog`)**: `skills-lock.json` and `README.md` synchronized [PASS].
- **AST Anti-Slop Audit**: `python scripts/design_os.py scan`: 44 files scanned, 0 findings [PASS].
- **Production Build**: `npm run build` passed with exit code 0 [PASS].
