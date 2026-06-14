import { Progress as ArkProgress } from "@ark-ui/react/progress";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  ...props
}: ComponentProps<typeof ArkProgress.Root>) {
  return (
    <ArkProgress.Root
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}

function Label({
  className,
  ...props
}: ComponentProps<typeof ArkProgress.Label>) {
  return (
    <ArkProgress.Label
      className={cn("text-xs font-medium text-fg-soft", className)}
      {...props}
    />
  );
}

function ValueText({
  className,
  ...props
}: ComponentProps<typeof ArkProgress.ValueText>) {
  return (
    <ArkProgress.ValueText
      className={cn("text-xs tabular-nums text-fg-muted", className)}
      {...props}
    />
  );
}

function Track({
  className,
  ...props
}: ComponentProps<typeof ArkProgress.Track>) {
  return (
    <ArkProgress.Track
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-surface-sunken",
        className,
      )}
      {...props}
    />
  );
}

function Range({
  className,
  ...props
}: ComponentProps<typeof ArkProgress.Range>) {
  return (
    <ArkProgress.Range
      className={cn(
        "h-full bg-fg transition-[width] duration-300 ease-out",
        "data-[state=indeterminate]:bg-fg-muted",
        className,
      )}
      {...props}
    />
  );
}

function Circle({
  className,
  ...props
}: ComponentProps<typeof ArkProgress.Circle>) {
  return (
    <ArkProgress.Circle
      className={cn("size-12 [--size:48px] [--thickness:4px]", className)}
      {...props}
    />
  );
}

function CircleTrack({
  className,
  ...props
}: ComponentProps<typeof ArkProgress.CircleTrack>) {
  return (
    <ArkProgress.CircleTrack
      className={cn("stroke-surface-sunken", className)}
      {...props}
    />
  );
}

function CircleRange({
  className,
  ...props
}: ComponentProps<typeof ArkProgress.CircleRange>) {
  return (
    <ArkProgress.CircleRange
      className={cn(
        "stroke-fg transition-all duration-300 ease-out",
        "data-[state=indeterminate]:stroke-fg-muted",
        className,
      )}
      {...props}
    />
  );
}

const View = ArkProgress.View;
const Context = ArkProgress.Context;
const RootProvider = ArkProgress.RootProvider;

export const Progress = {
  Root,
  RootProvider,
  Label,
  ValueText,
  Track,
  Range,
  Circle,
  CircleTrack,
  CircleRange,
  View,
  Context,
};
