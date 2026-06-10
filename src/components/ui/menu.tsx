import { Menu as ArkMenu } from "@ark-ui/react/menu";
import { Portal } from "@ark-ui/react/portal";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root(props: ComponentProps<typeof ArkMenu.Root>) {
  return <ArkMenu.Root {...props} />;
}

function Trigger(props: ComponentProps<typeof ArkMenu.Trigger>) {
  return <ArkMenu.Trigger {...props} />;
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
            "min-w-56 rounded-md border border-neutral-200 bg-white p-1 shadow-md focus:outline-none",
            "data-[state=open]:animate-menu-open",
            className,
          )}
          {...props}
        />
      </ArkMenu.Positioner>
    </Portal>
  );
}

function Item({ className, ...props }: ComponentProps<typeof ArkMenu.Item>) {
  return (
    <ArkMenu.Item
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-neutral-700 outline-none data-highlighted:bg-neutral-100 data-highlighted:text-neutral-900",
        className,
      )}
      {...props}
    />
  );
}

function Separator({
  className,
  ...props
}: ComponentProps<typeof ArkMenu.Separator>) {
  return (
    <ArkMenu.Separator
      className={cn("my-1 border-t border-neutral-200", className)}
      {...props}
    />
  );
}

export const Menu = {
  Root,
  Trigger,
  Content,
  Item,
  Separator,
};
