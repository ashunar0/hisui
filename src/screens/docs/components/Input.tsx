import { Input } from "@/components/ui/input";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const VARIANTS = ["outline", "subtle", "flushed"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

const PROPS: PropRow[] = [
  {
    name: "variant",
    type: '"outline" | "subtle" | "flushed"',
    default: '"outline"',
    description:
      "outline は border、 subtle は背景塗り、 flushed は下線のみ。 flushed は size 問わず px-3 で揃える。",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg"',
    default: '"md"',
    description: "高さ・font-size を連動。 h-7 / 8 / 10 / 12。",
  },
  {
    name: "invalid",
    type: "boolean",
    default: "false",
    description:
      "aria-invalid + border / text-color を danger token に切替。 form-level error にも対応。",
  },
];

export function InputDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Input">
        single-line の text input。 variant × size の 2 軸。 default は outline /
        md。 form-level の error は invalid prop で aria-invalid +
        danger-border に切り替わる。
      </DocHeader>

      <DocSection title="Usage" description="default は outline / md。">
        <Example code={`<Input placeholder="Your name" />`}>
          <div className="max-w-sm">
            <Input placeholder="Your name" />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Variants"
        description="outline = 標準 / subtle = 塗り (form 内に密度) / flushed = 下線のみ (inline 編集)。"
      >
        <Example
          code={VARIANTS.map(
            (v) => `<Input variant="${v}" placeholder="${v}" />`,
          ).join("\n")}
        >
          <div className="flex max-w-sm flex-col gap-3">
            {VARIANTS.map((v) => (
              <Input key={v} variant={v} placeholder={v} />
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="xs / sm / md / lg の 4 段階。 flushed のみ size 不問で px-3 固定。"
      >
        <Example
          code={SIZES.map(
            (s) => `<Input size="${s}" placeholder="${s}" />`,
          ).join("\n")}
        >
          <div className="flex max-w-sm flex-col gap-3">
            {SIZES.map((s) => (
              <Input key={s} size={s} placeholder={s} />
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Invalid"
        description="invalid で aria-invalid + 各 variant の error スタイルに切替。"
      >
        <Example
          code={`<Input invalid placeholder="outline invalid" />
<Input variant="subtle" invalid placeholder="subtle invalid" />
<Input variant="flushed" invalid placeholder="flushed invalid" />`}
        >
          <div className="flex max-w-sm flex-col gap-3">
            <Input invalid placeholder="outline invalid" />
            <Input variant="subtle" invalid placeholder="subtle invalid" />
            <Input variant="flushed" invalid placeholder="flushed invalid" />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Disabled"
        description="disabled で opacity 50% + cursor-not-allowed。"
      >
        <Example code={`<Input disabled value="locked" />`}>
          <div className="max-w-sm">
            <Input disabled value="locked" readOnly />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Type variations"
        description="HTMLInput の type 属性をそのまま渡す。"
      >
        <Example
          code={`<Input type="email" placeholder="you@example.com" />
<Input type="password" placeholder="••••••••" />
<Input type="number" placeholder="42" />
<Input type="date" />`}
        >
          <div className="flex max-w-sm flex-col gap-3">
            <Input type="email" placeholder="you@example.com" />
            <Input type="password" placeholder="••••••••" />
            <Input type="number" placeholder="42" />
            <Input type="date" />
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
