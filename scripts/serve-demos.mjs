import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, '.agents', 'skills');
const SHOWCASE_DIR = path.join(ROOT_DIR, 'docs', 'showcase', 'tastemaker');
const RESEARCH_DIR = path.join(ROOT_DIR, 'docs', 'research', 'tastemaker');
const PORT = process.env.PORT || 4173;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.md': 'text/markdown; charset=utf-8'
};

/**
 * Security: Assert that targetPath resolves strictly within baseDir
 */
function isSafePath(baseDir, targetPath) {
  const resolvedBase = path.resolve(baseDir);
  const resolvedTarget = path.resolve(targetPath);
  return resolvedTarget.startsWith(resolvedBase + path.sep) || resolvedTarget === resolvedBase;
}

/**
 * Security: Sanitize skill name slugs to prevent traversal
 */
function isValidSlug(name) {
  return typeof name === 'string' && /^[a-zA-Z0-9_-]+$/.test(name);
}

function getCategoryForSkill(name) {
  if (['build-awwwards-quality-sites', 'cinematic-gsap-lenis-motion-system', 'liquid-metal-border', 'editorial-tech', 'beautiful-shadows', 'progressive-blur', 'cobejs', 'design-first-ui-prompting'].includes(name)) {
    return { tier: 'tier1', label: 'Tier 1: Core Arch', badgeClass: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' };
  } else if (['glass-dark-ui', 'dither-background', 'mesh-gradient-dark-blue-clean', 'solar-duotone-bold', 'clean-minimal-beige-light-mode', 'high-contrast-skeuomorphic-clean', 'add-shader-cursor-trail', 'shaders-cursor-ripples', 'matterjs', 'css-border-gradient', 'beam-glow-states', 'staggered-word-reveal', 'threejs-shaders', 'threejs-postprocessing', 'threejs-interaction', 'shader-cursor-effects'].includes(name)) {
    return { tier: 'tier2', label: 'Tier 2: Visual FX', badgeClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20' };
  } else if (['video-to-superprompt', 'html-to-interaction-prompts', 'daily-ui-inspiration-capture', 'web-technique-to-skill', 'ingest-design-skills', 'sound-design-ux', 'visual-regression-gate', 'tailwind-4-docs'].includes(name)) {
    return { tier: 'tier3', label: 'Tier 3: Workflows', badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
  } else if (['tastemaker', 'ideagram', 'better-accessibility', 'better-colors', 'better-interface', 'better-layout', 'better-typography', 'better-ui', 'better-writing', 'break', 'explain-interface', 'interface-review', 'variant'].includes(name)) {
    return { tier: 'tier4', label: 'Tier 4: Anti-Slop & Quality', badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
  } else if (['mobile-app-ui-design', 'animate-expo', 'apple-design', 'write-swift'].includes(name)) {
    return { tier: 'mobile', label: 'Mobile & iOS Native', badgeClass: 'bg-rose-500/10 text-rose-400 border-rose-500/20' };
  } else {
    return { tier: 'emil', label: 'Apple & Micro-Physics', badgeClass: 'bg-sky-500/10 text-sky-400 border-sky-500/20' };
  }
}

function getTotalSkillsCount() {
  if (!fs.existsSync(SKILLS_DIR)) return 0;
  return fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .length;
}

function getDemos() {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  const skills = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  const demos = [];
  for (const name of skills) {
    const demoPath = path.join(SKILLS_DIR, name, 'demo', 'index.html');
    const previewPath = path.join(SKILLS_DIR, name, 'demo', 'preview.jpg');
    const promptPath = path.join(SKILLS_DIR, name, 'demo', 'PROMPT.md');
    const skillMd = path.join(SKILLS_DIR, name, 'SKILL.md');

    let title = name;
    let description = '';
    if (fs.existsSync(skillMd)) {
      const content = fs.readFileSync(skillMd, 'utf8');
      const match = content.match(/description:\s*([^\n\r]+)/i);
      if (match) description = match[1].replace(/["']/g, '');
    }

    const cat = getCategoryForSkill(name);

    if (fs.existsSync(demoPath)) {
      demos.push({
        name,
        title,
        description,
        demoUrl: `/demo/${name}/`,
        hasPreview: fs.existsSync(previewPath),
        previewUrl: fs.existsSync(previewPath) ? `/preview/${name}/` : null,
        hasPrompt: fs.existsSync(promptPath),
        tier: cat.tier,
        categoryLabel: cat.label,
        badgeClass: cat.badgeClass
      });
    }
  }
  return demos;
}

function renderGallery(demos, totalSkills) {
  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Antigravity Design OS — Studio & Quality Workbench</title>
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
    .font-mono { font-family: 'JetBrains Mono', monospace; }
    .glass-panel {
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen p-6 md:p-12 selection:bg-blue-500/30 selection:text-blue-200">

  <!-- Notification Toast -->
  <div id="toast" class="fixed bottom-6 right-6 px-4 py-3 rounded-xl bg-slate-900 border border-blue-500/30 text-blue-300 text-xs font-mono shadow-2xl flex items-center gap-2 transform translate-y-20 opacity-0 transition-all duration-300 z-50">
    <span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
    <span id="toast-msg">Copied prompt to clipboard!</span>
  </div>

  <div class="max-w-7xl mx-auto space-y-10">

    <!-- Header & Hero -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/25">
            ✦
          </div>
          <h1 class="text-3xl font-extrabold tracking-tight text-white">Antigravity Design OS</h1>
          <span class="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold">
            ${totalSkills} Skills Active
          </span>
        </div>
        <p class="text-slate-400 text-sm max-w-2xl">
          Universal design engineering studio: Awwwards motion, WebGL shaders, deterministic contrast math, anti-slop AST linters, and multi-tier prompt engineering calibrated for <span class="text-slate-200 font-semibold">Gemini 3.7 Flash (High)</span>.
        </p>
      </div>

      <!-- Quick Studio Actions -->
      <div class="flex flex-wrap items-center gap-3">
        <a href="/showcase/tastemaker/compare.html" target="_blank" class="px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-2 transition-all">
          <span>⚡ Anti-Slop Benchmark Lab ↗</span>
        </a>
        <a href="/demo/tastemaker/" target="_blank" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 transition-all">
          Launch Tastemaker Engine ↗
        </a>
      </div>
    </div>

    <!-- Quick Stats Telemetry Row -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div class="glass-panel p-4 rounded-xl space-y-1">
        <div class="text-xs text-slate-400 font-mono">Total Design-OS Skills</div>
        <div class="text-2xl font-bold text-white font-mono">${totalSkills}</div>
      </div>
      <div class="glass-panel p-4 rounded-xl space-y-1">
        <div class="text-xs text-slate-400 font-mono">Anti-Slop Linter Gates</div>
        <div class="text-2xl font-bold text-emerald-400 font-mono">14 Rules</div>
      </div>
      <div class="glass-panel p-4 rounded-xl space-y-1">
        <div class="text-xs text-slate-400 font-mono">Deterministic Scripts</div>
        <div class="text-2xl font-bold text-blue-400 font-mono">14 Utilities</div>
      </div>
      <div class="glass-panel p-4 rounded-xl space-y-1">
        <div class="text-xs text-slate-400 font-mono">Live Interactive Demos</div>
        <div class="text-2xl font-bold text-purple-400 font-mono">${demos.length} / ${totalSkills}</div>
      </div>
    </div>

    <!-- Filter Pills & Search Bar -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex flex-wrap items-center gap-2" id="filter-container">
        <button onclick="filterTier('all')" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono bg-blue-600 text-white font-semibold shadow-sm transition-all" data-tier="all">All (${demos.length})</button>
        <button onclick="filterTier('tier4')" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all" data-tier="tier4">Anti-Slop & Quality</button>
        <button onclick="filterTier('tier1')" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all" data-tier="tier1">Tier 1: Core Arch</button>
        <button onclick="filterTier('tier2')" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all" data-tier="tier2">Tier 2: Visual FX</button>
        <button onclick="filterTier('tier3')" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all" data-tier="tier3">Tier 3: Workflows</button>
        <button onclick="filterTier('mobile')" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all" data-tier="mobile">Mobile & Native</button>
        <button onclick="filterTier('emil')" class="filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all" data-tier="emil">Apple & Physics</button>
      </div>
      <div class="w-full sm:w-64">
        <input type="text" id="search-input" onkeyup="searchSkills()" placeholder="Search skills (e.g. contrast, gsap)..." class="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-200 placeholder-slate-500 font-mono focus:outline-none focus:border-blue-500 transition-all">
      </div>
    </div>

    <!-- Skills Gallery Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-grid">
      ${demos.map(d => `
        <div class="skill-card glass-panel rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all group" data-tier="${d.tier}" data-name="${d.name.toLowerCase()}" data-desc="${d.description.toLowerCase()}">
          <div class="space-y-2.5">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${d.badgeClass}">
                ${d.categoryLabel}
              </span>
              <span class="text-[11px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                .agents/skills/${d.name}
              </span>
            </div>
            <h3 class="text-base font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              ${d.title}
            </h3>
            <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
              ${d.description || 'Production-grade design engineering skill.'}
            </p>
          </div>

          <div class="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
            <button onclick="openModal('${d.demoUrl}', '${d.title}')" class="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5">
              <span>Preview Demo</span>
            </button>
            <div class="flex items-center gap-2">
              <button onclick="copyPrompt('${d.name}')" class="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-blue-400 transition-all text-xs" title="Copy Gemini 3.7 Flash Prompt Card">
                📋 Prompt
              </button>
              <a href="${d.demoUrl}" target="_blank" class="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all text-xs" title="Open in New Tab">
                ↗
              </a>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

  </div>

  <!-- Interactive Demo Modal -->
  <div id="modal" class="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 hidden flex items-center justify-center p-4 md:p-8">
    <div class="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl overflow-hidden">
      <!-- Modal Header -->
      <div class="h-14 px-6 border-b border-white/10 flex items-center justify-between bg-slate-950">
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-white" id="modal-title">Live Preview</span>
          <div class="flex items-center gap-1 bg-slate-900 border border-white/10 rounded-lg p-0.5">
            <button onclick="setViewport('100%')" id="vp-full" class="vp-btn px-2.5 py-1 rounded text-[11px] font-mono bg-blue-600 text-white font-semibold">Desktop</button>
            <button onclick="setViewport('768px')" id="vp-tablet" class="vp-btn px-2.5 py-1 rounded text-[11px] font-mono text-slate-400 hover:text-white">Tablet</button>
            <button onclick="setViewport('375px')" id="vp-mobile" class="vp-btn px-2.5 py-1 rounded text-[11px] font-mono text-slate-400 hover:text-white">Mobile</button>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <a href="#" id="modal-popout" target="_blank" class="text-xs font-mono text-slate-400 hover:text-white transition-colors">Pop Out ↗</a>
          <button onclick="closeModal()" class="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center font-bold">✕</button>
        </div>
      </div>
      <!-- Modal Body -->
      <div class="flex-1 bg-slate-950 flex justify-center items-center overflow-hidden">
        <iframe id="modal-frame" src="" class="w-full h-full border-0 transition-all duration-300"></iframe>
      </div>
    </div>
  </div>

  <script>
    function showToast(msg) {
      const toast = document.getElementById('toast');
      document.getElementById('toast-msg').textContent = msg;
      toast.classList.remove('translate-y-20', 'opacity-0');
      setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 2500);
    }

    async function copyPrompt(skillName) {
      try {
        const res = await fetch('/api/prompt/' + encodeURIComponent(skillName));
        if (!res.ok) throw new Error('Prompt not found');
        const text = await res.text();
        await navigator.clipboard.writeText(text);
        showToast('Copied ' + skillName + ' Superprompt to clipboard!');
      } catch (err) {
        showToast('Error copying prompt: ' + err.message);
      }
    }

    function filterTier(tier) {
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.className = 'filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all';
      });
      const targetBtn = document.querySelector('[data-tier="' + tier + '"]');
      if (targetBtn) {
        targetBtn.className = 'filter-btn px-3.5 py-1.5 rounded-lg text-xs font-mono bg-blue-600 text-white font-semibold shadow-sm transition-all';
      }

      document.querySelectorAll('.skill-card').forEach(card => {
        if (tier === 'all' || card.getAttribute('data-tier') === tier) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function searchSkills() {
      const q = document.getElementById('search-input').value.toLowerCase();
      document.querySelectorAll('.skill-card').forEach(card => {
        const name = card.getAttribute('data-name');
        const desc = card.getAttribute('data-desc');
        if (name.includes(q) || desc.includes(q)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function openModal(url, title) {
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-frame').src = url;
      document.getElementById('modal-popout').href = url;
      document.getElementById('modal').classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('modal').classList.add('hidden');
      document.getElementById('modal-frame').src = '';
    }

    function setViewport(w) {
      const frame = document.getElementById('modal-frame');
      frame.style.maxWidth = w;
      document.querySelectorAll('.vp-btn').forEach(b => {
        b.className = 'vp-btn px-2.5 py-1 rounded text-[11px] font-mono text-slate-400 hover:text-white';
      });
      if (w === '100%') document.getElementById('vp-full').className = 'vp-btn px-2.5 py-1 rounded text-[11px] font-mono bg-blue-600 text-white font-semibold';
      if (w === '768px') document.getElementById('vp-tablet').className = 'vp-btn px-2.5 py-1 rounded text-[11px] font-mono bg-blue-600 text-white font-semibold';
      if (w === '375px') document.getElementById('vp-mobile').className = 'vp-btn px-2.5 py-1 rounded text-[11px] font-mono bg-blue-600 text-white font-semibold';
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });
  </script>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = decodeURIComponent(url.pathname);

    // Gallery home
    if (pathname === '/' || pathname === '/index.html') {
      const demos = getDemos();
      const totalSkills = getTotalSkillsCount();
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(renderGallery(demos, totalSkills));
      return;
    }

    // REST API: Get Prompt Card
    if (pathname.startsWith('/api/prompt/')) {
      const skillName = pathname.replace('/api/prompt/', '').replace(/\/$/, '');
      if (!isValidSlug(skillName)) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('400 Invalid skill name');
        return;
      }
      const promptPath = path.join(SKILLS_DIR, skillName, 'demo', 'PROMPT.md');
      if (isSafePath(SKILLS_DIR, promptPath) && fs.existsSync(promptPath)) {
        res.writeHead(200, { 'Content-Type': 'text/markdown; charset=utf-8' });
        res.end(fs.readFileSync(promptPath, 'utf8'));
        return;
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Prompt card not found for: ' + skillName);
        return;
      }
    }

    // Showcase static files (Guarded Against Path Traversal)
    if (pathname.startsWith('/showcase/tastemaker/')) {
      const subPath = pathname.replace('/showcase/tastemaker/', '') || 'index.html';
      const filePath = path.join(SHOWCASE_DIR, subPath);
      if (isSafePath(SHOWCASE_DIR, filePath) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(fs.readFileSync(filePath));
        return;
      }
    }

    // Research static files (Guarded Against Path Traversal)
    if (pathname.startsWith('/research/tastemaker/')) {
      const subPath = pathname.replace('/research/tastemaker/', '') || 'README.md';
      const filePath = path.join(RESEARCH_DIR, subPath);
      if (isSafePath(RESEARCH_DIR, filePath) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(fs.readFileSync(filePath));
        return;
      }
    }

    // Handle demo preview image (Guarded Against Path Traversal)
    if (pathname.startsWith('/preview/')) {
      const skillName = pathname.split('/')[2];
      if (isValidSlug(skillName)) {
        const previewFile = path.join(SKILLS_DIR, skillName, 'demo', 'preview.jpg');
        if (isSafePath(SKILLS_DIR, previewFile) && fs.existsSync(previewFile)) {
          res.writeHead(200, { 'Content-Type': 'image/jpeg' });
          res.end(fs.readFileSync(previewFile));
          return;
        }
      }
    }

    // Handle demo files (Guarded Against Path Traversal)
    if (pathname.startsWith('/demo/')) {
      const parts = pathname.replace('/demo/', '').split('/');
      const skillName = parts[0];
      const subPath = parts.slice(1).join('/') || 'index.html';
      if (isValidSlug(skillName)) {
        const filePath = path.join(SKILLS_DIR, skillName, 'demo', subPath);
        if (isSafePath(SKILLS_DIR, filePath) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase();
          const contentType = MIME_TYPES[ext] || 'application/octet-stream';
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(fs.readFileSync(filePath));
          return;
        }
      }
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error: ' + err.message);
  }
});

server.listen(PORT, () => {
  const total = getTotalSkillsCount();
  console.log(`\n🎨 Antigravity Design OS Interactive Studio running at: http://localhost:${PORT}`);
  console.log(`   ✨ Active Skills Monitored: ${total}`);
  console.log(`   ⚡ Anti-Slop Benchmark Lab: http://localhost:${PORT}/showcase/tastemaker/compare.html`);
  console.log(`   Press Ctrl+C to stop.`);
});

