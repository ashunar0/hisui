import { Menu as ArkMenu } from "@ark-ui/react/menu";
import { Portal } from "@ark-ui/react/portal";
import { Check } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root(props: ComponentProps<typeof ArkMenu.Root>) {
  return <ArkMenu.Root {...props} />;
}

function Trigger(props: ComponentProps<typeof ArkMenu.Trigger>) {
  return <ArkMenu.Trigger {...props} />;
}

function Indicator({
  className,
  ...props
}: ComponentProps<typeof ArkMenu.Indicator>) {
  return (
    <ArkMenu.Indicator
      className={cn(
        "transition-transform data-[state=open]:rotate-180",
        className,
      )}
      {...props}
    />
  );
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkMenu.Content>) {
  return (
    <Portal>
      <ArkMenu.Positioner>
        <ArkMenu.Content
          className={cn(
            "min-w-56 rounded-md border border-border bg-surface p-1 shadow-md focus:outline-none",
            "data-[state=open]:animate-menu-open",
            className,
          )}
          {...props}
        />
      </ArkMenu.Positioner>
    </Portal>
  );
}

const itemClasses =
  "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-fg-soft outline-none data-highlighted:bg-hover data-highlighted:text-fg data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:data-highlighted:bg-transparent data-disabled:data-highlighted:text-fg-soft";

function Item({ className, ...props }: ComponentProps<typeof ArkMenu.Item>) {
  return <ArkMenu.Item className={cn(itemClasses, className)} {...props} />;
}

function ItemText({
  className,
  ...props
}: ComponentProps<typeof ArkMenu.ItemText>) {
  return (
    <ArkMenu.ItemText
      className={cn("flex-1 truncate", className)}
      {...props}
    />
  );
}

function TriggerItem({
  className,
  ...props
}: ComponentProps<typeof ArkMenu.TriggerItem>) {
  return (
    <ArkMenu.TriggerItem className={cn(itemClasses, className)} {...props} />
  );
}

function ItemGroup({
  className,
  ...props
}: ComponentProps<typeof ArkMenu.ItemGroup>) {
  return (
    <ArkMenu.ItemGroup
      className={cn("flex flex-col gap-0.5", className)}
      {...props}
    />
  );
}

function ItemGroupLabel({
  className,
  ...props
}: ComponentProps<typeof ArkMenu.ItemGroupLabel>) {
  return (
    <ArkMenu.ItemGroupLabel
      className={cn(
        "px-2 pt-1.5 pb-1 text-[11px] font-medium tracking-wide text-fg-muted uppercase",
        className,
      )}
      {...props}
    />
  );
}

function CheckboxItem({
  className,
  children,
  ...props
}: ComponentProps<typeof ArkMenu.CheckboxItem>) {
  return (
    <ArkMenu.CheckboxItem
      className={cn(itemClasses, "pl-7 relative", className)}
      {...props}
    >
      <ArkMenu.ItemIndicator className="absolute left-2 flex size-4 items-center justify-center">
        <Check className="size-3.5" strokeWidth={3} />
      </ArkMenu.ItemIndicator>
      {children}
    </ArkMenu.CheckboxItem>
  );
}

function RadioItemGroup(
  props: ComponentProps<typeof ArkMenu.RadioItemGroup>,
) {
  return <ArkMenu.RadioItemGroup {...props} />;
}

function RadioItem({
  className,
  children,
  ...props
}: ComponentProps<typeof ArkMenu.RadioItem>) {
  return (
    <ArkMenu.RadioItem
      className={cn(itemClasses, "pl-7 relative", className)}
      {...props}
    >
      <ArkMenu.ItemIndicator className="absolute left-2 flex size-4 items-center justify-center">
        <span className="size-1.5 rounded-full bg-fg" />
      </ArkMenu.ItemIndicator>
      {children}
    </ArkMenu.RadioItem>
  );
}

function ItemIndicator(
  props: ComponentProps<typeof ArkMenu.ItemIndicator>,
) {
  return <ArkMenu.ItemIndicator {...props} />;
}

function Separator({
  className,
  ...props
}: ComponentProps<typeof ArkMenu.Separator>) {
  return (
    <ArkMenu.Separator
      className={cn("my-1 border-t border-border-muted", className)}
      {...props}
    />
  );
}

function Arrow({
  className,
  ...props
}: ComponentProps<typeof ArkMenu.Arrow>) {
  return (
    <ArkMenu.Arrow
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
}: ComponentProps<typeof ArkMenu.ArrowTip>) {
  return (
    <ArkMenu.ArrowTip
      className={cn("border-l border-t border-border", className)}
      {...props}
    />
  );
}

function ContextTrigger(
  props: ComponentProps<typeof ArkMenu.ContextTrigger>,
) {
  return <ArkMenu.ContextTrigger {...props} />;
}

function Context(props: ComponentProps<typeof ArkMenu.Context>) {
  return <ArkMenu.Context {...props} />;
}

export const Menu = {
  Root,
  Trigger,
  TriggerItem,
  Indicator,
  Content,
  Item,
  ItemText,
  ItemGroup,
  ItemGroupLabel,
  ItemIndicator,
  CheckboxItem,
  RadioItemGroup,
  RadioItem,
  Separator,
  Arrow,
  ArrowTip,
  ContextTrigger,
  Context,
};
