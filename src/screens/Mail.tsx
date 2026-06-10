import {
  Archive,
  Clock,
  FileText,
  Flag,
  FolderInput,
  Inbox,
  Mail as MailIcon,
  MoreVertical,
  Pencil,
  Reply,
  Search,
  Send,
  ShieldAlert,
  Star,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TeamSwitcher } from "@/components/team-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/components/ui/sidebar";
import { Tabs } from "@/components/ui/tabs";
import { UserMenu } from "@/components/user-menu";

type Folder = {
  label: string;
  icon: LucideIcon;
  count?: number;
};

const FOLDERS: Folder[] = [
  { label: "Inbox", icon: Inbox, count: 12 },
  { label: "Starred", icon: Star, count: 5 },
  { label: "Sent", icon: Send },
  { label: "Drafts", icon: FileText, count: 3 },
  { label: "Snoozed", icon: Clock },
  { label: "Archive", icon: Archive },
  { label: "Spam", icon: ShieldAlert, count: 2 },
  { label: "Trash", icon: Trash2 },
];

type Label = {
  label: string;
  dot: string;
};

const LABELS: Label[] = [
  { label: "Work", dot: "bg-blue-500" },
  { label: "Personal", dot: "bg-neutral-900 dark:bg-neutral-100" },
  { label: "Billing", dot: "bg-yellow-500" },
  { label: "Travel", dot: "bg-green-500" },
  { label: "Urgent", dot: "bg-red-500" },
];

const ACTIVE = "Inbox";

const TEAMS = ["Acme Inc", "Beta Co", "Delta Labs"];
const CURRENT_TEAM = "Acme Inc";

type Mail = {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  date: string;
  dateFull: string;
  unread: boolean;
  body?: string;
};

const MAILS: Mail[] = [
  {
    id: "1",
    from: "GitHub",
    fromEmail: "noreply@github.com",
    subject: "[ui-lab] PR opened by Ashunar0",
    preview:
      "あさひ opened a pull request: refactor Dashboard を StatCard / PeriodSelect / Chart 各パーツに分割",
    date: "9:42",
    dateFull: "今日 9:42",
    unread: true,
    body: `Hi あさひ,

Ashunar0 が新しい Pull Request を作成しました。

タイトル: refactor: Dashboard を StatCard / PeriodSelect / Chart 各パーツに分割

Dashboard.tsx が肥大化していたため、繰り返し使えそうなパーツを汎用 components/ に、Dashboard 固有のチャートを screens/dashboard/ に切り出しました。

主な変更:
  - StatCard を src/components/ に抽出（汎用化）
  - PeriodSelect を src/components/ に抽出（日/週/月/年、Dashboard 以外でも使い回し想定）
  - Revenue chart / Channel chart を src/screens/dashboard/ に分離
  - Dashboard.tsx は orchestration とデータ定義だけに（351 → 160 行）

5 files changed, +210 / -194。

レビューよろしくお願いします。

— Ashunar0`,
  },
  {
    id: "2",
    from: "Linear",
    fromEmail: "notifications@linear.app",
    subject: "Issue assigned: Add dark mode toggle",
    preview:
      "Hi あさひ, you've been assigned to ENG-142. Due date is set for next Friday.",
    date: "8:15",
    dateFull: "今日 8:15",
    unread: true,
  },
  {
    id: "3",
    from: "Slack",
    fromEmail: "notifications@slack.com",
    subject: "メンションが 3 件あります",
    preview:
      "#design チャンネルで @asahi がメンションされました。最新の話題はカラートークンの設計について。",
    date: "Yesterday",
    dateFull: "昨日 16:37",
    unread: true,
  },
  {
    id: "4",
    from: "Stripe",
    fromEmail: "receipts@stripe.com",
    subject: "請求書 #1234 が支払われました",
    preview:
      "Acme Inc から ¥1,200,000 の支払いを受領しました。次回請求は 7/8 です。",
    date: "Yesterday",
    dateFull: "昨日 11:08",
    unread: false,
  },
  {
    id: "5",
    from: "Vercel",
    fromEmail: "deploy@vercel.com",
    subject: "Deploy succeeded: ui-lab",
    preview:
      "Your deployment is now live at https://ui-lab.vercel.app — build time 38s.",
    date: "2 days ago",
    dateFull: "6/8 22:14",
    unread: false,
  },
  {
    id: "6",
    from: "Notion",
    fromEmail: "notifications@notion.so",
    subject: "週次レポートが完成しました",
    preview:
      "今週のチーム進捗が自動でまとめられています。完了タスク 24、進行中 8。",
    date: "3 days ago",
    dateFull: "6/7 09:00",
    unread: false,
  },
  {
    id: "7",
    from: "Figma",
    fromEmail: "notifications@figma.com",
    subject: "コメントが追加されました",
    preview:
      "「Dashboard - Stats Card」にコメントが追加されました。チェックお願いします。",
    date: "Mon",
    dateFull: "6/6 14:22",
    unread: false,
  },
  {
    id: "8",
    from: "1Password",
    fromEmail: "alerts@1password.com",
    subject: "脆弱性のあるパスワードが検出されました",
    preview:
      "3 件のアカウントで再利用パスワードが検出されました。確認してください。",
    date: "Mon",
    dateFull: "6/6 08:30",
    unread: false,
  },
];

