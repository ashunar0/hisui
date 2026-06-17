import { ArrowRight, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "../parts/code";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const VARIANTS = [
  "solid",
  "subtle",
  "outline",
  "ghost",
  "surface",
  "plain",
] as const;
const PALETTES = ["neutral", "success", "danger", "warning", "info"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

const PROPS: PropRow[] = [
  {
    name: "variant",
    type: '"solid" | "subtle" | "outline" | "ghost" | "surface" | "plain"',
    default: '"solid"',
    description: "見た目のスタイル。色の強さと面の塗りを決める。",
  },
  {
    name: "colorPalette",
    type: '"neutral" | "success" | "danger" | "warning" | "info"',
    default: '"neutral"',
    description: "意味を表す色。semantic token に紐づき light/dark 両対応。",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg"',
    default: '"md"',
    description: "高さ・padding・font-size をまとめてスケール。",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Spinner を表示し disabled 化。",
  },
  {
    name: "loadingText",
    type: "string",
    description: "loading 中に children の代わりに出す文言。",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "子要素にスタイルを移譲 (Link などを Button 見た目にする)。",
  },
];

export function ButtonDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Button">
        アクションのトリガー。variant（見た目）× colorPalette（意味の色）×
        size の 3 軸で組み合わせる。Chakra UI v3 と prop 互換。
      </DocHeader>

      <CodeBlock code={`import { Button } from "@/components/ui/button";`} />

      <DocSection title="Usage" description="default は solid / neutral / md。">
        <Example code={`<Button>Save changes</Button>`}>
          <Button>Save changes</Button>
        </Example>
      </DocSection>

      <DocSection
        title="Variants"
        description="6 種。solid が最も強く、plain が最も弱い。"
      >
        <Example
          code={VARIANTS.map((v) => `<Button variant="${v}">${v}</Button>`).join(
            "\n",
          )}
        >
          <div className="flex flex-wrap items-center gap-3">
            {VARIANTS.map((v) => (
              <Button key={v} variant={v}>
                {v}
              </Button>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Color palettes"
        description="意味を表す 5 色。例は solid で比較。"
      >
        <Example
          code={PALETTES.map(
            (p) => `<Button colorPalette="${p}">${p}</Button>`,
          ).join("\n")}
        >
          <div className="flex flex-wrap items-center gap-3">
            {PALETTES.map((p) => (
              <Button key={p} colorPalette={p}>
                {p}
              </Button>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection title="Sizes" description="xs / sm / md / lg の 4 段階。">
        <Example
          code={SIZES.map((s) => `<Button size="${s}">${s}</Button>`).join("\n")}
        >
          <div className="flex flex-wrap items-center gap-3">
            {SIZES.map((s) => (
              <Button key={s} size={s}>
                {s}
              </Button>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="With icon"
        description="children に lucide-react の icon を並べるだけ。gap は size 連動。"
      >
        <Example
          code={`<Button>
  <Plus className="size-4" />
  New item
</Button>
<Button variant="outline">
  Continue
  <ArrowRight className="size-4" />
</Button>
<Button variant="subtle" colorPalette="danger">
  <Trash2 className="size-4" />
  Delete
</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button>
              <Plus className="size-4" />
              New item
            </Button>
            <Button variant="outline">
              Continue
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="subtle" colorPalette="danger">
              <Trash2 className="size-4" />
              Delete
            </Button>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Loading"
        description="loading で built-in Spinner を表示。loadingText で文言差し替え。"
      >
        <Example
          code={`<Button loading>Save</Button>
<Button loading loadingText="Saving…" colorPalette="success">
  Save
</Button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button loading>Save</Button>
            <Button loading loadingText="Saving…" colorPalette="success">
              Save
            </Button>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="As child"
        description="asChild で Button の見た目を別要素 (a / Link 等) に移譲する。"
      >
        <Example
          code={`<Button asChild>
  <a href="/docs">Go to docs</a>
</Button>`}
        >
          <Button asChild>
            <a href="/docs">Go to docs</a>
          </Button>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
