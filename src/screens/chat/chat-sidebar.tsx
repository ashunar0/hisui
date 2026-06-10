import {
  FolderClosed,
  Library,
  MessageSquare,
  PenLine,
  Search,
  Sparkles,
  SquarePen,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/components/ui/sidebar";
import { UserMenu } from "@/components/user-menu";
import { RECENT_CHATS } from "@/screens/chat/data";
import { RecentChatItem } from "@/screens/chat/recent-chat-item";

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
                  <RecentChatItem key={title} title={title} />
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
          className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-border bg-surface p-3 transition-colors hover:bg-hover"
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
