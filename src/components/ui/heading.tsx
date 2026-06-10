import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type HeadingSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

const sizeClasses: Record<HeadingSize, string> = {
  xs: "text-sm",
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
  "2xl": "text-3xl",
};

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  size?: HeadingSize;
  as?: HeadingTag;
};

function Heading({
  size = "md",
  as = "h2",
  className,
  ...props
}: HeadingProps) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={cn(
        "font-semibold text-neutral-900",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}

export { Heading };
