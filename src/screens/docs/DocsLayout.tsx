import { Boxes } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sidebar } from "@/components/ui/sidebar";
import { DOCS_NAV } from "./docs-nav";

export function DocsLayout() {
  const { pathname } = useLocation();
  return (
    <Sidebar.Provider>
      <div className="flex min-h-svh flex-col bg-bg">
        <header className="sticky top-0 z-10 flex items-center gap-3 border-b border-border bg-bg/80 px-4 py-2.5 backdrop-blur">
          <Sidebar.Trigger />
          <Link
            to="/docs"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight"
          >
            <Boxes className="size-4" />
            ui-lab
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Link to="/" className="text-xs text-fg-muted hover:text-fg">
              ← home
            </Link>
            <ThemeToggle />
          </div>
        </header>
        <div className="flex min-h-0 flex-1">
          <Sidebar.Root>
            <Sidebar.Content className="scrollbar-soft overflow-y-auto">
              {DOCS_NAV.map((group, i) => (
                <Sidebar.Group key={group.label ?? i} label={group.label}>
                  {group.items.map(({ label, to, icon: Icon }) => (
                    <Sidebar.MenuButton
                      key={to}
                      asChild
                      active={pathname === to}
                    >
                      <NavLink to={to}>
                        <Icon className="size-4" />
                        {label}
                      </NavLink>
                    </Sidebar.MenuButton>
                  ))}
                </Sidebar.Group>
              ))}
            </Sidebar.Content>
          </Sidebar.Root>
          <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
            <Outlet />
          </main>
        </div>
      </div>
    </Sidebar.Provider>
  );
}
