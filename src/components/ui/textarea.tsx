import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextareaVariant = "outline" | "subtle" | "flushed";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant?: TextareaVariant;
};

const variantClasses: Record<TextareaVariant, string> = {
  outline:
    "rounded-sm border border-border bg-surface px-3 focus:ring-2 focus:ring-fg-subtle",
  subtle:
    "rounded-sm border border-transparent bg-hover px-3 focus:bg-surface focus:ring-2 focus:ring-fg-subtle",
  flushed:
    "rounded-none border-b border-border bg-transparent px-0 focus:border-fg-soft",
};

function Textarea({ variant = "outline", className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex w-full resize-y py-2 text-sm text-fg placeholder:text-fg-subtle focus:outline-none",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
