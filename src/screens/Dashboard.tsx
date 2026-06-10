import {
  BarChart3,
  Briefcase,
  Check,
  ChevronsUpDown,
  Home,
  LogOut,
  Plus,
  Settings,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Menu } from "@/components/ui/menu";
import { cn } from "@/lib/utils";

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
    <div className="flex min-h-screen">
      <aside className="flex w-64 flex-col border-r border-neutral-200 bg-neutral-50">
        <header className="p-3">
          <Menu.Root>
            <Menu.Trigger asChild>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100"
              >
                <Avatar.Root size="sm" shape="rounded">
                  <Avatar.Fallback name={CURRENT_TEAM} />
                </Avatar.Root>
                <span className="flex-1 text-left text-sm font-medium text-neutral-900">
                  {CURRENT_TEAM}
                </span>
                <ChevronsUpDown className="size-4 text-neutral-400" />
              </button>
            </Menu.Trigger>
            <Menu.Content>
              {TEAMS.map((team) => (
                <Menu.Item key={team} value={team}>
                  <Avatar.Root size="xs" shape="rounded">
                    <Avatar.Fallback name={team} />
                  </Avatar.Root>
                  <span className="flex-1">{team}</span>
                  {team === CURRENT_TEAM && <Check className="size-4" />}
                </Menu.Item>
              ))}
              <Menu.Separator />
              <Menu.Item
                value="new-team"
                className="text-blue-600 data-highlighted:text-blue-600"
              >
                <Plus className="size-4" />
                チーム作成
              </Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </header>
        <nav className="flex flex-col gap-4 p-4">
          {NAV_GROUPS.map((group, i) => (
            <div key={group.label ?? i} className="flex flex-col gap-1">
              {group.label && (
                <h2 className="px-3 pb-1 text-xs font-medium text-neutral-500">
                  {group.label}
                </h2>
              )}
              {group.items.map(({ label, icon: Icon }) => {
                const active = label === ACTIVE;
                return (
                  <a
                    key={label}
                    href="#"
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2 text-sm",
                      active
                        ? "bg-neutral-200 font-semibold text-neutral-900"
                        : "text-neutral-700 hover:bg-neutral-100",
                    )}
                  >
                    <Icon className="size-4" strokeWidth={active ? 2.5 : 2} />
                    {label}
                  </a>
                );
              })}
            </div>
          ))}
        </nav>
        <footer className="mt-auto border-t border-neutral-200 p-3">
          <Menu.Root positioning={{ placement: "top-start" }}>
            <Menu.Trigger asChild>
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100"
              >
                <Avatar.Root size="sm">
                  <Avatar.Fallback name="あさひ" />
                </Avatar.Root>
                <div className="min-w-0 flex-1 text-left">
                  <p className="truncate text-sm font-medium text-neutral-900">
                    あさひ
                  </p>
                  <p className="truncate text-xs text-neutral-500">
                    asahi@example.com
                  </p>
                </div>
                <ChevronsUpDown className="size-4 shrink-0 text-neutral-400" />
              </button>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.Item value="profile">
                <User className="size-4" />
                プロフィール
              </Menu.Item>
              <Menu.Item value="settings">
                <Settings className="size-4" />
                設定
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item
                value="logout"
                className="text-red-600 data-highlighted:bg-red-50 data-highlighted:text-red-600"
              >
                <LogOut className="size-4" />
                ログアウト
              </Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </footer>
      </aside>
      <main className="flex-1" />
    </div>
  );
}
