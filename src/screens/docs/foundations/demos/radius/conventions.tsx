"use client";

const CONVENTIONS = [
  {
    title: "Default = rounded-md",
    mono: "rounded-md (6px)",
    body: "Button / Input / Card / Popover / Menu。 角を立てない、 でも丸すぎない丁度のところ。",
  },
  {
    title: "Floating = rounded-md / lg",
    mono: "Popover: md / Dialog: lg",
    body: "高度が高い surface ほどわずかに丸める。 Dialog だけ 8px に上げて柔らかく。",
  },
  {
    title: "Pill / Circle = rounded-full",
    mono: "rounded-full",
    body: "Avatar、 status pill、 carousel の prev/next ボタン、 chip 系。",
  },
  {
    title: "Internal = rounded-sm",
    mono: "rounded-sm (2px)",
    body: "Card や Panel の中に入る視覚要素 (chart bar、 Spacing preview の box、 tag) で控えめに。",
  },
];

export default function RadiusConventions() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {CONVENTIONS.map((t) => (
        <div
          key={t.title}
          className="flex flex-col gap-2 rounded-md border border-border p-4"
        >
          <span className="font-medium text-fg text-sm">{t.title}</span>
          <span className="font-mono text-[11px] text-fg-muted">{t.mono}</span>
          <p className="text-fg-muted text-xs leading-relaxed">{t.body}</p>
        </div>
      ))}
    </div>
  );
}
