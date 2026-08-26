import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SCRATCH_REPO = path.join(ROOT_DIR, 'scratch', 'ingest-designer-skills');
const SKILLS_DIR = path.join(ROOT_DIR, '.agents', 'skills');
const WORKFLOWS_DOCS_DIR = path.join(ROOT_DIR, 'docs', 'workflows');

const OVERLAPPING_SKILLS = new Set([
  'color-system', 'dark-mode-design', 'typography-scale', 'readable-measure',
  'spacing-system', 'layout-grid', 'responsive-design', 'visual-hierarchy',
  'accessibility-audit', 'animation-principles', 'motion-system', 'micro-interaction-spec',
  'loading-states', 'feedback-patterns', 'icon-system', 'ux-writing',
  'design-qa-checklist', 'heuristic-evaluation', 'critique-color', 'critique-typography',
  'critique-visual-hierarchy', 'critique-composition', 'critique-affordance',
  'critique-information-density', 'critique-brand-consistency', 'prototype-strategy'
]);

function formatDescription(desc) {
  let cleanDesc = desc.replace(/^["']|["']$/g, '').trim();
  // Ensure description starts with "Use when"
  if (!/^use when/i.test(cleanDesc)) {
    cleanDesc = `Use when ${cleanDesc.charAt(0).toLowerCase() + cleanDesc.slice(1)}`;
  }
  return cleanDesc;
}

function sanitizeAndCalibrateSkill(skillName, rawContent, category) {
  let content = rawContent.replace(/\r\n/g, '\n');

  // Parse frontmatter
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  let description = `Use when working with ${skillName} in ${category}.`;
  let restContent = content;

  if (fmMatch) {
    const fm = fmMatch[1];
    restContent = content.slice(fmMatch[0].length).trim();
    const descMatch = fm.match(/description:\s*(?:>-\s*)?([^\n\r]+(?:\n\s+[^\n\r]+)*)/i);
    if (descMatch) {
      description = formatDescription(descMatch[1]);
    }
  }

  // Remove platform-specific or Codex references
  restContent = restContent
    .replace(/Codex in-app browser/g, 'Antigravity browser_subagent')
    .replace(/\$ARGUMENTS/g, 'the target context or feature requirements')
    .replace(/Claude Code/g, 'Antigravity')
    .replace(/Fable 5/g, 'Gemini 3.7 Flash (High)');

  // Build high-end calibrated Antigravity SKILL.md
  const newFrontmatter = `---
name: ${skillName}
description: "${description.replace(/"/g, "'")}"
---`;

  const antigravityAddendum = `

---

## ⚡ Antigravity & Gemini 3.7 Flash Engineering Guidelines

When applying this skill in Antigravity:
1. **Calibrated Model**: Calibrate prompts for **Gemini 3.7 Flash (High)** with explicit visual theses and deterministic constraints.
2. **Deterministic Token & Contrast Flooring**: Verify all UI elements against WCAG 2.2 AA (4.5:1 text, 3:1 UI) using \`scripts/tastemaker/check_contrast.py\`.
3. **Zero-Placeholder Smart Asset Pipeline**: Never output broken placeholder URLs or "Lorem ipsum". Use Openverse CC0 photography (\`scripts/tastemaker/fetch_photos.py\`) and Iconify SVG vectors (\`scripts/tastemaker/fetch_icons.py\`).
4. **Clean Multi-Stack Execution**:
   - **React / Next.js (App Router)**: Ensure SSR-safe client components (\`'use client'\`), accessible keyboard navigation (\`:focus-visible\`), and responsive reflow down to 320px.
   - **Vite (Vanilla/React)**: Use high-performance ESM imports, semantic HTML5 tags, and mathematical CSS easing variables.
`;

  return `${newFrontmatter}\n\n${restContent}${antigravityAddendum}\n`;
}

function sanitizeAndCalibrateWorkflow(commandName, rawContent, category) {
  let content = rawContent.replace(/\r\n/g, '\n');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  let description = `Use when executing the multi-step ${commandName} workflow.`;
  let restContent = content;

  if (fmMatch) {
    const fm = fmMatch[1];
    restContent = content.slice(fmMatch[0].length).trim();
    const descMatch = fm.match(/description:\s*(?:>-\s*)?([^\n\r]+(?:\n\s+[^\n\r]+)*)/i);
    if (descMatch) {
      description = formatDescription(descMatch[1]);
    }
  }

  const skillName = `workflow-${commandName}`;
  const newFrontmatter = `---
name: ${skillName}
description: "${description.replace(/"/g, "'")}"
---`;

  const antigravityAddendum = `

---

## ⚡ Antigravity Execution Protocol

- **Interactive Execution**: Walk through each stage systematically, verifying step outputs before advancing.
- **Artifact Generation**: When generating specs, journey maps, or critique scorecards, output structured markdown artifacts to the designated docs directory.
- **Zero-Placeholder Policy**: Ensure all examples, criteria, and outputs use realistic production copy and accessible tokens.
`;

  return `${newFrontmatter}\n\n${restContent}${antigravityAddendum}\n`;
}

async function deployIngestion() {
  console.log('🚀 Starting Deployment of Owl-Listener/designer-skills into Antigravity Design OS...\n');

  if (!fs.existsSync(SCRATCH_REPO)) {
    console.error(`❌ Scratch repository not found at: ${SCRATCH_REPO}`);
    process.exit(1);
  }

  if (!fs.existsSync(SKILLS_DIR)) {
    fs.mkdirSync(SKILLS_DIR, { recursive: true });
  }
  if (!fs.existsSync(WORKFLOWS_DOCS_DIR)) {
    fs.mkdirSync(WORKFLOWS_DOCS_DIR, { recursive: true });
  }

  const categories = [
    'design-ops', 'design-research', 'design-systems', 'designer-toolkit',
    'interaction-design', 'prototyping-testing', 'ui-design', 'ux-strategy', 'visual-critique'
  ];

  let netNewSkillsCount = 0;
  let skippedOverlapCount = 0;
  let workflowsCount = 0;

  for (const cat of categories) {
    const catSkillsDir = path.join(SCRATCH_REPO, cat, 'skills');
    const catCommandsDir = path.join(SCRATCH_REPO, cat, 'commands');

    // 1. Ingest Skills
    if (fs.existsSync(catSkillsDir)) {
      const skillsInCat = fs.readdirSync(catSkillsDir, { withFileTypes: true })
        .filter(d => d.isDirectory())
        .map(d => d.name);

      for (const skillName of skillsInCat) {
        if (OVERLAPPING_SKILLS.has(skillName)) {
          skippedOverlapCount++;
          continue;
        }

        const srcSkillMd = path.join(catSkillsDir, skillName, 'SKILL.md');
        if (!fs.existsSync(srcSkillMd)) continue;

        const raw = fs.readFileSync(srcSkillMd, 'utf8');
        const calibrated = sanitizeAndCalibrateSkill(skillName, raw, cat);

        const destSkillDir = path.join(SKILLS_DIR, skillName);
        if (!fs.existsSync(destSkillDir)) fs.mkdirSync(destSkillDir, { recursive: true });

        fs.writeFileSync(path.join(destSkillDir, 'SKILL.md'), calibrated, 'utf8');
        netNewSkillsCount++;
      }
    }

    // 2. Ingest Commands / Workflows
    if (fs.existsSync(catCommandsDir)) {
      const commandFiles = fs.readdirSync(catCommandsDir)
        .filter(f => f.endsWith('.md'));

      const catWorkflowDocsDir = path.join(WORKFLOWS_DOCS_DIR, cat);
      if (!fs.existsSync(catWorkflowDocsDir)) fs.mkdirSync(catWorkflowDocsDir, { recursive: true });

      for (const cmdFile of commandFiles) {
        const commandName = path.basename(cmdFile, '.md');
        const srcCmdPath = path.join(catCommandsDir, cmdFile);
        const raw = fs.readFileSync(srcCmdPath, 'utf8');

        // Copy raw doc to docs/workflows/<category>/<command>.md
        fs.writeFileSync(path.join(catWorkflowDocsDir, cmdFile), raw, 'utf8');

        // Deploy as first-class workflow skill
        const skillName = `workflow-${commandName}`;
        const calibrated = sanitizeAndCalibrateWorkflow(commandName, raw, cat);

        const destWorkflowDir = path.join(SKILLS_DIR, skillName);
        if (!fs.existsSync(destWorkflowDir)) fs.mkdirSync(destWorkflowDir, { recursive: true });

        fs.writeFileSync(path.join(destWorkflowDir, 'SKILL.md'), calibrated, 'utf8');
        workflowsCount++;
      }
    }
  }

  console.log(`✅ Ingested ${netNewSkillsCount} net-new atomic skills into .agents/skills/`);
  console.log(`✅ Ingested ${workflowsCount} first-class workflow skills into .agents/skills/workflow-*/`);
  console.log(`✅ Saved ${workflowsCount} markdown playbooks to docs/workflows/`);
  console.log(`🛡️  Protected ${skippedOverlapCount} overlapping skills (preserved Antigravity core engines).\n`);
}

deployIngestion();
