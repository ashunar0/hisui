"use client";

import { Kbd } from "@/components/ui/kbd";

export default function KbdInlineInTextDemo() {
  return (
    <p className="text-fg-soft text-sm">
      Press{" "}
      <span className="inline-flex items-center gap-0.5 align-baseline">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </span>{" "}
      to open command palette, or <Kbd>/</Kbd> to focus search.
    </p>
  );
}
