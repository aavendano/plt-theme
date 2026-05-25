import { statSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("assets/b-style.source.css");
const output = resolve("assets/b-style.css");

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

const sourceSize = statSync(source).size;
const outputSize = statSync(output).size;
const saved = sourceSize - outputSize;
const percent = ((saved / sourceSize) * 100).toFixed(1);

console.log(`Source:  ${formatBytes(sourceSize)} (${source})`);
console.log(`Output:  ${formatBytes(outputSize)} (${output})`);
console.log(`Saved:   ${formatBytes(saved)} (${percent}%)`);
