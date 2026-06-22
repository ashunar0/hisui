"use client";

import type { ReactNode } from "react";

export function Row({
  label,
  meta,
  children,
}: {
  label: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[6rem_1fr] items-center gap-4 border-b border-border-muted py-3 last:border-b-0">
      <div className="flex flex-col">
        <span className="font-mono text-fg text-xs">{label}</span>
        {meta && <span className="text-[11px] text-fg-muted">{meta}</span>}
      </div>
      <div>{children}</div>
    </div>
  );
}
