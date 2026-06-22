import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Button } from "@/components/ui/button";

const SOURCE_BASE =
  "https://raw.githubusercontent.com/ashunar0/hisui/main/src/screens/docs";

function toPascal(slug: string) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function sourceUrlFromPath(pathname: string): string | null {
  if (pathname === "/docs") return `${SOURCE_BASE}/Overview.mdx`;
  const m = pathname.match(/^\/docs\/([^/]+)\/([^/]+)\/?$/);
  if (!m) return null;
  const [, section, slug] = m;
  const name = toPascal(slug);
  return `${SOURCE_BASE}/${section}/${name}.mdx`;
}

export function CopyPage() {
  const { pathname } = useLocation();
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const url = sourceUrlFromPath(pathname);
  if (!url) return null;

  const handle = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`fetch ${res.status}`);
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setState("copied");
      setTimeout(() => setState("idle"), 1500);
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 1500);
    }
  };

  return (
    <Button
      variant="subtle"
      size="sm"
      onClick={handle}
      aria-label="Copy page source"
    >
      {state === "copied" ? (
        <>
          <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
          Copied
        </>
      ) : state === "error" ? (
        <>Failed</>
      ) : (
        <>
          <Copy className="size-3.5" />
          Copy page
        </>
      )}
    </Button>
  );
}
