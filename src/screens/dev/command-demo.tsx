import {
  BookOpen,
  Calendar,
  FilePlus,
  HelpCircle,
  LogOut,
  type LucideIcon,
  MessageCircle,
  Palette,
  User,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, createListCollection } from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";

type CommandItem = {
  value: string;
  label: string;
  icon: LucideIcon;
  keys: string[];
};

type CommandGroupData = {
  group: string;
  items: CommandItem[];
};

const COMMANDS: CommandGroupData[] = [
  {
    group: "Suggestions",
    items: [
      {
        value: "new-project",
        label: "New project",
        icon: FilePlus,
        keys: ["⌘", "N"],
      },
      {
        value: "open-calendar",
        label: "Open calendar",
        icon: Calendar,
        keys: ["G", "C"],
      },
      {
        value: "search-docs",
        label: "Search documentation",
        icon: BookOpen,
        keys: ["⌘", "/"],
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        value: "profile",
        label: "Profile settings",
        icon: User,
        keys: ["⌘", ","],
      },
      {
        value: "theme",
        label: "Toggle theme",
        icon: Palette,
        keys: ["⌘", "T"],
      },
      { value: "logout", label: "Sign out", icon: LogOut, keys: [] },
    ],
  },
  {
    group: "Help",
    items: [
      {
        value: "docs",
        label: "Documentation",
        icon: HelpCircle,
        keys: [],
      },
      {
        value: "contact",
        label: "Contact support",
        icon: MessageCircle,
        keys: [],
      },
    ],
  },
];

function filterGroups(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return COMMANDS;
  return COMMANDS.map((g) => ({
    ...g,
    items: g.items.filter((item) => item.label.toLowerCase().includes(q)),
  })).filter((g) => g.items.length > 0);
}

function CommandBody({
  query,
  onQueryChange,
}: {
  query: string;
  onQueryChange: (q: string) => void;
}) {
  const filteredGroups = useMemo(() => filterGroups(query), [query]);
  const allItems = useMemo(
    () => filteredGroups.flatMap((g) => g.items),
    [filteredGroups],
  );
  const collection = useMemo(
    () => createListCollection({ items: allItems }),
    [allItems],
  );

  return (
    <Command.Root collection={collection}>
      <Command.Input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Type a command or search..."
      />
      <Command.List>
        {allItems.length === 0 ? (
          <Command.Empty>No commands found.</Command.Empty>
        ) : (
          filteredGroups.map((group) => (
            <Command.Group key={group.group}>
              <Command.GroupLabel>{group.group}</Command.GroupLabel>
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Command.Item key={item.value} item={item}>
                    <Icon className="size-4 text-fg-muted" />
                    <Command.ItemText>{item.label}</Command.ItemText>
                    {item.keys.length > 0 && (
                      <Command.Shortcut>
                        {item.keys.map((k) => (
                          <Kbd key={k}>{k}</Kbd>
                        ))}
                      </Command.Shortcut>
                    )}
                  </Command.Item>
                );
              })}
            </Command.Group>
          ))
        )}
      </Command.List>
    </Command.Root>
  );
}

export function CommandDemo() {
  return (
    <div className="flex flex-col gap-8">
      <InlinePalette />
      <DialogPalette />
    </div>
  );
}

function InlinePalette() {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        inline command palette (page 内に展開、 filter + 3 group + 右側
        Shortcut)。 &quot;new&quot; や &quot;theme&quot; で filter 動作確認できる。
      </p>
      <div className="max-w-md overflow-hidden rounded-md border border-border bg-surface">
        <CommandBody query={query} onQueryChange={setQuery} />
      </div>
    </div>
  );
}

function DialogPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        ⌘K で開く Dialog palette (window keydown を useEffect で監視、 Esc で
        閉じる)。 開閉に合わせて query を reset。
      </p>
      <div>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
          className="self-start"
        >
          Open command palette
          <span className="ml-3 flex items-center gap-1">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </span>
        </Button>
        <Command.Dialog
          open={open}
          onOpenChange={(d) => {
            setOpen(d.open);
            if (!d.open) setQuery("");
          }}
        >
          <Command.DialogContent>
            <CommandBody query={query} onQueryChange={setQuery} />
          </Command.DialogContent>
        </Command.Dialog>
      </div>
    </div>
  );
}
