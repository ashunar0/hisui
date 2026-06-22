"use client";

import { Badge } from "@/components/ui/badge";

const PALETTES = ["neutral", "success", "danger", "warning", "info"] as const;

export default function BadgeColorPalettesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {PALETTES.map((p) => (
        <Badge key={p} colorPalette={p}>
          {p}
        </Badge>
      ))}
    </div>
  );
}
