import {
  Archive,
  Clock,
  FileText,
  Inbox,
  Send,
  ShieldAlert,
  Star,
  Trash2,
  type LucideIcon,
} from "lucide-react";

export type Folder = {
  label: string;
  icon: LucideIcon;
  count?: number;
};

export const FOLDERS: Folder[] = [
  { label: "Inbox", icon: Inbox, count: 12 },
  { label: "Starred", icon: Star, count: 5 },
  { label: "Sent", icon: Send },
  { label: "Drafts", icon: FileText, count: 3 },
  { label: "Snoozed", icon: Clock },
  { label: "Archive", icon: Archive },
  { label: "Spam", icon: ShieldAlert, count: 2 },
  { label: "Trash", icon: Trash2 },
];

export const ACTIVE_FOLDER = "Inbox";

export type Label = {
  label: string;
  dot: string;
};

export const LABELS: Label[] = [
  { label: "Work", dot: "bg-blue-500" },
  { label: "Personal", dot: "bg-neutral-900 dark:bg-neutral-100" },
  { label: "Billing", dot: "bg-yellow-500" },
  { label: "Travel", dot: "bg-green-500" },
  { label: "Urgent", dot: "bg-red-500" },
];

export const TEAMS = ["Acme Inc", "Beta Co", "Delta Labs"];
export const CURRENT_TEAM = "Acme Inc";

export type Mail = {
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

export const MAILS: Mail[] = [
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

export const ACTIVE_MAIL_ID = "1";

export const activeMail =
  MAILS.find((m) => m.id === ACTIVE_MAIL_ID) ?? MAILS[0];

export const RECIPIENT_NAME = "あさひ";
export const RECIPIENT_EMAIL = "asahi@example.com";
