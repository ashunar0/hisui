import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "neutral" | "success" | "danger" | "warning" | "info";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  neutral: "bg-surface-sunken text-fg-soft",
  success:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400",
  danger: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400",
  warning: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400",
  info: "bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-400",
};

function Badge({ variant = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-medium text-sm",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