const ACTIVE_MAIL_ID = "1";

const activeMail = MAILS.find((m) => m.id === ACTIVE_MAIL_ID) ?? MAILS[0];

const RECIPIENT_NAME = "あさひ";
const RECIPIENT_EMAIL = "asahi@example.com";

export function Mail() {
  return (
    <Sidebar.Provider>
      <div className="flex h-screen">
        <Sidebar.Root>
          <Sidebar.Header>
            <TeamSwitcher teams={TEAMS} current={CURRENT_TEAM} />
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Group label="メールボックス">
              {FOLDERS.map(({ label, icon: Icon, count }) => (
                <Sidebar.MenuButton
                  key={label}
                  href="#"
                  active={label === ACTIVE}
                >
                  <Icon className="size-4" />
                  {label}
                  {count !== undefined && (
                    <span className="ml-auto text-fg-muted text-xs">
                      {count}
                    </span>
                  )}
                </Sidebar.MenuButton>
              ))}
            </Sidebar.Group>
            <Sidebar.Group label="Labels">
              {LABELS.map(({ label, dot }) => (
                <Sidebar.MenuButton key={label} href="#">
                  <span className={cn("size-2 rounded-full", dot)} />
                  {label}
                </Sidebar.MenuButton>
              ))}
            </Sidebar.Group>
          </Sidebar.Content>
          <Sidebar.Footer>
            <div className="flex flex-col gap-2">
              <Button size="md" className="w-full gap-2">
                <Pencil className="size-4" />
                New Email
              </Button>
              <UserMenu name="あさひ" email="asahi@example.com" />
            </div>
          </Sidebar.Footer>
        </Sidebar.Root>
        <main className="flex flex-1 flex-col overflow-hidden bg-canvas">
          <div className="flex flex-1 overflow-hidden">
            <div className="flex w-80 shrink-0 flex-col overflow-hidden border-r border-border">
              <div className="flex flex-col gap-3 border-b border-border px-4 pt-4 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-semibold text-fg text-lg">Inbox</h2>
                  <Tabs.Root defaultValue="all">
                    <Tabs.List>
                      <Tabs.Trigger value="all">All</Tabs.Trigger>
                      <Tabs.Trigger value="unread">Unreads</Tabs.Trigger>
                      <Tabs.Indicator />
                    </Tabs.List>
                  </Tabs.Root>
                </div>
                <div className="relative">
                  <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-fg-muted" />
                  <Input placeholder="検索" className="h-8 pl-8 text-xs" />
                </div>
              </div>
              <ScrollArea.Root className="flex-1">
                <ScrollArea.Viewport>
                  {MAILS.map((mail) => {
                    const active = mail.id === ACTIVE_MAIL_ID;
                    return (
                      <button
                        key={mail.id}
                        type="button"
                        className={cn(
                          "flex w-full gap-3 border-b border-border-muted px-4 py-3 text-left transition-[background-color]",
                          active ? "bg-surface-sunken" : "hover:bg-hover",
                        )}
                      >
                        <div className="shrink-0 pt-1.5">
                          <span
                            className={cn(
                              "block size-2 rounded-full",
                              mail.unread ? "bg-blue-500" : "bg-transparent",
                            )}
                          />
                        </div>
                        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                          <div className="flex items-baseline justify-between gap-2">
                            <span
                              className={cn(
                                "truncate text-sm",
                                mail.unread
                                  ? "font-semibold text-fg"
                                  : "text-fg-soft",
                              )}
                            >
                              {mail.from}
                            </span>
                            <span className="shrink-0 text-fg-muted text-xs">
                              {mail.date}
                            </span>
                          </div>
                          <div
                            className={cn(
                              "truncate text-sm",
                              mail.unread
                                ? "font-medium text-fg"
                                : "text-fg-soft",
                            )}
                          >
                            {mail.subject}
                          </div>
                          <div className="line-clamp-2 text-fg-muted text-xs">
                            {mail.preview}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </div>
            <div className="flex flex-1 flex-col overflow-hidden">
              <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
                <div className="flex items-center gap-2">
                  <IconButton aria-label="アーカイブ">
                    <Archive className="size-4" />
                  </IconButton>
                  <IconButton aria-label="報告">
                    <Flag className="size-4" />
                  </IconButton>
                  <IconButton aria-label="削除">
                    <Trash2 className="size-4" />
                  </IconButton>
                  <IconButton aria-label="未読にする">
                    <MailIcon className="size-4" />
                  </IconButton>
                  <IconButton aria-label="移動">
                    <FolderInput className="size-4" />
                  </IconButton>
                </div>
                <div className="flex items-center gap-2">
                  <IconButton aria-label="スター">
                    <Star className="size-4" />
                  </IconButton>
                  <IconButton aria-label="返信">
                    <Reply className="size-4" />
                  </IconButton>
                  <ThemeToggle />
                  <IconButton aria-label="その他">
                    <MoreVertical className="size-4" />
                  </IconButton>
                </div>
              </header>
              <div className="flex flex-col gap-5 border-b border-border px-6 py-6">
                <h1 className="font-semibold text-fg text-xl">
                  {activeMail.subject}
                </h1>
                <div className="flex gap-3">
                  <Avatar.Root size="md">
                    <Avatar.Fallback name={activeMail.from} />
                  </Avatar.Root>
                  <div className="flex flex-1 flex-col gap-0.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-fg text-sm">
                          {activeMail.from}
                        </span>
                        <span className="text-fg-muted text-xs">
                          {`<${activeMail.fromEmail}>`}
                        </span>
                      </div>
                      <span className="shrink-0 text-fg-muted text-xs">
                        {activeMail.dateFull}
                      </span>
                    </div>
                    <div className="text-fg-muted text-xs">
                      To: {RECIPIENT_NAME}{" "}
                      <span className="text-fg-muted">{`<${RECIPIENT_EMAIL}>`}</span>
                    </div>
                  </div>
                </div>
              </div>
              <ScrollArea.Root className="flex-1">
                <ScrollArea.Viewport>
                  <div className="whitespace-pre-wrap px-6 py-6 text-fg-soft text-sm leading-relaxed">
                    {activeMail.body ?? "(本文はありません)"}
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                  <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>
            </div>
          </div>
        </main>
      </div>
    </Sidebar.Provider>
  );
}
