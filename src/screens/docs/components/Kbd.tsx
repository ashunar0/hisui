import { Kbd } from "@/components/ui/kbd";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PROPS: PropRow[] = [
  {
    name: "className",
    type: "string",
    description:
      "サイズ / 色 / shadow 等を上書き。 default は h-5 min-w-5、 border + 下 shadow で物理 key 感を出す。",
  },
  {
    name: "...HTMLAttributes",
    type: "—",
    description: "kbd タグの prop を pass-through。",
  },
];

export function KbdDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Kbd">
        keyboard shortcut を表示する inline element。 native の kbd タグを
        bordered + 下 shadow で装飾し、 物理的なキー風に。 Command palette /
        tooltip / menu の trailing hint に。
      </DocHeader>

      <DocSection title="Usage" description="children に key 名を渡すだけ。">
        <Example code={`<Kbd>K</Kbd>`}>
          <Kbd>K</Kbd>
        </Example>
      </DocSection>

      <DocSection
        title="Combinations"
        description="複数 key を + や横並びで。 Modifier + key の典型。"
      >
        <Example
          code={`<span className="inline-flex items-center gap-1">
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</span>
<span className="inline-flex items-center gap-1">
  <Kbd>Shift</Kbd><span>+</span><Kbd>Tab</Kbd>
</span>`}
        >
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-1">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </span>
            <span className="inline-flex items-center gap-1 text-fg-muted text-xs">
              <Kbd>Shift</Kbd>
              <span>+</span>
              <Kbd>Tab</Kbd>
            </span>
            <span className="inline-flex items-center gap-1">
              <Kbd>⌃</Kbd>
              <Kbd>⌥</Kbd>
              <Kbd>⌫</Kbd>
            </span>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Inline in text"
        description="本文中の説明に挟む。 baseline が text と揃うように h-5 / leading-none で調整済み。"
      >
        <Example
          code={`<p>Press <Kbd>⌘</Kbd><Kbd>K</Kbd> to open command palette.</p>`}
        >
          <p className="text-fg-soft text-sm">
            Press{" "}
            <span className="inline-flex items-center gap-0.5 align-baseline">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </span>{" "}
            to open command palette, or{" "}
            <Kbd>/</Kbd> to focus search.
          </p>
        </Example>
      </DocSection>

      <DocSection
        title="In menu / list"
        description="menu item の右端に shortcut hint。 ml-auto + text 列との間隔を空ける。"
      >
        <Example
          code={`<div className="flex items-center justify-between">
  <span>New file</span>
  <span className="inline-flex items-center gap-1">
    <Kbd>⌘</Kbd><Kbd>N</Kbd>
  </span>
</div>`}
        >
          <div className="w-full max-w-md overflow-hidden rounded-md border border-border bg-surface">
            {[
              { label: "New file", keys: ["⌘", "N"] },
              { label: "Open file", keys: ["⌘", "O"] },
              { label: "Save", keys: ["⌘", "S"] },
              { label: "Find in files", keys: ["⌘", "⇧", "F"] },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-border-muted px-3 py-2 last:border-b-0"
              >
                <span className="text-fg text-sm">{item.label}</span>
                <span className="inline-flex items-center gap-1">
                  {item.keys.map((k) => (
                    <Kbd key={k}>{k}</Kbd>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="className で text size と高さを上書き。 周辺 typo に合わせる。"
      >
        <Example
          code={`<Kbd className="h-4 min-w-4 text-[10px]">K</Kbd>
<Kbd>K</Kbd>
<Kbd className="h-6 min-w-6 text-xs">K</Kbd>`}
        >
          <div className="flex items-end gap-3">
            <Kbd className="h-4 min-w-4 text-[10px]">K</Kbd>
            <Kbd>K</Kbd>
            <Kbd className="h-6 min-w-6 text-xs">K</Kbd>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
