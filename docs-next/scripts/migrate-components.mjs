#!/usr/bin/env node
// Vite docs の Components.mdx を docs-next の page.mdx に一括変換する。
//
// 変換 rule:
//   import X from "./demos/foo/bar";         → import X from "@hisui/screens/docs/components/demos/foo/bar";
//   import XSource from "./demos/foo/bar?raw"; → 削除 + export const x = await loadDemo("foo/bar.tsx");
//   <Example code={XSource}>                   → <Example code={x.code} html={x.html}>
//   @/screens/docs/parts/Y                     → @hisui/screens/docs/parts/Y
//   先頭に export const metadata = { title: ... } を挿入
//
// 出力: docs-next/src/app/docs/components/<kebab-slug>/page.mdx

import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "../..");
const srcDir = resolve(repoRoot, "src/screens/docs/components");
const outRoot = resolve(repoRoot, "docs-next/src/app/docs/components");

const navText = readFileSync(
  resolve(repoRoot, "src/screens/docs/docs-nav.ts"),
  "utf8",
);
const navMap = new Map();
for (const m of navText.matchAll(
  /\{\s*label:\s*"([^"]+)",\s*to:\s*"\/docs\/components\/([^"]+)"\s*\}/g,
)) {
  navMap.set(m[2], m[1]); // slug → label
}

function pascalToKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/** "AccordionControlledSource" → "accordionControlled" */
function sourceVarToCamel(varName) {
  const base = varName.replace(/Source$/, "");
  return base.charAt(0).toLowerCase() + base.slice(1);
}

function migrate(srcFile) {
  const pascal = srcFile.replace(/\.mdx$/, "");
  const slug = pascalToKebab(pascal);
  const label = navMap.get(slug) ?? pascal;
  let content = readFileSync(resolve(srcDir, srcFile), "utf8");

  // 1. @/screens/docs/parts/X → @hisui/...
  content = content.replace(
    /from\s+"@\/screens\/docs\/parts\/([\w-]+)"/g,
    'from "@hisui/screens/docs/parts/$1"',
  );

  // 2. ?raw import を回収して削除
  const rawImports = []; // { varName: 'AccordionControlledSource', path: 'accordion/controlled', camel: 'accordionControlled' }
  content = content.replace(
    /import\s+(\w+Source)\s+from\s+"\.\/demos\/([\w/-]+)\?raw";\s*\n/g,
    (_, varName, path) => {
      rawImports.push({ varName, path, camel: sourceVarToCamel(varName) });
      return "";
    },
  );

  // 3. demo default imports を @hisui に
  content = content.replace(
    /from\s+"\.\/demos\/([\w/-]+)"/g,
    'from "@hisui/screens/docs/components/demos/$1"',
  );

  // 4. <Example code={XSource}> → <Example code={camel.code} html={camel.html}>
  for (const { varName, camel } of rawImports) {
    const re = new RegExp(`code=\\{${varName}\\}`, "g");
    content = content.replace(re, `code={${camel}.code} html={${camel}.html}`);
  }

  // 既存 import block の終わりを見つける。 m flag で行頭マッチ。
  const importBlockMatch = content.match(/(?:^import[^\n]+\n)+/m);
  let importBlock = importBlockMatch ? importBlockMatch[0] : "";
  let rest = importBlockMatch ? content.slice(importBlockMatch[0].length) : content;

  // loadDemo import を import block の末尾に追加 (raw が 1 つ以上あれば)
  if (rawImports.length > 0) {
    importBlock = importBlock + `import { loadDemo } from "@/lib/read-source";\n`;
  }

  // loadDemo 展開 + metadata を import block と本文の間に挿入
  const exportLines = rawImports.map(
    ({ path, camel }) => `export const ${camel} = await loadDemo("${path}.tsx");`,
  );
  const metadataLine = `export const metadata = { title: "${label} | Hisui UI" };`;

  // metadata の後ろは blank line で必ず ESM 区切る (PARTS 等の multi-line export が
  // 隣接すると Turbopack MDX parser が連結扱いして acorn が markdown を巻き込む)
  const insertion = "\n" + [...exportLines, metadataLine].join("\n") + "\n\n";

  // rest の先頭の連続改行を全部削って 1 つの blank line に揃える
  const out = importBlock + insertion + rest.replace(/^\n+/, "");

  // 出力
  const outDir = resolve(outRoot, slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "page.mdx"), out, "utf8");
  return { slug, label, rawCount: rawImports.length };
}

const files = readdirSync(srcDir).filter((f) => f.endsWith(".mdx"));
const SKIP = new Set(["Button.mdx"]); // 既に手動移植済
const results = [];
for (const f of files) {
  if (SKIP.has(f)) continue;
  results.push({ file: f, ...migrate(f) });
}

console.log(`Migrated ${results.length} pages:`);
for (const r of results) {
  console.log(`  ${r.file} → ${r.slug} (${r.label}, ${r.rawCount} demos)`);
}
