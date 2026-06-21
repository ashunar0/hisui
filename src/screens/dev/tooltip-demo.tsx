import { Bold, HelpCircle, Italic, Link2, Underline } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";

export function TooltipDemo() {
  return (
    <div className="flex flex-col gap-8">
      <SimpleHint />
      <Toolbar />
      <WithArrow />
    </div>
  );
}

function SimpleHint() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        simple hint (openDelay=400ms / closeDelay=100ms の default)
      </p>
      <div>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button variant="outline">Hover me</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>Simple hint</Tooltip.Content>
        </Tooltip.Root>
      </div>
    </div>
  );
}

const TOOLS = [
  { icon: Bold, label: "Bold", shortcut: "⌘B" },
  { icon: Italic, label: "Italic", shortcut: "⌘I" },
  { icon: Underline, label: "Underline", shortcut: "⌘U" },
  { icon: Link2, label: "Insert link", shortcut: "⌘K" },
];

function Toolbar() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        toolbar (icon-only button に label + shortcut を tooltip で補完)
      </p>
      <div className="flex items-center gap-1 rounded-md border border-border bg-surface p-1 w-fit">
        {TOOLS.map((tool) => (
          <Tooltip.Root key={tool.label}>
            <Tooltip.Trigger asChild>
              <IconButton aria-label={tool.label}>
                <tool.icon className="size-4" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>
              {tool.label} ({tool.shortcut})
            </Tooltip.Content>
          </Tooltip.Root>
        ))}
      </div>
    </div>
  );
}

function WithArrow() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        with Arrow + ArrowTip (help icon、positioning prop で右配置 + offset)
      </p>
      <div className="flex items-center gap-2">
        <span className="text-sm text-fg-soft">API rate limit</span>
        <Tooltip.Root
          positioning={{ placement: "right", offset: { mainAxis: 8 } }}
        >
          <Tooltip.Trigger asChild>
            <button
              type="button"
              className="cursor-pointer text-fg-muted hover:text-fg"
              aria-label="What is rate limit?"
            >
              <HelpCircle className="size-4" />
            </button>
          </Tooltip.Trigger>
          <Tooltip.Content className="max-w-xs px-3 py-2 text-[11px] leading-relaxed">
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            60 requests / minute per IP. 超過すると 429 を返し、 Retry-After header
            で待機秒数を通知。
          </Tooltip.Content>
        </Tooltip.Root>
      </div>
    </div>
  );
}
