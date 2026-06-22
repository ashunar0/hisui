"use client";

import { ChevronsLeftRight, Star } from "lucide-react";
import { Sidebar } from "@/components/ui/sidebar";

export default function SidebarWithTriggerDemo() {
  return (
    <div className="relative h-72 overflow-hidden rounded-lg border border-border">
      <Sidebar.Provider>
        <div className="flex h-full">
          <Sidebar.Root className="[--sidebar-w:12rem]">
            <Sidebar.Header>
              <span className="font-semibold text-sm">Workspace</span>
            </Sidebar.Header>
            <Sidebar.Content>
              <Sidebar.Group label="Pinned">
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton active href="#">
                    <Star className="size-4" />
                    Starred
                  </Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Group>
              <Sidebar.Group label="Channels">
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton href="#">general</Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton href="#">design</Sidebar.MenuButton>
                </Sidebar.MenuItem>
                <Sidebar.MenuItem>
                  <Sidebar.MenuButton href="#">eng</Sidebar.MenuButton>
                </Sidebar.MenuItem>
              </Sidebar.Group>
            </Sidebar.Content>
          </Sidebar.Root>
          <main className="flex-1">
            <header className="flex h-12 items-center gap-2 border-border border-b px-3">
              <Sidebar.Trigger />
              <ChevronsLeftRight className="size-3 text-fg-muted" />
              <span className="text-fg-muted text-sm">toggle で開閉</span>
            </header>
            <div className="p-4">
              <p className="text-fg-muted text-sm">main area</p>
            </div>
          </main>
        </div>
      </Sidebar.Provider>
    </div>
  );
}
