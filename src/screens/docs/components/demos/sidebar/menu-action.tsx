import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Menu } from "@/components/ui/menu";
import { Sidebar } from "@/components/ui/sidebar";

const ITEMS = [
  { key: "general", label: "general" },
  { key: "design", label: "design" },
  { key: "eng", label: "engineering" },
  { key: "random", label: "random" },
];

export default function SidebarMenuActionDemo() {
  const [active, setActive] = useState("design");
  return (
    <div className="relative h-72 overflow-hidden rounded-lg border border-border">
      <Sidebar.Provider>
        <div className="flex h-full">
          <Sidebar.Root className="[--sidebar-w:14rem]">
            <Sidebar.Header>
              <span className="font-semibold text-sm">Channels</span>
            </Sidebar.Header>
            <Sidebar.Content>
              <Sidebar.Group>
                {ITEMS.map((it) => (
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
            <p className="text-fg-muted text-sm">
              # {ITEMS.find((i) => i.key === active)?.label}
            </p>
          </main>
        </div>
      </Sidebar.Provider>
    </div>
  );
}
