import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Root(props: ComponentProps<typeof ArkDialog.Root>) {
  return <ArkDialog.Root {...props} />;
}

function Trigger(props: ComponentProps<typeof ArkDialog.Trigger>) {
  return <ArkDialog.Trigger {...props} />;
}

function Content({
  className,
  ...props
}: ComponentProps<typeof ArkDialog.Content>) {
  return (
    <Portal>
      <ArkDialog.Backdrop
        className={cn(
          "fixed inset-0 z-40 bg-black/30",
          "data-[state=open]:animate-menu-open",
        )}
      />
      <ArkDialog.Positioner className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <ArkDialog.Content
          className={cn(
            "w-full max-w-md rounded-lg border border-border bg-surface p-6 shadow-[0_1px_0_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.08),0_0_4px_rgba(0,0,0,0.03)] focus:outline-none",
            "data-[state=open]:animate-menu-open",
            className,
          )}
          {...props}
        />
      </ArkDialog.Positioner>
    </Portal>
  );
}

function Title({
  className,
  ...props
}: ComponentProps<typeof ArkDialog.Title>) {
  return (
    <ArkDialog.Title
      className={cn("text-base font-semibold text-fg pt-2 pb-4", className)}
      {...props}
    />
  );
}

function Description({
  className,
  ...props
}: ComponentProps<typeof ArkDialog.Description>) {
  return (
    <ArkDialog.Description
      className={cn("text-sm text-fg py-2", className)}
      {...props}
    />
  );
}

function CloseTrigger(props: ComponentProps<typeof ArkDialog.CloseTrigger>) {
  return <ArkDialog.CloseTrigger {...props} />;
}

export const Dialog = {
  Root,
  Trigger,
  Content,
  Title,
  Description,
  CloseTrigger,
};
