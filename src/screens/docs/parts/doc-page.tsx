import type { ReactNode } from "react";
import { Heading } from "@/components/ui/heading";

/** component doc ページ共通の枠 (h1 + lead) */
export function DocHeader({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="flex flex-col gap-2">
      <Heading as="h1" size="2xl">
        {title}
      </Heading>
      <p className="text-fg-muted leading-relaxed">{children}</p>
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
    <section className="flex flex-col gap-4">
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
