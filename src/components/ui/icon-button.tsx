import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex size-8 cursor-pointer items-center justify-center rounded-md text-fg-soft hover:bg-hover",
        className,
      )}
      {...props}
    />
  );
}
