import { Image, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function AspectRatioDemo() {
  return (
    <div className="flex flex-col gap-8">
      <CommonRatios />
      <VideoEmbed />
    </div>
  );
}

function CommonRatios() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        common ratios (16:9 video / 1:1 square / 4:3 photo / 21:9
        cinematic)。 grid で並べて寸法を比較できるようにした。
      </p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "16:9", ratio: 16 / 9 },
          { label: "1:1", ratio: 1 },
          { label: "4:3", ratio: 4 / 3 },
          { label: "21:9", ratio: 21 / 9 },
        ].map(({ label, ratio }) => (
          <AspectRatio
            key={label}
            ratio={ratio}
            className="rounded-md border border-border bg-surface-sunken"
          >
            <div className="flex h-full flex-col items-center justify-center gap-1 text-fg-muted">
              <Image className="size-5" />
              <span className="text-xs font-medium">{label}</span>
            </div>
          </AspectRatio>
        ))}
      </div>
    </div>
  );
}

function VideoEmbed() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        video embed 風 (16:9、 中央 Play button + 下に title overlay)。 中身は
        absolute position で thumbnail に重ねる用途。
      </p>
      <div className="max-w-lg">
        <AspectRatio
          ratio={16 / 9}
          className="rounded-md bg-gradient-to-br from-neutral-700 to-neutral-900 dark:from-neutral-800 dark:to-neutral-950"
        >
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition hover:bg-white"
          >
            <Play className="size-6 fill-current" />
          </button>
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
            <p className="text-sm font-medium">Onboarding tour</p>
            <p className="text-xs opacity-80">3 min · Product team</p>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
}
