import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");

// Turbopack はループバ options が serializable じゃないと弾く。
// remarkPlugins は [moduleSpecifier, options?] 形式で渡す。
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[resolve(here, "lib/remark-docs-toc.mjs"), {}]],
  },
});

const nextConfig: NextConfig = {
  outputFileTracingRoot: repoRoot,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
