import { MDXProvider } from "@mdx-js/react";
import { Boxes } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}
import { useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sidebar } from "@/components/ui/sidebar";
import { DOCS_NAV } from "./docs-nav";
import { mdxComponents } from "./parts/mdx-components";
import { OnThisPage } from "./parts/on-this-page";

export function DocsLayout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [pathname]);
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
            <a
              href="https://github.com/ashunar0/hisui"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="inline-flex size-8 items-center justify-center rounded-md text-fg hover:bg-hover"
            >
              <GithubIcon className="size-4" />
            </a>
            <ThemeToggle />
          </div>
        </header>
        <div className="flex min-h-0 flex-1">
          <Sidebar.Root className="bg-bg border-none">
            <Sidebar.Content className="scrollbar-soft overflow-y-auto">
              {DOCS_NAV.map((group, i) => (
                <Sidebar.Group key={group.label ?? i}>
                  {group.label && (
                    <h2 className="px-3 pb-1 text-xs font-bold text-fg">
                      {group.label}
                    </h2>
                  )}
                  {group.items.map(({ label, to }) => (
                    <Sidebar.MenuButton
                      key={to}
                      asChild
                      active={pathname === to}
                      className={
                        pathname === to
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                          : undefined
                      }
                    >
                      <NavLink to={to}>{label}</NavLink>
                    </Sidebar.MenuButton>
                  ))}
                </Sidebar.Group>
              ))}
            </Sidebar.Content>
          </Sidebar.Root>
          <main ref={mainRef} className="scrollbar-soft flex-1 overflow-y-auto">
            <div className="mx-auto flex max-w-6xl gap-10 px-6 py-12">
              <div className="mx-auto w-full min-w-0 max-w-3xl flex-1">
                <MDXProvider components={mdxComponents}>
                  <Outlet />
                </MDXProvider>
              </div>
              <OnThisPage />
            </div>
          </main>
        </div>
      </div>
    </Sidebar.Provider>
  );
}
