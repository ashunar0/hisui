import { Splitter } from "@/components/ui/splitter";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Splitter.Root",
    description:
      "外枠。 panels prop で各 panel の id / min / max を宣言、 defaultSize で初期 % 配分。 orientation で horizontal / vertical。 親に高さ必須 ([[reference_ark_ui_splitter]])。",
  },
  {
    name: "Splitter.Panel",
    description:
      "1 panel。 panels の id と一致させる。 overflow:auto で中身が長くなった時 scroll。",
  },
  {
    name: "Splitter.ResizeTrigger",
    description:
      "panel 間の resize bar。 id は \"left:right\" 形式で接続する 2 panel を指定。 hover / drag で目立つ色に変化。",
  },
  {
    name: "Splitter.ResizeTriggerIndicator",
    description:
      "trigger 中央に出る pill 状の grabber。 hover / drag で fade-in して掴める位置を可視化。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "panels",
    type: "{ id: string; minSize?: number; maxSize?: number; collapsible?: boolean }[]",
    description:
      "panel 定義 (順番が描画順)。 min / max は %。 collapsible:true で 0% に畳める。",
  },
  {
    name: "size",
    type: "{ id: string; size: number }[]",
    description: "controlled mode の現在 size。 % で渡す。",
  },
  {
    name: "defaultSize",
    type: "number[]",
    description: "uncontrolled の初期 %。 panels と同順で全 panel 分。",
  },
  {
    name: "onSizeChange",
    type: "(details: { size: { id: string; size: number }[] }) => void",
    description: "drag 中に呼ばれる。",
  },
  {
    name: "onSizeChangeEnd",
    type: "(details) => void",
    description: "drag 終了時のみ呼ばれる。 永続化に向く。",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "panel の並ぶ方向。 trigger の cursor も自動切替 (col-resize / row-resize)。",
  },
];

export function SplitterDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Splitter">
        resize 可能な分割 panel。 sidebar + main、 editor + preview + console、
        3 column workspace 等。 panels prop で min / max を宣言、 ResizeTrigger
        を panel 間に挟むだけ。 親要素に明示的な高さが必須 (内部 inline style で
        height:100% を強制するため)。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root に panels を宣言し、 中に Panel と ResizeTrigger を交互に並べる。 trigger の id は隣接 panel を colon で繋ぐ。"
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
        description="sidebar (15-40%) + main の 2 panel。 親に h-48 を当てて高さを与える。"
      >
        <Example
          code={`<div className="h-48">
  <Splitter.Root
    panels={[{ id: "sidebar", minSize: 15, maxSize: 40 }, { id: "main" }]}
    defaultSize={[25, 75]}
  >
    <Splitter.Panel id="sidebar">...</Splitter.Panel>
    <Splitter.ResizeTrigger id="sidebar:main">
      <Splitter.ResizeTriggerIndicator />
    </Splitter.ResizeTrigger>
    <Splitter.Panel id="main">...</Splitter.Panel>
  </Splitter.Root>
</div>`}
        >
          <div className="h-48 w-full">
            <Splitter.Root
              panels={[
                { id: "sidebar", minSize: 15, maxSize: 40 },
                { id: "main" },
              ]}
              defaultSize={[25, 75]}
            >
              <Splitter.Panel id="sidebar">
                <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-fg-soft text-sm">
                  <div className="font-medium text-fg">Sidebar</div>
                  <div className="text-fg-muted text-xs">
                    min 15% / max 40%
                  </div>
                </div>
              </Splitter.Panel>
              <Splitter.ResizeTrigger id="sidebar:main">
                <Splitter.ResizeTriggerIndicator />
              </Splitter.ResizeTrigger>
              <Splitter.Panel id="main">
                <div className="flex h-full flex-col gap-1 p-3 text-fg-soft text-sm">
                  <div className="font-medium text-fg">Main</div>
                  <div className="text-fg-muted text-xs">
                    trigger を掴んで左右に drag するのだ。
                  </div>
                </div>
              </Splitter.Panel>
            </Splitter.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="3 panels (vertical)"
        description="orientation=vertical で縦並び。 editor + preview + console の典型 layout。"
      >
        <Example
          code={`<Splitter.Root
  orientation="vertical"
  panels={[
    { id: "editor", minSize: 30 },
    { id: "preview", minSize: 20 },
    { id: "console", minSize: 15 },
  ]}
  defaultSize={[50, 30, 20]}
>
  <Splitter.Panel id="editor">...</Splitter.Panel>
  <Splitter.ResizeTrigger id="editor:preview"><Splitter.ResizeTriggerIndicator /></Splitter.ResizeTrigger>
  <Splitter.Panel id="preview">...</Splitter.Panel>
  <Splitter.ResizeTrigger id="preview:console"><Splitter.ResizeTriggerIndicator /></Splitter.ResizeTrigger>
  <Splitter.Panel id="console">...</Splitter.Panel>
</Splitter.Root>`}
        >
          <div className="h-72 w-full">
            <Splitter.Root
              orientation="vertical"
              panels={[
                { id: "editor", minSize: 30 },
                { id: "preview", minSize: 20 },
                { id: "console", minSize: 15 },
              ]}
              defaultSize={[50, 30, 20]}
            >
              <Splitter.Panel id="editor">
                <div className="flex h-full flex-col gap-1 p-3 text-fg-soft text-sm">
                  <div className="font-medium text-fg">Editor</div>
                </div>
              </Splitter.Panel>
              <Splitter.ResizeTrigger id="editor:preview">
                <Splitter.ResizeTriggerIndicator />
              </Splitter.ResizeTrigger>
              <Splitter.Panel id="preview">
                <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-fg-soft text-sm">
                  <div className="font-medium text-fg">Preview</div>
                </div>
              </Splitter.Panel>
              <Splitter.ResizeTrigger id="preview:console">
                <Splitter.ResizeTriggerIndicator />
              </Splitter.ResizeTrigger>
              <Splitter.Panel id="console">
                <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-fg-soft text-sm">
                  <div className="font-medium text-fg">Console</div>
                  <div className="font-mono text-fg-muted text-xs">
                    $ pnpm dev
                  </div>
                </div>
              </Splitter.Panel>
            </Splitter.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Collapsible"
        description="panel に collapsible:true を渡すと 0% まで畳める。 chat の右 detail pane や設定 inspector に。"
      >
        <Example
          code={`<Splitter.Root
  panels={[
    { id: "list" },
    { id: "detail", minSize: 20, collapsible: true },
  ]}
  defaultSize={[60, 40]}
>...`}
        >
          <div className="h-48 w-full">
            <Splitter.Root
              panels={[
                { id: "list" },
                { id: "detail", minSize: 20, collapsible: true },
              ]}
              defaultSize={[60, 40]}
            >
              <Splitter.Panel id="list">
                <div className="flex h-full flex-col gap-1 p-3 text-fg-soft text-sm">
                  <div className="font-medium text-fg">List</div>
                  <div className="text-fg-muted text-xs">
                    detail panel を端まで drag すると畳まる。
                  </div>
                </div>
              </Splitter.Panel>
              <Splitter.ResizeTrigger id="list:detail">
                <Splitter.ResizeTriggerIndicator />
              </Splitter.ResizeTrigger>
              <Splitter.Panel id="detail">
                <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-fg-soft text-sm">
                  <div className="font-medium text-fg">Detail</div>
                  <div className="text-fg-muted text-xs">collapsible</div>
                </div>
              </Splitter.Panel>
            </Splitter.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
