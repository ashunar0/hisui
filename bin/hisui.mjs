#!/usr/bin/env node
import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const REGISTRY_BASE =
  process.env.HISUI_REGISTRY ??
  "https://raw.githubusercontent.com/ashunar0/hisui/main";

const CONFIG_FILE = "hisui.json";
const TOKEN_MARKER_START = "/* hisui-ui:tokens:start */";
const TOKEN_MARKER_END = "/* hisui-ui:tokens:end */";

// ---------- utils ----------

const cwd = process.cwd();

function log(...args) {
  console.log(...args);
}
function warn(...args) {
  console.warn("\x1b[33m!\x1b[0m", ...args);
}
function ok(...args) {
  console.log("\x1b[32m✓\x1b[0m", ...args);
}
function err(...args) {
  console.error("\x1b[31m✗\x1b[0m", ...args);
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${url} -> ${res.status}`);
  return res.json();
}
async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${url} -> ${res.status}`);
  return res.text();
}

function run(cmd, args, opts = {}) {
  return new Promise((resolveP, rejectP) => {
    const p = spawn(cmd, args, { stdio: "inherit", cwd, ...opts });
    p.on("close", (code) => {
      if (code === 0) resolveP();
      else rejectP(new Error(`${cmd} exited ${code}`));
    });
  });
}

async function prompt(question, defaultValue) {
  const rl = createInterface({ input, output });
  const q = defaultValue ? `${question} (${defaultValue}): ` : `${question}: `;
  const answer = (await rl.question(q)).trim();
  rl.close();
  return answer || defaultValue;
}

// ---------- detection ----------

async function readPkg() {
  const path = join(cwd, "package.json");
  if (!(await exists(path))) return null;
  return JSON.parse(await readFile(path, "utf8"));
}

