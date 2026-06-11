import { Bold, Italic, Link2, Underline } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";

export function TooltipDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Simple hint</Tooltip.Content>
      </Tooltip.Root>

      <div className="flex items-center gap-1 rounded-md border border-border bg-surface p-1">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Bold className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Bold (⌘B)</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Italic className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Italic (⌘I)</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Underline className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Underline (⌘U)</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Link2 className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Insert link (⌘K)</Tooltip.Content>
        </Tooltip.Root>
      </div>
    </div>
  );
}
