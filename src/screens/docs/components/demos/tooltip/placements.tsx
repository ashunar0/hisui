import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";

const PLACEMENTS = ["top", "bottom", "left", "right"] as const;

export default function TooltipPlacementsDemo() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {PLACEMENTS.map((p) => (
        <div key={p} className="flex flex-col items-center gap-2 p-6">
          <Tooltip.Root positioning={{ placement: p }}>
            <Tooltip.Trigger asChild>
              <Button variant="outline" size="sm">
                {p}
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
              placement: {p}
              <Tooltip.Arrow>
                <Tooltip.ArrowTip />
              </Tooltip.Arrow>
            </Tooltip.Content>
          </Tooltip.Root>
        </div>
      ))}
    </div>
  );
}
