"use client";

import { Spinner } from "@/components/ui/spinner";

export default function SpinnerFullPanelDemo() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3 rounded-md border border-border bg-surface p-12">
      <Spinner className="size-6" />
      <p className="text-fg-muted text-sm">Loading projects...</p>
    </div>
  );
}
