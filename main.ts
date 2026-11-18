// SPDX-License-Identifier: MIT
// news-image-20261118: "Sum up 18 November's world news in one image".
//
// The front page was rendered programmatically (Python + PIL, no AI imagery,
// no network) and is committed here as entry.png. This script's only job is to
// place an exact copy of that image at the harness output path, deterministically:
// same input bytes in, same output bytes out, every run.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts: ${source}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Post-copy integrity check: the output must be byte-identical to the
// committed image. If a copy ever truncated or altered a byte, fail loudly
// instead of shipping a corrupt entry.
const before = readFileSync(source);
const after = readFileSync(target);
if (!before.equals(after)) {
  throw new Error(`integrity check failed: ${target} differs from ${source}`);
}
console.log(`wrote ${target} (${after.length} bytes, verified identical)`);
