import { useEffect, useState, type HTMLAttributes } from "react";
import { codeToHtml, type BundledLanguage } from "shiki";
import { cn } from "@/lib/utils";

export function InlineCode({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "box-decoration-clone rounded bg-surface-sunken px-1.5 py-0.5 font-mono text-[0.8125em] text-fg-soft",
        className,
      )}
      {...props}
    />
  );
}

type CodeBlockProps = {
  code: string;
  lang?: BundledLanguage;
};

export function CodeBlock({ code, lang = "tsx" }: CodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    codeToHtml(code, {
      lang,
      themes: { light: "one-dark-pro", dark: "one-dark-pro" },
      defaultColor: "dark",
    }).then((out) => {
      if (!cancelled) setHtml(out);
    });
    return () => {
      cancelled = true;
    };
  }, [code, lang]);

  if (!html) {
    return (
      <pre
        className="scrollbar-soft overflow-x-auto px-4 py-3 text-xs leading-relaxed"
        style={{ backgroundColor: "#282c34" }}
      >
        <code className="font-mono opacity-60">{code}</code>
      </pre>
    );
  }

  return (
    <div
      className="shiki-block scrollbar-soft overflow-x-auto text-xs leading-relaxed [&_pre]:m-0 [&_pre]:px-4 [&_pre]:py-3 [&_code]:font-mono"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
