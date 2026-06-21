import type { ReactNode } from "react";

export function Box({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-surface-sunken text-fg-muted text-xs">
      {children}
    </div>
  );
}
