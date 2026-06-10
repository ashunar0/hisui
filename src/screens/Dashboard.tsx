import {
  BarChart3,
  Bell,
  Briefcase,
  Calendar,
  Check,
  ChevronDown,
  Download,
  Home,
  RefreshCw,
  Search,
  Settings,
  TrendingDown,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { TeamSwitcher } from "@/components/team-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconButton } from "@/components/ui/icon-button";
import { Select, createListCollection } from "@/components/ui/select";
import { Sidebar } from "@/components/ui/sidebar";
import { Tabs } from "@/components/ui/tabs";
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

const periodCollection = createListCollection({
  items: [
    { label: "日", value: "day" },
    { label: "週", value: "week" },
    { label: "月", value: "month" },
    { label: "年", value: "year" },
  ],
});

type Stat = {
  label: string;
  value: string;
  delta: number;
  isPositive: boolean;
};

const STATS: Stat[] = [
  { label: "総売上", value: "¥1,234,567", delta: 12.5, isPositive: true },
  { label: "新規顧客", value: "284", delta: 8.2, isPositive: true },
  { label: "完了案件", value: "47", delta: -3.1, isPositive: false },
  { label: "平均応答時間", value: "1.4h", delta: -18.7, isPositive: true },
];

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
        <main className="flex flex-1 flex-col bg-canvas">
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
          <div className="flex-1 px-6 py-4">
            <Tabs.Root defaultValue="overview">
              <div className="flex flex-wrap items-center gap-y-2">
                <Tabs.List>
                  <Tabs.Trigger value="overview">概要</Tabs.Trigger>
                  <Tabs.Trigger value="customers">顧客</Tabs.Trigger>
                  <Tabs.Trigger value="activity">アクティビティ</Tabs.Trigger>
                  <Tabs.Trigger value="settings">設定</Tabs.Trigger>
                  <Tabs.Indicator />
                </Tabs.List>
                <div className="ml-auto flex items-center gap-2">
                  <IconButton aria-label="リフレッシュ">
                    <RefreshCw className="size-4" />
                  </IconButton>
                  <Select.Root
                    collection={periodCollection}
                    defaultValue={["week"]}
                    positioning={{ placement: "bottom-end" }}
                  >
                    <Select.Trigger className="border-transparent bg-surface-sunken hover:bg-surface-sunken-hover">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4 text-fg-muted" />
                        <Select.ValueText placeholder="期間" />
                      </div>
                      <Select.Indicator>
                        <ChevronDown className="size-4" />
                      </Select.Indicator>
                    </Select.Trigger>
                    <Select.Content>
                      {periodCollection.items.map((item) => (
                        <Select.Item key={item.value} item={item}>
                          <Select.ItemText>{item.label}</Select.ItemText>
                          <Select.ItemIndicator>
                            <Check className="size-4" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                  <Button size="sm" className="gap-2">
                    <Download className="size-4" />
                    ダウンロード
                  </Button>
                </div>
              </div>
              <Tabs.Content value="overview" className="pt-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {STATS.map((stat) => {
                    const TrendIcon =
                      stat.delta > 0 ? TrendingUp : TrendingDown;
                    return (
                      <Card.Root key={stat.label}>
                        <div className="flex flex-col gap-3 p-5">
                          <span className="text-sm text-fg-muted">
                            {stat.label}
                          </span>
                          <div className="flex items-baseline justify-between gap-2">
                            <span className="font-semibold text-2xl text-fg tabular-nums">
                              {stat.value}
                            </span>
                            <Badge
                              variant={stat.isPositive ? "success" : "danger"}
                              className="tabular-nums"
                            >
                              <TrendIcon className="size-3" />
                              {Math.abs(stat.delta).toFixed(1)}%
                            </Badge>
                          </div>
                        </div>
                      </Card.Root>
                    );
                  })}
                </div>
              </Tabs.Content>
              <Tabs.Content value="customers" className="pt-6 text-fg-soft">
                顧客のコンテンツ
              </Tabs.Content>
              <Tabs.Content value="activity" className="pt-6 text-fg-soft">
                アクティビティのコンテンツ
              </Tabs.Content>
              <Tabs.Content value="settings" className="pt-6 text-fg-soft">
                設定のコンテンツ
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
