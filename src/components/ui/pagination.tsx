import { Pagination as ArkPagination } from "@ark-ui/react/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  ...props
}: ComponentProps<typeof ArkPagination.Root>) {
  return (
    <ArkPagination.Root
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

const itemStyles = cn(
  "inline-flex size-9 items-center justify-center rounded-md border border-border bg-surface text-sm font-medium text-fg-soft transition-colors",
  "hover:bg-hover hover:text-fg",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/30",
  "data-selected:border-fg data-selected:bg-fg data-selected:text-bg",
  "data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:hover:bg-surface data-disabled:hover:text-fg-soft",
);

function Item({
  className,
  ...props
}: ComponentProps<typeof ArkPagination.Item>) {
  return (
    <ArkPagination.Item className={cn(itemStyles, className)} {...props} />
  );
}

function PrevTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof ArkPagination.PrevTrigger>) {
  return (
    <ArkPagination.PrevTrigger
      className={cn(itemStyles, className)}
      {...props}
    >
      {children ?? <ChevronLeft className="size-4" strokeWidth={2.25} />}
    </ArkPagination.PrevTrigger>
  );
}

function NextTrigger({
  className,
  children,
  ...props
}: ComponentProps<typeof ArkPagination.NextTrigger>) {
  return (
    <ArkPagination.NextTrigger
      className={cn(itemStyles, className)}
      {...props}
    >
      {children ?? <ChevronRight className="size-4" strokeWidth={2.25} />}
    </ArkPagination.NextTrigger>
  );
}

function Ellipsis({
  className,
  children,
  ...props
}: ComponentProps<typeof ArkPagination.Ellipsis>) {
  return (
    <ArkPagination.Ellipsis
      className={cn(
        "inline-flex size-9 items-center justify-center text-sm text-fg-muted",
        className,
      )}
      {...props}
    >
      {children ?? "…"}
    </ArkPagination.Ellipsis>
  );
}

const Context = ArkPagination.Context;

export const Pagination = {
  Root,
  Item,
  PrevTrigger,
  NextTrigger,
  Ellipsis,
  Context,
};
