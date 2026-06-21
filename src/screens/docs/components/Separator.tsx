import { Separator } from "@/components/ui/separator";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PROPS: PropRow[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description:
      "horizontal は h-px w-full、 vertical は h-full w-px。 親の flex 向きに合わせる。",
  },
  {
    name: "decorative",
    type: "boolean",
    default: "true",
    description:
      "true (default) は role=none で screen reader に無視させる。 false で role=separator + aria-orientation。",
  },
  {
    name: "className",
    type: "string",
    description: "色 (bg-*) や margin 等を上書き。",
  },
  {
    name: "...HTMLAttributes<div>",
    type: "—",
    description: "div の prop を pass-through。",
  },
];

export function SeparatorDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Separator">
        section / item の区切り線。 1px の bg-border。 orientation で
        horizontal / vertical 切替。 default は装飾 (role=none) で、 意味のある
        区切りなら decorative=false にして screen reader に届ける。
      </DocHeader>

      <DocSection
        title="Horizontal"
        description="default。 縦に積んだ block の間に挟む。"
      >
        <Example
          code={`<div>
  <p>Section 1</p>
  <Separator />
  <p>Section 2</p>
</div>`}
        >
          <div className="flex w-full max-w-md flex-col gap-3">
            <p className="text-fg text-sm">Section 1</p>
            <Separator />
            <p className="text-fg text-sm">Section 2</p>
            <Separator />
            <p className="text-fg text-sm">Section 3</p>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Vertical"
        description="orientation=vertical で 1px の縦線。 flex-row の inline 要素間に。"
      >
        <Example
          code={`<div className="flex h-5 items-center gap-3">
  <span>Home</span>
  <Separator orientation="vertical" />
  <span>Docs</span>
  <Separator orientation="vertical" />
  <span>API</span>
</div>`}
        >
          <div className="flex h-5 items-center gap-3 text-fg-soft text-sm">
            <span>Home</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>API</span>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="In card"
        description="header と body、 body と footer の区切り。 card 内で頻出。"
      >
        <Example
          code={`<div className="rounded-md border border-border">
  <div className="p-4"><h3>Settings</h3></div>
  <Separator />
  <div className="p-4">...</div>
  <Separator />
  <div className="p-4 flex justify-end">...</div>
</div>`}
        >
          <div className="w-full max-w-md overflow-hidden rounded-md border border-border bg-surface">
            <div className="p-4">
              <h3 className="font-medium text-fg text-sm">Settings</h3>
              <p className="text-fg-muted text-xs">Manage your preferences.</p>
            </div>
            <Separator />
            <div className="flex flex-col gap-2 p-4">
              <p className="text-fg-soft text-sm">Theme: System</p>
              <p className="text-fg-soft text-sm">Language: English</p>
              <p className="text-fg-soft text-sm">Notifications: Email</p>
            </div>
            <Separator />
            <div className="flex justify-end p-3">
              <p className="text-fg-muted text-xs">Last saved 2 min ago</p>
            </div>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Custom color"
        description="className で bg-* を上書き。 muted な区切りや brand 色強調に。"
      >
        <Example
          code={`<Separator className="bg-border-muted" />
<Separator className="bg-fg" />`}
        >
          <div className="flex w-full max-w-md flex-col gap-3">
            <Separator />
            <p className="text-fg-muted text-xs">bg-border (default)</p>
            <Separator className="bg-border-muted" />
            <p className="text-fg-muted text-xs">bg-border-muted</p>
            <Separator className="bg-fg" />
            <p className="text-fg-muted text-xs">bg-fg</p>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
