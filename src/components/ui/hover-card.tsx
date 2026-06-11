import { HoverCard as ArkHoverCard } from "@ark-ui/react/hover-card";
import { Portal } from "@ark-ui/react/portal";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root(props: ComponentProps<typeof ArkHoverCard.Root>) {
  return <ArkHoverCard.Root openDelay={150} closeDelay={150} {...props} />;
}

function Trigger(props: ComponentProps<typeof ArkHoverCard.Trigger>) {
  return <ArkHoverCard.Trigger {...props} />;
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkHoverCard.Content>) {
  return (
    <Portal>
      <ArkHoverCard.Positioner>
        <ArkHoverCard.Content
          className={cn(
            "rounded-md border border-border bg-surface p-4 shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_0_4px_rgba(0,0,0,0.03)] focus:outline-none",
            "data-[state=open]:animate-menu-open",
            className,
          )}
          {...props}
        />
      </ArkHoverCard.Positioner>
    </Portal>
  );
}

export const HoverCard = {
  Root,
  Trigger,
  Content,
};
