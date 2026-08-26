---
name: html-to-interaction-prompts
description: Use when deconstruct an existing HTML/CSS/JS page or live reference into isolated, reusable component prompts and interaction recipes for Gemini 3.7 Flash in Antigravity. Use when extracting specific animations, canvas shaders, hero layouts, buttons, or hover states from reference code.
---

# HTML To Interaction Prompts (Antigravity Edition)

## Goal
Turn any reference HTML file, web export, or live URL into modular, screenshot-backed interaction prompt cards tailored for **Gemini 3.7 Flash (High)**.

## Workflow

1. **Inspect the Code Technical Layers**:
   - Search for canvas, WebGL, `requestAnimationFrame`, GSAP ScrollTrigger, Lenis, Framer Motion, and CSS transitions.
   - Separate layout CSS from motion JavaScript.

2. **Modularize by Interaction Concept**:
   - Break the source into distinct prompt units:
     - *Hero Canvas / Shader Background*
     - *Card Hover & Beam Glow Effect*
     - *Scroll-Pinned Storytelling Beat*
     - *Staggered Split-Text Reveal*

3. **Build the Gemini 3.7 Flash Prompt Card**:
   - Each prompt card must contain:
     - **Goal & Core Mechanism**
     - **Exact CSS Tokens / Mathematical Easing**
     - **React Component & Tailwind Snippet**
     - **Vanilla Vite / ESM Fallback**
     - **Accessibility & Teardown / Cleanup**

4. **Verify in Antigravity**:
   - Test generated code using a local dev server or Antigravity browser tools.
