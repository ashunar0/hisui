const CONVENTIONS = [
  {
    title: "Card / Dialog padding",
    mono: "p-4 〜 p-6",
    body: "compact card は p-4、 標準は p-5、 ゆとり持たせる Dialog は p-6。",
  },
  {
    title: "Form field gap",
    mono: "gap-2 (label↔input) / gap-4 (row 間)",
    body: "label と input の縦間は gap-2、 form の row 同士は gap-4 が標準。",
  },
  {
    title: "Section gap",
    mono: "gap-10 (40px)",
    body: "page 内の大きな section 区切りは gap-10。 docs ページもこれ。",
  },
  {
    title: "Icon ↔ text gap",
    mono: "gap-2 (8px)",
    body: "Button / Menu item の icon と label の間隔。 Stack gap=\"sm\" 相当。",
  },
];

export default function SpacingConventions() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {CONVENTIONS.map((c) => (
        <div
          key={c.title}
          className="flex flex-col gap-2 rounded-md border border-border p-4"
        >
          <span className="font-medium text-fg text-sm">{c.title}</span>
          <span className="font-mono text-[11px] text-fg-muted">{c.mono}</span>
          <p className="text-fg-muted text-xs leading-relaxed">{c.body}</p>
        </div>
      ))}
    </div>
  );
}
