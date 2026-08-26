import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, '.agents', 'skills');
const SCRATCH_DIR = path.join(ROOT_DIR, 'scratch');
const GLOBAL_SKILLS_DIR = 'C:\\Users\\HP\\.gemini\\config\\skills';

const repoUrl = process.argv[2];

if (!repoUrl) {
  console.log(`\n🌌 Antigravity Design OS: Full-Spectrum Multi-Artifact Ingestion Engine`);
  console.log(`Usage: node scripts/ingest-skills.mjs <github-repo-url> [optional-tier]\n`);
  console.log(`Example: node scripts/ingest-skills.mjs https://github.com/codeswithroh/tastemaker\n`);
  process.exit(1);
}

function extractRepoName(url) {
  const parts = url.replace(/\.git$/, '').split('/');
  return parts[parts.length - 1] || 'imported-repo';
}

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
  let sanitized = content;
  // Sanitize paths & platform mentions
  sanitized = sanitized.replace(/\/Users\/[a-zA-Z0-9_-]+\/[^\s]+/g, './workspace');
  sanitized = sanitized.replace(/Codex in-app browser/gi, 'Antigravity Browser Subagent / Playwright');
  sanitized = sanitized.replace(/Codex browser/gi, 'Antigravity browser');
  sanitized = sanitized.replace(/Fable 5/gi, 'Gemini 3.7 Flash (High)');
  sanitized = sanitized.replace(/fable 5/gi, 'Gemini 3.7 Flash (High)');
  sanitized = sanitized.replace(/Claude Code plugin/gi, 'Antigravity Design OS Skill');
  sanitized = sanitized.replace(/\/plugin marketplace add [^\s\n]+/gi, 'Direct Antigravity Skill Invocation');
  sanitized = sanitized.replace(/Cursor rules/gi, 'Antigravity Agent Rules');

  // Enforce progressive disclosure YAML description
  const fmMatch = sanitized.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fmMatch) {
    let fm = fmMatch[1];
    if (!fm.includes('description:')) {
      sanitized = sanitized.replace(/^---\r?\n/, `---\ndescription: "Use when designing, building, or refining with ${skillName}."\n`);
    } else {
      const descMatch = fm.match(/description:\s*["']?([\s\S]*?)["']?\r?\n(?=[a-zA-Z_-]+:|$)/);
      if (descMatch) {
        let desc = descMatch[1].trim();
        if (!desc.toLowerCase().startsWith('use when')) {
          const newDesc = `Use when designing, building, or refining with ${skillName}, ensuring zero slop and high-end visual craft.`;
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

async function ingestRepo() {
  const repoName = extractRepoName(repoUrl);
  const tempDir = path.join(SCRATCH_DIR, `ingest-${repoName}-${Date.now()}`);

  console.log(`\n🚀 =========================================================`);
  console.log(`🚀  ANTIGRAVITY DESIGN OS: FULL-SPECTRUM REPO INGESTION`);
  console.log(`🚀 =========================================================`);
  console.log(`📥 Repository Source: ${repoUrl}`);
  console.log(`📂 Scratch Sandbox:   ${tempDir}\n`);

  if (!fs.existsSync(SCRATCH_DIR)) fs.mkdirSync(SCRATCH_DIR, { recursive: true });

  try {
    // 1. Clone
    console.log(`📥 [Phase 1/6] Cloning repository into isolated sandbox...`);
    execSync(`git clone --depth 1 "${repoUrl}" "${tempDir}"`, { stdio: 'inherit' });

    // 2. Scan for Skills
    console.log(`\n🔍 [Phase 2/6] Scanning multi-artifact ecosystem (Skills, Scripts, Research, Showcase)...`);
    const foundSkills = [];

    function findSkillsRecursive(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name === '.git' || entry.name === 'node_modules') continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          const skillMd = path.join(fullPath, 'SKILL.md');
          if (fs.existsSync(skillMd)) {
            foundSkills.push({
              name: entry.name,
              dir: fullPath,
              skillMd
            });
          } else {
            findSkillsRecursive(fullPath);
          }
        }
      }
    }

    findSkillsRecursive(tempDir);
    console.log(`   ✨ Found ${foundSkills.length} skill package(s).`);

    // 3. Process and Deploy Skills
    console.log(`\n📦 [Phase 3/6] Sanitizing & Deploying Skills to .agents/skills/ & Global Config...`);
    for (const item of foundSkills) {
      console.log(`   📦 Adapting [${item.name}] for Antigravity & Gemini 3.7 Flash...`);
      const targetDir = path.join(SKILLS_DIR, item.name);
      if (fs.existsSync(targetDir)) fs.rmSync(targetDir, { recursive: true, force: true });
      fs.mkdirSync(targetDir, { recursive: true });

      copyRecursiveSync(item.dir, targetDir);

      const targetSkillMd = path.join(targetDir, 'SKILL.md');
      if (fs.existsSync(targetSkillMd)) {
        let content = fs.readFileSync(targetSkillMd, 'utf8');
        content = sanitizeSkillContent(content, item.name);
        fs.writeFileSync(targetSkillMd, content, 'utf8');
      }

      // Mirror to Global Config
      if (fs.existsSync(GLOBAL_SKILLS_DIR)) {
        const globalDest = path.join(GLOBAL_SKILLS_DIR, item.name);
        copyRecursiveSync(targetDir, globalDest);
      }
    }

    // 4. Ingest Centralized Tooling Scripts
    const srcScriptsDir = path.join(tempDir, 'scripts') || path.join(tempDir, 'skills', repoName, 'scripts');
    if (fs.existsSync(srcScriptsDir)) {
      console.log(`\n🛠️ [Phase 4/6] Deploying centralized automation scripts to scripts/${repoName}/...`);
      const destScripts = path.join(ROOT_DIR, 'scripts', repoName);
      copyRecursiveSync(srcScriptsDir, destScripts);
    }

    // Ingest Research Papers if present
    const srcResearchDir = path.join(tempDir, 'research') || path.join(tempDir, 'docs', 'research');
    if (fs.existsSync(srcResearchDir)) {
      console.log(`📚 Ingesting research studies to docs/research/${repoName}/...`);
      const destResearch = path.join(ROOT_DIR, 'docs', 'research', repoName);
      copyRecursiveSync(srcResearchDir, destResearch);
    }

    // Ingest Showcase / Comparison site if present
    const srcSiteDir = path.join(tempDir, 'site') || path.join(tempDir, 'showcase');
    if (fs.existsSync(srcSiteDir)) {
      console.log(`🎨 Ingesting interactive showcase to docs/showcase/${repoName}/...`);
      const destShowcase = path.join(ROOT_DIR, 'docs', 'showcase', repoName);
      copyRecursiveSync(srcSiteDir, destShowcase);
    }

    // Ingest Style Lock / System Templates if present
    const srcTemplateDir = path.join(tempDir, `.${repoName}`) || path.join(tempDir, 'templates');
    if (fs.existsSync(srcTemplateDir)) {
      console.log(`📋 Ingesting system templates to docs/templates/${repoName}/...`);
      const destTemplates = path.join(ROOT_DIR, 'docs', 'templates', repoName);
      copyRecursiveSync(srcTemplateDir, destTemplates);
    }

    // 5. Auto-scaffold, sync catalog & validate
    console.log(`\n🔄 [Phase 5/6] Auto-scaffolding demos, syncing catalog, and locking dependencies...`);
    execSync(`node "${path.join(ROOT_DIR, 'scripts', 'scaffold-demo-prompt.mjs')}"`, { stdio: 'inherit' });
    execSync(`node "${path.join(ROOT_DIR, 'scripts', 'sync-skills-catalog.mjs')}"`, { stdio: 'inherit' });

    // 6. Run Multi-Engine Full Quality Audit
    console.log(`\n🛡️ [Phase 6/6] Executing Multi-Engine Full Quality Audit...`);
    execSync(`node "${path.join(ROOT_DIR, 'scripts', 'audit-design-os.mjs')}"`, { stdio: 'inherit' });

    // 7. Cleanup Scratch Sandbox
    console.log(`\n🧹 Cleaning temporary sandbox directory...`);
    fs.rmSync(tempDir, { recursive: true, force: true });

    console.log(`\n🎉 =========================================================`);
    console.log(`🎉  FULL-SPECTRUM INGESTION OF [${repoName}] COMPLETED!`);
    console.log(`🎉  - ${foundSkills.length} Skills Calibrated & Mirrored Globally`);
    console.log(`🎉  - Studio Dashboard & Benchmark Lab Ready on Port 4173`);
    console.log(`🎉 =========================================================\n`);

  } catch (err) {
    console.error(`\n❌ Ingestion failed:`, err.message);
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
    process.exit(1);
  }
}

ingestRepo();
