import { ChevronRight } from "lucide-react";
import { Fragment, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = HTMLAttributes<HTMLElement> & {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items, className, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-1.5", className)}
      {...props}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <Fragment key={i}>
            {item.href && !isLast ? (
              <a
                href={item.href}
                className="text-sm text-neutral-500 hover:text-neutral-900"
              >
                {item.label}
              </a>
            ) : (
              <span
                aria-current={isLast ? "page" : undefined}
                className={cn(
                  "text-sm",
                  isLast
                    ? "font-medium text-neutral-900"
                    : "text-neutral-500",
                )}
              >
                {item.label}
              </span>
            )}
            {!isLast && (
              <ChevronRight className="size-3.5 text-neutral-400" />
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
