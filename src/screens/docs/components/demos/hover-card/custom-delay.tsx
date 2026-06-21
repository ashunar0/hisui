import { HoverCard } from "@/components/ui/hover-card";

export default function HoverCardCustomDelayDemo() {
  return (
    <div className="flex items-center gap-6 text-fg-soft text-sm">
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger asChild>
          <span className="cursor-pointer text-fg underline underline-offset-2">
            instant
          </span>
        </HoverCard.Trigger>
        <HoverCard.Content className="text-sm">
          0 / 0 — 即出 / 即閉
        </HoverCard.Content>
      </HoverCard.Root>
      <HoverCard.Root openDelay={150} closeDelay={150}>
        <HoverCard.Trigger asChild>
          <span className="cursor-pointer text-fg underline underline-offset-2">
            default
          </span>
        </HoverCard.Trigger>
        <HoverCard.Content className="text-sm">
          150 / 150 — ui-lab default
        </HoverCard.Content>
      </HoverCard.Root>
      <HoverCard.Root openDelay={500} closeDelay={200}>
        <HoverCard.Trigger asChild>
          <span className="cursor-pointer text-fg underline underline-offset-2">
            slow
          </span>
        </HoverCard.Trigger>
        <HoverCard.Content className="text-sm">
          500 / 200 — rich preview 向け
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  );
}
