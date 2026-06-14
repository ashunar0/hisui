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

function Anchor(props: ComponentProps<typeof ArkPopover.Anchor>) {
  return <ArkPopover.Anchor {...props} />;
}

function Positioner({
  className,
  ...props
}: ComponentProps<typeof ArkPopover.Positioner>) {
  return <ArkPopover.Positioner className={cn(className)} {...props} />;
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkPopover.Content>) {
  return (
    <Portal>
      <Positioner>
        <ArkPopover.Content
          className={cn(
            "rounded-md border border-border bg-surface p-4 shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_0_4px_rgba(0,0,0,0.03)] focus:outline-none",
            "data-[state=open]:animate-menu-open",
            className,
          )}
          {...props}
        />
      </Positioner>
    </Portal>
  );
}

function Arrow({
  className,
  ...props
}: ComponentProps<typeof ArkPopover.Arrow>) {
  return (
    <ArkPopover.Arrow
      className={cn(
        "[--arrow-size:8px] [--arrow-background:var(--color-surface)]",
        className,
      )}
      {...props}
    />
  );
}

function ArrowTip({
  className,
  ...props
}: ComponentProps<typeof ArkPopover.ArrowTip>) {
  return <ArkPopover.ArrowTip className={cn(className)} {...props} />;
}

function Title({
  className,
  ...props
}: ComponentProps<typeof ArkPopover.Title>) {
  return (
    <ArkPopover.Title
      className={cn("text-sm font-semibold text-fg", className)}
      {...props}
    />
  );
}

function Description({
  className,
  ...props
}: ComponentProps<typeof ArkPopover.Description>) {
  return (
    <ArkPopover.Description
      className={cn("text-xs text-fg-muted", className)}
      {...props}
    />
  );
}

function Indicator({
  className,
  ...props
}: ComponentProps<typeof ArkPopover.Indicator>) {
  return (
    <ArkPopover.Indicator
      className={cn(
        "transition-transform data-[state=open]:rotate-180",
        className,
      )}
      {...props}
    />
  );
}

function CloseTrigger(props: ComponentProps<typeof ArkPopover.CloseTrigger>) {
  return <ArkPopover.CloseTrigger {...props} />;
}

const Context = ArkPopover.Context;
const RootProvider = ArkPopover.RootProvider;

export const Popover = {
  Root,
  RootProvider,
  Trigger,
  Anchor,
  Positioner,
  Content,
  Arrow,
  ArrowTip,
  Title,
  Description,
  Indicator,
  CloseTrigger,
  Context,
};
