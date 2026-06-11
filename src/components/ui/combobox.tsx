import {
  Combobox as ArkCombobox,
  useListCollection,
} from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const Root = ArkCombobox.Root;

function Label({
  className,
  ...props
}: ComponentProps<typeof ArkCombobox.Label>) {
  return (
    <ArkCombobox.Label
      className={cn("text-sm font-medium text-fg-soft", className)}
      {...props}
    />
  );
}

function Control({
  className,
  ...props
}: ComponentProps<typeof ArkCombobox.Control>) {
  return (
    <ArkCombobox.Control
      className={cn(
        "relative mt-1.5 inline-flex h-9 w-full items-center rounded-md border border-border bg-surface transition-colors",
        "focus-within:ring-2 focus-within:ring-fg/20",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function Input({
  className,
  ...props
}: ComponentProps<typeof ArkCombobox.Input>) {
  return (
    <ArkCombobox.Input
      className={cn(
        "h-full flex-1 bg-transparent px-3 text-sm text-fg placeholder:text-fg-subtle focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

function Trigger({
  className,
  ...props
}: ComponentProps<typeof ArkCombobox.Trigger>) {
  return (
    <ArkCombobox.Trigger
      className={cn(
        "flex h-full w-9 cursor-pointer items-center justify-center text-fg-muted hover:text-fg",
        "[&_svg]:transition-transform data-[state=open]:[&_svg]:rotate-180",
        className,
      )}
      {...props}
    />
  );
}

function ClearTrigger({
  className,
  ...props
}: ComponentProps<typeof ArkCombobox.ClearTrigger>) {
  return (
    <ArkCombobox.ClearTrigger
      className={cn(
        "flex h-full w-7 cursor-pointer items-center justify-center text-fg-muted hover:text-fg",
        className,
      )}
      {...props}
    />
  );
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkCombobox.Content>) {
  return (
    <Portal>
      <ArkCombobox.Positioner>
        <ArkCombobox.Content
          className={cn(
            "max-h-72 min-w-[var(--reference-width)] overflow-auto rounded-md border border-border bg-surface p-1 shadow-md focus:outline-none",
            "data-[state=open]:animate-menu-open",
            className,
          )}
          {...props}
        />
      </ArkCombobox.Positioner>
    </Portal>
  );
}

function Empty({
  className,
  ...props
}: ComponentProps<typeof ArkCombobox.Empty>) {
  return (
    <ArkCombobox.Empty
      className={cn(
        "px-2 py-3 text-center text-xs text-fg-muted",
        className,
      )}
      {...props}
    />
  );
}

function Item({
  className,
  ...props
}: ComponentProps<typeof ArkCombobox.Item>) {
  return (
    <ArkCombobox.Item
      className={cn(
        "flex cursor-pointer items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-sm text-fg-soft outline-none",
        "data-highlighted:bg-hover data-highlighted:text-fg",
        className,
      )}
      {...props}
    />
  );
}

const ItemText = ArkCombobox.ItemText;
const ItemIndicator = ArkCombobox.ItemIndicator;

export const Combobox = {
  Root,
  Label,
  Control,
  Input,
  Trigger,
  ClearTrigger,
  Content,
  Empty,
  Item,
  ItemText,
  ItemIndicator,
};

export { useListCollection };
