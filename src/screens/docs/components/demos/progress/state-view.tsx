import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const TASKS = [
  { label: "Linting", value: 60 },
  { label: "Type check", value: 100 },
];

export default function ProgressStateViewDemo() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      {TASKS.map((item) => {
        const isComplete = item.value >= 100;
        return (
          <Progress.Root key={item.label} value={item.value}>
            <div className="flex items-center justify-between">
              <Progress.Label>{item.label}</Progress.Label>
              {isComplete ? (
                <span className="flex items-center gap-1 text-fg text-xs">
                  <Check className="size-3.5" strokeWidth={2.5} />
                  Done
                </span>
              ) : (
                <span className="flex items-center gap-1 text-fg-muted text-xs tabular-nums">
                  Running…{" "}
                  <Progress.ValueText>{item.value}%</Progress.ValueText>
                </span>
              )}
            </div>
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
        );
      })}
    </div>
  );
}
