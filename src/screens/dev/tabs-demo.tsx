import { Bell, Inbox, Send, Trash2, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <div className="flex flex-col gap-8">
      <PillTabs />
      <IconBadgeTabs />
      <VerticalTabs />
    </div>
  );
}

function PillTabs() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">pill (sunken background, Calendar の月/週切替で使用)</p>
      <Tabs.Root defaultValue="overview">
        <Tabs.List>
          <Tabs.Indicator />
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
          <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
          <Tabs.Trigger value="notifications" disabled>
            Notifications
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview" className="mt-4 text-sm text-fg-soft">
          ダッシュボード全体のサマリー。
        </Tabs.Content>
        <Tabs.Content value="analytics" className="mt-4 text-sm text-fg-soft">
          PV / UU / CV の時系列分析。
        </Tabs.Content>
        <Tabs.Content value="reports" className="mt-4 text-sm text-fg-soft">
          月次レポートの出力と共有。
        </Tabs.Content>
        <Tabs.Content
          value="notifications"
          className="mt-4 text-sm text-fg-soft"
        >
          (disabled、表示されない)
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

function IconBadgeTabs() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">with icon + count badge</p>
      <Tabs.Root defaultValue="inbox">
        <Tabs.List>
          <Tabs.Indicator />
          <Tabs.Trigger value="inbox">
            <Inbox className="size-4" />
            Inbox
            <Badge className="rounded-full px-1.5 text-[10px] leading-none">
              12
            </Badge>
          </Tabs.Trigger>
          <Tabs.Trigger value="sent">
            <Send className="size-4" />
            Sent
          </Tabs.Trigger>
          <Tabs.Trigger value="trash">
            <Trash2 className="size-4" />
            Trash
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="inbox" className="mt-4 text-sm text-fg-soft">
          受信トレイ (12 件未読)
        </Tabs.Content>
        <Tabs.Content value="sent" className="mt-4 text-sm text-fg-soft">
          送信済みメール一覧
        </Tabs.Content>
        <Tabs.Content value="trash" className="mt-4 text-sm text-fg-soft">
          ゴミ箱
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

const VERTICAL_ITEMS = [
  {
    value: "profile",
    icon: User,
    label: "プロフィール",
    content: "名前・アバター・自己紹介を編集",
  },
  {
    value: "account",
    icon: Bell,
    label: "通知",
    content: "メール通知 / push 通知 の設定",
  },
  {
    value: "danger",
    icon: Trash2,
    label: "危険ゾーン",
    content: "アカウント削除など、戻せない操作",
  },
];

function VerticalTabs() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        vertical (orientation=&quot;vertical&quot;、Settings 左 nav 風)
      </p>
      <Tabs.Root
        defaultValue="profile"
        orientation="vertical"
        className="flex gap-4"
      >
        <Tabs.List className="flex h-fit flex-col items-stretch gap-1 rounded-lg bg-surface-sunken p-1">
          <Tabs.Indicator />
          {VERTICAL_ITEMS.map((item) => (
            <Tabs.Trigger
              key={item.value}
              value={item.value}
              className="w-44 justify-start"
            >
              <item.icon className="size-4" />
              {item.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="min-h-32 flex-1 rounded-md border border-border p-4">
          {VERTICAL_ITEMS.map((item) => (
            <Tabs.Content
              key={item.value}
              value={item.value}
              className="text-sm text-fg-soft"
            >
              {item.content}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
}
