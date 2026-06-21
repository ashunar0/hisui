import { Stack } from "@/components/ui/stack";
import { Box } from "./box";

const GAPS = ["none", "xs", "sm", "md", "lg", "xl"] as const;

export default function StackGapDemo() {
  return (
    <div className="flex flex-col gap-3">
      {GAPS.map((g) => (
        <div
          key={g}
          className="grid grid-cols-[4rem_1fr] items-center gap-3"
        >
          <span className="font-mono text-fg-muted text-[11px]">{g}</span>
          <Stack direction="row" gap={g}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
        </div>
      ))}
    </div>
  );
}
