import { ScrollArea as ArkScrollArea } from "@ark-ui/react/scroll-area";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  ...props
}: ComponentProps<typeof ArkScrollArea.Root>) {
  return (
    <ArkScrollArea.Root
      className={cn("relative overflow-hidden", className)}
      {...props}
    />
  );
}

function Viewport({
  className,
  ...props
}: ComponentProps<typeof ArkScrollArea.Viewport>) {
  return (
    <ArkScrollArea.Viewport
      className={cn(
        "h-full w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      {...props}
    />
  );
}

function Scrollbar({
  orientation = "vertical",
  className,
  ...props
}: ComponentProps<typeof ArkScrollArea.Scrollbar>) {
  return (
    <ArkScrollArea.Scrollbar
      orientation={orientation}
      className={cn(
        "flex touch-none select-none p-0.5",
        orientation === "vertical" && "h-full w-2",
        orientation === "horizontal" && "h-2 w-full flex-col",
        className,
      )}
      {...props}
    />
  );
}

function Thumb({
  className,
  ...props
}: ComponentProps<typeof ArkScrollArea.Thumb>) {
  return (
    <ArkScrollArea.Thumb
      className={cn(
        "relative flex-1 rounded-full bg-fg-muted/30 transition-colors hover:bg-fg-muted/50",
        "data-hover:bg-fg-muted/50 data-dragging:bg-fg-muted/60",
        className,
      )}
      {...props}
    />
  );
}

export const ScrollArea = {
  Root,
  Viewport,
  Scrollbar,
  Thumb,
};
