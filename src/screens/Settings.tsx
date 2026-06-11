import { Bell, Calendar, Check, ChevronDown, Search } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { SettingsRow } from "@/components/settings-row";
import { type Theme, useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DatePicker } from "@/components/ui/date-picker";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Select, createListCollection } from "@/components/ui/select";
import { Sidebar } from "@/components/ui/sidebar";
import { Tabs } from "@/components/ui/tabs";
import { AvatarRow } from "@/screens/settings/avatar-row";
import { DangerZone } from "@/screens/settings/danger-zone";
import { Notifications } from "@/screens/settings/notifications";

const LANGUAGE_COLLECTION = createListCollection({
  items: [
    { label: "日本語", value: "ja" },
    { label: "English", value: "en" },
    { label: "中文", value: "zh" },
  ],
});

export function Settings() {
  const { theme, setTheme } = useTheme();
  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
        <AppSidebar active="設定" />
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
              <AvatarRow />
              <SettingsRow
                title="名前"
                description="アカウント名として表示されます"
                htmlFor="name"
              >
                <Input id="name" defaultValue="あさひ" className="md:w-72" />
              </SettingsRow>
              <SettingsRow
                title="Email"
                description="ログインに使用されるメールアドレス"
                htmlFor="email"
              >
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
              </SettingsRow>
              <SettingsRow
                title="生年月日"
                description="表示用。公開はされません"
                htmlFor="dob"
              >
                <DatePicker.Root
                  locale="ja-JP"
                  startOfWeek={0}
                  positioning={{ placement: "bottom-end" }}
                >
                  <DatePicker.Control className="md:w-72">
                    <DatePicker.Input
                      id="dob"
                      placeholder="YYYY-MM-DD"
                    />
                    <DatePicker.Trigger>
                      <Calendar className="size-4" />
                    </DatePicker.Trigger>
                  </DatePicker.Control>
                  <DatePicker.Content>
                    <DatePicker.Calendar />
                  </DatePicker.Content>
                </DatePicker.Root>
              </SettingsRow>
              <SettingsRow title="言語" description="UI の表示言語">
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
              </SettingsRow>
              <Notifications />
              <SettingsRow title="テーマ" description="UI の見た目">
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
              </SettingsRow>
              <DangerZone />
            </div>
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
