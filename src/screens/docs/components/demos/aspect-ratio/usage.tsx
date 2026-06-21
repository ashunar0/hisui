import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioUsageDemo() {
  return (
    <div className="max-w-sm">
      <AspectRatio
        ratio={16 / 9}
        className="rounded-md border border-border bg-surface-sunken"
      >
        <div className="flex h-full items-center justify-center text-fg-muted text-sm">
          16:9
        </div>
      </AspectRatio>
    </div>
  );
}
