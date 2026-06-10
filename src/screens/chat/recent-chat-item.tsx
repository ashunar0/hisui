import {
  FolderPlus,
  MoreVertical,
  PencilLine,
  Star,
  Trash2,
} from "lucide-react";
import { Menu } from "@/components/ui/menu";
import { Sidebar } from "@/components/ui/sidebar";

export function RecentChatItem({ title }: { title: string }) {
  return (
    <Sidebar.MenuItem>
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
  );
}
