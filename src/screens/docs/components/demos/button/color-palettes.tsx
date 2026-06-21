import { Button } from "@/components/ui/button";

const PALETTES = ["neutral", "success", "danger", "warning", "info"] as const;

export default function ButtonColorPalettesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {PALETTES.map((p) => (
        <Button key={p} colorPalette={p}>
          {p}
        </Button>
      ))}
    </div>
  );
}
