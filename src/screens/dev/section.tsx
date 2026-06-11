import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-semibold tracking-tight text-fg">
          {title}
        </h2>
        <p className="text-xs text-fg-muted">{description}</p>
      </div>
      <div className="rounded-md border border-border bg-surface p-6">
        {children}
      </div>
    </section>
  );
}
