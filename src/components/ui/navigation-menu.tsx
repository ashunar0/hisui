import { NavigationMenu as ArkNavigationMenu } from "@ark-ui/react/navigation-menu";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.Root>) {
  return (
    <ArkNavigationMenu.Root
      className={cn("relative inline-flex", className)}
      {...props}
    />
  );
}

function List({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.List>) {
  return (
    <ArkNavigationMenu.List
      className={cn(
        "flex items-center gap-0.5 rounded-md border border-border bg-surface p-1",
        className,
      )}
      {...props}
    />
  );
}

function Item({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.Item>) {
  return (
    <ArkNavigationMenu.Item
      className={cn("relative", className)}
      {...props}
    />
  );
}

const triggerStyles = cn(
  "group inline-flex h-8 cursor-pointer items-center gap-1 rounded-md px-3 text-sm font-medium text-fg-soft outline-none transition-colors",
  "hover:bg-hover hover:text-fg",
  "focus-visible:ring-2 focus-visible:ring-fg/30",
  "data-[state=open]:bg-hover data-[state=open]:text-fg",
  "data-disabled:cursor-not-allowed data-disabled:opacity-50",
);

function Trigger({
  className,
  children,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.Trigger>) {
  return (
    <ArkNavigationMenu.Trigger
      className={cn(triggerStyles, className)}
      {...props}
    >
      {children}
      <ChevronDown
        className="size-3.5 text-fg-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
        strokeWidth={2.25}
      />
    </ArkNavigationMenu.Trigger>
  );
}

function Link({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.Link>) {
  return (
    <ArkNavigationMenu.Link
      className={cn(
        "inline-flex h-8 cursor-pointer items-center rounded-md px-3 text-sm font-medium text-fg-soft outline-none transition-colors",
        "hover:bg-hover hover:text-fg",
        "focus-visible:ring-2 focus-visible:ring-fg/30",
        "data-[state=open]:bg-hover data-[state=open]:text-fg",
        className,
      )}
      {...props}
    />
  );
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.Content>) {
  return (
    <ArkNavigationMenu.Content
      className={cn(
        "absolute top-0 left-0 outline-none",
        "data-[state=open]:animate-menu-open",
        "data-[state=closed]:animate-menu-close",
        className,
      )}
      {...props}
    />
  );
}

function Viewport({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.Viewport>) {
  return (
    <ArkNavigationMenu.Viewport
      className={cn(
        "relative h-[var(--viewport-height)] w-[var(--viewport-width)] overflow-hidden rounded-md border border-border bg-surface outline-none transition-[width,height] duration-200",
        "drop-shadow-[0_1px_0_rgba(0,0,0,0.04)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.08)] drop-shadow-[0_0_4px_rgba(0,0,0,0.03)]",
        "dark:drop-shadow-[0_1px_0_rgba(0,0,0,0.4)] dark:drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_4px_rgba(0,0,0,0.2)]",
        "data-[state=open]:animate-menu-open",
        "data-[state=closed]:animate-menu-close",
        className,
      )}
      {...props}
    />
  );
}

function ViewportPositioner({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.ViewportPositioner>) {
  return (
    <ArkNavigationMenu.ViewportPositioner
      className={cn("z-50", className)}
      {...props}
    />
  );
}

function Indicator({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.Indicator>) {
  return (
    <ArkNavigationMenu.Indicator
      className={cn(
        "z-40 flex h-1.5 items-end justify-center overflow-hidden",
        "data-[state=visible]:animate-menu-open",
        "data-[state=hidden]:animate-menu-close",
        className,
      )}
      {...props}
    />
  );
}

function ItemIndicator({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.ItemIndicator>) {
  return (
    <ArkNavigationMenu.ItemIndicator
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    />
  );
}

function Arrow({
  className,
  ...props
}: ComponentProps<typeof ArkNavigationMenu.Arrow>) {
  return (
    <ArkNavigationMenu.Arrow
      className={cn(
        "size-2.5 rotate-45 border-b border-r border-border bg-surface",
        className,
      )}
      {...props}
    />
  );
}

const Context = ArkNavigationMenu.Context;
const RootProvider = ArkNavigationMenu.RootProvider;

export const NavigationMenu = {
  Root,
  RootProvider,
  List,
  Item,
  Trigger,
  Link,
  Content,
  Viewport,
  ViewportPositioner,
  Indicator,
  ItemIndicator,
  Arrow,
  Context,
};
