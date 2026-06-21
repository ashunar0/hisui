import { Button } from "@/components/ui/button";

const SIZES = ["xs", "sm", "md", "lg"] as const;

export default function ButtonSizesDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {SIZES.map((s) => (
        <Button key={s} size={s}>
          {s}
        </Button>
      ))}
    </div>
  );
}
