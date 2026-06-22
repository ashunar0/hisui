import type { ReactNode } from "react";
import { Heading } from "@/components/ui/heading";
import { CopyPage } from "./copy-page";
import { slugify } from "./slugify";

/** component doc ページ共通の枠 (h1 + lead) */
export function DocHeader({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
        <CopyPage />
      </div>
      <p className="text-fg-muted text-sm leading-relaxed">{children}</p>
    </header>
  );
}

/** 見出し付きセクション (title + 任意 description + 本文) */
export function DocSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={slugify(title)}
      data-doc-section={title}
      className="scroll-mt-8 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <Heading as="h2" size="sm" className="text-fg-soft">
          {title}
        </Heading>
        {description && <p className="text-fg-muted text-xs">{description}</p>}
      </div>
      {children}
    </section>
  );
}
