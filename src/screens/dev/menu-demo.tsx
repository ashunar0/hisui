import {
  ChevronDown,
  ChevronRight,
  Copy,
  Link2,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Scissors,
  SlidersHorizontal,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Menu } from "@/components/ui/menu";

export function MenuDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <EditMenu />
      <ShareMenu />
      <ViewOptionsMenu />
    </div>
  );
}

function EditMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Edit
          <Menu.Indicator>
            <ChevronDown className="size-4" />
          </Menu.Indicator>
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item value="cut">
          <Scissors className="size-4" />
          <span className="flex-1">Cut</span>
          <Shortcut keys="⌘X" />
        </Menu.Item>
        <Menu.Item value="copy">
          <Copy className="size-4" />
          <span className="flex-1">Copy</span>
          <Shortcut keys="⌘C" />
        </Menu.Item>
        <Menu.Item value="paste" disabled>
          <Link2 className="size-4" />
          <span className="flex-1">Paste</span>
          <Shortcut keys="⌘V" />
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item
          value="delete"
          className="text-red-600 data-highlighted:bg-red-50 data-highlighted:text-red-600 dark:data-highlighted:bg-red-950/40"
        >
          <Trash2 className="size-4" />
          <span className="flex-1">Delete</span>
          <Shortcut keys="⌫" />
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
}

function ShareMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton aria-label="More actions">
          <MoreHorizontal className="size-4" />
        </IconButton>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item value="rename">Rename…</Menu.Item>
        <Menu.Item value="duplicate">Duplicate</Menu.Item>
        <Menu.Root>
          <Menu.TriggerItem>
            <span className="flex-1">Share</span>
            <ChevronRight className="size-4" />
          </Menu.TriggerItem>
          <Menu.Content>
            <Menu.Item value="share-email">
              <Mail className="size-4" />
              Email
            </Menu.Item>
            <Menu.Item value="share-slack">
              <MessageSquare className="size-4" />
              Slack
            </Menu.Item>
            <Menu.Item value="share-copy">
              <Link2 className="size-4" />
              Copy link
            </Menu.Item>
          </Menu.Content>
        </Menu.Root>
        <Menu.Separator />
        <Menu.Item
          value="archive"
          className="text-red-600 data-highlighted:bg-red-50 data-highlighted:text-red-600 dark:data-highlighted:bg-red-950/40"
        >
          <Trash2 className="size-4" />
          Move to trash
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
}

function ViewOptionsMenu() {
  const [sort, setSort] = useState("newest");
  const [display, setDisplay] = useState({
    description: true,
    preview: false,
    group: true,
  });
  const toggle = (key: keyof typeof display) => (next: boolean) =>
    setDisplay((prev) => ({ ...prev, [key]: next }));
  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontal className="size-4" />
          View
        </Button>
      </Menu.Trigger>
      <Menu.Content className="min-w-60">
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Sort by</Menu.ItemGroupLabel>
          <Menu.RadioItemGroup value={sort} onValueChange={(e) => setSort(e.value)}>
            <Menu.RadioItem value="newest">Newest first</Menu.RadioItem>
            <Menu.RadioItem value="oldest">Oldest first</Menu.RadioItem>
            <Menu.RadioItem value="az">A → Z</Menu.RadioItem>
          </Menu.RadioItemGroup>
        </Menu.ItemGroup>
        <Menu.Separator />
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Display</Menu.ItemGroupLabel>
          <Menu.CheckboxItem
            value="description"
            checked={display.description}
            onCheckedChange={toggle("description")}
          >
            Show description
          </Menu.CheckboxItem>
          <Menu.CheckboxItem
            value="preview"
            checked={display.preview}
            onCheckedChange={toggle("preview")}
          >
            Show preview
          </Menu.CheckboxItem>
          <Menu.CheckboxItem
            value="group"
            checked={display.group}
            onCheckedChange={toggle("group")}
          >
            Group by status
          </Menu.CheckboxItem>
        </Menu.ItemGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

function Shortcut({ keys }: { keys: string }) {
  return <span className="text-xs text-fg-muted">{keys}</span>;
}
