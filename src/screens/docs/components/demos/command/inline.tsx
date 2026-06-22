"use client";

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
import { useMemo, useState } from "react";
import { Command, createListCollection } from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";

type CommandItem = {
  value: string;
  label: string;
  icon: LucideIcon;
  keys: string[];
};

const COMMANDS: { group: string; items: CommandItem[] }[] = [
  {
    group: "Suggestions",
    items: [
      { value: "new-project", label: "New project", icon: FilePlus, keys: ["⌘", "N"] },
      { value: "open-calendar", label: "Open calendar", icon: Calendar, keys: ["G", "C"] },
      { value: "search-docs", label: "Search documentation", icon: BookOpen, keys: ["⌘", "/"] },
    ],
  },
  {
    group: "Settings",
    items: [
      { value: "profile", label: "Profile settings", icon: User, keys: ["⌘", ","] },
      { value: "theme", label: "Toggle theme", icon: Palette, keys: ["⌘", "T"] },
      { value: "logout", label: "Sign out", icon: LogOut, keys: [] },
    ],
  },
  {
    group: "Help",
    items: [
      { value: "docs", label: "Documentation", icon: HelpCircle, keys: [] },
      { value: "contact", label: "Contact support", icon: MessageCircle, keys: [] },
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

export default function CommandInlineDemo() {
  const [query, setQuery] = useState("");
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
    <div className="max-w-md overflow-hidden rounded-md border border-border bg-surface">
      <Command.Root collection={collection}>
        <Command.Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
    </div>
  );
}
