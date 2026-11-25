// The Houseplant Out-of-Office — make.fun
// One line: the funniest out-of-office auto-reply a houseplant would send.
// Entry: make-fun-houseplant-out-of-office-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Out of office: I'm the fern. Unwatered since March. My replacement starts Monday. He's plastic. Honestly, good for him.";

if (line.length < 1 || line.length > 119) {
  throw new Error(`Line must be 1-119 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
