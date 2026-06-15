import { Search } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";

export function KbdDemo() {
  return (
    <div className="flex flex-col gap-8">
      <ShortcutHint />
      <MenuRows />
      <ComboKeys />
    </div>
  );
}

function ShortcutHint() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        shortcut hint (Search input の右に ⌘K を出すパターン)。
      </p>
      <div className="flex max-w-md items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg-muted">
        <Search className="size-4" />
        <span className="flex-1">Search projects, docs, people…</span>
        <span className="flex items-center gap-1">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </span>
      </div>
    </div>
  );
}

function MenuRows() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        menu row (Menu item の右側に shortcut を出すパターン)。
      </p>
      <div className="flex max-w-xs flex-col rounded-md border border-border bg-surface p-1">
        {[
          { label: "New file", keys: ["⌘", "N"] },
          { label: "Save", keys: ["⌘", "S"] },
          { label: "Save as…", keys: ["⇧", "⌘", "S"] },
          { label: "Close window", keys: ["⌘", "W"] },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-3 rounded px-3 py-1.5 text-sm text-fg hover:bg-hover"
          >
            <span>{row.label}</span>
            <span className="flex items-center gap-1">
              {row.keys.map((k) => (
                <Kbd key={k}>{k}</Kbd>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ComboKeys() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        inline combo (本文中に shortcut を埋め込む、 + 区切りや並べだけ等の表記
        パターン)。
      </p>
      <div className="flex max-w-md flex-col gap-2 text-sm text-fg-soft">
        <p>
          Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette.
        </p>
        <p>
          Use <Kbd>⇧</Kbd> + <Kbd>⌘</Kbd> + <Kbd>P</Kbd> to jump to a file.
        </p>
        <p>
          Tap <Kbd>Esc</Kbd> to dismiss any open dialog.
        </p>
      </div>
    </div>
  );
}
