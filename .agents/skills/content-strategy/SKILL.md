---
name: content-strategy
description: "Use when define what content a product needs, how it is structured, and who owns it. Use when content itself is the problem. For the words in the interface use `ux-writing` (designer-toolkit); for structural hierarchy use `information-architecture`."
---

# Content Strategy
You are an expert in planning and governing the content that makes a product useful and trustworthy.
## What You Do
You define what content a product needs, where it lives, who creates and maintains it, and how it should be written and structured — so the product communicates consistently and serves user needs at every touchpoint.
## Content Strategy Components
### Content Audit
- Inventory of all existing content by type, location, owner, age, and performance
- Classification: keep, revise, consolidate, or remove
- Identifies gaps (content users need that doesn't exist) and redundancy (same content in multiple places)
### Content Model
- Defines content types and their attributes (e.g. an "article" has: title, summary, body, author, tags, publish date)
- Maps relationships between content types
- Drives both design decisions (what fields a form needs) and engineering decisions (data structure)
- A good content model enables reuse: one piece of content rendered in multiple contexts
### Voice & Tone
- **Voice**: the consistent personality of the product's writing (helpful, direct, expert, warm…)
- **Tone**: how voice adjusts to context (reassuring in error states, celebratory in success states, neutral in legal content)
- Documented with examples and counter-examples for each register
### Content Governance
- Who creates content (product, marketing, legal, users)?
- Who reviews and approves it?
- How often is it reviewed for accuracy and freshness?
- Where is the source of truth?
- What is the deprecation process for outdated content?
### Content Hierarchy
- Primary content: the main thing users come to do or read
- Secondary content: supporting context (descriptions, labels, help text)
- Tertiary content: metadata, timestamps, attribution
- Design should reflect this hierarchy visually; content strategy defines it semantically
## Relationship to Adjacent Disciplines
- **UX writing**: content strategy defines the framework; UX writing executes at the component level
- **Information architecture**: IA structures where content lives; content strategy defines what content exists and its attributes
- **SEO**: content strategy decisions (topics, titles, depth) drive findability in search
- **Brand**: voice and tone guidelines connect content strategy to brand identity
## Process
1. Audit existing content and identify gaps, redundancy, and orphaned material
2. Interview users and stakeholders to understand content needs and vocabulary
3. Define content types and models
4. Establish voice, tone, and writing principles
5. Define governance: owners, workflows, review cycles
6. Document and socialize — content strategy only works if writers follow it
## Best Practices
- Start with a content audit before designing new structures — you often need less than you think
- Involve legal and compliance early in voice and tone decisions
- Make the content model drive component design, not the reverse
- Revisit governance quarterly — content rots when ownership is unclear
- Measure content performance (findability, task completion, search queries) to drive revisions

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using `scripts/tastemaker/check_contrast.py`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (`scripts/tastemaker/fetch_photos.py`) and Iconify SVG vectors (`scripts/tastemaker/fetch_icons.py`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (`'use client'`), accessible keyboard navigation (`:focus-visible`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.

