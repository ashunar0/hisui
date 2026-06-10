import {
  BarChart3,
  Bell,
  Briefcase,
  Check,
  ChevronDown,
  Home,
  Search,
  Settings as SettingsIcon,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { TeamSwitcher } from "@/components/team-switcher";
import { type Theme, useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar } from "@/components/ui/avatar";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Select, createListCollection } from "@/components/ui/select";
import { Sidebar } from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";
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
    items: [{ label: "設定", icon: SettingsIcon }],
  },
];

const ACTIVE = "設定";

const TEAMS = ["Acme Inc", "Beta Co", "Delta Labs"];
const CURRENT_TEAM = "Acme Inc";

const LANGUAGE_COLLECTION = createListCollection({
  items: [
    { label: "日本語", value: "ja" },
    { label: "English", value: "en" },
    { label: "中文", value: "zh" },
  ],
});

export function Settings() {
  const { theme, setTheme } = useTheme();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
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
        <main className="flex flex-1 flex-col overflow-hidden bg-canvas">
          <header className="flex h-14 shrink-0 items-center gap-3 px-6">
            <Sidebar.Trigger className="-ml-2" />
            <Breadcrumb
              items={[{ label: "アカウント", href: "#" }, { label: "設定" }]}
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
          <div className="flex-1 overflow-y-auto px-6 pt-4 pb-20">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-2xl font-semibold tracking-tight">
                Settings
              </h1>
              <div className="mt-6 flex flex-col gap-3 border-b border-border py-6 md:flex-row md:items-center md:justify-between md:gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">アバター</span>
                  <p className="text-xs text-fg-muted">PNG / JPG / 1MB 以内</p>
                </div>
                <FileUpload.Root
                  accept="image/png,image/jpeg"
                  maxFiles={1}
                  maxFileSize={1024 * 1024}
                  onFileAccept={(d) => {
                    const file = d.files[0];
                    if (file) setAvatarUrl(URL.createObjectURL(file));
                  }}
                  className="flex items-center gap-3"
                >
                  <FileUpload.HiddenInput />
                  <Avatar.Root size="md">
                    {avatarUrl && <Avatar.Image src={avatarUrl} />}
                    <Avatar.Fallback name="あさひ" />
                  </Avatar.Root>
                  <div className="flex gap-2">
                    <FileUpload.Trigger className="inline-flex h-8 cursor-pointer items-center justify-center rounded-md border border-border bg-surface px-3 text-sm font-medium text-fg transition-colors hover:bg-hover">
                      Upload
                    </FileUpload.Trigger>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setAvatarUrl(null)}
                      className="text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/50"
                    >
                      削除
                    </Button>
                  </div>
                </FileUpload.Root>
              </div>
              <div className="flex flex-col gap-3 border-b border-border py-6 md:flex-row md:items-start md:justify-between md:gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-sm font-medium">
                    名前
                  </label>
                  <p className="text-xs text-fg-muted">
                    アカウント名として表示されます
                  </p>
                </div>
                <Input id="name" defaultValue="あさひ" className="md:w-72" />
              </div>
              <div className="flex flex-col gap-3 border-b border-border py-6 md:flex-row md:items-start md:justify-between md:gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <p className="text-xs text-fg-muted">
                    ログインに使用されるメールアドレス
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 md:w-72">
                  <Input
                    id="email"
                    type="email"
                    defaultValue="asahi@example.com"
                  />
                  <p className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                    <Check className="size-3" />
                    Verified
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 border-b border-border py-6 md:flex-row md:items-start md:justify-between md:gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">言語</span>
                  <p className="text-xs text-fg-muted">UI の表示言語</p>
                </div>
                <Select.Root
                  collection={LANGUAGE_COLLECTION}
                  defaultValue={["ja"]}
                  positioning={{ placement: "bottom-end" }}
                >
                  <Select.Trigger className="h-10 md:w-72">
                    <Select.ValueText placeholder="言語を選択" />
                    <Select.Indicator>
                      <ChevronDown className="size-4" />
                    </Select.Indicator>
                  </Select.Trigger>
                  <Select.Content>
                    {LANGUAGE_COLLECTION.items.map((item) => (
                      <Select.Item key={item.value} item={item}>
                        <Select.ItemText>{item.label}</Select.ItemText>
                        <Select.ItemIndicator>
                          <Check className="size-4" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </div>
              <div className="flex flex-col gap-4 border-b border-border py-6">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">通知</span>
                  <p className="text-xs text-fg-muted">どうやって受け取るか</p>
                </div>
                <div className="flex flex-col">
                  {[
                    {
                      label: "メール",
                      desc: "重要な更新をメールで受け取る",
                      defaultChecked: true,
                    },
                    {
                      label: "Push",
                      desc: "ブラウザ通知でリアルタイムに",
                      defaultChecked: false,
                    },
                    {
                      label: "ダイジェスト",
                      desc: "週次まとめを月曜の朝に",
                      defaultChecked: true,
                    },
                  ].map(({ label, desc, defaultChecked }) => (
                    <Switch.Root
                      key={label}
                      defaultChecked={defaultChecked}
                      className="flex items-center justify-between gap-4 border-border-muted border-t py-3 first:border-0 first:pt-0"
                    >
                      <div className="flex flex-col gap-0.5">
                        <Switch.Label className="text-fg">{label}</Switch.Label>
                        <p className="text-xs text-fg-muted">{desc}</p>
                      </div>
                      <Switch.Control>
                        <Switch.Thumb />
                      </Switch.Control>
                    </Switch.Root>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 border-b border-border py-6 md:flex-row md:items-start md:justify-between md:gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">テーマ</span>
                  <p className="text-xs text-fg-muted">UI の見た目</p>
                </div>
                <Tabs.Root
                  value={theme}
                  onValueChange={(d) => setTheme(d.value as Theme)}
                >
                  <Tabs.List>
                    <Tabs.Trigger value="light">Light</Tabs.Trigger>
                    <Tabs.Trigger value="dark">Dark</Tabs.Trigger>
                    <Tabs.Trigger value="system">System</Tabs.Trigger>
                    <Tabs.Indicator />
                  </Tabs.List>
                </Tabs.Root>
              </div>
              <div className="mt-10 rounded-md border border-rose-200 p-4 dark:border-rose-900/50">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-rose-700 dark:text-rose-400">
                      アカウント削除
                    </span>
                    <p className="text-xs text-fg-muted">
                      この操作は取り消せません。すべてのデータが完全に削除されます。
                    </p>
                  </div>
                  <Button className="bg-rose-600 text-white hover:bg-rose-700 dark:bg-rose-700 dark:hover:bg-rose-600">
                    Delete account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
