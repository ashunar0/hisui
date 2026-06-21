import { PasswordInput } from "@/components/ui/password-input";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "PasswordInput.Root",
    description:
      "外枠。 visible / onVisibilityChange で表示切替。 値は native input に任せて Input 側で defaultValue / value を渡す。",
  },
  {
    name: "PasswordInput.Label",
    description: "見出し。 aria-labelledby に自動接続。 Input と縦並びの典型。",
  },
  {
    name: "PasswordInput.Control",
    description:
      "Input + VisibilityTrigger を relative で重ねる枠。 中の Input は pr-10 で trigger 用 padding を確保済み。",
  },
  {
    name: "PasswordInput.Input",
    description: "type=password / text の text 入力。 visible state で type が切り替わる。",
  },
  {
    name: "PasswordInput.VisibilityTrigger",
    description:
      "右端の eye / eye-off icon button。 click / Space で表示切替。 default で Eye ↔ EyeOff の Indicator 内蔵。",
  },
  {
    name: "PasswordInput.Indicator",
    description:
      "visible 状態に応じて icon を切替える helper。 children が show 時、 fallback prop が hide 時。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "Root.visible",
    type: "boolean",
    description: "controlled mode の表示状態。",
  },
  {
    name: "Root.defaultVisible",
    type: "boolean",
    default: "false",
    description: "uncontrolled mode の初期表示状態 (false = 隠す)。",
  },
  {
    name: "Root.onVisibilityChange",
    type: "(details: { visible: boolean }) => void",
    description: "show / hide 切替時に呼ばれる。",
  },
  {
    name: "Root.disabled",
    type: "boolean",
    default: "false",
    description: "全体無効化。",
  },
  {
    name: "Root.invalid",
    type: "boolean",
    default: "false",
    description: "Field 等と組み合わせる時の validation 状態。",
  },
  {
    name: "Input (native)",
    type: "—",
    description:
      "値の管理は native input に任せる (defaultValue / value / onChange は Input 側に渡す)。 zag-js は visibility だけ管理する。",
  },
];

export function PasswordInputDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="PasswordInput">
        password 入力専用 field。 右端の eye icon で隠す / 表示を切替えられる。
        Input は内部 inset で trigger 用 padding を取ってあるので、 普通の
        Input と並べてもサイズが揃う。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Label と Control。 Control の中に Input と VisibilityTrigger (Indicator が内側) を重ねる。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[18rem_1fr] gap-3">
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
        description="最小 form。 Label + Control + Input + VisibilityTrigger の組合せ。"
      >
        <Example
          code={`<PasswordInput.Root>
  <PasswordInput.Label>Password</PasswordInput.Label>
  <PasswordInput.Control>
    <PasswordInput.Input placeholder="Enter password" />
    <PasswordInput.VisibilityTrigger />
  </PasswordInput.Control>
</PasswordInput.Root>`}
        >
          <div className="w-72">
            <PasswordInput.Root>
              <PasswordInput.Label>Password</PasswordInput.Label>
              <PasswordInput.Control>
                <PasswordInput.Input placeholder="Enter password" />
                <PasswordInput.VisibilityTrigger />
              </PasswordInput.Control>
            </PasswordInput.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Pre-filled"
        description="defaultValue で initial 値、 defaultVisible で初期表示状態。"
      >
        <Example
          code={`<PasswordInput.Root defaultVisible>
  <PasswordInput.Label>Saved password</PasswordInput.Label>
  <PasswordInput.Control>
    <PasswordInput.Input defaultValue="hunter2" />
    <PasswordInput.VisibilityTrigger />
  </PasswordInput.Control>
</PasswordInput.Root>`}
        >
          <div className="w-72">
            <PasswordInput.Root defaultVisible>
              <PasswordInput.Label>Saved password</PasswordInput.Label>
              <PasswordInput.Control>
                <PasswordInput.Input defaultValue="hunter2" />
                <PasswordInput.VisibilityTrigger />
              </PasswordInput.Control>
            </PasswordInput.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Disabled"
        description="Root に disabled。 Input + Trigger 両方無効化、 opacity 50%。"
      >
        <Example code={`<PasswordInput.Root disabled>
  <PasswordInput.Label>Locked</PasswordInput.Label>
  <PasswordInput.Control>
    <PasswordInput.Input defaultValue="locked" />
    <PasswordInput.VisibilityTrigger />
  </PasswordInput.Control>
</PasswordInput.Root>`}>
          <div className="w-72">
            <PasswordInput.Root disabled>
              <PasswordInput.Label>Locked</PasswordInput.Label>
              <PasswordInput.Control>
                <PasswordInput.Input defaultValue="locked" />
                <PasswordInput.VisibilityTrigger />
              </PasswordInput.Control>
            </PasswordInput.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
