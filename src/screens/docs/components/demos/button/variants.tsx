import { Button } from "@/components/ui/button";

const VARIANTS = [
  "solid",
  "subtle",
  "outline",
  "ghost",
  "surface",
  "plain",
] as const;

export default function ButtonVariantsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {VARIANTS.map((v) => (
        <Button key={v} variant={v}>
          {v}
        </Button>
      ))}
    </div>
  );
}
