import { Popover as ArkPopover } from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root(props: ComponentProps<typeof ArkPopover.Root>) {
  return <ArkPopover.Root {...props} />;
}

function Trigger(props: ComponentProps<typeof ArkPopover.Trigger>) {
  return <ArkPopover.Trigger {...props} />;
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkPopover.Content>) {
  return (
    <Portal>
      <ArkPopover.Positioner>
        <ArkPopover.Content
          className={cn(
            "rounded-md border border-border bg-surface p-4 shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_0_4px_rgba(0,0,0,0.03)] focus:outline-none",
            "data-[state=open]:animate-menu-open",
            className,
          )}
          {...props}
        />
      </ArkPopover.Positioner>
    </Portal>
  );
}

export const Popover = {
  Root,
  Trigger,
  Content,
};
