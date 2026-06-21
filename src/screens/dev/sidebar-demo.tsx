import {
  ChevronsLeftRight,
  Home,
  Inbox,
  MoreHorizontal,
  Settings,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Menu } from "@/components/ui/menu";
import { Sidebar } from "@/components/ui/sidebar";

export function SidebarDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Basic />
      <WithTrigger />
      <WithMenuAction />
    </div>
  );
}

function Basic() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Sidebar.Provider + Root + Header + Content + Group (label 付き) +
        MenuButton (active 切替) の最小 compose。 Chakra UI に同名 primitive
        は無いので shadcn 流の独自設計。
      </p>
      <div className="relative h-72 overflow-hidden rounded-lg border border-border">
        <Sidebar.Provider>
          <div className="flex h-full">
            <Sidebar.Root className="[--sidebar-w:12rem]">
              <Sidebar.Header>
                <span className="font-semibold text-sm">ui-lab</span>
              </Sidebar.Header>
              <Sidebar.Content>
                <Sidebar.Group>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton active href="#">
                      <Home className="size-4" />
                      Home
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton href="#">
                      <Inbox className="size-4" />
                      Inbox
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton href="#">
                      <Users className="size-4" />
                      Team
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                </Sidebar.Group>
              </Sidebar.Content>
              <Sidebar.Footer>
                <Sidebar.MenuButton href="#">
                  <Settings className="size-4" />
                  Settings
                </Sidebar.MenuButton>
              </Sidebar.Footer>
            </Sidebar.Root>
            <main className="flex-1 p-4">
              <p className="text-sm text-fg-muted">main area</p>
            </main>
          </div>
        </Sidebar.Provider>
      </div>
    </div>
  );
}

function WithTrigger() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Trigger を main 領域 header に置いて開閉。 default は viewport ≥ 1024px
        で open、 demo の親が狭いので initial で閉じてる可能性あり。 PanelLeft
        icon click で toggle。
      </p>
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
              <header className="flex h-12 items-center gap-2 border-b border-border px-3">
                <Sidebar.Trigger />
                <ChevronsLeftRight className="size-3 text-fg-muted" />
                <span className="text-sm text-fg-muted">toggle で開閉</span>
              </header>
              <div className="p-4">
                <p className="text-sm text-fg-muted">main area</p>
              </div>
            </main>
          </div>
        </Sidebar.Provider>
      </div>
    </div>
  );
}

function WithMenuAction() {
  const [active, setActive] = useState("design");
  const items = [
    { key: "general", label: "general" },
    { key: "design", label: "design" },
    { key: "eng", label: "engineering" },
    { key: "random", label: "random" },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        MenuItem の右に absolute で MenuAction (kebab button)。 hover で opacity
        100、 Menu primitive と組合せて context menu を出す。 active 状態は
        controlled state で切替。
      </p>
      <div className="relative h-72 overflow-hidden rounded-lg border border-border">
        <Sidebar.Provider>
          <div className="flex h-full">
            <Sidebar.Root className="[--sidebar-w:14rem]">
              <Sidebar.Header>
                <span className="font-semibold text-sm">Channels</span>
              </Sidebar.Header>
              <Sidebar.Content>
                <Sidebar.Group>
                  {items.map((it) => (
                    <Sidebar.MenuItem key={it.key}>
                      <Sidebar.MenuButton
                        active={active === it.key}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(it.key);
                        }}
                      >
                        # {it.label}
                      </Sidebar.MenuButton>
                      <Menu.Root>
                        <Menu.Trigger asChild>
                          <Sidebar.MenuAction aria-label="その他">
                            <MoreHorizontal className="size-4" />
                          </Sidebar.MenuAction>
                        </Menu.Trigger>
                        <Menu.Content>
                          <Menu.Item value="mute">Mute</Menu.Item>
                          <Menu.Item value="pin">Pin</Menu.Item>
                          <Menu.Item value="leave" className="text-danger-fg">
                            Leave
                          </Menu.Item>
                        </Menu.Content>
                      </Menu.Root>
                    </Sidebar.MenuItem>
                  ))}
                </Sidebar.Group>
              </Sidebar.Content>
            </Sidebar.Root>
            <main className="flex-1 p-4">
              <p className="text-sm text-fg-muted">
                # {items.find((i) => i.key === active)?.label}
              </p>
            </main>
          </div>
        </Sidebar.Provider>
      </div>
    </div>
  );
}
