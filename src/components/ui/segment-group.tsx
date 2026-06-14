import { SegmentGroup as ArkSegmentGroup } from "@ark-ui/react/segment-group";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  ...props
}: ComponentProps<typeof ArkSegmentGroup.Root>) {
  return (
    <ArkSegmentGroup.Root
      className={cn(
        "relative inline-flex w-fit items-center gap-1 rounded-lg bg-surface-sunken p-1",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function Indicator({
  className,
  ...props
}: ComponentProps<typeof ArkSegmentGroup.Indicator>) {
  return (
    <ArkSegmentGroup.Indicator
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

function Item({
  className,
  ...props
}: ComponentProps<typeof ArkSegmentGroup.Item>) {
  return (
    <ArkSegmentGroup.Item
      className={cn(
        "relative z-10 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-fg-muted outline-none transition-colors",
        "hover:text-fg-soft",
        "focus-visible:ring-2 focus-visible:ring-fg/20",
        "data-[state=checked]:text-fg",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:hover:text-fg-muted",
        className,
      )}
      {...props}
    />
  );
}

function ItemText({
  className,
  ...props
}: ComponentProps<typeof ArkSegmentGroup.ItemText>) {
  return <ArkSegmentGroup.ItemText className={cn(className)} {...props} />;
}

const ItemControl = ArkSegmentGroup.ItemControl;
const ItemHiddenInput = ArkSegmentGroup.ItemHiddenInput;

export const SegmentGroup = {
  Root,
  Indicator,
  Item,
  ItemText,
  ItemControl,
  ItemHiddenInput,
};
