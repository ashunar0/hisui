"use client";

import { Progress } from "@/components/ui/progress";

export default function ProgressIndeterminateDemo() {
  return (
    <div className="max-w-md">
      <Progress.Root value={null}>
        <Progress.Label>Loading…</Progress.Label>
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
    </div>
  );
}
