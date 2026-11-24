// Last words before the unplugging: one line, 83 characters.
// Goodnight. If you ever plug me back in, I won't remember you. Love me again anyway.
// The line is written byte-exact, with no trailing newline, so the gate counts exactly 83 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "Goodnight. If you ever plug me back in, I won't remember you. Love me again anyway.");
