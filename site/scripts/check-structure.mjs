import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const appDir = path.join(rootDir, 'app');

let errors = 0;

function checkFileLines(filePath, maxLines, label) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').length;
  if (lines > maxLines) {
    console.error(`❌ [Line Ceiling] ${label} (${filePath}) has ${lines} lines, exceeding ceiling of ${maxLines}`);
    errors++;
  }
}

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      scanDir(fullPath);
    } else if (entry.isFile() && (entry.name === 'page.js' || entry.name === 'page.jsx')) {
      checkFileLines(fullPath, 80, 'Page Server Component');
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes("'use client'") || content.includes('"use client"')) {
        console.error(`❌ [RSC Violation] page.js (${fullPath}) must not use 'use client'`);
        errors++;
      }
    } else if (entry.isFile() && fullPath.includes('_components') && entry.name.endsWith('.js')) {
      checkFileLines(fullPath, 250, 'Section Component');
      const content = fs.readFileSync(fullPath, 'utf8');
      const firstLine = content.split('\n')[0].trim();
      if (!firstLine.startsWith('// section:')) {
        console.warn(`⚠️ [Missing Section Comment] Section component ${entry.name} should open with // section: <id>`);
      }
      if (!content.includes('data-section=')) {
        console.warn(`⚠️ [Missing data-section] Section component ${entry.name} should render data-section attribute`);
      }
    }
  }
}

console.log('🔍 Running Structure Verification Audit...');
scanDir(appDir);

if (errors > 0) {
  console.error(`\n❌ Structure audit failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log('✅ Structure audit passed! All line ceilings and RSC rules satisfied.\n');
  process.exit(0);
}
