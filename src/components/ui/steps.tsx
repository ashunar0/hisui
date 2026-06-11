import { Steps as ArkSteps } from "@ark-ui/react/steps";
import { Check } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  ...props
}: ComponentProps<typeof ArkSteps.Root>) {
  return (
    <ArkSteps.Root
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  );
}

function List({
  className,
  ...props
}: ComponentProps<typeof ArkSteps.List>) {
  return (
    <ArkSteps.List
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  );
}

function Item({
  className,
  ...props
}: ComponentProps<typeof ArkSteps.Item>) {
  return (
    <ArkSteps.Item
      className={cn("flex flex-1 items-center gap-2", className)}
      {...props}
    />
  );
}

function Trigger({
  className,
  ...props
}: ComponentProps<typeof ArkSteps.Trigger>) {
  return (
    <ArkSteps.Trigger
      className={cn(
        "inline-flex items-center gap-2 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-fg/30",
        "data-[current]:cursor-default",
        className,
      )}
      {...props}
    />
  );
}

function Indicator({
  className,
  children,
  ...props
}: ComponentProps<typeof ArkSteps.Indicator>) {
  return (
    <ArkSteps.Indicator
      className={cn(
        "group flex size-7 items-center justify-center rounded-full border border-border bg-surface text-sm font-medium text-fg-muted transition-colors",
        "data-[current]:border-fg data-[current]:text-fg",
        "data-[complete]:border-fg data-[complete]:bg-fg data-[complete]:text-bg",
        className,
      )}
      {...props}
    >
      {children}
    </ArkSteps.Indicator>
  );
}

function CompleteIndicator() {
  return (
    <Check
      className="hidden size-3.5 group-data-[complete]:block"
      strokeWidth={3}
    />
  );
}

function Separator({
  className,
  ...props
}: ComponentProps<typeof ArkSteps.Separator>) {
  return (
    <ArkSteps.Separator
      className={cn(
        "h-px flex-1 bg-border transition-colors",
        "data-[complete]:bg-fg",
        className,
      )}
      {...props}
    />
  );
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkSteps.Content>) {
  return (
    <ArkSteps.Content
      className={cn(
        "rounded-md border border-border bg-surface p-6",
        className,
      )}
      {...props}
    />
  );
}

function CompletedContent({
  className,
  ...props
}: ComponentProps<typeof ArkSteps.CompletedContent>) {
  return (
    <ArkSteps.CompletedContent
      className={cn(
        "rounded-md border border-border bg-surface p-6 text-center",
        className,
      )}
      {...props}
    />
  );
}

const NextTrigger = ArkSteps.NextTrigger;
const PrevTrigger = ArkSteps.PrevTrigger;

export const Steps = {
  Root,
  List,
  Item,
  Trigger,
  Indicator,
  CompleteIndicator,
  Separator,
  Content,
  CompletedContent,
  NextTrigger,
  PrevTrigger,
};
