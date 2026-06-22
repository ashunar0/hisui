"use client";

import { Stack } from "@/components/ui/stack";
import { Box } from "./box";

const ALIGNS = ["start", "center", "end", "stretch", "baseline"] as const;

export default function StackAlignDemo() {
  return (
    <div className="flex flex-col gap-3">
      {ALIGNS.map((a) => (
        <div
          key={a}
          className="grid grid-cols-[5rem_1fr] items-center gap-3"
        >
          <span className="font-mono text-fg-muted text-[11px]">{a}</span>
          <div className="h-16 rounded-sm bg-surface-muted px-2">
            <Stack direction="row" align={a} gap="sm" className="h-full">
              <Box>sm</Box>
              <div className="flex h-14 w-10 items-center justify-center rounded-sm border border-border bg-surface-sunken text-fg-muted text-xs">
                lg
              </div>
              <Box>sm</Box>
            </Stack>
          </div>
        </div>
      ))}
    </div>
  );
}
