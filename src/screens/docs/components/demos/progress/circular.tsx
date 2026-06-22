"use client";

import { Progress } from "@/components/ui/progress";

export default function ProgressCircularDemo() {
  return (
    <div className="flex items-center gap-6">
      {[25, 50, 75, 100].map((value) => (
        <Progress.Root key={value} value={value}>
          <Progress.Circle>
            <Progress.CircleTrack />
            <Progress.CircleRange />
          </Progress.Circle>
        </Progress.Root>
      ))}
    </div>
  );
}
