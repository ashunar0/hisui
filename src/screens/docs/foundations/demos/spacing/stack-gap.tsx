"use client";

import { Stack } from "@/components/ui/stack";

type StackGap = {
  name: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  tw: string;
  px: string;
  note?: string;
};

const STACK_GAPS: StackGap[] = [
  { name: "none", tw: "gap-0", px: "0px" },
  { name: "xs", tw: "gap-1", px: "4px" },
  { name: "sm", tw: "gap-2", px: "8px" },
  { name: "md", tw: "gap-4", px: "16px", note: "default" },
  { name: "lg", tw: "gap-6", px: "24px" },
  { name: "xl", tw: "gap-8", px: "32px" },
];

function Preview({ gap }: { gap: StackGap["name"] }) {
  return (
    <Stack direction="row" gap={gap}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-8 w-8 rounded-sm border border-border bg-surface-sunken"
        />
      ))}
    </Stack>
  );
}

export default function SpacingStackGap() {
  return (
    <div className="flex flex-col">
      {STACK_GAPS.map((g) => (
        <div
          key={g.name}
          className="grid grid-cols-[5rem_8rem_1fr] items-center gap-4 border-b border-border-muted py-3 last:border-b-0"
        >
          <span className="font-mono text-fg text-xs">
            gap="{g.name}"
            {g.note && (
              <span className="ml-2 text-[10px] text-fg-muted">{g.note}</span>
            )}
          </span>
          <span className="font-mono text-[11px] text-fg-muted">
            {g.tw} / {g.px}
          </span>
          <Preview gap={g.name} />
        </div>
      ))}
    </div>
  );
}
