import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type AlertVariant = "neutral" | "success" | "danger" | "warning" | "info";

const VARIANT_CLASSES: Record<AlertVariant, string> = {
  neutral:
    "border-border bg-surface text-fg [&_[data-alert-icon]]:text-fg-muted",
  success:
    "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-100 [&_[data-alert-icon]]:text-emerald-600 dark:[&_[data-alert-icon]]:text-emerald-400",
  danger:
    "border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-900/60 dark:bg-rose-950/30 dark:text-rose-100 [&_[data-alert-icon]]:text-rose-600 dark:[&_[data-alert-icon]]:text-rose-400",
  warning:
    "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-100 [&_[data-alert-icon]]:text-amber-700 dark:[&_[data-alert-icon]]:text-amber-400",
  info:
    "border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-900/60 dark:bg-sky-950/30 dark:text-sky-100 [&_[data-alert-icon]]:text-sky-600 dark:[&_[data-alert-icon]]:text-sky-400",
};

type RootProps = HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
};

function Root({ variant = "neutral", className, ...props }: RootProps) {
  return (
    <div
      role="alert"
      className={cn(
        "grid grid-cols-[1.25rem_1fr] items-start gap-x-3 gap-y-1 rounded-md border p-4 text-sm",
        VARIANT_CLASSES[variant],
        className,
      )}
      {...props}
    />
  );
}

function Icon({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      data-alert-icon
      className={cn(
        "col-start-1 row-start-1 flex size-5 items-center justify-center [&>svg]:size-5",
        className,
      )}
      {...props}
    />
  );
}

function Title({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "col-start-2 font-medium leading-5 tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function Description({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("col-start-2 text-sm leading-5 opacity-90", className)}
      {...props}
    />
  );
}

function Actions({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "col-start-2 mt-2 flex flex-wrap items-center gap-2",
        className,
      )}
      {...props}
    />
  );
}

export const Alert = { Root, Icon, Title, Description, Actions };
