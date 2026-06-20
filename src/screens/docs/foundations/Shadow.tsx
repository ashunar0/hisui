import { DocHeader, DocSection } from "../parts/doc-page";

const SHADOW_MID =
  "0 1px 0 rgba(0,0,0,0.04), 0 4px 8px rgba(0,0,0,0.06), 0 0 4px rgba(0,0,0,0.03)";
const SHADOW_HIGH =
  "0 1px 0 rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.03)";
const SHADOW_MID_DARK =
  "0 1px 0 rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.4), 0 0 4px rgba(0,0,0,0.2)";
const SHADOW_KBD = "0 1px 0 var(--color-border)";

type Layer = { offset: string; blur: string; color: string; role: string };

const MID_LAYERS: Layer[] = [
  { offset: "0 1px", blur: "0", color: "rgba(0,0,0,0.04)", role: "下端の hairline" },
  {
    offset: "0 4px",
    blur: "8px",
    color: "rgba(0,0,0,0.06)",
    role: "メインの落ち影",
  },
  {
    offset: "0 0",
    blur: "4px",
    color: "rgba(0,0,0,0.03)",
    role: "全周の柔らかい halo",
  },
];

const HIGH_LAYERS: Layer[] = [
  { offset: "0 1px", blur: "0", color: "rgba(0,0,0,0.04)", role: "下端の hairline" },
  {
    offset: "0 8px",
    blur: "24px",
    color: "rgba(0,0,0,0.08)",
    role: "深い落ち影 (浮遊感)",
  },
  {
    offset: "0 0",
    blur: "4px",
    color: "rgba(0,0,0,0.03)",
    role: "全周の柔らかい halo",
  },
];

function ShadowPreview({
  shadow,
  label,
}: {
  shadow: string;
  label: string;
}) {
  return (
    <div className="flex h-40 items-center justify-center rounded-md bg-canvas p-6">
      <div
        className="flex h-20 w-40 items-center justify-center rounded-md border border-border bg-surface text-fg-muted text-xs"
        style={{ boxShadow: shadow }}
      >
        {label}
      </div>
    </div>
  );
}

function LayerTable({ layers }: { layers: Layer[] }) {
  return (
    <div className="flex flex-col rounded-md border border-border">
      {layers.map((l, i) => (
        <div
          key={i}
          className="grid grid-cols-[5rem_4rem_8rem_1fr] items-center gap-3 border-b border-border-muted px-3 py-2 text-xs last:border-b-0"
        >
          <span className="font-mono text-fg">{l.offset}</span>
          <span className="font-mono text-fg-muted">{l.blur}</span>
          <span className="font-mono text-fg-muted">{l.color}</span>
          <span className="text-fg-muted">{l.role}</span>
        </div>
      ))}
    </div>
  );
}

function Philosophy() {
  return (
    <DocSection
      title="Philosophy"
      description="単発の落ち影ではなく、 hairline + drop + halo の 3 層で重ねるのが ui-lab の標準。 軽くて自然な浮遊感が出る。"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { title: "1. Hairline", body: "0 1px 0 で下端だけ。 床への接地感。" },
          { title: "2. Drop", body: "0 Npx Mpx で本体の落ち影。 距離感を決める層。" },
          { title: "3. Halo", body: "0 0 4px で全周にうっすら。 輪郭を柔らかくする。" },
        ].map((t) => (
          <div
            key={t.title}
            className="flex flex-col gap-1 rounded-md border border-border p-3"
          >
            <span className="font-medium text-fg text-sm">{t.title}</span>
            <p className="text-fg-muted text-xs leading-relaxed">{t.body}</p>
          </div>
        ))}
      </div>
    </DocSection>
  );
}

function ElevationMid() {
  return (
    <DocSection
      title="Elevation: mid"
      description="Card / Tabs / RadioGroup / SegmentGroup / Toast (inline) の標準。 静的に置かれる surface 用。"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <ShadowPreview shadow={SHADOW_MID} label="mid elevation" />
        <LayerTable layers={MID_LAYERS} />
      </div>
      <pre className="overflow-x-auto rounded-md border border-border bg-canvas p-3 font-mono text-[11px] text-fg-soft">
        {`shadow-[${SHADOW_MID.replace(/\s/g, "_")}]`}
      </pre>
    </DocSection>
  );
}

function ElevationHigh() {
  return (
    <DocSection
      title="Elevation: high"
      description="Popover / Menu / Dialog / Drawer / Combobox / Date-picker / Hover-card / Navigation-menu。 floating な surface 用。"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <ShadowPreview shadow={SHADOW_HIGH} label="high elevation" />
        <LayerTable layers={HIGH_LAYERS} />
      </div>
      <pre className="overflow-x-auto rounded-md border border-border bg-canvas p-3 font-mono text-[11px] text-fg-soft">
        {`shadow-[${SHADOW_HIGH.replace(/\s/g, "_")}]`}
      </pre>
    </DocSection>
  );
}

function DarkMode() {
  return (
    <DocSection
      title="Dark mode"
      description="dark では alpha を強める。 light の 0.04 / 0.06 / 0.03 → dark で 0.4 / 0.4 / 0.2 まで上げる。 dark:shadow-[…] で上書き。"
    >
      <pre className="overflow-x-auto rounded-md border border-border bg-canvas p-3 font-mono text-[11px] text-fg-soft">
        {`dark:shadow-[${SHADOW_MID_DARK.replace(/\s/g, "_")}]`}
      </pre>
    </DocSection>
  );
}

function Others() {
  return (
    <DocSection
      title="Other shadows"
      description="多層を使わない例外。"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-3 rounded-md border border-border p-4">
          <span className="font-medium text-fg text-sm">shadow-md (Tailwind default)</span>
          <p className="text-fg-muted text-xs">
            Tooltip / Select content / Chart tooltip。 主張弱め floating。
          </p>
          <div className="flex h-20 items-center justify-center rounded-md bg-canvas">
            <div className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs shadow-md">
              Tooltip
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 rounded-md border border-border p-4">
          <span className="font-medium text-fg text-sm">Kbd</span>
          <p className="text-fg-muted text-xs">
            border 色の 1px 下シャドウだけ。 keycap の押し下げ感。
          </p>
          <div className="flex h-20 items-center justify-center rounded-md bg-canvas">
            <span
              className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-border bg-surface px-1.5 font-medium text-[11px] text-fg-soft"
              style={{ boxShadow: SHADOW_KBD }}
            >
              ⌘K
            </span>
          </div>
        </div>
      </div>
    </DocSection>
  );
}

export function Shadow() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Shadow">
        ui-lab の shadow は <strong>多層 (hairline + drop + halo)</strong>{" "}
        を基本にする。 浮き具合は drop 層の offset / blur だけ差し替えて mid /
        high の 2 段階。 dark mode は alpha を強めて上書きする。
      </DocHeader>

      <Philosophy />
      <ElevationMid />
      <ElevationHigh />
      <DarkMode />
      <Others />
    </div>
  );
}
