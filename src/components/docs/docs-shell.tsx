import type { ReactNode } from "react";
import { CopyPage } from "./copy-page";
import { OnThisPage, type TocItem } from "./on-this-page";

/**
 * remark-docs-toc が body 全体を `<DocsShell toc={[...]}>` で包んでくる。
 * 2-col layout (本文 + sticky OnThisPage aside) を描画。
 */
export function DocsShell({
  toc,
  children,
}: {
  toc?: TocItem[];
  children?: ReactNode;
}) {
  return (
    <div className="flex gap-10">
      <div className="docs-prose relative min-w-0 max-w-3xl flex-1">
        <div className="absolute right-0 top-1">
          <CopyPage />
        </div>
        {children}
      </div>
      <OnThisPage initialItems={toc ?? []} />
    </div>
  );
}
