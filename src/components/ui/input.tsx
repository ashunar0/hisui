import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-sm border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
