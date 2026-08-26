import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SCRATCH_DIR = path.join(ROOT_DIR, 'scratch', 'ingest-tastemaker');
const SKILLS_DIR = path.join(ROOT_DIR, '.agents', 'skills');
const GLOBAL_SKILLS_DIR = 'C:\\Users\\HP\\.gemini\\config\\skills';

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const child of fs.readdirSync(src)) {
      copyRecursiveSync(path.join(src, child), path.join(dest, child));
    }
  } else {
    const parentDir = path.dirname(dest);
    if (!fs.existsSync(parentDir)) fs.mkdirSync(parentDir, { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function sanitizeSkillContent(content, skillName) {
  // Replace tool and platform references
  let sanitized = content;
  sanitized = sanitized.replace(/\/Users\/[a-zA-Z0-9_-]+\/[^\s]+/g, './workspace');
  sanitized = sanitized.replace(/Codex in-app browser/gi, 'Antigravity Browser Subagent / Playwright');
  sanitized = sanitized.replace(/Codex browser/gi, 'Antigravity browser');
  sanitized = sanitized.replace(/Fable 5/gi, 'Gemini 3.7 Flash (High)');
  sanitized = sanitized.replace(/fable 5/gi, 'Gemini 3.7 Flash (High)');
  sanitized = sanitized.replace(/Claude Code plugin/gi, 'Antigravity Design OS Skill');
  sanitized = sanitized.replace(/\/plugin marketplace add [^\s\n]+/gi, 'Direct Antigravity Skill Invocation');
  sanitized = sanitized.replace(/Cursor rules/gi, 'Antigravity Agent Rules');

  // Ensure YAML frontmatter starts with Use when... in description
  const fmMatch = sanitized.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fmMatch) {
    let fm = fmMatch[1];
    if (!fm.includes('description:')) {
      sanitized = sanitized.replace(/^---\r?\n/, `---\ndescription: "Use when designing, building, or refining with ${skillName}."\n`);
    } else {
      // If description doesn't start with "Use when", prepend it cleanly
      const descMatch = fm.match(/description:\s*["']?([\s\S]*?)["']?\r?\n(?=[a-zA-Z_-]+:|$)/);
      if (descMatch) {
        let desc = descMatch[1].trim();
        if (!desc.toLowerCase().startsWith('use when')) {
          const newDesc = `Use when you want to generate genuinely beautiful, on-brand UI instead of generic AI slop, audit an interface, extract design tokens from references, or lock brand styles across sessions with ${skillName}.`;
          fm = fm.replace(descMatch[0], `description: "${newDesc}"\n`);
          sanitized = sanitized.replace(fmMatch[1], fm);
        }
      }
    }
  } else {
    sanitized = `---\nname: ${skillName}\ndescription: "Use when building with ${skillName}."\n---\n\n` + sanitized;
  }

  return sanitized;
}

console.log('🚀 Starting Full-Spectrum Ingestion of Tastemaker into Antigravity Design OS...');

// 1. Ingest Tastemaker Skill into .agents/skills/tastemaker
const srcTastemaker = path.join(SCRATCH_DIR, 'skills', 'tastemaker');
const destTastemaker = path.join(SKILLS_DIR, 'tastemaker');

console.log('📦 Ingesting [tastemaker] skill...');
if (fs.existsSync(destTastemaker)) fs.rmSync(destTastemaker, { recursive: true, force: true });
fs.mkdirSync(destTastemaker, { recursive: true });

// Copy references, scripts, assets, SECURITY.md
copyRecursiveSync(path.join(srcTastemaker, 'references'), path.join(destTastemaker, 'references'));
copyRecursiveSync(path.join(srcTastemaker, 'scripts'), path.join(destTastemaker, 'scripts'));
copyRecursiveSync(path.join(srcTastemaker, 'assets'), path.join(destTastemaker, 'assets'));
if (fs.existsSync(path.join(srcTastemaker, 'SECURITY.md'))) {
  fs.copyFileSync(path.join(srcTastemaker, 'SECURITY.md'), path.join(destTastemaker, 'SECURITY.md'));
}

// Sanitize & write SKILL.md
let tastemakerSkillContent = fs.readFileSync(path.join(srcTastemaker, 'SKILL.md'), 'utf8');
tastemakerSkillContent = sanitizeSkillContent(tastemakerSkillContent, 'tastemaker');
fs.writeFileSync(path.join(destTastemaker, 'SKILL.md'), tastemakerSkillContent, 'utf8');

// 2. Ingest Ideagram Skill into .agents/skills/ideagram
const srcIdeagram = path.join(srcTastemaker, 'ideagram');
const destIdeagram = path.join(SKILLS_DIR, 'ideagram');

console.log('📦 Ingesting [ideagram] skill...');
if (fs.existsSync(destIdeagram)) fs.rmSync(destIdeagram, { recursive: true, force: true });
fs.mkdirSync(destIdeagram, { recursive: true });

copyRecursiveSync(path.join(srcIdeagram, 'references'), path.join(destIdeagram, 'references'));
copyRecursiveSync(path.join(srcIdeagram, 'scripts'), path.join(destIdeagram, 'scripts'));
copyRecursiveSync(path.join(srcIdeagram, 'assets'), path.join(destIdeagram, 'assets'));

let ideagramSkillContent = fs.readFileSync(path.join(srcIdeagram, 'SKILL.md'), 'utf8');
ideagramSkillContent = sanitizeSkillContent(ideagramSkillContent, 'ideagram');
fs.writeFileSync(path.join(destIdeagram, 'SKILL.md'), ideagramSkillContent, 'utf8');

// 3. Mirror to global config
if (fs.existsSync(GLOBAL_SKILLS_DIR)) {
  console.log('🌐 Mirroring to global config skills directory...');
  const globalTastemaker = path.join(GLOBAL_SKILLS_DIR, 'tastemaker');
  const globalIdeagram = path.join(GLOBAL_SKILLS_DIR, 'ideagram');
  copyRecursiveSync(destTastemaker, globalTastemaker);
  copyRecursiveSync(destIdeagram, globalIdeagram);
}

// 4. Centralize Python Tooling Suite in scripts/tastemaker/
const destCentralScripts = path.join(ROOT_DIR, 'scripts', 'tastemaker');
console.log('🛠️ Deploying centralized Python tooling suite to scripts/tastemaker/...');
if (fs.existsSync(destCentralScripts)) fs.rmSync(destCentralScripts, { recursive: true, force: true });
copyRecursiveSync(path.join(srcTastemaker, 'scripts'), destCentralScripts);

// 5. Ingest Research Papers into docs/research/tastemaker/
const destResearch = path.join(ROOT_DIR, 'docs', 'research', 'tastemaker');
console.log('📚 Ingesting research papers to docs/research/tastemaker/...');
if (fs.existsSync(destResearch)) fs.rmSync(destResearch, { recursive: true, force: true });
copyRecursiveSync(path.join(SCRATCH_DIR, 'research'), destResearch);

// 6. Ingest Showcase / Comparison Suite into docs/showcase/tastemaker/
const destShowcase = path.join(ROOT_DIR, 'docs', 'showcase', 'tastemaker');
console.log('🎨 Ingesting interactive showcase & comparator to docs/showcase/tastemaker/...');
if (fs.existsSync(destShowcase)) fs.rmSync(destShowcase, { recursive: true, force: true });
copyRecursiveSync(path.join(SCRATCH_DIR, 'site'), destShowcase);

// 7. Ingest .tastemaker templates to docs/templates/tastemaker/
const destTemplates = path.join(ROOT_DIR, 'docs', 'templates', 'tastemaker');
console.log('📋 Ingesting style-lock templates to docs/templates/tastemaker/...');
if (fs.existsSync(destTemplates)) fs.rmSync(destTemplates, { recursive: true, force: true });
copyRecursiveSync(path.join(SCRATCH_DIR, '.tastemaker'), destTemplates);

console.log('✨ All skills, scripts, research papers, and showcase assets deployed successfully!');
