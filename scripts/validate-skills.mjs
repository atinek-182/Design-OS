import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, '.agents', 'skills');

function validateSkills() {
  console.log('🔍 Validating Antigravity Skills & YAML Frontmatters...\n');

  if (!fs.existsSync(SKILLS_DIR)) {
    console.error('❌ Skills directory not found:', SKILLS_DIR);
    process.exit(1);
  }

  const skillDirs = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  let errors = 0;
  let warnings = 0;
  let passed = 0;

  for (const name of skillDirs) {
    const skillPath = path.join(SKILLS_DIR, name, 'SKILL.md');
    if (!fs.existsSync(skillPath)) {
      console.error(`❌ [${name}] Missing SKILL.md`);
      errors++;
      continue;
    }

    const content = fs.readFileSync(skillPath, 'utf8');
    const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

    if (!frontmatterMatch) {
      console.error(`❌ [${name}] Invalid or missing YAML frontmatter delimiters (---)`);
      errors++;
      continue;
    }

    const fm = frontmatterMatch[1];
    const nameMatch = fm.match(/^name:\s*(.+)$/m);
    const descMatch = fm.match(/^description:\s*(.+)$/m);

    if (!nameMatch) {
      console.error(`❌ [${name}] Missing 'name' field in frontmatter`);
      errors++;
    } else if (nameMatch[1].trim() !== name) {
      console.warn(`⚠️  [${name}] Frontmatter name '${nameMatch[1].trim()}' does not match directory name '${name}'`);
      warnings++;
    }

    if (!descMatch) {
      console.error(`❌ [${name}] Missing 'description' field in frontmatter`);
      errors++;
    } else {
      const desc = descMatch[1].trim();
      if (desc.length < 20) {
        console.warn(`⚠️  [${name}] Description is very short (${desc.length} chars). Consider making trigger conditions more explicit.`);
        warnings++;
      }
      if (!desc.toLowerCase().includes('use when') && !desc.toLowerCase().includes('use for') && !desc.toLowerCase().includes('blend')) {
        console.warn(`💡 [${name}] Recommended: include an explicit 'Use when...' trigger in the description for optimal Antigravity progressive disclosure.`);
      }
    }

    // Validate Demo & Prompt Contract
    const demoDir = path.join(SKILLS_DIR, name, 'demo');
    const demoHtml = path.join(demoDir, 'index.html');
    const promptMd = path.join(demoDir, 'PROMPT.md');

    if (!fs.existsSync(demoHtml)) {
      console.warn(`💡 [${name}] Missing demo/index.html visual proof.`);
      warnings++;
    }
    if (!fs.existsSync(promptMd)) {
      console.warn(`💡 [${name}] Missing demo/PROMPT.md Gemini contract.`);
      warnings++;
    }

    passed++;
  }

  console.log(`\n========================================`);
  console.log(`✅ Validated: ${passed}/${skillDirs.length} skills`);
  console.log(`⚠️  Warnings:  ${warnings}`);
  console.log(`❌ Errors:    ${errors}`);
  console.log(`========================================\n`);

  if (errors > 0) {
    process.exit(1);
  }
}

validateSkills();
