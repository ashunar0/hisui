import { Boxes } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sidebar } from "@/components/ui/sidebar";
import { DOCS_NAV } from "./docs-nav";
import { OnThisPage } from "./parts/on-this-page";

export function DocsLayout() {
  const { pathname } = useLocation();
  return (
    <Sidebar.Provider>
      <div className="flex h-svh flex-col bg-bg">
        <header className="flex shrink-0 items-center gap-3 border-b border-border px-4 py-2.5">
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
                  {group.items.map(({ label, to }) => (
                    <Sidebar.MenuButton
                      key={to}
                      asChild
                      active={pathname === to}
                    >
                      <NavLink to={to}>{label}</NavLink>
                    </Sidebar.MenuButton>
                  ))}
                </Sidebar.Group>
              ))}
            </Sidebar.Content>
          </Sidebar.Root>
          <main className="scrollbar-soft flex-1 overflow-y-auto">
            <div className="mx-auto flex max-w-6xl gap-10 px-6 py-12">
              <div className="mx-auto w-full min-w-0 max-w-3xl flex-1">
                <Outlet />
              </div>
              <OnThisPage />
            </div>
          </main>
        </div>
      </div>
    </Sidebar.Provider>
  );
}
