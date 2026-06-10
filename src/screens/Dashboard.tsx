import {
  BarChart3,
  Bell,
  Briefcase,
  Home,
  Search,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";
import { TeamSwitcher } from "@/components/team-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { IconButton } from "@/components/ui/icon-button";
import { Sidebar } from "@/components/ui/sidebar";
import { UserMenu } from "@/components/user-menu";

type NavItem = {
  label: string;
  icon: LucideIcon;
};

type NavGroup = {
  label?: string;
  items: NavItem[];
};

const NAV_GROUPS: NavGroup[] = [
  {
    items: [{ label: "ホーム", icon: Home }],
  },
  {
    label: "ワークスペース",
    items: [
      { label: "顧客", icon: Users },
      { label: "案件", icon: Briefcase },
    ],
  },
  {
    label: "分析",
    items: [{ label: "レポート", icon: BarChart3 }],
  },
  {
    label: "アカウント",
    items: [{ label: "設定", icon: Settings }],
  },
];

const ACTIVE = "ホーム";

const TEAMS = ["Acme Inc", "Beta Co", "Delta Labs"];
const CURRENT_TEAM = "Acme Inc";

export function Dashboard() {
  return (
    <Sidebar.Provider>
      <div className="flex min-h-screen">
        <Sidebar.Root>
          <Sidebar.Header>
            <TeamSwitcher teams={TEAMS} current={CURRENT_TEAM} />
          </Sidebar.Header>
          <Sidebar.Content>
            {NAV_GROUPS.map((group, i) => (
              <Sidebar.Group key={group.label ?? i} label={group.label}>
                {group.items.map(({ label, icon: Icon }) => (
                  <Sidebar.MenuButton
                    key={label}
                    href="#"
                    active={label === ACTIVE}
                  >
                    <Icon className="size-4" />
                    {label}
                  </Sidebar.MenuButton>
                ))}
              </Sidebar.Group>
            ))}
          </Sidebar.Content>
          <Sidebar.Footer>
            <UserMenu name="あさひ" email="asahi@example.com" />
          </Sidebar.Footer>
        </Sidebar.Root>
        <main className="flex flex-1 flex-col">
          <header className="flex h-14 items-center gap-3 px-6">
            <Sidebar.Trigger className="-ml-2" />
            <Breadcrumb
              items={[
                { label: "ホーム", href: "#" },
                { label: "顧客", href: "#" },
                { label: "Acme Inc" },
              ]}
            />
            <div className="ml-auto flex items-center gap-1">
              <IconButton aria-label="検索">
                <Search className="size-4" />
              </IconButton>
              <IconButton aria-label="通知">
                <Bell className="size-4" />
              </IconButton>
              <ThemeToggle />
            </div>
          </header>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
