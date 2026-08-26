import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const README_FILE = path.join(ROOT_DIR, 'README.md');
const INDEX_FILE = path.join(ROOT_DIR, 'docs', 'SKILLS_INDEX.md');

function syncIndexDoc() {
  if (!fs.existsSync(README_FILE)) return;
  const readme = fs.readFileSync(README_FILE, 'utf8');

  const catalogIndex = readme.indexOf('## 📚 Skill Catalog');
  if (catalogIndex === -1) return;

  const catalogContent = readme.slice(catalogIndex);
  
  const header = `# Antigravity Design OS: Complete Skills Index

> **Master Reference of all 121 Production-Grade Design Engineering & Strategy Skills.**

---

`;

  const finalDoc = header + catalogContent;
  fs.writeFileSync(INDEX_FILE, finalDoc, 'utf8');
  console.log('✅ Synchronized docs/SKILLS_INDEX.md from README.md');
}

syncIndexDoc();
