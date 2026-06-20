import { DocHeader, DocSection } from "../parts/doc-page";

type RadiusToken = {
  name: string;
  value: string;
  px: string;
  usage: string;
};

const RADIUS: RadiusToken[] = [
  {
    name: "rounded-none",
    value: "0",
    px: "0px",
    usage: "卓上の sheet 系 (Drawer の left/right edge)",
  },
  {
    name: "rounded-sm",
    value: "0.125rem",
    px: "2px",
    usage: "tag / chart bar / Avatar group の internal frame",
  },
  {
    name: "rounded",
    value: "0.25rem",
    px: "4px",
    usage: "Kbd の小箱 (border + 1px shadow と相性)",
  },
  {
    name: "rounded-md",
    value: "0.375rem",
    px: "6px",
    usage: "ui-lab の標準。 Button / Card / Input / Popover / Menu 全部これ",
  },
  {
    name: "rounded-lg",
    value: "0.5rem",
    px: "8px",
    usage: "Dialog 等やや大きい floating surface",
  },
  {
    name: "rounded-xl",
    value: "0.75rem",
    px: "12px",
    usage: "marketing / hero card など意図的に丸めたい時",
  },
  {
    name: "rounded-full",
    value: "9999px",
    px: "9999px",
    usage: "Avatar / Pill / IconButton circle / Spinner",
  },
];

function Swatch({ value }: { value: string }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center">
      <div
        className="h-12 w-12 border border-border bg-surface-sunken"
        style={{ borderRadius: value }}
      />
    </div>
  );
}

function RadiusTable() {
  return (
    <DocSection
      title="Scale"
      description="Tailwind default の radius を素のまま使う。 ui-lab の標準は rounded-md (6px)、 floating で意図的に大きくする時だけ rounded-lg に上げる。"
    >
      <div className="flex flex-col">
        {RADIUS.map((r) => (
          <div
            key={r.name}
            className="grid grid-cols-[5rem_8rem_8rem_1fr] items-center gap-4 border-b border-border-muted py-3 last:border-b-0"
          >
            <Swatch value={r.value} />
            <span className="font-mono text-fg text-xs">{r.name}</span>
            <span className="font-mono text-[11px] text-fg-muted">
              {r.value} / {r.px}
            </span>
            <span className="text-fg-muted text-xs leading-relaxed">
              {r.usage}
            </span>
          </div>
        ))}
      </div>
    </DocSection>
  );
}

function Conventions() {
  return (
    <DocSection
      title="Conventions"
      description="迷ったらこの対応で書く。"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
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
        ].map((t) => (
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
    </DocSection>
  );
}

function NestingRule() {
  return (
    <DocSection
      title="Nesting"
      description="parent と child の radius は揃えるか、 child を 1 段小さくする。 child > parent は中身が枠を突き抜けて見えるので避ける。"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-medium text-fg text-sm">
            ✓ Same or child-smaller
          </span>
          <div className="flex h-24 items-center justify-center rounded-md border border-border bg-canvas p-3">
            <div className="h-full w-full rounded-sm border border-border bg-surface" />
          </div>
          <p className="text-fg-muted text-xs">
            parent rounded-md + inner rounded-sm。 内側がきれいに収まる。
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-md border border-border p-4">
          <span className="font-medium text-fg text-sm">
            ✗ Child larger than parent
          </span>
          <div className="flex h-24 items-center justify-center rounded-sm border border-border bg-canvas p-3">
            <div className="h-full w-full rounded-xl border border-border bg-surface" />
          </div>
          <p className="text-fg-muted text-xs">
            parent rounded-sm + inner rounded-xl。 角が浮いて窮屈に見える。
          </p>
        </div>
      </div>
    </DocSection>
  );
}

export function Radius() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Radius">
        radius は Tailwind default の <code>rounded-*</code>{" "}
        をそのまま使う。 ui-lab の標準は <code>rounded-md (6px)</code>、 高度が高い
        surface だけ <code>rounded-lg</code> に上げる。 Pill / Avatar は{" "}
        <code>rounded-full</code>。
      </DocHeader>

      <RadiusTable />
      <Conventions />
      <NestingRule />
    </div>
  );
}
