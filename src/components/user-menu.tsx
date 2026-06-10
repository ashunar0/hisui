import { ChevronsUpDown, LogOut, Settings, User } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Menu } from "@/components/ui/menu";

type UserMenuProps = {
  name: string;
  email: string;
};

export function UserMenu({ name, email }: UserMenuProps) {
  return (
    <Menu.Root positioning={{ placement: "top-start" }}>
      <Menu.Trigger asChild>
        <button
          type="button"
          className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100"
        >
          <Avatar.Root size="sm">
            <Avatar.Fallback name={name} />
          </Avatar.Root>
          <div className="min-w-0 flex-1 text-left">
            <p className="truncate text-sm font-medium text-neutral-900">
              {name}
            </p>
            <p className="truncate text-xs text-neutral-500">{email}</p>
          </div>
          <ChevronsUpDown className="size-4 shrink-0 text-neutral-400" />
        </button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item value="profile">
          <User className="size-4" />
          プロフィール
        </Menu.Item>
        <Menu.Item value="settings">
          <Settings className="size-4" />
          設定
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item
          value="logout"
          className="text-red-600 data-highlighted:bg-red-50 data-highlighted:text-red-600"
        >
          <LogOut className="size-4" />
          ログアウト
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
}
