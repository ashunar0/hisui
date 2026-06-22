"use client";

type Token = { name: string; varName: string; border?: boolean };

const TOKENS: Record<string, Token[]> = {
  surfaces: [
    { name: "bg", varName: "--color-bg", border: true },
    { name: "canvas", varName: "--color-canvas", border: true },
    { name: "surface", varName: "--color-surface", border: true },
    { name: "surface-muted", varName: "--color-surface-muted", border: true },
    { name: "surface-sunken", varName: "--color-surface-sunken" },
    { name: "hover", varName: "--color-hover" },
    { name: "active", varName: "--color-active" },
  ],
  foregrounds: [
    { name: "fg", varName: "--color-fg" },
    { name: "fg-soft", varName: "--color-fg-soft" },
    { name: "fg-muted", varName: "--color-fg-muted" },
    { name: "fg-subtle", varName: "--color-fg-subtle" },
  ],
  borders: [
    { name: "border", varName: "--color-border" },
    { name: "border-muted", varName: "--color-border-muted" },
  ],
};

function Swatch({ name, varName, border }: Token) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className={
          "h-14 w-full rounded-md" + (border ? " border border-border" : "")
        }
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div className="flex flex-col">
        <span className="font-medium text-xs">{name}</span>
        <span className="text-fg-muted text-[11px]">{varName}</span>
      </div>
    </div>
  );
}

export default function ColorsTokenGrid({
  group,
}: {
  group: "surfaces" | "foregrounds" | "borders";
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {TOKENS[group].map((t) => (
        <Swatch key={t.varName} {...t} />
      ))}
    </div>
  );
}
