import { Home, Inbox, Settings, Users } from "lucide-react";
import { Sidebar } from "@/components/ui/sidebar";

export default function SidebarBasicDemo() {
  return (
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
            <p className="text-fg-muted text-sm">main area</p>
          </main>
        </div>
      </Sidebar.Provider>
    </div>
  );
}
