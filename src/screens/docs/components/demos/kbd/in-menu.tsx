import { Kbd } from "@/components/ui/kbd";

const ITEMS = [
  { label: "New file", keys: ["⌘", "N"] },
  { label: "Open file", keys: ["⌘", "O"] },
  { label: "Save", keys: ["⌘", "S"] },
  { label: "Find in files", keys: ["⌘", "⇧", "F"] },
];

export default function KbdInMenuDemo() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-md border border-border bg-surface">
      {ITEMS.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between border-b border-border-muted px-3 py-2 last:border-b-0"
        >
          <span className="text-fg text-sm">{item.label}</span>
          <span className="inline-flex items-center gap-1">
            {item.keys.map((k) => (
              <Kbd key={k}>{k}</Kbd>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
