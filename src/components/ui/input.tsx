import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputVariant = "outline" | "subtle" | "flushed";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
};

const variantClasses: Record<InputVariant, string> = {
  outline:
    "rounded-sm border border-neutral-200 bg-white px-3 focus:ring-2 focus:ring-neutral-400",
  subtle:
    "rounded-sm border border-transparent bg-neutral-100 px-3 focus:bg-white focus:ring-2 focus:ring-neutral-400",
  flushed:
    "rounded-none border-b border-neutral-300 bg-transparent px-0 focus:border-neutral-700",
};

function Input({ variant = "outline", className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-10 w-full py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Input };
