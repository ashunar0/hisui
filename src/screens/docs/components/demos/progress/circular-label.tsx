"use client";

import { Progress } from "@/components/ui/progress";

export default function ProgressCircularLabelDemo() {
  return (
    <div className="flex items-center gap-8">
      {[25, 50, 75, 100].map((value) => (
        <div key={value} className="relative">
          <Progress.Root value={value}>
            <Progress.Circle className="size-20 [--size:80px] [--thickness:6px]">
              <Progress.CircleTrack />
              <Progress.CircleRange />
            </Progress.Circle>
          </Progress.Root>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-fg text-sm font-semibold tabular-nums">
            {value}%
          </div>
        </div>
      ))}
    </div>
  );
}
