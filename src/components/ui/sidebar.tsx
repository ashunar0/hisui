import { PanelLeft } from "lucide-react";
import {
  createContext,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type HTMLAttributes,
  type ReactNode,
  useContext,
  useState,
} from "react";
import { IconButton } from "@/components/ui/icon-button";
import { Slot } from "@/lib/slot";
import { cn } from "@/lib/utils";

type SidebarContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used within Sidebar.Provider");
  }
  return ctx;
}

type ProviderProps = {
  children: ReactNode;
  defaultOpen?: boolean;
};

function Provider({ children, defaultOpen = true }: ProviderProps) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = () => setOpen((v) => !v);
  return (
    <SidebarContext.Provider value={{ open, setOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

function Root({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const { open } = useSidebar();
  return (
    <aside
      className={cn(
        "flex w-64 flex-col border-r border-border bg-surface-muted",
        "transition-[margin-left] duration-200 ease-out",
        !open && "-ml-64",
        className,
      )}
      {...props}
    />
  );
}

function Trigger(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, toggle } = useSidebar();
  return (
    <IconButton
      {...props}
      onClick={toggle}
      aria-label={open ? "サイドバーを閉じる" : "サイドバーを開く"}
    >
      <PanelLeft className="size-4" />
    </IconButton>
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
        <h2 className="px-3 pb-1 text-xs font-medium text-fg-muted">
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
          ? "bg-surface-sunken font-semibold text-fg [&_svg]:stroke-[2.5]"
          : "text-fg-soft hover:bg-hover",
        className,
      )}
      {...props}
    />
  );
}

export const Sidebar = {
  Provider,
  Root,
  Trigger,
  Header,
  Content,
  Footer,
  Group,
  MenuButton,
};
