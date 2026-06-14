import { Tabs as ArkTabs } from "@ark-ui/react/tabs";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root(props: ComponentProps<typeof ArkTabs.Root>) {
  return <ArkTabs.Root {...props} />;
}

function List({ className, ...props }: ComponentProps<typeof ArkTabs.List>) {
  return (
    <ArkTabs.List
      className={cn(
        "relative inline-flex items-center gap-1 rounded-lg bg-surface-sunken p-1",
        className,
      )}
      {...props}
    />
  );
}

function Indicator({
  className,
  ...props
}: ComponentProps<typeof ArkTabs.Indicator>) {
  return (
    <ArkTabs.Indicator
      className={cn(
        "absolute top-[var(--top)] left-[var(--left)] h-[var(--height)] w-[var(--width)] rounded-md bg-surface",
        "shadow-[0_1px_0_rgba(0,0,0,0.04),0_4px_8px_rgba(0,0,0,0.06),0_0_4px_rgba(0,0,0,0.03)]",
        "dark:shadow-[0_1px_0_rgba(0,0,0,0.4),0_4px_8px_rgba(0,0,0,0.4),0_0_4px_rgba(0,0,0,0.2)]",
        "transition-[left,top,width,height] duration-200 ease-out",
        className,
      )}
      {...props}
    />
  );
}

function Trigger({
  className,
  ...props
}: ComponentProps<typeof ArkTabs.Trigger>) {
  return (
    <ArkTabs.Trigger
      className={cn(
        "relative z-10 inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-fg-muted outline-none transition-colors",
        "hover:text-fg-soft",
        "focus-visible:ring-2 focus-visible:ring-fg/20",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "data-selected:text-fg",
        className,
      )}
      {...props}
    />
  );
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkTabs.Content>) {
  return (
    <ArkTabs.Content
      className={cn("focus-visible:outline-none", className)}
      {...props}
    />
  );
}

const Context = ArkTabs.Context;
const RootProvider = ArkTabs.RootProvider;

export const Tabs = {
  Root,
  RootProvider,
  List,
  Indicator,
  Trigger,
  Content,
  Context,
};
