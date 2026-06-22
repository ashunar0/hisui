"use client";

const ITEMS = [
  { title: "1. Hairline", body: "0 1px 0 で下端だけ。 床への接地感。" },
  { title: "2. Drop", body: "0 Npx Mpx で本体の落ち影。 距離感を決める層。" },
  { title: "3. Halo", body: "0 0 4px で全周にうっすら。 輪郭を柔らかくする。" },
];

export default function ShadowPhilosophy() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {ITEMS.map((t) => (
        <div
          key={t.title}
          className="flex flex-col gap-1 rounded-md border border-border p-3"
        >
          <span className="font-medium text-fg text-sm">{t.title}</span>
          <p className="text-fg-muted text-xs leading-relaxed">{t.body}</p>
        </div>
      ))}
    </div>
  );
}
