import { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Tabs.Root",
    description:
      "外枠。 value / onValueChange で選択 tab を管理。 各 Trigger / Content の value で紐付け。",
  },
  {
    name: "Tabs.List",
    description:
      "Trigger を並べる行。 bg-surface-sunken + rounded-lg の segmented container。",
  },
  {
    name: "Tabs.Indicator",
    description:
      "選択中 tab の下に走る浮かび上がる白い背景。 Trigger の位置に追従して transition。",
  },
  {
    name: "Tabs.Trigger",
    description: "1 つの tab ボタン。 value 必須。 disabled 個別指定可。",
  },
  {
    name: "Tabs.Content",
    description: "中身。 Trigger と同じ value で対応。 unmount は default false (mount 維持)。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "variant",
    type: '"enclosed" | "line"',
    default: '"enclosed"',
    description:
      "enclosed = sunken container + 浮く白 indicator (segmented control 風)。 line = 下線のみ (page 内 nav 風)。",
  },
  {
    name: "value",
    type: "string",
    description: "controlled mode の選択 tab value。",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "uncontrolled mode の初期 value。",
  },
  {
    name: "onValueChange",
    type: "(details: { value: string }) => void",
    description: "tab が変わった時に呼ばれる。",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "List の並べる向き。 vertical で左右 layout。",
  },
  {
    name: "activationMode",
    type: '"automatic" | "manual"',
    default: '"automatic"',
    description: "キーボード移動時に focus だけ動かす (manual) or 即選択 (automatic)。",
  },
];

const TABS = [
  { value: "overview", label: "Overview", body: "Project summary and metrics." },
  { value: "activity", label: "Activity", body: "Recent commits and PRs." },
  { value: "settings", label: "Settings", body: "Team / billing / integrations." },
] as const;

function ControlledExample() {
  const [value, setValue] = useState("activity");
  return (
    <div className="flex flex-col gap-3">
      <Tabs.Root value={value} onValueChange={(d) => setValue(d.value)}>
        <Tabs.List>
          <Tabs.Indicator />
          {TABS.map((t) => (
            <Tabs.Trigger key={t.value} value={t.value}>
              {t.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {TABS.map((t) => (
          <Tabs.Content key={t.value} value={t.value} className="pt-2">
            <p className="text-fg-soft text-sm">{t.body}</p>
          </Tabs.Content>
        ))}
      </Tabs.Root>
      <p className="text-fg-muted text-xs">selected: {value}</p>
    </div>
  );
}

export function TabsDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Tabs">
        水平 / 垂直に並ぶ tab で content を切り替える。 List + Indicator +
        Trigger × N + Content × N の compound。 segmented control 風の見た目で
        Indicator が滑らかに追従する。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に List (Indicator + Trigger 群) と Content 群を並べる。 Content は Trigger と同じ value で対応。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[10rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Usage"
        description="uncontrolled (defaultValue) の最小例。"
      >
        <Example
          code={`<Tabs.Root defaultValue="overview">
  <Tabs.List>
    <Tabs.Indicator />
    {TABS.map((t) => <Tabs.Trigger key={t.value} value={t.value}>{t.label}</Tabs.Trigger>)}
  </Tabs.List>
  {TABS.map((t) => (
    <Tabs.Content key={t.value} value={t.value}>{t.body}</Tabs.Content>
  ))}
</Tabs.Root>`}
        >
          <Tabs.Root defaultValue="overview">
            <Tabs.List>
              <Tabs.Indicator />
              {TABS.map((t) => (
                <Tabs.Trigger key={t.value} value={t.value}>
                  {t.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {TABS.map((t) => (
              <Tabs.Content key={t.value} value={t.value} className="pt-3">
                <p className="text-fg-soft text-sm">{t.body}</p>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Controlled"
        description="value + onValueChange で外部から制御。"
      >
        <Example
          code={`const [value, setValue] = useState("activity");
<Tabs.Root value={value} onValueChange={(d) => setValue(d.value)}>...</Tabs.Root>`}
        >
          <ControlledExample />
        </Example>
      </DocSection>

      <DocSection
        title="Variant: line"
        description="下線型。 page 内 nav や記事の章切替に。 List / Indicator / Trigger 全部 variant=line に連動する。"
      >
        <Example
          code={`<Tabs.Root defaultValue="overview" variant="line">
  <Tabs.List>
    <Tabs.Indicator />
    {TABS.map((t) => <Tabs.Trigger value={t.value}>{t.label}</Tabs.Trigger>)}
  </Tabs.List>
  ...
</Tabs.Root>`}
        >
          <Tabs.Root defaultValue="overview" variant="line">
            <Tabs.List>
              <Tabs.Indicator />
              {TABS.map((t) => (
                <Tabs.Trigger key={t.value} value={t.value}>
                  {t.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            {TABS.map((t) => (
              <Tabs.Content key={t.value} value={t.value} className="pt-3">
                <p className="text-fg-soft text-sm">{t.body}</p>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Disabled tab"
        description="Trigger に disabled で個別無効化。"
      >
        <Example
          code={`<Tabs.Trigger value="settings" disabled>Settings</Tabs.Trigger>`}
        >
          <Tabs.Root defaultValue="overview">
            <Tabs.List>
              <Tabs.Indicator />
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
              <Tabs.Trigger value="settings" disabled>
                Settings (locked)
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Vertical"
        description="orientation=vertical で List が縦並びに。 左 nav 風 layout に使う。"
      >
        <Example
          code={`<Tabs.Root defaultValue="overview" orientation="vertical">
  <div className="flex gap-6">
    <Tabs.List className="flex-col">
      <Tabs.Indicator />
      ...
    </Tabs.List>
    <div>{...Content...}</div>
  </div>
</Tabs.Root>`}
        >
          <Tabs.Root defaultValue="overview" orientation="vertical">
            <div className="flex gap-6">
              <Tabs.List className="flex-col">
                <Tabs.Indicator />
                {TABS.map((t) => (
                  <Tabs.Trigger
                    key={t.value}
                    value={t.value}
                    className="w-full justify-start"
                  >
                    {t.label}
                  </Tabs.Trigger>
                ))}
              </Tabs.List>
              <div className="flex-1">
                {TABS.map((t) => (
                  <Tabs.Content key={t.value} value={t.value}>
                    <p className="text-fg-soft text-sm">{t.body}</p>
                  </Tabs.Content>
                ))}
              </div>
            </div>
          </Tabs.Root>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
