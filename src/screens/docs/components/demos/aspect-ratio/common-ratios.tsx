"use client";

import { Image } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const RATIOS = [
  { label: "16:9", ratio: 16 / 9 },
  { label: "1:1", ratio: 1 },
  { label: "4:3", ratio: 4 / 3 },
  { label: "21:9", ratio: 21 / 9 },
];

export default function AspectRatioCommonRatiosDemo() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {RATIOS.map(({ label, ratio }) => (
        <AspectRatio
          key={label}
          ratio={ratio}
          className="rounded-md border border-border bg-surface-sunken"
        >
          <div className="flex h-full flex-col items-center justify-center gap-1 text-fg-muted">
            <Image className="size-5" />
            <span className="font-medium text-xs">{label}</span>
          </div>
        </AspectRatio>
      ))}
    </div>
  );
}
