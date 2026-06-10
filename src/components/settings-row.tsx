import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SettingsRowProps = {
  title: string;
  description?: string;
  htmlFor?: string;
  align?: "start" | "center";
  className?: string;
  children?: ReactNode;
};

export function SettingsRow({
  title,
  description,
  htmlFor,
  align = "start",
  className,
  children,
}: SettingsRowProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 border-b border-border py-6 md:flex-row md:justify-between md:gap-6",
        align === "center" ? "md:items-center" : "md:items-start",
        className,
      )}
    >
      <div className="flex flex-col gap-1">
        {htmlFor ? (
          <label htmlFor={htmlFor} className="text-sm font-medium">
            {title}
          </label>
        ) : (
          <span className="text-sm font-medium">{title}</span>
        )}
        {description && <p className="text-xs text-fg-muted">{description}</p>}
      </div>
      {children}
    </div>
  );
}
