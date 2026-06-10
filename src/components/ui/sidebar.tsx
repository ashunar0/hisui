import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Slot } from "@/lib/slot";
import { cn } from "@/lib/utils";

function Root({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <aside
      className={cn(
        "flex w-64 flex-col border-r border-neutral-200 bg-neutral-50",
        className,
      )}
      {...props}
    />
  );
}

function Header({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <header className={cn("p-3", className)} {...props} />;
}

function Content({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex flex-1 flex-col gap-4 p-4", className)}
      {...props}
    />
  );
}

function Footer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return <footer className={cn("p-3", className)} {...props} />;
}

type GroupProps = HTMLAttributes<HTMLDivElement> & {
  label?: ReactNode;
};

function Group({ label, className, children, ...props }: GroupProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)} {...props}>
      {label && (
        <h2 className="px-3 pb-1 text-xs font-medium text-neutral-500">
          {label}
        </h2>
      )}
      {children}
    </div>
  );
}

type MenuButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  active?: boolean;
  asChild?: boolean;
};

function MenuButton({
  active = false,
  asChild = false,
  className,
  ...props
}: MenuButtonProps) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm",
        active
          ? "bg-neutral-200 font-semibold text-neutral-900 [&_svg]:stroke-[2.5]"
          : "text-neutral-700 hover:bg-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

export const Sidebar = {
  Root,
  Header,
  Content,
  Footer,
  Group,
  MenuButton,
};
