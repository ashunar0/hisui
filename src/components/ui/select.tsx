import { Portal } from "@ark-ui/react/portal";
import {
  Select as ArkSelect,
  createListCollection,
} from "@ark-ui/react/select";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Root = ArkSelect.Root;

function Trigger({
  className,
  ...props
}: ComponentProps<typeof ArkSelect.Trigger>) {
  return (
    <ArkSelect.Trigger
      className={cn(
        "inline-flex h-8 cursor-pointer items-center justify-between gap-2 rounded-md border border-border bg-surface px-3 text-sm text-fg outline-none transition-colors",
        "hover:bg-hover",
        "focus-visible:ring-2 focus-visible:ring-fg/20",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

const ValueText = ArkSelect.ValueText;

function Indicator({
  className,
  ...props
}: ComponentProps<typeof ArkSelect.Indicator>) {
  return (
    <ArkSelect.Indicator
      className={cn(
        "text-fg-muted transition-transform data-[state=open]:rotate-180",
        className,
      )}
      {...props}
    />
  );
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkSelect.Content>) {
  return (
    <Portal>
      <ArkSelect.Positioner>
        <ArkSelect.Content
          className={cn(
            "min-w-32 rounded-md border border-border bg-surface p-1 shadow-md focus:outline-none",
            "data-[state=open]:animate-menu-open",
            className,
          )}
          {...props}
        />
      </ArkSelect.Positioner>
    </Portal>
  );
}

function Item({ className, ...props }: ComponentProps<typeof ArkSelect.Item>) {
  return (
    <ArkSelect.Item
      className={cn(
        "flex cursor-pointer items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-sm text-fg-soft outline-none data-highlighted:bg-hover data-highlighted:text-fg",
        className,
      )}
      {...props}
    />
  );
}

const ItemText = ArkSelect.ItemText;
const ItemIndicator = ArkSelect.ItemIndicator;

export const Select = {
  Root,
  Trigger,
  ValueText,
  Indicator,
  Content,
  Item,
  ItemText,
  ItemIndicator,
};

export { createListCollection };
