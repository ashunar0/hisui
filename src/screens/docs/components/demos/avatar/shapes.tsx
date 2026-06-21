import { Avatar } from "@/components/ui/avatar";

const SHAPES = ["circle", "rounded", "square"] as const;

export default function AvatarShapesDemo() {
  return (
    <div className="flex items-center gap-3">
      {SHAPES.map((s) => (
        <div key={s} className="flex flex-col items-center gap-1">
          <Avatar.Root shape={s} size="lg">
            <Avatar.Image src={`https://i.pravatar.cc/100?u=${s}`} alt={s} />
            <Avatar.Fallback name={s} />
          </Avatar.Root>
          <span className="font-mono text-[11px] text-fg-muted">{s}</span>
        </div>
      ))}
    </div>
  );
}
