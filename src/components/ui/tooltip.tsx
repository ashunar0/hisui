import { Portal } from "@ark-ui/react/portal";
import { Tooltip as ArkTooltip } from "@ark-ui/react/tooltip";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root(props: ComponentProps<typeof ArkTooltip.Root>) {
  return <ArkTooltip.Root openDelay={400} closeDelay={100} {...props} />;
}

function Trigger(props: ComponentProps<typeof ArkTooltip.Trigger>) {
  return <ArkTooltip.Trigger {...props} />;
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkTooltip.Content>) {
  return (
    <Portal>
      <ArkTooltip.Positioner>
        <ArkTooltip.Content
          className={cn(
            "rounded-md bg-fg px-2 py-1 text-xs font-medium text-bg shadow-md",
            "data-[state=open]:animate-menu-open",
            className,
          )}
          {...props}
        />
      </ArkTooltip.Positioner>
    </Portal>
  );
}

export const Tooltip = {
  Root,
  Trigger,
  Content,
};
