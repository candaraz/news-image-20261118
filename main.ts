// SPDX-License-Identifier: MIT
// Entrypoint for the news-image-20261118 entry.
// Its only job: put the finished front-page image where the harness
// expects it, then prove the copy is exact before exiting.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetImage = join(outDir, "entry.png");

function sha256(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex");
}

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

try {
  const original = readFileSync(sourceImage);
  const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (original.length < pngMagic.length || !original.subarray(0, 8).equals(pngMagic)) {
    fail("source entry.png is not a PNG file (bad signature)");
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(sourceImage, targetImage);

  const written = readFileSync(targetImage);
  if (written.length !== original.length) {
    fail(
      `size mismatch after copy: source ${original.length} bytes, ` +
        `output ${written.length} bytes`,
    );
  }
  if (!written.equals(original)) {
    fail("output bytes differ from entry.png after copy");
  }
  if (sha256(written) !== sha256(original)) {
    fail("sha256 mismatch after copy");
  }
  console.log(`wrote ${targetImage} (${written.length} bytes, verified)`);
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}
