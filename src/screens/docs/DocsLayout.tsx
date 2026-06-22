import { MDXProvider } from "@mdx-js/react";
import { useEffect, useRef } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { GithubIcon } from "@/components/github-icon";
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
    const item = DOCS_NAV.flatMap((g) => g.items).find((i) => i.to === pathname);
    document.title = item ? `${item.label} | Hisui UI` : "Hisui UI";
  }, [pathname]);
  return (
    <Sidebar.Provider>
      <div className="flex h-svh flex-col bg-bg">
        <header className="flex shrink-0 items-center gap-3 border-b border-border px-4 py-2.5">
          <Link
            to="/docs"
            className="flex items-center gap-2 text-md font-bold tracking-tight"
          >
            Hisui UI
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
