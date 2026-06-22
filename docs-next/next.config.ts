import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, "..");

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  outputFileTracingRoot: repoRoot,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
