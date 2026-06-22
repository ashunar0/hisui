#!/usr/bin/env node
import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, basename, extname } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const UI_DIR = join(ROOT, "src/components/ui");
const REGISTRY_DIR = join(ROOT, "registry");

const IMPORT_RE = /import\s+(?:type\s+)?(?:[^"']+?\s+from\s+)?["']([^"']+)["']/g;

const NPM_IGNORE = new Set(["react", "react-dom", "react/jsx-runtime"]);

const BASE_FILES = [
  { path: "src/lib/utils.ts" },
  { path: "src/lib/slot.ts" },
  { path: "src/index.css" },
];

const BASE_DEPS = [
  "clsx",
  "tailwind-merge",
  "tailwindcss",
  "@tailwindcss/vite",
  "@fontsource-variable/wix-madefor-text",
];

function npmPkgFromSpecifier(spec) {
  if (spec.startsWith("@")) {
    const [scope, name] = spec.split("/");
    return name ? `${scope}/${name}` : scope;
  }
  return spec.split("/")[0];
}

async function parseImports(filePath) {
  const src = await readFile(filePath, "utf8");
  const deps = new Set();
  const registryDeps = new Set();
  let m;
  IMPORT_RE.lastIndex = 0;
  while ((m = IMPORT_RE.exec(src)) !== null) {
    const spec = m[1];
    if (spec.startsWith("@/components/ui/")) {
      const name = spec.replace("@/components/ui/", "").split("/")[0];
      registryDeps.add(name);
    } else if (spec.startsWith("./") && !spec.includes("/", 2)) {
      // sibling primitive (e.g. "./dialog")
      registryDeps.add(spec.replace("./", ""));
    } else if (spec.startsWith("@/lib/")) {
      // base file, skip
    } else if (spec.startsWith("@/") || spec.startsWith(".")) {
      // ignore other internal
    } else {
      const pkg = npmPkgFromSpecifier(spec);
      if (!NPM_IGNORE.has(pkg)) deps.add(pkg);
    }
  }
  return { deps: [...deps].sort(), registryDeps: [...registryDeps].sort() };
}

async function buildPrimitives() {
  const entries = await readdir(UI_DIR);
  const tsxFiles = entries.filter((f) => extname(f) === ".tsx");
  const items = [];
  for (const file of tsxFiles) {
    const name = basename(file, ".tsx");
    const { deps, registryDeps } = await parseImports(join(UI_DIR, file));
    const manifest = {
      name,
      type: "registry:ui",
      files: [
        { path: `src/components/ui/${file}`, type: "registry:ui" },
      ],
      dependencies: deps,
      registryDependencies: registryDeps,
    };
    await writeFile(
      join(REGISTRY_DIR, `${name}.json`),
      JSON.stringify(manifest, null, 2) + "\n",
    );
    items.push({ name, dependencies: deps, registryDependencies: registryDeps });
  }
  return items;
}

async function buildInit() {
  const manifest = {
    name: "init",
    type: "registry:base",
    files: BASE_FILES,
    dependencies: BASE_DEPS,
    registryDependencies: [],
  };
  await writeFile(
    join(REGISTRY_DIR, "init.json"),
    JSON.stringify(manifest, null, 2) + "\n",
  );
}

async function buildIndex(items) {
  const index = {
    name: "hisui",
    items: items.map(({ name, dependencies, registryDependencies }) => ({
      name,
      dependencies,
      registryDependencies,
    })),
  };
  await writeFile(
    join(REGISTRY_DIR, "index.json"),
    JSON.stringify(index, null, 2) + "\n",
  );
}

async function main() {
  await mkdir(REGISTRY_DIR, { recursive: true });
  await buildInit();
  const items = await buildPrimitives();
  await buildIndex(items);
  console.log(`generated ${items.length} primitives + init + index`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
