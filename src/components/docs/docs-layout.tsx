"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { GithubIcon } from "@/components/github-icon";
import { Sidebar } from "@/components/ui/sidebar";
import { DOCS_NAV } from "@hisui/screens/docs/docs-nav";
import { DocsSearch } from "./docs-search";

export function DocsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <Sidebar.Provider>
      <div className="flex h-svh flex-col bg-bg">
        <header className="flex shrink-0 items-center gap-3 border-b border-border px-6 py-4">
          <Link
            href="/docs"
            className="flex items-center gap-2 text-lg font-bold tracking-tight"
          >
            Hisui UI
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <DocsSearch />
            <a
              href="https://github.com/ashunar0/hisui"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="inline-flex size-8 items-center justify-center rounded-md text-fg hover:bg-hover"
            >
              <GithubIcon className="size-4" />
            </a>
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
                  {group.items.map(({ label, to }) => {
                    const active = pathname === to;
                    return (
                      <Sidebar.MenuButton
                        key={to}
                        asChild
                        active={active}
                        className={
                          active
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                            : undefined
                        }
                      >
                        <Link href={to}>{label}</Link>
                      </Sidebar.MenuButton>
                    );
                  })}
                </Sidebar.Group>
              ))}
            </Sidebar.Content>
          </Sidebar.Root>
          <main
            ref={mainRef}
            className="scrollbar-soft flex-1 overflow-y-auto"
          >
            <div className="mx-auto max-w-6xl px-6 pt-4 pb-16">
              {children}
            </div>
          </main>
        </div>
      </div>
    </Sidebar.Provider>
  );
}
