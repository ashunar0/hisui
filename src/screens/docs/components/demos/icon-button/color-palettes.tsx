import { Heart } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

const PALETTES = ["neutral", "success", "danger", "warning", "info"] as const;

export default function IconButtonColorPalettesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {PALETTES.map((p) => (
        <IconButton
          key={p}
          variant="subtle"
          colorPalette={p}
          aria-label={`Heart ${p}`}
        >
          <Heart className="size-4" />
        </IconButton>
      ))}
    </div>
  );
}
