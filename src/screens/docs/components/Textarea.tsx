import { Textarea } from "@/components/ui/textarea";
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
      "Input と同じ 3 種。 outline = border、 subtle = 塗り、 flushed = 下線のみ。",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg"',
    default: '"md"',
    description: "min-height と font-size を連動。 ユーザーは縦に resize 可能。",
  },
  {
    name: "invalid",
    type: "boolean",
    default: "false",
    description: "aria-invalid + danger token に切替。",
  },
];

export function TextareaDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Textarea">
        multi-line の text input。 Input と prop API を揃え、 min-height + 縦
        resize 対応。 default は outline / md。
      </DocHeader>

      <DocSection title="Usage" description="default は outline / md。">
        <Example code={`<Textarea placeholder="Write a message…" />`}>
          <div className="max-w-md">
            <Textarea placeholder="Write a message…" />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Variants"
        description="Input と同じ 3 種。 form の周囲レイアウトに合わせて選ぶ。"
      >
        <Example
          code={VARIANTS.map(
            (v) => `<Textarea variant="${v}" placeholder="${v}" />`,
          ).join("\n")}
        >
          <div className="flex max-w-md flex-col gap-3">
            {VARIANTS.map((v) => (
              <Textarea key={v} variant={v} placeholder={v} />
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="xs / sm / md / lg の 4 段階。 min-height が変わる。"
      >
        <Example
          code={SIZES.map(
            (s) => `<Textarea size="${s}" placeholder="${s}" />`,
          ).join("\n")}
        >
          <div className="flex max-w-md flex-col gap-3">
            {SIZES.map((s) => (
              <Textarea key={s} size={s} placeholder={s} />
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Invalid"
        description="invalid で aria-invalid + 各 variant の error スタイル。"
      >
        <Example
          code={`<Textarea invalid placeholder="outline invalid" />
<Textarea variant="subtle" invalid placeholder="subtle invalid" />
<Textarea variant="flushed" invalid placeholder="flushed invalid" />`}
        >
          <div className="flex max-w-md flex-col gap-3">
            <Textarea invalid placeholder="outline invalid" />
            <Textarea variant="subtle" invalid placeholder="subtle invalid" />
            <Textarea variant="flushed" invalid placeholder="flushed invalid" />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Disabled"
        description="disabled で opacity 50% + cursor-not-allowed。"
      >
        <Example code={`<Textarea disabled value="locked text" />`}>
          <div className="max-w-md">
            <Textarea disabled value="locked text" readOnly />
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Fixed rows"
        description="rows 属性で初期高さを直接指定。 resize-y で範囲広げ可能。"
      >
        <Example
          code={`<Textarea rows={2} placeholder="Short note" />
<Textarea rows={6} placeholder="Long description" />`}
        >
          <div className="flex max-w-md flex-col gap-3">
            <Textarea rows={2} placeholder="Short note" />
            <Textarea rows={6} placeholder="Long description" />
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
