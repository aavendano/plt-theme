import fs from 'node:fs';
import path from 'node:path';

const dirs = ['layout', 'templates', 'sections', 'snippets', 'blocks'];
const staticClassRegex = /class=["']([^"']+)["']/gi;
const alpineClassRegex = /(?:x-bind)?:class=["']([^"']+)["']/gi;
const alpineTokenRegex = /'([\w-]+)'/g;
const classes = new Set();

function isValidClass(cls) {
  return (
    cls &&
    !cls.includes('{{') &&
    !cls.includes('}}') &&
    !cls.includes('{%') &&
    !cls.includes('%}') &&
    !cls.includes('block.settings.') &&
    !cls.includes('section.settings.') &&
    cls !== '?' &&
    cls !== 'class'
  );
}

function extractStaticClasses(content) {
  let match;
  while ((match = staticClassRegex.exec(content)) !== null) {
    for (const cls of match[1].split(/\s+/)) {
      const clean = cls.trim();
      if (isValidClass(clean)) classes.add(clean);
    }
  }
}

function extractAlpineClasses(content) {
  let match;
  while ((match = alpineClassRegex.exec(content)) !== null) {
    const expr = match[1];
    let token;
    while ((token = alpineTokenRegex.exec(expr)) !== null) {
      const clean = token[1].trim();
      if (isValidClass(clean)) classes.add(clean);
    }
  }
}

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.liquid')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      extractStaticClasses(content);
      extractAlpineClasses(content);
    }
  }
}

for (const dir of dirs) {
  processDirectory(dir);
}

const safelist = Array.from(classes).sort();
const outputPath = path.join('src', 'purge', 'theme-safelist.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(safelist, null, 2));

console.log(`[generate-safelist] Extracted ${safelist.length} classes to ${outputPath}`);
