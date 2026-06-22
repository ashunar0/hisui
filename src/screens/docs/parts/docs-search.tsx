import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { Command, createListCollection } from "@/components/ui/command";
import { Kbd } from "@/components/ui/kbd";
import { DOCS_NAV } from "../docs-nav";

type Item = { value: string; label: string; group: string };

const ALL_ITEMS: Item[] = DOCS_NAV.flatMap((g) =>
  g.items.map((i) => ({
    value: i.to,
    label: i.label,
    group: g.label ?? "Overview",
  })),
);

function filterItems(query: string): Item[] {
  const q = query.trim().toLowerCase();
  if (!q) return ALL_ITEMS;
  return ALL_ITEMS.filter((i) => i.label.toLowerCase().includes(q));
}

export function DocsSearch() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => filterItems(query), [query]);
  const collection = useMemo(
    () => createListCollection({ items: filtered }),
    [filtered],
  );

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

  const grouped = useMemo(() => {
    const map = new Map<string, Item[]>();
    for (const item of filtered) {
      const list = map.get(item.group) ?? [];
      list.push(item);
      map.set(item.group, list);
    }
    return [...map.entries()];
  }, [filtered]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex h-9 w-64 items-center gap-2 rounded-md border border-transparent bg-hover px-3 text-sm text-fg-soft hover:bg-surface-sunken"
      >
        <Search className="size-4" />
        <span className="flex-1 text-left">Search docs...</span>
        <Kbd>⌘K</Kbd>
      </button>
      <Command.Dialog
        open={open}
        onOpenChange={(d) => {
          setOpen(d.open);
          if (!d.open) setQuery("");
        }}
      >
        <Command.DialogContent>
          <Command.Root
            collection={collection}
            onSelect={(d) => {
              setOpen(false);
              setQuery("");
              navigate(d.value);
            }}
          >
            <Command.Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search docs..."
            />
            <Command.List>
              {filtered.length === 0 ? (
                <Command.Empty>No results.</Command.Empty>
              ) : (
                grouped.map(([groupLabel, items]) => (
                  <Command.Group key={groupLabel}>
                    <Command.GroupLabel>{groupLabel}</Command.GroupLabel>
                    {items.map((item) => (
                      <Command.Item key={item.value} item={item}>
                        <Command.ItemText>{item.label}</Command.ItemText>
                      </Command.Item>
                    ))}
                  </Command.Group>
                ))
              )}
            </Command.List>
          </Command.Root>
        </Command.DialogContent>
      </Command.Dialog>
    </>
  );
}
