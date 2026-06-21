import { Stack } from "@/components/ui/stack";
import { Box } from "./box";

const DIRECTIONS = ["row", "column", "row-reverse", "column-reverse"] as const;

export default function StackDirectionDemo() {
  return (
    <div className="flex flex-col gap-4">
      {DIRECTIONS.map((d) => (
        <div key={d} className="flex flex-col gap-1">
          <span className="font-mono text-fg-muted text-[11px]">{d}</span>
          <Stack direction={d} gap="sm">
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
        </div>
      ))}
    </div>
  );
}
