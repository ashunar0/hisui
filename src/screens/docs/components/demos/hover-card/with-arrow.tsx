import { Button } from "@/components/ui/button";
import { HoverCard } from "@/components/ui/hover-card";

export default function HoverCardWithArrowDemo() {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <Button variant="outline">Hover me</Button>
      </HoverCard.Trigger>
      <HoverCard.Content className="w-64">
        <HoverCard.Arrow>
          <HoverCard.ArrowTip />
        </HoverCard.Arrow>
        <p className="text-fg-soft text-sm">
          Arrow tip が Trigger の方向に向く。
        </p>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}
