import { Bell, Download, RefreshCw, Search } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { PeriodSelect } from "@/components/period-select";
import { StatCard, type StatCardProps } from "@/components/stat-card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Sidebar } from "@/components/ui/sidebar";
import { Tabs } from "@/components/ui/tabs";
import { ChannelChart } from "@/screens/dashboard/channel-chart";
import { RecentDeals } from "@/screens/dashboard/recent-deals";
import { RevenueChart } from "@/screens/dashboard/revenue-chart";

const STATS: StatCardProps[] = [
  { label: "総売上", value: "¥1,234,567", delta: 12.5, isPositive: true },
  { label: "新規顧客", value: "284", delta: 8.2, isPositive: true },
  { label: "完了案件", value: "47", delta: -3.1, isPositive: false },
  { label: "平均応答時間", value: "1.4h", delta: -18.7, isPositive: true },
];

export function Dashboard() {
  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
        <AppSidebar active="ホーム" />
        <main className="flex flex-1 flex-col overflow-hidden bg-canvas">
          <header className="flex h-14 shrink-0 items-center gap-3 px-6">
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
          <div className="flex-1 overflow-y-auto px-6 py-4">
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
                  <PeriodSelect />
                  <Button size="sm" className="gap-2">
                    <Download className="size-4" />
                    ダウンロード
                  </Button>
                </div>
              </div>
              <Tabs.Content
                value="overview"
                className="flex flex-col gap-4 pt-6"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {STATS.map((stat) => (
                    <StatCard key={stat.label} {...stat} />
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <RevenueChart />
                  <ChannelChart />
                </div>
                <RecentDeals />
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
