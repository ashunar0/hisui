import { Badge } from "@/components/ui/badge";

const SIZES = ["xs", "sm", "md", "lg"] as const;

export default function BadgeSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {SIZES.map((s) => (
        <Badge key={s} size={s}>
          {s}
        </Badge>
      ))}
    </div>
  );
}
