# Code Standards & Security Quality Gates: Zorixel Brand Website

## TypeScript & API Conventions
- **Strict Typing:** No `any` or loose `unknown` casts. Use discriminated unions and branded types for domain states.
- **Server Component Default:** Default all components to Server Components (`.tsx`). Mark client components with `'use client'` only when state or browser event listeners are required.
- **Zod Input Validation:** All API endpoints and Server Actions must parse request payloads using Zod schemas.

## Security Gates (VibeSec + OWASP LLM Standard)
1. **Server Action Protection:** Include `import 'server-only'` in server data modules. Validate authentication and authorization at mutation boundaries.
2. **SSRF Defense:** Block outgoing requests to private IP ranges (`10.0.0.0/8`, `127.0.0.1`, `169.254.169.254`).
3. **Mass Assignment Prevention:** Always use explicit Zod `.pick()` or `.omit()` schemas on incoming form inputs.

## Surgical Editing Discipline (Karpathy Rules)
- Touch only lines required for the target ticket.
- Do not refactor adjacent formatting or unrelated functions.
- Remove orphaned imports created by your edit.
