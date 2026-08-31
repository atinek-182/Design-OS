---
title: Gehry Getty — Webby, FWA & Awwwards SOTD Evaluation Rubric
domain: reference
summary: Evaluation of Gehry Getty against Webby Award, FWA of the Month, and Awwwards SOTD criteria highlighting 3D model
  optimization and audio narrative sync.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Architectural-3D-Stage.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Gehry Getty — Webby, FWA & Awwwards SOTD Evaluation Rubric
- Multi-Award Evaluation Breakdown
- Technical Performance & VRAM Safeguards
read_triggers:
- When working on reference in references/awwwards-research-vault/06-judging-criteria-and-master-checklist/08-gehry-getty-webby-fwa-sotd-rubric.md
- When reading context for Gehry Getty Multi-Award Rubric Evaluation
tags:
- reference
- awwwards
- gehry-getty
- webby
- fwa
- scoring
updated: '2026-08-08'
---

# Gehry Getty — Webby, FWA & Awwwards SOTD Evaluation Rubric

Evaluating Gehry Getty across three premier design institutions (Webby Awards, FWA, Awwwards) illustrates how Resn engineered an award-winning digital museum experience.

---

## Multi-Award Evaluation Breakdown

| Category | Weight | Score | Technical & Archival Rationale |
|---|---|---|---|
| **Design** | `40%` | **9.9 / 10** | Warm Parchment (`#F4F0EA`) texture, Playfair Display typography, 3D Frank Gehry model rendering. |
| **Usability** | `30%` | **9.7 / 10** | Intuitive 3D hotspot pins, camera spring lerping, mobile touch grab cursor physics. |
| **Creativity** | `20%` | **9.9 / 10** | Timecoded JSON audio interview synchronization camera-panning to specific 3D model meshes. |
| **Content** | `10%` | **9.8 / 10** | 150+ rare physical study models, sketches, and audio from Frank Gehry Papers archive. |

---

## Technical Performance & VRAM Safeguards

1. **Basis Universal WASM Compression**: Reduces GPU texture memory consumption by `>75%`, preserving 60 FPS on mobile devices.
2. **Off-Thread WASM Transcoding**: Decodes Basis textures inside Web Workers to prevent main thread rendering jank.
3. **Instanced Model Geometry**: Merges 3D mesh instances into unified GLTF buffers to minimize draw calls.
