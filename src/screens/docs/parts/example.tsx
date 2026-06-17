import type { ReactNode } from "react";
import { CodeBlock } from "./code";

type ExampleProps = {
  code: string;
  children: ReactNode;
};

/**
 * live preview (上) + source (下) の 2 段組み。
 * preview のレイアウトは children 側で flex などを組んで制御する。
 */
export function Example({ code, children }: ExampleProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div className="bg-surface p-6">{children}</div>
      <div className="border-t border-border">
        <CodeBlock code={code} />
      </div>
    </div>
  );
}
