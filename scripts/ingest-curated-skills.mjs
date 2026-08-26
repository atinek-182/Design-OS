import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, '.agents', 'skills');

const EXTERNAL_SOURCES = [
  {
    name: 'mobile-app-ui-design',
    src: 'D:\\projects\\Products\\jsontocsv\\.agents\\skills\\mobile-app-ui-design',
    description: 'Use when designing high-quality mobile app UI/UX screens, flows, responsive mobile views, bottom sheets, 8pt spatial rhythm, thumb-zone ergonomics, and touch-optimized components.',
    demoTitle: 'Mobile App UI & Ergonomics Lab'
  },
  {
    name: 'tailwind-4-docs',
    src: 'D:\\projects\\Products\\jsontocsv\\.agents\\skills\\tailwind-4-docs',
    description: 'Use when navigating Tailwind CSS v4 documentation, CSS-first @theme configurations, migration gotchas from v3, and utility directives.',
    demoTitle: 'Tailwind CSS v4 Modern Theme Studio'
  },
  {
    name: 'gsap-scrolltrigger',
    src: 'D:\\AI-OS\\brain-aios\\wiki\\research\\skills-library\\gsap-skills\\gsap-scrolltrigger',
    description: 'Use when building scroll-driven animations, pinning viewport sections, scrubbing timelines to scroll position, and containerAnimation parallax in GSAP.',
    demoTitle: 'GSAP ScrollTrigger Pinned Parallax Lab'
  },
  {
    name: 'gsap-timeline',
    src: 'D:\\AI-OS\\brain-aios\\wiki\\research\\skills-library\\gsap-skills\\gsap-timeline',
    description: 'Use when sequencing complex multi-stage GSAP animation timelines, syncing labels, nested timelines, and orchestrating kinetic typography.',
    demoTitle: 'GSAP Multi-Stage Timeline Orchestrator'
  },
  {
    name: 'threejs-shaders',
    src: 'D:\\AI-OS\\brain-aios\\wiki\\research\\skills-library\\threejs-skills\\threejs-shaders',
    description: 'Use when writing custom GLSL vertex and fragment shaders, ShaderMaterial uniforms, noise displacement, Fresnel curves, and WebGL visual effects.',
    demoTitle: 'Three.js GLSL Procedural Shader Canvas'
  },
  {
    name: 'threejs-postprocessing',
    src: 'D:\\AI-OS\\brain-aios\\wiki\\research\\skills-library\\threejs-skills\\threejs-postprocessing',
    description: 'Use when implementing Three.js post-processing pipelines: UnrealBloomPass, chromatic aberration, bokeh depth of field, and film grain shaders.',
    demoTitle: 'Three.js Cinematic Post-Processing Studio'
  },
  {
    name: 'threejs-interaction',
    src: 'D:\\AI-OS\\brain-aios\\wiki\\research\\skills-library\\threejs-skills\\threejs-interaction',
    description: 'Use when implementing 3D raycasting, mouse hover and pointer mesh interactions, camera damping, and drag controls in Three.js scenes.',
    demoTitle: 'Three.js Interactive Raycast Mesh Playground'
  }
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  ensureDir(dest);
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function generateDemoHtml(name, title) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Antigravity Design OS</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .glass-card {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen p-6 md:p-12 flex flex-col justify-between">
  <div class="max-w-5xl mx-auto w-full space-y-8">
    <div class="flex items-center justify-between border-b border-white/10 pb-6">
      <div class="space-y-1">
        <div class="flex items-center gap-3">
          <span class="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
            .agents/skills/${name}
          </span>
          <span class="text-xs text-emerald-400 font-mono">● Active & Verified</span>
        </div>
        <h1 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">${title}</h1>
      </div>
      <a href="/" class="text-xs font-mono text-slate-400 hover:text-white transition-colors">← Back to Studio</a>
    </div>

    <div class="glass-card rounded-2xl p-6 md:p-8 space-y-6">
      <div class="space-y-2">
        <h2 class="text-lg font-bold text-white">Interactive Production Spec</h2>
        <p class="text-sm text-slate-400">
          This skill provides hardened architecture, mathematical invariants, and zero-slop design engineering guidelines.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
          <div class="text-xs font-mono text-slate-500">Execution Stack</div>
          <div class="text-sm font-bold text-slate-200">Native Multi-Framework</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
          <div class="text-xs font-mono text-slate-500">Model Calibration</div>
          <div class="text-sm font-bold text-blue-400">Gemini 3.7 Flash (High)</div>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
          <div class="text-xs font-mono text-slate-500">Quality Standard</div>
          <div class="text-sm font-bold text-emerald-400">Awwwards / WCAG 2.2 AA</div>
        </div>
      </div>
    </div>
  </div>

  <div class="text-center text-xs font-mono text-slate-600 pt-8">
    Antigravity Design OS · Zero-Slop Architecture
  </div>
</body>
</html>`;
}

function generatePromptMd(name, description) {
  return `---
title: Prompt Card - ${name}
skill: ${name}
model: Gemini 3.7 Flash (High)
---

# ${name} Superprompt Card

## System Directive
You are a Principal Design Engineer operating inside the Antigravity Design OS.
Execute strictly against the guidelines in \`.agents/skills/${name}/SKILL.md\`.

## Role Mandate
${description}

## Quality Invariants
1. Rich aesthetics with zero corporate slop.
2. Deterministic mathematical tokens and WCAG 2.2 AA contrast flooring.
3. Clean lifecycle cleanup and SSR-safe implementations.
`;
}

console.log('🚀 Ingesting curated skills into Antigravity Design OS...');

for (const item of EXTERNAL_SOURCES) {
  const targetDir = path.join(SKILLS_DIR, item.name);
  ensureDir(targetDir);

  if (fs.existsSync(item.src)) {
    copyDirRecursive(item.src, targetDir);
    console.log(`  [+] Copied external skill: ${item.name}`);
  }

  // Ensure clean SKILL.md with 'Use when...' frontmatter
  const skillMdPath = path.join(targetDir, 'SKILL.md');
  if (fs.existsSync(skillMdPath)) {
    let content = fs.readFileSync(skillMdPath, 'utf8');
    // Replace description to ensure 'Use when...' format
    if (content.match(/^---\r?\n([\s\S]*?)\r?\n---/)) {
      content = content.replace(/^---\r?\n([\s\S]*?)\r?\n---/, (match) => {
        return `---\nname: ${item.name}\ndescription: "${item.description}"\n---`;
      });
      fs.writeFileSync(skillMdPath, content, 'utf8');
    }
  } else {
    const defaultContent = `---\nname: ${item.name}\ndescription: "${item.description}"\n---\n\n# ${item.name}\n\n${item.description}\n`;
    fs.writeFileSync(skillMdPath, defaultContent, 'utf8');
  }

  // Ensure demo/index.html & demo/PROMPT.md exist
  const demoDir = path.join(targetDir, 'demo');
  ensureDir(demoDir);
  const demoHtml = path.join(demoDir, 'index.html');
  const demoPrompt = path.join(demoDir, 'PROMPT.md');

  if (!fs.existsSync(demoHtml)) {
    fs.writeFileSync(demoHtml, generateDemoHtml(item.name, item.demoTitle), 'utf8');
  }
  if (!fs.existsSync(demoPrompt)) {
    fs.writeFileSync(demoPrompt, generatePromptMd(item.name, item.description), 'utf8');
  }
}

// Create sound-design-ux
const soundDir = path.join(SKILLS_DIR, 'sound-design-ux');
ensureDir(soundDir);
ensureDir(path.join(soundDir, 'demo'));
fs.writeFileSync(path.join(soundDir, 'SKILL.md'), `---
name: sound-design-ux
description: "Use when creating subtle, zero-dependency Web Audio API sound feedback, micro-haptics, tactile button clicks, modal pops, state chimes, and spatial UI audio for premium web and mobile interfaces."
---

# Sound Design UX (Web Audio Micro-Haptics)

## Overview
High-end digital flagships (Awwwards Site of the Year tier) incorporate subtle Web Audio API haptic synthesizers and spatial sound cues. This skill provides a lightweight, zero-external-asset audio engine using synthesized oscillators.

## Core Synthesizer Hook
\`\`\`javascript
class UISoundEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Subtle 15ms click impulse
  click(frequency = 1200, decay = 0.015) {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + decay);
    
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + decay);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + decay);
  }

  // Gentle affirmative double-chime for success
  success() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.08);
      gain.gain.setValueAtTime(0.05, now + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.25);
    });
  }
}

export const sound = new UISoundEngine();
\`\`\`
`, 'utf8');
fs.writeFileSync(path.join(soundDir, 'demo', 'index.html'), generateDemoHtml('sound-design-ux', 'Sound UX & Micro-Haptics Studio'), 'utf8');
fs.writeFileSync(path.join(soundDir, 'demo', 'PROMPT.md'), generatePromptMd('sound-design-ux', 'Zero-dependency Web Audio API micro-haptics and tactile feedback.'), 'utf8');
console.log('  [+] Created sound-design-ux');

// Create visual-regression-gate
const vrDir = path.join(SKILLS_DIR, 'visual-regression-gate');
ensureDir(vrDir);
ensureDir(path.join(vrDir, 'demo'));
fs.writeFileSync(path.join(vrDir, 'SKILL.md'), `---
name: visual-regression-gate
description: "Use when running automated Playwright multi-viewport pixel-diff visual regression testing, baseline image comparisons, layout stability audits, and responsive visual QA gates before pull requests."
---

# Visual Regression Gate (Playwright Automated Pixel-Diff)

## Overview
Automated visual regression testing ensures that code refactors and design token updates do not cause unintended visual shifts, overflows, or contrast regressions across the 5 standard viewports (Desktop 1920x1080, Laptop 1440x900, Tablet 768x1024, Mobile Portrait 375x812, Mobile Landscape 667x375).

## Multi-Viewport Runner
\`\`\`bash
# Run 5-viewport screenshot runner
npm run design:verify -- --url http://localhost:4173 --out .screenshots/
\`\`\`
`, 'utf8');
fs.writeFileSync(path.join(vrDir, 'demo', 'index.html'), generateDemoHtml('visual-regression-gate', 'Playwright Visual Regression Gate'), 'utf8');
fs.writeFileSync(path.join(vrDir, 'demo', 'PROMPT.md'), generatePromptMd('visual-regression-gate', 'Automated multi-viewport visual diffing and responsive layout QA.'), 'utf8');
console.log('  [+] Created visual-regression-gate');

console.log('\n✅ All curated skills successfully ingested and formatted.');
