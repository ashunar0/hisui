#!/usr/bin/env node
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, basename, extname } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const UI_DIR = join(ROOT, "src/components/ui");

const HOOK_RE =
  /\b(useState|useEffect|useContext|useRef|useReducer|useMemo|useCallback|useId|useLayoutEffect|useImperativeHandle|useSyncExternalStore|createContext)\b/;
const NEEDS_PKG_RE = /from\s+["'](@ark-ui\/react|recharts)/;

function needsUseClient(src) {
  return HOOK_RE.test(src) || NEEDS_PKG_RE.test(src);
}

function hasUseClient(src) {
  return /^["']use client["'];?\s*\n/.test(src);
}

async function main() {
  const files = (await readdir(UI_DIR)).filter((f) => extname(f) === ".tsx");
  let added = 0;
  let skipped = 0;
  let already = 0;
  for (const file of files) {
    const path = join(UI_DIR, file);
    const src = await readFile(path, "utf8");
    if (!needsUseClient(src)) {
      skipped++;
      continue;
    }
    if (hasUseClient(src)) {
      already++;
      continue;
    }
    await writeFile(path, `"use client";\n\n${src}`);
    added++;
    console.log(`+ ${basename(file, ".tsx")}`);
  }
  console.log(
    `\nadded ${added}, already ${already}, skipped (server-safe) ${skipped}`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
