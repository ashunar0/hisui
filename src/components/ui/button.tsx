import type { ButtonHTMLAttributes } from "react";
import { Slot } from "@/lib/slot";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

const variantClasses: Record<Variant, string> = {
  solid: "bg-fg text-bg hover:bg-fg-soft",
  outline: "border border-border bg-surface text-fg hover:bg-hover",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

function Button({
  variant = "solid",
  size = "md",
  asChild = false,
  className,
  type,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...(asChild ? {} : { type: type ?? "button" })}
      {...props}
    />
  );
}

export { Button };
