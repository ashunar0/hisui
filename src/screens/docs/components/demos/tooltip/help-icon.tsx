import { Info } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

export default function TooltipHelpIconDemo() {
  return (
    <label className="flex items-center gap-1.5 text-sm">
      <span className="font-medium text-fg-soft">Username</span>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            aria-label="Username の説明"
            className="cursor-pointer"
          >
            <Info className="size-3.5 text-fg-muted" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content>3 〜 20 文字、 半角英数のみ</Tooltip.Content>
      </Tooltip.Root>
    </label>
  );
}
