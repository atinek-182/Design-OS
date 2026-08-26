import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, '.agents', 'skills');

const args = process.argv.slice(2);
const isAll = args.includes('--all');
const isMissingOnly = args.includes('--missing') || args.length === 0;
const targetSkill = args.find(a => !a.startsWith('--'));

function getSkillDirectories() {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  return fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();
}

function parseSkill(skillName) {
  const skillDir = path.join(SKILLS_DIR, skillName);
  const skillMdPath = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(skillMdPath)) return null;

  const content = fs.readFileSync(skillMdPath, 'utf8');
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const descMatch = content.match(/description:\s*(?:>-\s*)?([^\n\r]+(?:\n\s+[^\n\r]+)*)/i);

  const title = titleMatch ? titleMatch[1].trim() : skillName;
  const description = descMatch ? descMatch[1].replace(/["']/g, '').trim() : `High-impact design engineering skill for ${skillName}.`;

  // Scan for headings or principles
  const headings = [...content.matchAll(/^##\s+(.+)$/gm)].map(m => m[1].trim());

  return {
    name: skillName,
    title,
    description,
    headings,
    rawContent: content
  };
}

function generateDemoHtml(skill) {
  const headingsList = skill.headings.slice(0, 4);
  const title = skill.title;
  const name = skill.name;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Antigravity Design OS Demo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-zinc-950 text-zinc-100 min-h-screen p-6 md:p-12 selection:bg-sky-500/30">

  <!-- Header -->
  <header class="max-w-5xl mx-auto pb-8 border-b border-zinc-800/80 mb-10">
    <div class="flex items-center gap-2 mb-1.5">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">Skill: ${name}</span>
      <span class="text-xs text-zinc-500">Antigravity Design OS</span>
    </div>
    <h1 class="text-3xl font-bold tracking-tight text-white">${title}</h1>
    <p class="text-sm text-zinc-400 mt-1 max-w-3xl leading-relaxed">${skill.description}</p>
  </header>

  <!-- Interactive Sandbox Canvas -->
  <main class="max-w-5xl mx-auto space-y-10">

    <!-- Active Component Demo Preview -->
    <section class="relative overflow-hidden bg-gradient-to-b from-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
      <div class="flex items-center justify-between pb-6 border-b border-zinc-800/80 mb-6">
        <div>
          <span class="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold">Interactive Sandbox</span>
          <h2 class="text-lg font-bold text-white mt-0.5">Live Component Implementation</h2>
        </div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Verified
          </span>
        </div>
      </div>

      <!-- Demonstration Element -->
      <div class="py-8 flex flex-col items-center justify-center gap-6 text-center">
        <div class="p-8 max-w-md w-full bg-zinc-900/60 border border-zinc-700/60 rounded-2xl shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-sky-500/50 hover:shadow-sky-500/10">
          <div class="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto mb-4 font-mono font-bold text-lg">
            &diams;
          </div>
          <h3 class="text-base font-bold text-white mb-1">${title}</h3>
          <p class="text-xs text-zinc-400 mb-6">Production design standard applied directly in accordance with Antigravity rules.</p>
          <button class="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 active:scale-[0.96] text-white text-xs font-semibold rounded-xl transition-all duration-150 shadow-lg shadow-sky-600/20">
            Trigger Interaction
          </button>
        </div>
      </div>
    </section>

    <!-- Core Rules & Principles Matrix -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
      ${headingsList.map((h, i) => `
      <div class="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5">
        <div class="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
          <span class="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center text-[10px] font-bold">${i + 1}</span>
          <span>Principle</span>
        </div>
        <h4 class="text-sm font-semibold text-white mb-1.5">${h}</h4>
        <p class="text-xs text-zinc-400 leading-relaxed">
          Enforces strict domain execution constraints and deterministic technical specifications.
        </p>
      </div>
      `).join('')}
    </section>

  </main>

  <footer class="max-w-5xl mx-auto mt-16 pt-6 border-t border-zinc-900 text-center text-xs font-mono text-zinc-600">
    Antigravity Design OS &bull; Calibrated for Gemini 3.7 Flash (High) &bull; React / Vite Native
  </footer>

</body>
</html>`;
}

function generatePromptMd(skill) {
  return `# ${skill.title}: Gemini 3.7 Flash Technical Superprompt

Use this 7-layer technical contract when prompting **Gemini 3.7 Flash (High)** in Antigravity or AI web builders.

\`\`\`markdown
You are a senior design engineer implementing [COMPONENT_NAME] adhering to the "${skill.title}" specification.

### 1. Visual Thesis & Archetype
- **Aesthetic Direction**: Awwwards-tier visual craft with high intentionality. Never produce generic corporate placeholders.
- **Design Intent**: ${skill.description}

### 2. Tokens & Design System
- **Color Palette**: Neutral dark foundation (\`#09090b\` / \`#18181b\`) paired with crisp semantic accents and calibrated APCA/WCAG contrast pairs.
- **Typography Scale**: High-contrast typographic measure with tabular numbers for data alignments.
- **Surface Elevation**: Multi-stop diffuse neutral box shadows rather than harsh bounding strokes.

### 3. Layout & DOM Structure
- Semantic HTML5 structure with accessible \`<main>\`, \`<header>\`, and interactive controls.
- Responsive reflow guaranteed down to 320px width without horizontal scroll clipping.

### 4. Motion & Micro-Interactions
- Smooth micro-interactions: tactile scale-on-press (\`scale(0.96)\` @ 120ms \`cubic-bezier(0.2, 0, 0, 1)\`).
- Interruptible CSS transitions for user-triggered state switches.

### 5. Accessibility & Guards
- Full keyboard navigability with visible \`:focus-visible\` rings.
- Respect \`prefers-reduced-motion: reduce\` with instant opacity crossfades.
- Accessible ARIA labels on all icon-only actions.

### 6. Zero-Placeholder Asset Strategy
- No "Lorem Ipsum", no empty buttons, and no broken external image links. Use concrete domain copy.
\`\`\`
`;
}

function scaffoldSkill(skillName, force = false) {
  const skill = parseSkill(skillName);
  if (!skill) {
    console.error(`❌ Skill [${skillName}] not found or missing SKILL.md`);
    return;
  }

  const demoDir = path.join(SKILLS_DIR, skillName, 'demo');
  if (!fs.existsSync(demoDir)) fs.mkdirSync(demoDir, { recursive: true });

  const demoHtmlPath = path.join(demoDir, 'index.html');
  const promptMdPath = path.join(demoDir, 'PROMPT.md');

  let htmlCreated = false;
  let promptCreated = false;

  if (force || !fs.existsSync(demoHtmlPath)) {
    fs.writeFileSync(demoHtmlPath, generateDemoHtml(skill), 'utf8');
    htmlCreated = true;
  }

  if (force || !fs.existsSync(promptMdPath)) {
    fs.writeFileSync(promptMdPath, generatePromptMd(skill), 'utf8');
    promptCreated = true;
  }

  if (htmlCreated || promptCreated) {
    console.log(`  ✨ [${skillName}] Scaffolding complete: ${htmlCreated ? 'index.html ' : ''}${promptCreated ? 'PROMPT.md' : ''}`);
  }
}

function main() {
  console.log(`🚀 Antigravity Design OS: Demo & Prompt Scaffolding Engine\n`);

  if (targetSkill) {
    console.log(`Targeting single skill: ${targetSkill}`);
    scaffoldSkill(targetSkill, true);
  } else {
    const allSkills = getSkillDirectories();
    console.log(`Scanning ${allSkills.length} skills (Mode: ${isAll ? 'Force All' : 'Missing Only'})...`);
    
    let count = 0;
    for (const name of allSkills) {
      const demoHtml = path.join(SKILLS_DIR, name, 'demo', 'index.html');
      const promptMd = path.join(SKILLS_DIR, name, 'demo', 'PROMPT.md');
      
      const isMissing = !fs.existsSync(demoHtml) || !fs.existsSync(promptMd);
      if (isAll || (isMissingOnly && isMissing)) {
        scaffoldSkill(name, isAll);
        count++;
      }
    }
    console.log(`\n🎉 Scaffolding completed across ${count} skills.`);
  }
}

main();
