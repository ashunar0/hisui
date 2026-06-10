import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
};

function Stack({ direction = "column", className, ...props }: StackProps) {
  return (
    <div
      className={cn(
        "flex gap-4",
        direction === "row" ? "flex-row" : "flex-col",
        className,
      )}
      {...props}
    />
  );
}

export { Stack };
