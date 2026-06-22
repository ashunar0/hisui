"use client";

import { Spinner } from "@/components/ui/spinner";

export default function SpinnerColorsDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="text-fg" />
      <Spinner className="text-fg-soft" />
      <Spinner className="text-fg-muted" />
    </div>
  );
}
