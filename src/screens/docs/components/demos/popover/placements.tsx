import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";

const PLACEMENTS = ["top", "bottom", "left", "right"] as const;

export default function PopoverPlacementsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-8">
      {PLACEMENTS.map((p) => (
        <Popover.Root key={p} positioning={{ placement: p }}>
          <Popover.Trigger asChild>
            <Button variant="outline" size="sm">
              {p}
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <span className="text-fg-soft text-xs">placement: {p}</span>
          </Popover.Content>
        </Popover.Root>
      ))}
    </div>
  );
}
