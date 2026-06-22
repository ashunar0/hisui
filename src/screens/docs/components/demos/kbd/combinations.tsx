"use client";

import { Kbd } from "@/components/ui/kbd";

export default function KbdCombinationsDemo() {
  return (
    <div className="flex flex-col gap-3">
      <span className="inline-flex items-center gap-1">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </span>
      <span className="inline-flex items-center gap-1 text-fg-muted text-xs">
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>Tab</Kbd>
      </span>
      <span className="inline-flex items-center gap-1">
        <Kbd>⌃</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌫</Kbd>
      </span>
    </div>
  );
}
