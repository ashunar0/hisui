import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const VARIANTS = ["elevated", "outline", "subtle"] as const;
const SIZES = ["sm", "md", "lg"] as const;

const PARTS = [
  {
    name: "Card.Root",
    description:
      "外枠。 variant / size を受け、 子に Context で size を流す。 asChild 対応。",
  },
  {
    name: "Card.Header",
    description: "Title / Description を縦積みで置く。 size 連動 padding。",
  },
  {
    name: "Card.Title",
    description: "h3 + text-lg + font-semibold + text-fg-soft。",
  },
  {
    name: "Card.Description",
    description: "p + text-sm + text-fg-muted。",
  },
  {
    name: "Card.Body",
    description: "Header と Footer の間の本文領域。 size 連動 padding。",
  },
  {
    name: "Card.Footer",
    description:
      "下端の action 行。 flex + items-center + justify-end + gap-2 が default (primary action を右寄せの慣習)。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "variant",
    type: '"elevated" | "outline" | "subtle"',
    default: '"outline"',
    description:
      "elevated は多層 shadow、 outline は border のみ、 subtle は muted 塗りつぶし。",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "padding をスケール。 Header / Body / Footer に Context で流す。",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "子要素にスタイルを移譲 (Link を Card にしたい時)。",
  },
];

export function CardDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Card">
        compound primitive。 Root に variant / size を渡し、 中身は Header /
        Title / Description / Body / Footer を必要分だけ組み合わせる。 size は
        Context で全 part に流れる。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="どの part も任意。 最小は Root だけでも成立する。"
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
        description="default は outline / md。 Header + Body + Footer の典型 layout。"
      >
        <Example
          code={`<Card.Root>
  <Card.Header>
    <Card.Title>Workspace</Card.Title>
    <Card.Description>Manage members and permissions.</Card.Description>
  </Card.Header>
  <Card.Body>
    <p className="text-sm">Body content goes here.</p>
  </Card.Body>
  <Card.Footer>
    <Button>Save</Button>
  </Card.Footer>
</Card.Root>`}
        >
          <div className="max-w-md">
            <Card.Root>
              <Card.Header>
                <Card.Title>Workspace</Card.Title>
                <Card.Description>
                  Manage members and permissions.
                </Card.Description>
              </Card.Header>
              <Card.Body>
                <p className="text-fg-soft text-sm">Body content goes here.</p>
              </Card.Body>
              <Card.Footer>
                <Button>Save</Button>
              </Card.Footer>
            </Card.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Variants"
        description="3 種。 elevated = 多層 shadow で浮き、 outline = border のみ、 subtle = 背景塗り。"
      >
        <Example
          code={VARIANTS.map(
            (v) =>
              `<Card.Root variant="${v}">
  <Card.Header>...</Card.Header>
  <Card.Body>...</Card.Body>
</Card.Root>`,
          ).join("\n")}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {VARIANTS.map((v) => (
              <Card.Root key={v} variant={v}>
                <Card.Header>
                  <Card.Title>{v}</Card.Title>
                  <Card.Description>variant={v}</Card.Description>
                </Card.Header>
                <Card.Body>
                  <p className="text-fg-soft text-sm">Sample body text.</p>
                </Card.Body>
              </Card.Root>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="sm / md / lg の 3 段階。 Header / Body / Footer の padding が連動。"
      >
        <Example
          code={SIZES.map(
            (s) => `<Card.Root size="${s}">...</Card.Root>`,
          ).join("\n")}
        >
          <div className="flex flex-col gap-4">
            {SIZES.map((s) => (
              <Card.Root key={s} size={s}>
                <Card.Header>
                  <Card.Title>size={s}</Card.Title>
                  <Card.Description>
                    Header / Body / Footer の padding が連動する。
                  </Card.Description>
                </Card.Header>
                <Card.Body>
                  <p className="text-fg-soft text-sm">Body content</p>
                </Card.Body>
              </Card.Root>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Header only"
        description="Title + Description だけで成立。 Body / Footer は不要なら省く。"
      >
        <Example
          code={`<Card.Root>
  <Card.Header>
    <Card.Title>Quick note</Card.Title>
    <Card.Description>Short snippet, no body.</Card.Description>
  </Card.Header>
</Card.Root>`}
        >
          <div className="max-w-sm">
            <Card.Root>
              <Card.Header>
                <Card.Title>Quick note</Card.Title>
                <Card.Description>Short snippet, no body.</Card.Description>
              </Card.Header>
            </Card.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="As child (clickable card)"
        description="asChild で Root を Link や button に差し替えると hover / focus が乗る。"
      >
        <Example
          code={`<Card.Root asChild>
  <a href="#" className="block hover:border-fg-subtle">
    <Card.Header>
      <Card.Title>Clickable</Card.Title>
      <Card.Description>Whole card is a link.</Card.Description>
    </Card.Header>
  </a>
</Card.Root>`}
        >
          <div className="max-w-sm">
            <Card.Root asChild>
              <a
                href="#card-link"
                className="block hover:border-fg-subtle"
                onClick={(e) => e.preventDefault()}
              >
                <Card.Header>
                  <Card.Title>Clickable</Card.Title>
                  <Card.Description>Whole card is a link.</Card.Description>
                </Card.Header>
              </a>
            </Card.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
