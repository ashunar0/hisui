import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "neutral" | "success" | "danger" | "warning" | "info";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  neutral: "bg-surface-sunken text-fg-soft",
  success: "bg-success-subtle text-success-fg",
  danger: "bg-danger-subtle text-danger-fg",
  warning: "bg-warning-subtle text-warning-fg",
  info: "bg-info-subtle text-info-fg",
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
