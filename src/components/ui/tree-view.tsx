import { TreeView as ArkTreeView } from "@ark-ui/react/tree-view";
import { ChevronRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root({
  className,
  ...props
}: ComponentProps<typeof ArkTreeView.Root>) {
  return (
    <ArkTreeView.Root
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}

function Label({
  className,
  ...props
}: ComponentProps<typeof ArkTreeView.Label>) {
  return (
    <ArkTreeView.Label
      className={cn("text-sm font-medium text-fg-soft", className)}
      {...props}
    />
  );
}

function Tree({
  className,
  ...props
}: ComponentProps<typeof ArkTreeView.Tree>) {
  return (
    <ArkTreeView.Tree
      className={cn(
        "flex flex-col gap-0.5 rounded-md border border-border bg-surface p-2",
        className,
      )}
      {...props}
    />
  );
}

const rowStyles = cn(
  "flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-fg-soft outline-none transition-colors",
  "hover:bg-hover hover:text-fg",
  "focus-visible:ring-2 focus-visible:ring-fg/30",
  "data-selected:bg-surface-sunken data-selected:text-fg",
  "data-disabled:cursor-not-allowed data-disabled:opacity-50 data-disabled:hover:bg-transparent",
);

function BranchControl({
  className,
  ...props
}: ComponentProps<typeof ArkTreeView.BranchControl>) {
  return (
    <ArkTreeView.BranchControl
      className={cn(rowStyles, "cursor-pointer", className)}
      {...props}
    />
  );
}

function BranchIndicator({
  className,
  children,
  ...props
}: ComponentProps<typeof ArkTreeView.BranchIndicator>) {
  return (
    <ArkTreeView.BranchIndicator
      className={cn(
        "inline-flex size-4 shrink-0 items-center justify-center text-fg-muted transition-transform duration-150",
        "data-[state=open]:rotate-90",
        className,
      )}
      {...props}
    >
      {children ?? <ChevronRight className="size-3.5" strokeWidth={2.25} />}
    </ArkTreeView.BranchIndicator>
  );
}

function BranchText({
  className,
  ...props
}: ComponentProps<typeof ArkTreeView.BranchText>) {
  return (
    <ArkTreeView.BranchText
      className={cn("truncate", className)}
      {...props}
    />
  );
}

function BranchContent({
  className,
  ...props
}: ComponentProps<typeof ArkTreeView.BranchContent>) {
  return (
    <ArkTreeView.BranchContent
      className={cn("relative flex flex-col gap-0.5 pl-4", className)}
      {...props}
    />
  );
}

function BranchIndentGuide({
  className,
  ...props
}: ComponentProps<typeof ArkTreeView.BranchIndentGuide>) {
  return (
    <ArkTreeView.BranchIndentGuide
      className={cn(
        "absolute top-0 bottom-0 left-2 w-px bg-border",
        className,
      )}
      {...props}
    />
  );
}

function Item({
  className,
  ...props
}: ComponentProps<typeof ArkTreeView.Item>) {
  return (
    <ArkTreeView.Item
      className={cn(rowStyles, "cursor-pointer pl-[1.875rem]", className)}
      {...props}
    />
  );
}

function ItemText({
  className,
  ...props
}: ComponentProps<typeof ArkTreeView.ItemText>) {
  return (
    <ArkTreeView.ItemText className={cn("truncate", className)} {...props} />
  );
}

const Branch = ArkTreeView.Branch;
const NodeProvider = ArkTreeView.NodeProvider;
const Context = ArkTreeView.Context;

export const TreeView = {
  Root,
  Label,
  Tree,
  Branch,
  BranchControl,
  BranchIndicator,
  BranchText,
  BranchContent,
  BranchIndentGuide,
  Item,
  ItemText,
  NodeProvider,
  Context,
};
