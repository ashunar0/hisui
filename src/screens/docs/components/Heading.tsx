import { Heading } from "@/components/ui/heading";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const SIZES = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
] as const;
const TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

const PROPS: PropRow[] = [
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"',
    default: '"md"',
    description:
      "見た目のサイズ。 3xl 以上は tracking-tight が自動で付く。 詳細は Foundations/Typography。",
  },
  {
    name: "as",
    type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
    default: '"h2"',
    description:
      "出力する HTML tag。 見た目 (size) と semantics (as) を独立に指定する。",
  },
];

export function HeadingDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Heading">
        見出し。 font-weight は semibold 固定、 size と as を独立に持つのが特徴。
        page title は <code>as=&quot;h1&quot;</code> + <code>size=&quot;2xl&quot;</code>{" "}
        のように見た目と semantics を分けて指定する。
      </DocHeader>

      <DocSection
        title="Usage"
        description="default は as=h2 / size=md。 何も指定しなければ section 見出し相当。"
      >
        <Example code={`<Heading>Page section</Heading>`}>
          <Heading>Page section</Heading>
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="8 段階。 3xl 以上は自動で tracking-tight が付く。"
      >
        <Example
          code={SIZES.map(
            (s) => `<Heading size="${s}">${s} heading</Heading>`,
          ).join("\n")}
        >
          <div className="flex flex-col gap-3">
            {SIZES.map((s) => (
              <Heading key={s} size={s}>
                {s} heading
              </Heading>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="As (semantic tag)"
        description="size と独立に HTML tag を選ぶ。 a11y / SEO の文書構造はここで決める。"
      >
        <Example
          code={TAGS.map((t) => `<Heading as="${t}">${t} tag</Heading>`).join(
            "\n",
          )}
        >
          <div className="flex flex-col gap-2">
            {TAGS.map((t) => (
              <Heading key={t} as={t}>
                {t} tag
              </Heading>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Page title pattern"
        description="page の H1 は size=2xl + as=h1。 hero では 3xl 以上を使う。"
      >
        <Example
          code={`<Heading as="h1" size="2xl">Account settings</Heading>
<Heading as="h1" size="3xl">Welcome back</Heading>`}
        >
          <div className="flex flex-col gap-4">
            <Heading as="h1" size="2xl">
              Account settings
            </Heading>
            <Heading as="h1" size="3xl">
              Welcome back
            </Heading>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Section label pattern"
        description="docs の section 見出しは as=h2 + size=sm + text-fg-soft で控えめに。"
      >
        <Example
          code={`<Heading as="h2" size="sm" className="text-fg-soft">
  Foundation
</Heading>`}
        >
          <Heading as="h2" size="sm" className="text-fg-soft">
            Foundation
          </Heading>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
