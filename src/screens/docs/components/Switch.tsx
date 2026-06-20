import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Switch.Root",
    description:
      "外枠。 inline-flex で Control と Label を gap-2 で並べる。 HiddenInput は自動 mount。",
  },
  {
    name: "Switch.Control",
    description: "track 部分。 h-5 w-9 rounded-full。 checked で bg-fg。",
  },
  {
    name: "Switch.Thumb",
    description:
      "丸い動く部分。 translate-x で位置切替、 transition-transform で滑らかに。",
  },
  {
    name: "Switch.Label",
    description: "右の text。 クリックで toggle される (Label が trigger 化)。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "checked",
    type: "boolean",
    description: "controlled mode の値。",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    description: "uncontrolled mode の初期値。",
  },
  {
    name: "onCheckedChange",
    type: "(details: { checked: boolean }) => void",
    description: "値が変わった時に呼ばれる。 controlled mode で必須。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "操作不可。 opacity-50 + cursor-not-allowed。",
  },
];

function ControlledExample() {
  const [checked, setChecked] = useState(true);
  return (
    <Switch.Root checked={checked} onCheckedChange={(d) => setChecked(d.checked)}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>checked = {String(checked)}</Switch.Label>
    </Switch.Root>
  );
}

const SETTINGS = [
  { key: "notifications", label: "Email notifications", default: true },
  { key: "marketing", label: "Marketing emails", default: false },
  { key: "weekly", label: "Weekly digest", default: true },
] as const;

function SettingsListExample() {
  const [state, setState] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(SETTINGS.map((s) => [s.key, s.default])),
  );
  return (
    <div className="flex max-w-md flex-col gap-3 rounded-md border border-border p-4">
      {SETTINGS.map((s) => (
        <Switch.Root
          key={s.key}
          checked={state[s.key]}
          onCheckedChange={(d) => setState((p) => ({ ...p, [s.key]: d.checked }))}
          className="justify-between w-full"
        >
          <Switch.Label>{s.label}</Switch.Label>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>
      ))}
    </div>
  );
}

export function SwitchDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Switch">
        on / off の 2 状態を持つ form control。 Checkbox と機能は同じだが、
        即時反映する設定 (notification、 dark mode、 feature toggle) に使う。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Control (中に Thumb) と Label を並べる。"
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
        description="uncontrolled (defaultChecked) の最小例。"
      >
        <Example
          code={`<Switch.Root defaultChecked>
  <Switch.Control>
    <Switch.Thumb />
  </Switch.Control>
  <Switch.Label>Wi-Fi</Switch.Label>
</Switch.Root>`}
        >
          <Switch.Root defaultChecked>
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
            <Switch.Label>Wi-Fi</Switch.Label>
          </Switch.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Controlled"
        description="checked + onCheckedChange で値を制御。"
      >
        <Example
          code={`const [checked, setChecked] = useState(true);
<Switch.Root checked={checked} onCheckedChange={(d) => setChecked(d.checked)}>
  <Switch.Control><Switch.Thumb /></Switch.Control>
  <Switch.Label>checked = {String(checked)}</Switch.Label>
</Switch.Root>`}
        >
          <ControlledExample />
        </Example>
      </DocSection>

      <DocSection
        title="Disabled"
        description="disabled で操作不可 + opacity-50。"
      >
        <Example
          code={`<Switch.Root disabled>
  <Switch.Control><Switch.Thumb /></Switch.Control>
  <Switch.Label>Disabled</Switch.Label>
</Switch.Root>
<Switch.Root disabled defaultChecked>
  <Switch.Control><Switch.Thumb /></Switch.Control>
  <Switch.Label>Disabled checked</Switch.Label>
</Switch.Root>`}
        >
          <div className="flex flex-col gap-2">
            <Switch.Root disabled>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Label>Disabled</Switch.Label>
            </Switch.Root>
            <Switch.Root disabled defaultChecked>
              <Switch.Control>
                <Switch.Thumb />
              </Switch.Control>
              <Switch.Label>Disabled checked</Switch.Label>
            </Switch.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Settings list pattern"
        description="設定画面の典型。 Label を左、 Control を右に配置 (justify-between + w-full)。"
      >
        <Example
          code={`<Switch.Root className="justify-between w-full" ...>
  <Switch.Label>Email notifications</Switch.Label>
  <Switch.Control><Switch.Thumb /></Switch.Control>
</Switch.Root>`}
        >
          <SettingsListExample />
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
