import { Check } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Progress.Root",
    description:
      "外枠。 value / min / max を持つ。 value={null} で indeterminate。 default は flex flex-col gap-1.5。",
  },
  {
    name: "Progress.Label",
    description: "見出し。 text-xs + font-medium。",
  },
  {
    name: "Progress.ValueText",
    description:
      "現在値の表示。 default は percent。 format={(v, max) => string} で書式上書き。",
  },
  {
    name: "Progress.Track",
    description: "linear の枠。 bg-surface-sunken の rounded bar。",
  },
  {
    name: "Progress.Range",
    description:
      "Track 内の塗り。 data-state=indeterminate で animation 切替。",
  },
  {
    name: "Progress.Circle",
    description:
      "circular SVG container。 --size と --thickness を style 経由で調整。",
  },
  {
    name: "Progress.CircleTrack",
    description: "circular の背景円。 stroke-surface-sunken。",
  },
  {
    name: "Progress.CircleRange",
    description: "circular の塗り円。 stroke-fg。",
  },
  {
    name: "Progress.View",
    description:
      "state=\"loading\" | \"complete\" で content を swap。 100% で Done を見せたい時に。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "value",
    type: "number | null",
    default: "0",
    description: "現在値。 null で indeterminate (無限 animation)。",
  },
  {
    name: "min",
    type: "number",
    default: "0",
    description: "最小値。",
  },
  {
    name: "max",
    type: "number",
    default: "100",
    description: "最大値。",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "linear の向き。 circular には影響しない。",
  },
  {
    name: "translations",
    type: "{ value?: (details) => string }",
    default: "—",
    description:
      "ValueText の format 上書き。 details に value / max / percent が入る。",
  },
];

export function ProgressDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Progress">
        進捗を表す bar / circle。 1 つの primitive で linear と circular
        両方サポート。 value={"{null}"} で indeterminate animation に切替。
        Progress.View で loading / complete の content swap も組める。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root に value を渡し、 linear なら Track + Range、 circular なら Circle + CircleTrack + CircleRange を組む。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[14rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Linear"
        description="Track + Range の bar。 Label / ValueText を上に並べるのが定型。"
      >
        <Example
          code={`<Progress.Root value={65}>
  <div className="flex items-center justify-between">
    <Progress.Label>Uploading</Progress.Label>
    <Progress.ValueText />
  </div>
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
</Progress.Root>`}
        >
          <div className="flex max-w-md flex-col gap-4">
            {[
              { label: "design-tokens.json", value: 20 },
              { label: "components.zip", value: 65 },
              { label: "README.md", value: 90 },
            ].map((item) => (
              <Progress.Root key={item.label} value={item.value}>
                <div className="flex items-center justify-between">
                  <Progress.Label>{item.label}</Progress.Label>
                  <Progress.ValueText />
                </div>
                <Progress.Track>
                  <Progress.Range />
                </Progress.Track>
              </Progress.Root>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Indeterminate"
        description="value={null} で進捗不明モード。 Range が data-state=indeterminate になり muted 色 + animation に切替。"
      >
        <Example
          code={`<Progress.Root value={null}>
  <Progress.Label>Loading…</Progress.Label>
  <Progress.Track>
    <Progress.Range />
  </Progress.Track>
</Progress.Root>`}
        >
          <div className="max-w-md">
            <Progress.Root value={null}>
              <Progress.Label>Loading…</Progress.Label>
              <Progress.Track>
                <Progress.Range />
              </Progress.Track>
            </Progress.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Circular"
        description="Circle + CircleTrack + CircleRange の SVG。 --size と --thickness を style/class で調整して大きさを変える。"
      >
        <Example
          code={`<Progress.Root value={75}>
  <Progress.Circle>
    <Progress.CircleTrack />
    <Progress.CircleRange />
  </Progress.Circle>
</Progress.Root>`}
        >
          <div className="flex items-center gap-6">
            {[25, 50, 75, 100].map((value) => (
              <Progress.Root key={value} value={value}>
                <Progress.Circle>
                  <Progress.CircleTrack />
                  <Progress.CircleRange />
                </Progress.Circle>
              </Progress.Root>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Circular with center label"
        description="Circle を relative box で包んで absolute inset-0 で中央に label を重ねる。 Apple Watch 風の見せ方。"
      >
        <Example
          code={`<div className="relative">
  <Progress.Root value={value}>
    <Progress.Circle className="size-20 [--size:80px] [--thickness:6px]">
      <Progress.CircleTrack />
      <Progress.CircleRange />
    </Progress.Circle>
  </Progress.Root>
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-semibold tabular-nums">
    {value}%
  </div>
</div>`}
        >
          <div className="flex items-center gap-8">
            {[25, 50, 75, 100].map((value) => (
              <div key={value} className="relative">
                <Progress.Root value={value}>
                  <Progress.Circle className="size-20 [--size:80px] [--thickness:6px]">
                    <Progress.CircleTrack />
                    <Progress.CircleRange />
                  </Progress.Circle>
                </Progress.Root>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-fg text-sm font-semibold tabular-nums">
                  {value}%
                </div>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="State view"
        description="Progress.View state=loading | complete で content を切替。 100% に達したら Done に swap したい時に使う。"
      >
        <Example
          code={`<Progress.View state="loading">Running… <Progress.ValueText /></Progress.View>
<Progress.View state="complete">
  <Check className="size-3.5" /> Done
</Progress.View>`}
        >
          <div className="flex max-w-md flex-col gap-4">
            {[
              { label: "Linting", value: 60 },
              { label: "Type check", value: 100 },
            ].map((item) => (
              <Progress.Root key={item.label} value={item.value}>
                <div className="flex items-center justify-between">
                  <Progress.Label>{item.label}</Progress.Label>
                  <Progress.View
                    state="loading"
                    className="flex items-center gap-1 text-fg-muted text-xs tabular-nums"
                  >
                    Running… <Progress.ValueText />
                  </Progress.View>
                  <Progress.View
                    state="complete"
                    className="flex items-center gap-1 text-fg text-xs"
                  >
                    <Check className="size-3.5" strokeWidth={2.5} />
                    Done
                  </Progress.View>
                </div>
                <Progress.Track>
                  <Progress.Range />
                </Progress.Track>
              </Progress.Root>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
