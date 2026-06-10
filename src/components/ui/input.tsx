import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputVariant = "outline" | "subtle" | "flushed";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
};

const variantClasses: Record<InputVariant, string> = {
  outline:
    "rounded-sm border border-border bg-surface px-3 focus:ring-2 focus:ring-fg-subtle",
  subtle:
    "rounded-sm border border-transparent bg-hover px-3 focus:bg-surface focus:ring-2 focus:ring-fg-subtle",
  flushed:
    "rounded-none border-b border-border bg-transparent px-0 focus:border-fg-soft",
};

function Input({ variant = "outline", className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-10 w-full py-2 text-sm text-fg placeholder:text-fg-subtle focus:outline-none",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Input };
