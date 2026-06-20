import { Avatar } from "@/components/ui/avatar";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const SIZES = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
const SHAPES = ["circle", "rounded", "square"] as const;

const PARTS = [
  {
    name: "Avatar.Root",
    description: "外枠。 size / shape を受ける。 overflow-hidden で image を clip。",
  },
  {
    name: "Avatar.Image",
    description: "img タグ。 src 渡せば load 試行、 失敗 / 未指定で Fallback に切替。",
  },
  {
    name: "Avatar.Fallback",
    description:
      "Image が失敗 / 未指定の時に表示。 name を渡すと 自動で initials 生成、 children でアイコン等にも差替可。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
    default: '"md"',
    description: "size-6 / 8 / 10 / 12 / 16 / 20。 font-size も連動。",
  },
  {
    name: "shape",
    type: '"circle" | "rounded" | "square"',
    default: '"circle"',
    description:
      "circle = rounded-full、 rounded = rounded-md、 square = 角あり。",
  },
];

const FALLBACK_PROPS: PropRow[] = [
  {
    name: "name",
    type: "string",
    description:
      "名前から initials を自動生成 (2 文字、 大文字化)。 children が無い時のみ使われる。",
  },
];

export function AvatarDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Avatar">
        ユーザーの顔写真 / initials を表示する円 (or 角丸 / 角あり) 枠。
        Ark UI ベースで Image が失敗したら Fallback に自動切替。 name から
        initials を生成するのが ui-lab の便利機能。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Image と Fallback を並べる。 Ark UI が状態を見て自動切替。"
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
        description="Image + Fallback(name) の最小構成。 src が読めなければ initials が出る。"
      >
        <Example
          code={`<Avatar.Root>
  <Avatar.Image src="https://i.pravatar.cc/100?u=asahi" alt="Asahi" />
  <Avatar.Fallback name="Asahi K" />
</Avatar.Root>`}
        >
          <Avatar.Root>
            <Avatar.Image src="https://i.pravatar.cc/100?u=asahi" alt="Asahi" />
            <Avatar.Fallback name="Asahi K" />
          </Avatar.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Fallback only"
        description="src を渡さない / 失敗時の表示。 name で initials、 children でアイコン。"
      >
        <Example
          code={`<Avatar.Root>
  <Avatar.Fallback name="Asahi K" />
</Avatar.Root>
<Avatar.Root>
  <Avatar.Fallback>?</Avatar.Fallback>
</Avatar.Root>`}
        >
          <div className="flex items-center gap-3">
            <Avatar.Root>
              <Avatar.Fallback name="Asahi K" />
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Fallback name="Taro Yamada" />
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Fallback>?</Avatar.Fallback>
            </Avatar.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="6 段階。 size-6 (xs) 〜 size-20 (2xl)。"
      >
        <Example
          code={SIZES.map(
            (s) => `<Avatar.Root size="${s}">...</Avatar.Root>`,
          ).join("\n")}
        >
          <div className="flex flex-wrap items-end gap-3">
            {SIZES.map((s) => (
              <div key={s} className="flex flex-col items-center gap-1">
                <Avatar.Root size={s}>
                  <Avatar.Fallback name="Asahi K" />
                </Avatar.Root>
                <span className="font-mono text-[11px] text-fg-muted">{s}</span>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Shapes"
        description="3 種。 circle がデフォルト、 rounded は app 内で柔らかさ、 square は profile / list 系。"
      >
        <Example
          code={SHAPES.map(
            (s) => `<Avatar.Root shape="${s}">...</Avatar.Root>`,
          ).join("\n")}
        >
          <div className="flex items-center gap-3">
            {SHAPES.map((s) => (
              <div key={s} className="flex flex-col items-center gap-1">
                <Avatar.Root shape={s} size="lg">
                  <Avatar.Image
                    src={`https://i.pravatar.cc/100?u=${s}`}
                    alt={s}
                  />
                  <Avatar.Fallback name={s} />
                </Avatar.Root>
                <span className="font-mono text-[11px] text-fg-muted">{s}</span>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Group"
        description="overlap して並べる典型パターン。 -space-x で重ね、 各 Root に ring-2 で境界線。"
      >
        <Example
          code={`<div className="flex -space-x-2">
  <Avatar.Root className="ring-2 ring-bg">...</Avatar.Root>
  <Avatar.Root className="ring-2 ring-bg">...</Avatar.Root>
  <Avatar.Root className="ring-2 ring-bg">...</Avatar.Root>
</div>`}
        >
          <div className="flex -space-x-2">
            {["alice", "bob", "carol", "dan"].map((u) => (
              <Avatar.Root key={u} className="ring-2 ring-bg">
                <Avatar.Image
                  src={`https://i.pravatar.cc/100?u=${u}`}
                  alt={u}
                />
                <Avatar.Fallback name={u} />
              </Avatar.Root>
            ))}
            <Avatar.Root className="ring-2 ring-bg bg-surface-sunken">
              <Avatar.Fallback>
                <span className="text-xs">+3</span>
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>

      <DocSection title="Fallback props">
        <PropsTable rows={FALLBACK_PROPS} />
      </DocSection>
    </div>
  );
}
