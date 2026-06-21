import { Bell, BellOff, Bold, Italic, Underline, Wifi } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Toggle.Root",
    description:
      "2 状態 button。 pressed / unpressed を data-state=on/off で持つ。 default は outline + 押下で塗りつぶし。",
  },
  {
    name: "Toggle.Indicator",
    description:
      "on / off で children と fallback を swap。 icon 切替に使う。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "pressed",
    type: "boolean",
    default: "—",
    description: "controlled 状態。 onPressedChange とセットで使う。",
  },
  {
    name: "defaultPressed",
    type: "boolean",
    default: "false",
    description: "uncontrolled 初期値。",
  },
  {
    name: "onPressedChange",
    type: "(pressed: boolean) => void",
    default: "—",
    description: "状態変化の callback。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "data-disabled が付き opacity-50 + cursor-not-allowed。",
  },
];

export function ToggleDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Toggle">
        2 状態 button。 押下で data-state=on になる以外は plain button。
        ToggleGroup のように mutually-exclusive にせず、単独で on/off
        を持たせたい時に使う (ex. bold / italic / wifi toggle)。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Indicator は任意。 icon を on/off で切替たい時だけ使う。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[12rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="States"
        description="default / pressed / disabled の 3 状態。 押下で塗りつぶし。"
      >
        <Example
          code={`<Toggle.Root>...</Toggle.Root>
<Toggle.Root defaultPressed>...</Toggle.Root>
<Toggle.Root disabled>...</Toggle.Root>`}
        >
          <div className="flex flex-wrap items-center gap-2">
            <Toggle.Root aria-label="Wifi off">
              <Wifi className="size-4" strokeWidth={2} />
              Wifi
            </Toggle.Root>
            <Toggle.Root aria-label="Wifi on" defaultPressed>
              <Wifi className="size-4" strokeWidth={2} />
              Wifi
            </Toggle.Root>
            <Toggle.Root aria-label="Wifi disabled" disabled>
              <Wifi className="size-4" strokeWidth={2} />
              Wifi
            </Toggle.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Icon swap with Indicator"
        description="Toggle.Indicator の children が on、 fallback が off に対応。 通知 on/off のような切替に。"
      >
        <Example
          code={`<Toggle.Root defaultPressed aria-label="Toggle notifications">
  <Toggle.Indicator fallback={<BellOff />}>
    <Bell />
  </Toggle.Indicator>
  Notifications
</Toggle.Root>`}
        >
          <Toggle.Root
            aria-label="Toggle notifications"
            defaultPressed
            className="w-fit"
          >
            <Toggle.Indicator
              fallback={<BellOff className="size-4" strokeWidth={2} />}
            >
              <Bell className="size-4" strokeWidth={2} />
            </Toggle.Indicator>
            Notifications
          </Toggle.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Icon-only toolbar"
        description="border を消して内側 padding をゼロにすると、 surrounding container の中で並べやすい。 aria-label を必ず付ける。"
      >
        <Example
          code={`<div className="flex w-fit items-center gap-1 rounded-md border bg-surface p-1">
  <Toggle.Root aria-label="Bold" className="size-8 border-0 p-0">
    <Bold />
  </Toggle.Root>
  ...
</div>`}
        >
          <div className="flex w-fit items-center gap-1 rounded-md border border-border bg-surface p-1">
            <Toggle.Root
              aria-label="Bold"
              defaultPressed
              className="size-8 border-0 p-0"
            >
              <Bold className="size-4" strokeWidth={2.25} />
            </Toggle.Root>
            <Toggle.Root aria-label="Italic" className="size-8 border-0 p-0">
              <Italic className="size-4" strokeWidth={2.25} />
            </Toggle.Root>
            <Toggle.Root
              aria-label="Underline"
              className="size-8 border-0 p-0"
            >
              <Underline className="size-4" strokeWidth={2.25} />
            </Toggle.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