function detectPackageManager() {
  if (existsSync(join(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(join(cwd, "yarn.lock"))) return "yarn";
  if (existsSync(join(cwd, "bun.lockb"))) return "bun";
  return "npm";
}

async function detectFramework(pkg) {
  const deps = { ...pkg?.dependencies, ...pkg?.devDependencies };
  if (deps?.next) return "next";
  if (deps?.vite) return "vite";
  return "unknown";
}

async function detectCssPath(framework) {
  const candidates =
    framework === "next"
      ? ["src/app/globals.css", "app/globals.css", "src/styles/globals.css"]
      : ["src/index.css", "src/styles/index.css", "styles/index.css"];
  for (const c of candidates) {
    if (await exists(join(cwd, c))) return c;
  }
  return candidates[0];
}

async function detectAliases(framework) {
  const ts = await readTsconfig();
  const paths = ts?.compilerOptions?.paths;
  let basePrefix = "@/";
  let baseTarget = framework === "next" ? "src" : "src";
  if (paths) {
    for (const key of Object.keys(paths)) {
      if (key.endsWith("/*")) {
        basePrefix = key.replace("*", "");
        const target = paths[key][0];
        baseTarget = target.replace(/\/\*$/, "").replace(/^\.\//, "");
        break;
      }
    }
  }
  // Next.js without src/ uses "" as base
  const hasSrc = await exists(join(cwd, "src"));
  if (framework === "next" && !hasSrc) baseTarget = "";
  return {
    aliases: {
      ui: `${basePrefix}components/ui`,
      lib: `${basePrefix}lib`,
    },
    paths: {
      ui: baseTarget ? `${baseTarget}/components/ui` : "components/ui",
      lib: baseTarget ? `${baseTarget}/lib` : "lib",
    },
  };
}

async function readTsconfig() {
  for (const name of ["tsconfig.json", "jsconfig.json"]) {
    const p = join(cwd, name);
    if (await exists(p)) {
      const raw = await readFile(p, "utf8");
      // strip // and /* */ comments (allow JSONC)
      const clean = raw
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/^\s*\/\/.*$/gm, "");
      try {
        return JSON.parse(clean);
      } catch {
        return null;
      }
    }
  }
  return null;
}

// ---------- config ----------

async function loadConfig() {
  const path = join(cwd, CONFIG_FILE);
  if (!(await exists(path))) {
    throw new Error(
      `${CONFIG_FILE} not found. Run \`npx hisui init\` first.`,
    );
  }
  return JSON.parse(await readFile(path, "utf8"));
}

async function writeConfig(config) {
  await writeFile(
    join(cwd, CONFIG_FILE),
    JSON.stringify(config, null, 2) + "\n",
  );
}

// ---------- transform ----------

function transformImports(content, aliases) {
  return content
    .replace(/@\/components\/ui\//g, `${aliases.ui}/`)
    .replace(/@\/lib\//g, `${aliases.lib}/`);
}

function resolveTargetPath(sourcePath, config) {
  // sourcePath like "src/components/ui/button.tsx" or "src/lib/utils.ts" or "src/index.css"
  if (sourcePath.startsWith("src/components/ui/")) {
    const rest = sourcePath.replace("src/components/ui/", "");
    return join(cwd, config.paths.ui, rest);
  }
  if (sourcePath.startsWith("src/lib/")) {
    const rest = sourcePath.replace("src/lib/", "");
    return join(cwd, config.paths.lib, rest);
  }
  if (sourcePath === "src/index.css") {
    return join(cwd, config.css);
  }
  return join(cwd, sourcePath);
}

// ---------- install ----------

async function installDeps(deps, pm) {
  if (deps.length === 0) return;
  const args =
    pm === "npm"
      ? ["install", ...deps]
      : pm === "yarn"
        ? ["add", ...deps]
        : ["add", ...deps];
  log(`\n→ ${pm} ${args.join(" ")}`);
  await run(pm, args);
}

// ---------- registry ----------

async function fetchManifest(name) {
  return fetchJSON(`${REGISTRY_BASE}/registry/${name}.json`);
}

async function resolveRegistryDeps(names) {
  const seen = new Set();
  const result = [];
  async function walk(name) {
    if (seen.has(name)) return;
    seen.add(name);
    const m = await fetchManifest(name);
    for (const dep of m.registryDependencies ?? []) {
      await walk(dep);
    }
    result.push(m);
  }
  for (const n of names) await walk(n);
  return result;
}

// ---------- commands ----------

async function cmdInit() {
  if (await exists(join(cwd, CONFIG_FILE))) {
    const overwrite = await prompt(
      `${CONFIG_FILE} already exists. Overwrite? (y/N)`,
      "n",
    );
    if (!/^y/i.test(overwrite)) {
      warn("aborted");
      return;
    }
  }

  const pkg = await readPkg();
  if (!pkg) {
    err("package.json not found in cwd. Run `npm init` first.");
    process.exit(1);
  }

  const framework = await detectFramework(pkg);
  log(`detected framework: ${framework}`);

  const cssDefault = await detectCssPath(framework);
  const cssPath = await prompt("global css path", cssDefault);

  const { aliases, paths } = await detectAliases(framework);
  log(`aliases: ui=${aliases.ui}, lib=${aliases.lib}`);
  log(`paths:   ui=${paths.ui}, lib=${paths.lib}`);

  const pm = detectPackageManager();
  log(`package manager: ${pm}`);

  const config = {
    $schema: `${REGISTRY_BASE}/registry/schema.json`,
    framework,
    css: cssPath,
    aliases,
    paths,
    packageManager: pm,
  };
  await writeConfig(config);
  ok(`wrote ${CONFIG_FILE}`);

  // Fetch init manifest + base files
  const initManifest = await fetchManifest("init");
  for (const file of initManifest.files) {
    const target = resolveTargetPath(file.path, config);
    const url = `${REGISTRY_BASE}/${file.path}`;
    const content = await fetchText(url);

    if (file.path === "src/index.css") {
      // append token block (idempotent via markers)
      let existing = "";
      if (await exists(target)) existing = await readFile(target, "utf8");
      const re = new RegExp(
        `${TOKEN_MARKER_START.replace(/[/*]/g, "\\$&")}[\\s\\S]*?${TOKEN_MARKER_END.replace(/[/*]/g, "\\$&")}\\n?`,
        "g",
      );
      existing = existing.replace(re, "");
      const block = `${TOKEN_MARKER_START}\n${content.trim()}\n${TOKEN_MARKER_END}\n`;
      const merged = existing.trim()
        ? `${existing.trim()}\n\n${block}`
        : block;
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, merged);
      ok(`merged tokens into ${file.path} → ${config.css}`);
    } else {
      const transformed = transformImports(content, aliases);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, transformed);
      ok(`wrote ${target.replace(cwd + "/", "")}`);
    }
  }

  await installDeps(initManifest.dependencies, pm);
  ok("init complete");
}

async function cmdAdd(names) {
  const config = await loadConfig();
  const pm = config.packageManager ?? detectPackageManager();

  let targets = names;
  if (names.includes("--all")) {
    const index = await fetchJSON(`${REGISTRY_BASE}/registry/index.json`);
    targets = index.items.map((i) => i.name);
  }
  if (targets.length === 0) {
    err("usage: hisui add <name...> | hisui add --all");
    process.exit(1);
  }

  log(`resolving: ${targets.join(", ")}`);
  const manifests = await resolveRegistryDeps(targets);
  log(`will install: ${manifests.map((m) => m.name).join(", ")}`);

  const allDeps = new Set();
  for (const m of manifests) {
    for (const file of m.files) {
      const target = resolveTargetPath(file.path, config);
      const content = await fetchText(`${REGISTRY_BASE}/${file.path}`);
      const transformed = transformImports(content, config.aliases);
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, transformed);
      ok(`wrote ${target.replace(cwd + "/", "")}`);
    }
    for (const d of m.dependencies ?? []) allDeps.add(d);
  }

  await installDeps([...allDeps], pm);
  ok("add complete");
}

async function cmdList(args) {
  const index = await fetchJSON(`${REGISTRY_BASE}/registry/index.json`);
  if (args.includes("--json")) {
    log(JSON.stringify(index, null, 2));
    return;
  }
  const verbose = args.includes("--verbose") || args.includes("-v");
  for (const item of index.items) {
    if (verbose) {
      const deps = (item.dependencies ?? []).join(", ") || "-";
      const regDeps = (item.registryDependencies ?? []).join(", ") || "-";
      log(`${item.name}\tdeps: ${deps}\tregistry: ${regDeps}`);
    } else {
      log(item.name);
    }
  }
}

// ---------- entry ----------

async function main() {
  const [, , cmd, ...rest] = process.argv;
  if (!cmd || cmd === "-h" || cmd === "--help") {
    log(`hisui-ui
usage:
  hisui init                 setup hisui.json + base files + tokens
  hisui add <name...>        add primitives (deps auto-resolved)
  hisui add --all            add all primitives
  hisui list                 list all available primitives (one per line)
  hisui list --verbose       include dependencies and registry deps
  hisui list --json          print the full registry index as JSON
env:
  HISUI_REGISTRY             override registry base URL
`);
    return;
  }
  if (cmd === "init") return cmdInit();
  if (cmd === "add") return cmdAdd(rest);
  if (cmd === "list" || cmd === "ls") return cmdList(rest);
  err(`unknown command: ${cmd}`);
  process.exit(1);
}

main().catch((e) => {
  err(e.message);
  process.exit(1);
});
