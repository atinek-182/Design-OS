import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, '.agents', 'skills');
const LOCK_FILE = path.join(ROOT_DIR, 'skills-lock.json');
const README_FILE = path.join(ROOT_DIR, 'README.md');

function syncCatalog() {
  console.log('🔄 Syncing Design OS Catalog & Lockfile...');

  if (!fs.existsSync(SKILLS_DIR)) {
    console.error('❌ Skills directory not found:', SKILLS_DIR);
    return;
  }

  const skillDirs = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  let lockData = { version: 1, skills: {} };
  if (fs.existsSync(LOCK_FILE)) {
    try {
      lockData = JSON.parse(fs.readFileSync(LOCK_FILE, 'utf8'));
    } catch (e) {}
  }

  const categorized = {
    'Tier 1: Core Architectural Powerhouses': [],
    'Tier 2: Visual Aesthetics & WebGL FX': [],
    'Tier 3: Workflows & Prompt Engineering (Gemini 3.7 Flash)': [],
    'Tier 4: Interface Quality & Systems (Jakub Krehel / interfaces.dev)': [],
    'Tier 5: Cognitive Psychology & Interaction Laws (Laws of UX)': [],
    'Tier 6: UX Strategy & User Research Frameworks (JTBD / Nielsen Norman)': [],
    'Tier 7: Design Systems Architecture & Governance': [],
    'Tier 8: Design Operations, Handoff & Advocacy': [],
    'Interaction & Micro-Physics Polish (Emil Kowalski / Apple)': [],
    'Multi-Step Workflow Engines (Slash Commands)': [],
    'Other / Uncategorized': []
  };

  const allSkills = [];

  const cognitiveLaws = new Set([
    'fitts-law', 'hicks-law', 'millers-law', 'jakobs-law', 'peak-end-rule',
    'doherty-threshold', 'teslers-law', 'zeigarnik-effect', 'serial-position-effect',
    'law-of-closure', 'law-of-common-region', 'law-of-continuity', 'law-of-figure-ground',
    'law-of-proximity', 'law-of-similarity', 'von-restorff-effect', 'aesthetic-usability',
    'interfaces-that-feel'
  ]);

  const uxStrategyResearch = new Set([
    'jobs-to-be-done', 'user-persona', 'journey-map', 'affinity-diagram', 'empathy-map',
    'north-star-vision', 'business-design', 'service-blueprint', 'stakeholder-alignment',
    'opportunity-framework', 'metrics-definition', 'information-architecture',
    'competitive-analysis', 'content-strategy', 'design-brief', 'interview-script',
    'summarize-interview', 'survey-design', 'usability-test-plan', 'card-sort-analysis',
    'diary-study-plan', 'research-repository', 'experience-map'
  ]);

  const designSystems = new Set([
    'component-spec', 'design-system-governance', 'design-token', 'theming-system',
    'naming-convention', 'pattern-library', 'localization-design', 'documentation-template',
    'data-visualization', 'illustration-style', 'platform-conventions', 'state-machine'
  ]);

  const designOps = new Set([
    'design-critique', 'design-debt-audit', 'design-sprint-plan', 'design-review-process',
    'design-impact-reporting', 'handoff-spec', 'team-workflow', 'version-control-strategy',
    'case-study', 'design-negotiation', 'design-rationale', 'design-system-adoption',
    'design-token-audit', 'presentation-deck', 'a-b-test-design', 'click-test-plan',
    'user-flow-diagram', 'wireframe-spec', 'test-scenario', 'accessibility-test-plan',
    'conversational-ux', 'onboarding-design', 'form-design', 'navigation-patterns',
    'gesture-patterns', 'search-ux', 'error-handling-ux'
  ]);

  for (const name of skillDirs) {
    const skillPath = path.join(SKILLS_DIR, name, 'SKILL.md');
    const demoPath = path.join(SKILLS_DIR, name, 'demo', 'index.html');
    const previewPath = path.join(SKILLS_DIR, name, 'demo', 'preview.jpg');
    const promptPath = path.join(SKILLS_DIR, name, 'demo', 'PROMPT.md');

    let description = 'No description provided.';
    let tier = lockData.skills[name]?.tier || null;
    let source = lockData.skills[name]?.source || 'local';

    if (fs.existsSync(skillPath)) {
      const content = fs.readFileSync(skillPath, 'utf8');
      const descMatch = content.match(/description:\s*(?:>-\s*)?([^\n\r]+(?:\n\s+[^\n\r]+)*)/i);
      if (descMatch) {
        description = descMatch[1].replace(/["']/g, '').trim();
      }
    }

    const item = {
      name,
      description,
      tier,
      source,
      hasDemo: fs.existsSync(demoPath),
      hasPreview: fs.existsSync(previewPath),
      hasPrompt: fs.existsSync(promptPath)
    };

    allSkills.push(item);

    // Update lockfile entry
    if (!lockData.skills[name]) {
      const isJakub = ['better-accessibility', 'better-colors', 'better-interface', 'better-layout', 'better-typography', 'better-ui', 'better-writing', 'break', 'explain-interface', 'interface-review', 'variant'].includes(name);
      const isTastemaker = ['tastemaker', 'ideagram'].includes(name);
      const isDesignerSkills = cognitiveLaws.has(name) || uxStrategyResearch.has(name) || designSystems.has(name) || designOps.has(name) || name.startsWith('workflow-');

      lockData.skills[name] = {
        source: isJakub ? 'jakubkrehel/skills' : (isTastemaker ? 'codeswithroh/tastemaker' : (isDesignerSkills ? 'Owl-Listener/designer-skills' : source)),
        sourceType: 'github',
        skillPath: `skills/${name}/SKILL.md`,
        installedAt: new Date().toISOString()
      };
    } else if (['better-accessibility', 'better-colors', 'better-interface', 'better-layout', 'better-typography', 'better-ui', 'better-writing', 'break', 'explain-interface', 'interface-review', 'variant'].includes(name)) {
      lockData.skills[name].source = 'jakubkrehel/skills';
      lockData.skills[name].tier = 4;
    } else if (['tastemaker', 'ideagram'].includes(name)) {
      lockData.skills[name].source = 'codeswithroh/tastemaker';
      lockData.skills[name].tier = 4;
    }

    // Categorize
    if (name.startsWith('workflow-')) {
      categorized['Multi-Step Workflow Engines (Slash Commands)'].push(item);
    } else if (tier === 1 || ['build-awwwards-quality-sites', 'cinematic-gsap-lenis-motion-system', 'liquid-metal-border', 'editorial-tech', 'beautiful-shadows', 'progressive-blur', 'cobejs', 'design-first-ui-prompting'].includes(name)) {
      categorized['Tier 1: Core Architectural Powerhouses'].push(item);
    } else if (tier === 2 || ['glass-dark-ui', 'dither-background', 'mesh-gradient-dark-blue-clean', 'solar-duotone-bold', 'clean-minimal-beige-light-mode', 'high-contrast-skeuomorphic-clean', 'add-shader-cursor-trail', 'shaders-cursor-ripples', 'matterjs', 'css-border-gradient', 'beam-glow-states', 'staggered-word-reveal'].includes(name)) {
      categorized['Tier 2: Visual Aesthetics & WebGL FX'].push(item);
    } else if (tier === 3 || ['video-to-superprompt', 'html-to-interaction-prompts', 'daily-ui-inspiration-capture', 'web-technique-to-skill', 'ingest-design-skills'].includes(name)) {
      categorized['Tier 3: Workflows & Prompt Engineering (Gemini 3.7 Flash)'].push(item);
    } else if (tier === 4 || ['tastemaker', 'ideagram', 'better-accessibility', 'better-colors', 'better-interface', 'better-layout', 'better-typography', 'better-ui', 'better-writing', 'break', 'explain-interface', 'interface-review', 'variant'].includes(name)) {
      categorized['Tier 4: Interface Quality & Systems (Jakub Krehel / interfaces.dev)'].push(item);
    } else if (cognitiveLaws.has(name)) {
      categorized['Tier 5: Cognitive Psychology & Interaction Laws (Laws of UX)'].push(item);
    } else if (uxStrategyResearch.has(name)) {
      categorized['Tier 6: UX Strategy & User Research Frameworks (JTBD / Nielsen Norman)'].push(item);
    } else if (designSystems.has(name)) {
      categorized['Tier 7: Design Systems Architecture & Governance'].push(item);
    } else if (designOps.has(name)) {
      categorized['Tier 8: Design Operations, Handoff & Advocacy'].push(item);
    } else if (['animate', 'animate-expo', 'animation-vocabulary', 'apple-design', 'ask-sonner', 'emil-design-eng', 'find-animation-opportunities', 'improve-animations', 'pick-ui-library', 'prototype', 'review-animations', 'web-design-engineer', 'write-swift'].includes(name)) {
      categorized['Interaction & Micro-Physics Polish (Emil Kowalski / Apple)'].push(item);
    } else {
      categorized['Other / Uncategorized'].push(item);
    }
  }

  // Save lock file
  fs.writeFileSync(LOCK_FILE, JSON.stringify(lockData, null, 2), 'utf8');

  // Build README.md
  let readme = `# 🌌 Antigravity Design OS

> **The Universal Design System, Interaction Engineering & Prompt Architecture Toolkit for AI Coding Agents (Gemini 3.7 Flash, Codex, Claude).**

This repository is an extensible **Design OS** containing **${allSkills.length} production-grade skills**, interactive visual demos, prompt cards, and reverse-engineering workflows. It bridges **Emil Kowalski's micro-physics & Apple polish** with **Meng To's Awwwards-level macro art direction, GSAP/Lenis motion, and WebGL shaders**.

---

## ⚡ Quick Start: Using in Any Project

You can copy or link the \`.agents/skills\` folder into any project root:

\`\`\`bash
# 1. Start the interactive Demo & Prompt Gallery server:
node scripts/serve-demos.mjs

# 2. Validate all skill triggers and Antigravity YAML frontmatter:
node scripts/validate-skills.mjs

# 3. Sync catalog and update skills-lock.json:
node scripts/sync-skills-catalog.mjs
\`\`\`

---

## 📚 Skill Catalog (${allSkills.length} Skills)

`;

  for (const [catName, list] of Object.entries(categorized)) {
    if (list.length === 0) continue;
    readme += `### ${catName} (${list.length})\n\n`;
    readme += `| Skill | Demo | Prompt Card | Description |\n`;
    readme += `| :--- | :---: | :---: | :--- |\n`;
    for (const s of list) {
      const demoBadge = s.hasDemo ? `[⚡ Demo](.agents/skills/${s.name}/demo/index.html)` : `—`;
      const promptBadge = s.hasPrompt ? `[📄 Prompt](.agents/skills/${s.name}/demo/PROMPT.md)` : `—`;
      readme += `| [\`${s.name}\`](.agents/skills/${s.name}/SKILL.md) | ${demoBadge} | ${promptBadge} | ${s.description} |\n`;
    }
    readme += `\n`;
  }

  readme += `---

## 🛠️ Stack Support
- **React / Next.js (App Router)**: Complete client boundary guides (\`'use client'\`), \`useGSAP\` / \`useEffect\` teardowns, SSR checks, and Tailwind v3/v4 utilities.
- **Vite (Vanilla/React)**: Zero-dependency ESM recipes, HTML5 semantic layout trees, and mathematical CSS easing curves.
- **Gemini 3.7 Flash (High)**: Full 7-layer technical super-prompts with zero-placeholder enforcement.

---

## 📜 License
MIT License. Curated and adapted for Antigravity.
`;

  fs.writeFileSync(README_FILE, readme, 'utf8');
  console.log(`✅ Synced ${allSkills.length} skills into README.md and skills-lock.json!`);
}

syncCatalog();
