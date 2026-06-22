"use client";

import { Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioVideoFrameDemo() {
  return (
    <div className="max-w-md">
      <AspectRatio
        ratio={16 / 9}
        className="rounded-md bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950"
      >
        <button
          type="button"
          aria-label="Play video"
          className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 flex size-14 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition hover:bg-white"
        >
          <Play className="size-6 fill-current" />
        </button>
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          <p className="font-medium text-sm">Onboarding tour</p>
          <p className="text-xs opacity-80">3 min · Product team</p>
        </div>
      </AspectRatio>
    </div>
  );
}
