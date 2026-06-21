import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/ui/menu";

export default function MenuCheckboxDemo() {
  const [bookmarks, setBookmarks] = useState(true);
  const [history, setHistory] = useState(false);
  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Trigger asChild>
        <Button variant="outline">
          View
          <ChevronDown className="size-4" />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.CheckboxItem
          value="bookmarks"
          checked={bookmarks}
          onCheckedChange={setBookmarks}
        >
          <Menu.ItemText>Bookmarks</Menu.ItemText>
        </Menu.CheckboxItem>
        <Menu.CheckboxItem
          value="history"
          checked={history}
          onCheckedChange={setHistory}
        >
          <Menu.ItemText>History</Menu.ItemText>
        </Menu.CheckboxItem>
      </Menu.Content>
    </Menu.Root>
  );
}
