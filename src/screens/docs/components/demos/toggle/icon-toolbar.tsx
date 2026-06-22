"use client";

import { Bold, Italic, Underline } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export default function ToggleIconToolbarDemo() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-md border border-border bg-surface p-1">
      <Toggle.Root
        aria-label="Bold"
        defaultPressed
        className="size-8 border-0 p-0"
      >
        <Bold className="size-4" strokeWidth={2.25} />
      </Toggle.Root>
      <Toggle.Root aria-label="Italic" className="size-8 border-0 p-0">
        <Italic className="size-4" strokeWidth={2.25} />
      </Toggle.Root>
      <Toggle.Root aria-label="Underline" className="size-8 border-0 p-0">
        <Underline className="size-4" strokeWidth={2.25} />
      </Toggle.Root>
    </div>
  );
}
