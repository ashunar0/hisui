import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Menu } from "@/components/ui/menu";

type TeamSwitcherProps = {
  teams: string[];
  current: string;
};

export function TeamSwitcher({ teams, current }: TeamSwitcherProps) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <button
          type="button"
          className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100"
        >
          <Avatar.Root size="sm" shape="rounded">
            <Avatar.Fallback name={current} />
          </Avatar.Root>
          <span className="flex-1 text-left text-sm font-medium text-neutral-900">
            {current}
          </span>
          <ChevronsUpDown className="size-4 text-neutral-400" />
        </button>
      </Menu.Trigger>
      <Menu.Content>
        {teams.map((team) => (
          <Menu.Item key={team} value={team}>
            <Avatar.Root size="xs" shape="rounded">
              <Avatar.Fallback name={team} />
            </Avatar.Root>
            <span className="flex-1">{team}</span>
            {team === current && <Check className="size-4" />}
          </Menu.Item>
        ))}
        <Menu.Separator />
        <Menu.Item
          value="new-team"
          className="text-blue-600 data-highlighted:text-blue-600"
        >
          <Plus className="size-4" />
          チーム作成
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
}
