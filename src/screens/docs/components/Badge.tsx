import { Check, Sparkles, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const VARIANTS = ["solid", "subtle", "outline", "surface", "plain"] as const;
const PALETTES = ["neutral", "success", "danger", "warning", "info"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

const PROPS: PropRow[] = [
  {
    name: "variant",
    type: '"solid" | "subtle" | "outline" | "surface" | "plain"',
    default: '"subtle"',
    description:
      "見た目のスタイル。 Button と違い ghost が無く plain (文字のみ) になる。",
  },
  {
    name: "colorPalette",
    type: '"neutral" | "success" | "danger" | "warning" | "info"',
    default: '"neutral"',
    description: "意味を表す色。 semantic token に紐づき light/dark 両対応。",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg"',
    default: '"md"',
    description: "padding と font-size をまとめてスケール。",
  },
];

export function BadgeDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Badge">
        小さな label / chip。 status・count・tag を表す。 variant × colorPalette
        × size の 3 軸で Button と同じ設計だが、 inline-flex + rounded-md +
        font-medium の小箱。
      </DocHeader>

      <DocSection title="Usage" description="default は subtle / neutral / md。">
        <Example code={`<Badge>Draft</Badge>`}>
          <Badge>Draft</Badge>
        </Example>
      </DocSection>

      <DocSection
        title="Variants"
        description="5 種。 solid が最も強く、 plain が最も弱い (背景なし)。"
      >
        <Example
          code={VARIANTS.map(
            (v) => `<Badge variant="${v}">${v}</Badge>`,
          ).join("\n")}
        >
          <div className="flex flex-wrap items-center gap-3">
            {VARIANTS.map((v) => (
              <Badge key={v} variant={v}>
                {v}
              </Badge>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Color palettes"
        description="意味を表す 5 色。 例は subtle で比較。"
      >
        <Example
          code={PALETTES.map(
            (p) => `<Badge colorPalette="${p}">${p}</Badge>`,
          ).join("\n")}
        >
          <div className="flex flex-wrap items-center gap-3">
            {PALETTES.map((p) => (
              <Badge key={p} colorPalette={p}>
                {p}
              </Badge>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection title="Sizes" description="xs / sm / md / lg の 4 段階。">
        <Example
          code={SIZES.map((s) => `<Badge size="${s}">${s}</Badge>`).join("\n")}
        >
          <div className="flex flex-wrap items-center gap-3">
            {SIZES.map((s) => (
              <Badge key={s} size={s}>
                {s}
              </Badge>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="With icon"
        description="children に lucide-react を並べる。 size は size-3 が標準。"
      >
        <Example
          code={`<Badge colorPalette="success">
  <Check className="size-3" />
  Verified
</Badge>
<Badge colorPalette="danger" variant="solid">
  <X className="size-3" />
  Failed
</Badge>
<Badge colorPalette="info" variant="outline">
  <Sparkles className="size-3" />
  New
</Badge>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge colorPalette="success">
              <Check className="size-3" />
              Verified
            </Badge>
            <Badge colorPalette="danger" variant="solid">
              <X className="size-3" />
              Failed
            </Badge>
            <Badge colorPalette="info" variant="outline">
              <Sparkles className="size-3" />
              New
            </Badge>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Matrix"
        description="variant × colorPalette のマトリクスで雰囲気を比較。"
      >
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-muted">
                <th className="px-3 py-2 text-left text-fg-muted text-xs font-medium" />
                {PALETTES.map((p) => (
                  <th
                    key={p}
                    className="px-3 py-2 text-left text-fg-muted text-xs font-medium"
                  >
                    {p}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VARIANTS.map((v) => (
                <tr
                  key={v}
                  className="border-b border-border-muted last:border-b-0"
                >
                  <td className="px-3 py-2 font-mono text-fg-muted text-[11px]">
                    {v}
                  </td>
                  {PALETTES.map((p) => (
                    <td key={p} className="px-3 py-2">
                      <Badge variant={v} colorPalette={p}>
                        {p}
                      </Badge>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
