import { useEffect, useState, type HTMLAttributes } from "react";
import { codeToHtml, type BundledLanguage } from "shiki";
import { Clipboard } from "@/components/ui/clipboard";
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
  maxHeight?: string;
};

export function CodeBlock({ code, lang = "tsx", maxHeight }: CodeBlockProps) {
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

  return (
    <Clipboard.Root
      value={code}
      className="group relative block min-w-0"
    >
      {html ? (
        <div
          className="scrollbar-soft min-w-0 overflow-auto text-xs leading-relaxed [&_pre]:m-0 [&_pre]:min-w-max [&_pre]:px-4 [&_pre]:py-3 [&_code]:font-mono"
          style={maxHeight ? { maxHeight } : undefined}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre
          className="scrollbar-soft overflow-auto px-4 py-3 text-xs leading-relaxed"
          style={{ backgroundColor: "#282c34", ...(maxHeight ? { maxHeight } : undefined) }}
        >
          <code className="font-mono opacity-60">{code}</code>
        </pre>
      )}
      <Clipboard.Trigger
        className={cn(
          "absolute top-2 right-2 size-7 rounded-md border-0 bg-white/5 text-white/60 opacity-0 transition",
          "hover:bg-white/10 hover:text-white",
          "focus-visible:ring-1 focus-visible:ring-white/30",
          "group-hover:opacity-100 focus-visible:opacity-100",
        )}
      >
        <Clipboard.Indicator />
      </Clipboard.Trigger>
    </Clipboard.Root>
  );
}
