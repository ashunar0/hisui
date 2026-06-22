"use client";

import { Separator } from "@/components/ui/separator";

export default function SeparatorVerticalDemo() {
  return (
    <div className="flex h-5 items-center gap-3 text-fg-soft text-sm">
      <span>Home</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>API</span>
    </div>
  );
}
