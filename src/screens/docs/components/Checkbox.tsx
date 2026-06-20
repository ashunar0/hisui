import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Checkbox.Root",
    description:
      "外枠。 label と control を gap-2 で並べる。 HiddenInput を内部で自動 mount するので form 連携が効く。",
  },
  {
    name: "Checkbox.Control",
    description:
      "実際の四角。 size-4 + border、 checked / indeterminate で bg-fg に切替。 Indicator を内蔵 (default は Check / Minus)。",
  },
  {
    name: "Checkbox.Label",
    description: "右の text。 クリックで toggle するので clickable area が広がる。",
  },
  {
    name: "Checkbox.Group",
    description:
      "複数 checkbox を value array で管理。 flex flex-col gap-2 で縦並び。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "checked",
    type: "boolean | 'indeterminate'",
    description: "controlled mode の値。 'indeterminate' で中間状態。",
  },
  {
    name: "defaultChecked",
    type: "boolean | 'indeterminate'",
    description: "uncontrolled mode の初期値。",
  },
  {
    name: "onCheckedChange",
    type: "(details: { checked: boolean | 'indeterminate' }) => void",
    description: "値が変わった時に呼ばれる。 controlled mode で必須。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "操作不可。 opacity-50 + cursor-not-allowed。",
  },
  {
    name: "invalid",
    type: "boolean",
    default: "false",
    description: "form-level error 表示。 aria-invalid に流れる。",
  },
];

function ControlledExample() {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox.Root
      checked={checked}
      onCheckedChange={(d) =>
        setChecked(d.checked === "indeterminate" ? false : d.checked)
      }
    >
      <Checkbox.Control />
      <Checkbox.Label>checked = {String(checked)}</Checkbox.Label>
    </Checkbox.Root>
  );
}

function IndeterminateExample() {
  const [state, setState] = useState<"checked" | "indeterminate" | "off">(
    "indeterminate",
  );
  const next = state === "off" ? "checked" : state === "checked" ? "indeterminate" : "off";
  return (
    <Checkbox.Root
      checked={
        state === "checked"
          ? true
          : state === "indeterminate"
            ? "indeterminate"
            : false
      }
      onCheckedChange={() => setState(next)}
    >
      <Checkbox.Control />
      <Checkbox.Label>state: {state} (click to cycle)</Checkbox.Label>
    </Checkbox.Root>
  );
}

const FRUITS = ["apple", "banana", "cherry"] as const;

function GroupExample() {
  const [value, setValue] = useState<string[]>(["apple"]);
  return (
    <Checkbox.Group value={value} onValueChange={(v) => setValue(v)}>
      {FRUITS.map((f) => (
        <Checkbox.Root key={f} value={f}>
          <Checkbox.Control />
          <Checkbox.Label>{f}</Checkbox.Label>
        </Checkbox.Root>
      ))}
      <p className="text-fg-muted text-xs">selected: [{value.join(", ")}]</p>
    </Checkbox.Group>
  );
}

export function CheckboxDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Checkbox">
        on / off / indeterminate の 3 状態を持つ form control。 Ark UI ベース。
        単独 checkbox は Root + Control + Label の 3 部、 複数同時管理は Group
        で囲んで value array に流す。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Control と Label を並べる。 HiddenInput は Root が自動 mount。"
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
        description="uncontrolled (defaultChecked) の最小例。 Label クリックでも toggle。"
      >
        <Example
          code={`<Checkbox.Root defaultChecked>
  <Checkbox.Control />
  <Checkbox.Label>Accept terms</Checkbox.Label>
</Checkbox.Root>`}
        >
          <Checkbox.Root defaultChecked>
            <Checkbox.Control />
            <Checkbox.Label>Accept terms</Checkbox.Label>
          </Checkbox.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Controlled"
        description="checked + onCheckedChange を渡して値を制御。"
      >
        <Example
          code={`const [checked, setChecked] = useState(false);
<Checkbox.Root
  checked={checked}
  onCheckedChange={(d) => setChecked(d.checked === "indeterminate" ? false : d.checked)}
>
  <Checkbox.Control />
  <Checkbox.Label>checked = {String(checked)}</Checkbox.Label>
</Checkbox.Root>`}
        >
          <ControlledExample />
        </Example>
      </DocSection>

      <DocSection
        title="Indeterminate"
        description="'indeterminate' で 中間状態。 子 checkbox の一部だけ選択中の親 checkbox に使う。"
      >
        <Example
          code={`<Checkbox.Root checked="indeterminate">
  <Checkbox.Control />
  <Checkbox.Label>Select all</Checkbox.Label>
</Checkbox.Root>`}
        >
          <IndeterminateExample />
        </Example>
      </DocSection>

      <DocSection
        title="Disabled"
        description="disabled で操作不可 + opacity-50。"
      >
        <Example
          code={`<Checkbox.Root disabled>
  <Checkbox.Control />
  <Checkbox.Label>Disabled</Checkbox.Label>
</Checkbox.Root>
<Checkbox.Root disabled defaultChecked>
  <Checkbox.Control />
  <Checkbox.Label>Disabled checked</Checkbox.Label>
</Checkbox.Root>`}
        >
          <div className="flex flex-col gap-2">
            <Checkbox.Root disabled>
              <Checkbox.Control />
              <Checkbox.Label>Disabled</Checkbox.Label>
            </Checkbox.Root>
            <Checkbox.Root disabled defaultChecked>
              <Checkbox.Control />
              <Checkbox.Label>Disabled checked</Checkbox.Label>
            </Checkbox.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Group"
        description="Checkbox.Group で value array を一括管理。 各 Root に value を渡す。"
      >
        <Example
          code={`const [value, setValue] = useState<string[]>(["apple"]);
<Checkbox.Group value={value} onValueChange={(v) => setValue(v)}>
  {FRUITS.map((f) => (
    <Checkbox.Root key={f} value={f}>
      <Checkbox.Control />
      <Checkbox.Label>{f}</Checkbox.Label>
    </Checkbox.Root>
  ))}
</Checkbox.Group>`}
        >
          <GroupExample />
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
