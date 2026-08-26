import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, '.agents', 'skills');

function auditDemosAndPrompts() {
  console.log('🔍 Auditing Antigravity Design OS Demo & Prompt Architecture...\n');

  if (!fs.existsSync(SKILLS_DIR)) {
    console.error('❌ Skills directory not found:', SKILLS_DIR);
    process.exit(1);
  }

  const skillDirs = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .sort();

  let hasDemoCount = 0;
  let hasPromptCount = 0;
  let hasBothCount = 0;
  let warnings = 0;
  let errors = 0;

  const rows = [];

  for (const name of skillDirs) {
    const demoDir = path.join(SKILLS_DIR, name, 'demo');
    const demoHtml = path.join(demoDir, 'index.html');
    const promptMd = path.join(demoDir, 'PROMPT.md');
    const previewImg = path.join(demoDir, 'preview.jpg');

    const hasDemo = fs.existsSync(demoHtml);
    const hasPrompt = fs.existsSync(promptMd);
    const hasPreview = fs.existsSync(previewImg);

    if (hasDemo) hasDemoCount++;
    if (hasPrompt) hasPromptCount++;
    if (hasDemo && hasPrompt) hasBothCount++;

    let status = '✅ FULL';
    if (!hasDemo && !hasPrompt) {
      status = '❌ MISSING BOTH';
      errors++;
    } else if (!hasDemo) {
      status = '⚠️  NO DEMO';
      warnings++;
    } else if (!hasPrompt) {
      status = '⚠️  NO PROMPT';
      warnings++;
    }

    // Check demo validity
    let demoValid = false;
    if (hasDemo) {
      const html = fs.readFileSync(demoHtml, 'utf8');
      demoValid = html.includes('<!DOCTYPE html>') || html.includes('<!doctype html>');
      if (!demoValid) {
        warnings++;
      }
    }

    rows.push({
      name,
      hasDemo,
      hasPrompt,
      hasPreview,
      status
    });
  }

  // Print Summary Table
  console.log('| Skill Name | Demo | Prompt Card | Preview | Status |');
  console.log('| :--- | :---: | :---: | :---: | :--- |');
  for (const r of rows) {
    console.log(`| \`${r.name}\` | ${r.hasDemo ? '✅' : '❌'} | ${r.hasPrompt ? '✅' : '❌'} | ${r.hasPreview ? '🖼️' : '—'} | ${r.status} |`);
  }

  console.log('\n========================================');
  console.log(`📊 Total Skills:         ${skillDirs.length}`);
  console.log(`⚡ With Live Demos:      ${hasDemoCount}/${skillDirs.length} (${Math.round((hasDemoCount / skillDirs.length) * 100)}%)`);
  console.log(`📄 With Prompt Cards:    ${hasPromptCount}/${skillDirs.length} (${Math.round((hasPromptCount / skillDirs.length) * 100)}%)`);
  console.log(`🌟 Complete (Both):      ${hasBothCount}/${skillDirs.length} (${Math.round((hasBothCount / skillDirs.length) * 100)}%)`);
  console.log(`⚠️  Warnings:             ${warnings}`);
  console.log(`❌ Missing Both:         ${errors}`);
  console.log('========================================\n');

  if (errors > 0) {
    console.log('💡 Tip: Run `node scripts/scaffold-demo-prompt.mjs` to auto-scaffold missing items.');
  }
}

auditDemosAndPrompts();
