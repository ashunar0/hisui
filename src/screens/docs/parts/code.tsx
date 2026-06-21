import type { HTMLAttributes } from "react";
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

export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="scrollbar-soft overflow-x-auto bg-canvas px-4 py-3 text-xs leading-relaxed">
      <code className="font-mono text-fg-soft">{code}</code>
    </pre>
  );
}
