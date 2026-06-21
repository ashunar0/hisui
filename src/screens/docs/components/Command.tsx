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
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

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

const PARTS = [
  {
    name: "Command.Root",
    description:
      "Listbox.Root の薄 wrap。 collection prop を必須で受ける。 上下矢印 + Enter で navigate。",
  },
  {
    name: "Command.Input",
    description:
      "search icon + border-b の検索欄。 controlled で value / onChange を渡し、 filter は自前で行う。",
  },
  {
    name: "Command.List",
    description:
      "max-h-80 の scroll 領域。 中に Group / Item / Empty を並べる。",
  },
  {
    name: "Command.Empty",
    description:
      "filter 後の結果が 0 件の時に出す placeholder。 表示制御は使う側で。",
  },
  {
    name: "Command.Group / GroupLabel",
    description:
      "Suggestions / Settings 等のカテゴリ分け。 GroupLabel は小さい uppercase 見出し。",
  },
  {
    name: "Command.Item / ItemText / ItemIndicator",
    description:
      "1 つの command 行。 icon + ItemText + (右端) Shortcut の 3 要素 layout が定型。",
  },
  {
    name: "Command.Shortcut",
    description:
      "右端寄せの shortcut 表示用 span。 中に Kbd を並べる。",
  },
  {
    name: "Command.Dialog / DialogContent / DialogTrigger / DialogCloseTrigger",
    description:
      "Dialog の薄 wrap。 ⌘K で開く palette を作る時に使う。 DialogContent は max-w-lg + overflow-hidden + p-0。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "collection",
    type: "ListCollection<T>",
    default: "—",
    description:
      "createListCollection({ items }) で作る。 filter 後の items を渡すと visible item だけ navigate 対象に。",
  },
  {
    name: "onSelect",
    type: "(details: { value }) => void",
    default: "—",
    description: "Item 確定の callback。 router push 等につなぐ。",
  },
];

export function CommandDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Command">
        ⌘K palette 等で使う command list。 中身は Listbox の薄 wrap + Dialog
        wrap で、 検索 / カテゴリ分け / shortcut 表示までを 1 セットに。
        filter は使う側で query を持って自前で実装する設計。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root に collection、 Input に value/onChange、 List に Group + Item を並べるのが基本。 Empty は結果 0 件の時の placeholder。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[18rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Inline palette"
        description='page 内に直接展開する palette。 "new" や "theme" で filter 動作を確認できる。'
      >
        <Example
          code={`function CommandBody({ query, onQueryChange }) {
  const filtered = useMemo(() => filterGroups(query), [query]);
  const allItems = useMemo(() => filtered.flatMap(g => g.items), [filtered]);
  const collection = useMemo(() => createListCollection({ items: allItems }), [allItems]);

  return (
    <Command.Root collection={collection}>
      <Command.Input value={query} onChange={e => onQueryChange(e.target.value)} />
      <Command.List>
        {allItems.length === 0 ? (
          <Command.Empty>No commands found.</Command.Empty>
        ) : (
          filtered.map(g => (
            <Command.Group key={g.group}>
              <Command.GroupLabel>{g.group}</Command.GroupLabel>
              {g.items.map(item => (
                <Command.Item key={item.value} item={item}>
                  <Icon /> <Command.ItemText>{item.label}</Command.ItemText>
                  <Command.Shortcut>...<Kbd /></Command.Shortcut>
                </Command.Item>
              ))}
            </Command.Group>
          ))
        )}
      </Command.List>
    </Command.Root>
  );
}`}
        >
          <InlinePalette />
        </Example>
      </DocSection>

      <DocSection
        title="Dialog palette (⌘K)"
        description="Command.Dialog で modal に閉じ込めて、 useEffect で window keydown を監視。 closed 時は query を reset。"
      >
        <Example
          code={`useEffect(() => {
  const handler = (e) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setOpen((p) => !p);
    }
  };
  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, []);

<Command.Dialog open={open} onOpenChange={(d) => {
  setOpen(d.open);
  if (!d.open) setQuery("");
}}>
  <Command.DialogContent>
    <CommandBody query={query} onQueryChange={setQuery} />
  </Command.DialogContent>
</Command.Dialog>`}
        >
          <DialogPalette />
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}

function InlinePalette() {
  const [query, setQuery] = useState("");
  return (
    <div className="max-w-md overflow-hidden rounded-md border border-border bg-surface">
      <CommandBody query={query} onQueryChange={setQuery} />
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
    <>
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
    </>
  );
}
