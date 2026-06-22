import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { highlightCode } from "@hisui/lib/highlight";

const SHARED_SRC_ROOT = "../src";

export function readSource(relativePath: string): string {
  const path = relativePath.startsWith("/")
    ? relativePath.slice(1)
    : relativePath;
  return readFileSync(resolve(process.cwd(), SHARED_SRC_ROOT, path), "utf8");
}

export function readDemoSource(demoPath: string): string {
  return readSource(`screens/docs/components/demos/${demoPath}`);
}

/** Read a demo source file and pre-highlight it with shiki (SSR). */
export async function loadDemo(
  demoPath: string,
): Promise<{ code: string; html: string }> {
  const code = readDemoSource(demoPath);
  const html = await highlightCode(code);
  return { code, html };
}
