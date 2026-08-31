---
title: Off Menu Design — Remi AI Video Preloader & High-Priority AVIF Pipeline
domain: reference
summary: Remi AI MP4 video avatar preloader integration, AVIF/WebP image srcsets, and blur filter transition mechanics.
critical_directives:
- Sourcing components: Map to local Awwwards component vault at C:\Users\HP\Downloads\Components\Analog-Grain-Shader.
- Enforce zero-emoji mandate across all vault documentation.
section_outline:
- Off Menu Design — Remi AI Video Preloader & High-Priority AVIF Pipeline
- Remi AI Video Avatar Preloader Integration
- AVIF & WebP High-Priority Preload Pipeline
read_triggers:
- When working on reference in references/awwwards-research-vault/04-webgl-threejs-fragment-shaders/18-off-menu-design-remi-ai-mp4-video-preloader.md
- When reading context for Off Menu Design Video Preloader
tags:
- reference
- awwwards
- off-menu-design
- remi-ai-video
- avif-pipeline
updated: '2026-08-08'
---

# Off Menu Design — Remi AI Video Preloader & High-Priority AVIF Pipeline

Off Menu Design integrates an autoplay video avatar (`remi_dark@2x.mp4`) to create a conversational AI entrance.

---

## Remi AI Video Avatar Preloader Integration

```html
<!-- Remi AI Autoplay Video Preloader -->
<video
  class="chat-intro-video"
  autoplay
  loop
  muted
  playsinline
  poster="/images/remi_poster.webp"
>
  <source src="/images/remi_dark@2x.mp4" type="video/mp4" />
</video>
```

---

## AVIF & WebP High-Priority Preload Pipeline

- **Preload Strategy**: Preloads high-priority AVIF & WebP portfolio thumbnails (`thumbnail-light-xs@2x.webp`) in the HTML head.
- **Turbopack Asset Bundling**: Javascript chunk delivery optimized via Next.js Turbopack (`turbopack-25760bca079a3c46.js`).
