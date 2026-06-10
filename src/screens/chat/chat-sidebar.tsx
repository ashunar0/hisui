import {
  FolderClosed,
  FolderPlus,
  Library,
  MessageSquare,
  MoreVertical,
  PencilLine,
  PenLine,
  Search,
  Sparkles,
  SquarePen,
  Star,
  Trash2,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Menu } from "@/components/ui/menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/components/ui/sidebar";
import { UserMenu } from "@/components/user-menu";

const RECENT_CHATS = [
  "React Server Components の使いどころ",
  "Tailwind v4 で dark mode 移行手順",
  "TypeScript ジェネリック型推論のコツ",
  "Postgres インデックス最適化",
  "海外旅行のおすすめスポット相談",
  "仕事のメール下書き作成",
  "引っ越しチェックリスト",
  "朝活の続け方とコツ",
  "Vite の build 時間短縮",
  "Bash で大量ファイル並列処理",
  "React Query の cache 戦略",
  "Drizzle ORM のマイグレーション",
  "Cloudflare Workers の cold start",
  "monorepo の構成 (pnpm vs turbo)",
  "OpenTelemetry の導入手順",
  "Slack bot を Hono で作る",
  "Sentry のリリース管理",
  "TypeScript の satisfies 演算子",
  "Vitest と Playwright の使い分け",
  "Stripe Webhook の冪等性",
  "Postgres の JSONB 検索",
  "S3 署名付き URL の生成",
  "Cron スケジュールの設計",
  "Redis vs KV の使い分け",
  "GitHub Actions のキャッシュ",
  "週末の旅行プラン",
  "確定申告の準備",
  "オーディオ機材の選び方",
  "美味しいラーメン屋",
  "猫の引っ越しストレス対策",
];

export function ChatSidebar() {
  return (
    <Sidebar.Root>
      <Sidebar.Header>
        <div className="flex items-center justify-between">
          <IconButton aria-label="新規チャット">
            <PenLine className="size-4" />
          </IconButton>
          <IconButton aria-label="チャットを検索">
            <Search className="size-4" />
          </IconButton>
        </div>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.MenuButton href="#">
            <SquarePen className="size-4" />
            新規チャット
          </Sidebar.MenuButton>
          <Sidebar.MenuButton href="#">
            <MessageSquare className="size-4" />
            チャット
          </Sidebar.MenuButton>
          <Sidebar.MenuButton href="#">
            <Library className="size-4" />
            ライブラリ
          </Sidebar.MenuButton>
          <Sidebar.MenuButton href="#">
            <FolderClosed className="size-4" />
            プロジェクト
          </Sidebar.MenuButton>
        </Sidebar.Group>
        <div className="-mr-4 flex min-h-0 flex-1 flex-col">
          <h2 className="px-3 pb-1 text-xs font-medium text-fg-muted">
            Recent
          </h2>
          <ScrollArea.Root className="flex-1">
            <ScrollArea.Viewport>
              <div className="flex flex-col gap-1 pr-4">
                {RECENT_CHATS.map((title) => (
                  <Sidebar.MenuItem key={title}>
                    <Sidebar.MenuButton href="#" className="pr-9">
                      <span className="truncate">{title}</span>
                    </Sidebar.MenuButton>
                    <Menu.Root positioning={{ placement: "bottom-end" }}>
                      <Menu.Trigger asChild>
                        <Sidebar.MenuAction aria-label="チャットメニュー">
                          <MoreVertical className="size-4" />
                        </Sidebar.MenuAction>
                      </Menu.Trigger>
                      <Menu.Content>
                        <Menu.Item value="star">
                          <Star className="size-4" />
                          スター
                        </Menu.Item>
                        <Menu.Item value="rename">
                          <PencilLine className="size-4" />
                          名前を変更
                        </Menu.Item>
                        <Menu.Item value="add-to-project">
                          <FolderPlus className="size-4" />
                          プロジェクトに追加
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item
                          value="delete"
                          className="text-rose-600 data-highlighted:text-rose-700 dark:text-rose-400 dark:data-highlighted:text-rose-300"
                        >
                          <Trash2 className="size-4" />
                          削除
                        </Menu.Item>
                      </Menu.Content>
                    </Menu.Root>
                  </Sidebar.MenuItem>
                ))}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar className="w-1.5 p-0">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </div>
      </Sidebar.Content>
      <Sidebar.Footer className="flex flex-col gap-2">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-full border border-border bg-surface p-3 transition-colors hover:bg-hover"
        >
          <Sparkles className="mt-0.5 size-4 text-amber-500" />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium">Pro にアップグレード</span>
          </div>
        </button>
        <UserMenu name="あさひ" email="asahi@example.com" />
      </Sidebar.Footer>
    </Sidebar.Root>
  );
}
