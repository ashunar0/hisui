"use client";

import { Stack } from "@/components/ui/stack";
import { Box } from "./box";

const JUSTIFIES = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
] as const;

export default function StackJustifyDemo() {
  return (
    <div className="flex flex-col gap-3">
      {JUSTIFIES.map((j) => (
        <div
          key={j}
          className="grid grid-cols-[5rem_1fr] items-center gap-3"
        >
          <span className="font-mono text-fg-muted text-[11px]">{j}</span>
          <div className="rounded-sm bg-surface-muted p-1">
            <Stack direction="row" justify={j} gap="sm">
              <Box>1</Box>
              <Box>2</Box>
              <Box>3</Box>
            </Stack>
          </div>
        </div>
      ))}
    </div>
  );
}
