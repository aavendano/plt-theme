import fs from 'node:fs';
import path from 'node:path';

const dirs = ['layout', 'templates', 'sections', 'snippets', 'blocks'];
const regex = /class=["']([^"']+)["']/gi;
const classes = new Set();

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.liquid')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      let match;
      while ((match = regex.exec(content)) !== null) {
        const classStr = match[1];
        // Split by whitespace
        const classNames = classStr.split(/\s+/);
        for (const cls of classNames) {
          const cleanCls = cls.trim();
          if (
            cleanCls &&
            !cleanCls.includes('{{') &&
            !cleanCls.includes('}}') &&
            !cleanCls.includes('{%') &&
            !cleanCls.includes('%}') &&
            !cleanCls.includes('block.settings.') &&
            !cleanCls.includes('section.settings.') &&
            cleanCls !== '?' &&
            cleanCls !== 'class'
          ) {
            classes.add(cleanCls);
          }
        }
      }
    }
  }
}

for (const dir of dirs) {
  processDirectory(dir);
}

const safelist = Array.from(classes).sort();
fs.writeFileSync('purge/theme-safelist.json', JSON.stringify(safelist, null, 2));

console.log(`[generate-safelist] Extracted ${safelist.length} classes to purge/theme-safelist.json`);
