import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-xs text-fg-muted">Linear</p>
        {[
          { label: "Uploading file 1", value: 20 },
          { label: "Storage used", value: 65 },
          { label: "Almost done", value: 90 },
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

      <div className="flex flex-col gap-4">
        <p className="text-xs text-fg-muted">Circular</p>
        <div className="flex items-center gap-6">
          {[25, 50, 75, 100, null].map((value, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Progress.Root value={value}>
                <Progress.Circle>
                  <Progress.CircleTrack />
                  <Progress.CircleRange />
                </Progress.Circle>
              </Progress.Root>
              <span className="text-xs tabular-nums text-fg-muted">
                {value === null ? "—" : `${value}%`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
