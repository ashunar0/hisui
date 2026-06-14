import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Linear />
      <BigCircleWithCenterLabel />
      <StateView />
    </div>
  );
}

function Linear() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        linear (file upload list、 indeterminate も対応 value={"{"}null{"}"})
      </p>
      <div className="flex flex-col gap-4">
        {[
          { label: "design-tokens.json", value: 20 },
          { label: "components.zip", value: 65 },
          { label: "README.md", value: 90 },
        ].map((item) => (
          <Progress.Root key={item.label} value={item.value}>
            <div className="flex items-center justify-between">
              <Progress.Label>{item.label}</Progress.Label>
              <Progress.ValueText />
            </div>
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
        ))}
        <Progress.Root value={null}>
          <Progress.Label>Indeterminate</Progress.Label>
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      </div>
    </div>
  );
}

function BigCircleWithCenterLabel() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        big circle + center label (Apple Watch 風、 ValueText を absolute で center 配置)
      </p>
      <div className="flex items-center gap-8">
        {[25, 50, 75, 100].map((value) => (
          <div key={value} className="relative">
            <Progress.Root value={value}>
              <Progress.Circle className="size-20 [--size:80px] [--thickness:6px]">
                <Progress.CircleTrack />
                <Progress.CircleRange />
              </Progress.Circle>
            </Progress.Root>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-semibold tabular-nums text-fg">
              {value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StateView() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        state View (Progress.View state="loading|complete" で content を swap、
        100% で ✓ Done に切替)
      </p>
      <div className="flex flex-col gap-4">
        {[
          { label: "Linting", value: 60 },
          { label: "Type check", value: 100 },
        ].map((item) => (
          <Progress.Root key={item.label} value={item.value}>
            <div className="flex items-center justify-between">
              <Progress.Label>{item.label}</Progress.Label>
              <Progress.View
                state="loading"
                className="flex items-center gap-1 text-xs tabular-nums text-fg-muted"
              >
                Running… <Progress.ValueText />
              </Progress.View>
              <Progress.View
                state="complete"
                className="flex items-center gap-1 text-xs text-fg"
              >
                <Check className="size-3.5" strokeWidth={2.5} />
                Done
              </Progress.View>
            </div>
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
        ))}
      </div>
    </div>
  );
}
