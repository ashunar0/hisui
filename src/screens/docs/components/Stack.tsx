import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const DIRECTIONS = ["row", "column", "row-reverse", "column-reverse"] as const;
const GAPS = ["none", "xs", "sm", "md", "lg", "xl"] as const;
const ALIGNS = ["start", "center", "end", "stretch", "baseline"] as const;
const JUSTIFIES = [
  "start",
  "center",
  "end",
  "between",
  "around",
  "evenly",
] as const;

const PROPS: PropRow[] = [
  {
    name: "direction",
    type: '"row" | "column" | "row-reverse" | "column-reverse"',
    default: '"column"',
    description: "flex の主軸。 default は縦積み。",
  },
  {
    name: "gap",
    type: '"none" | "xs" | "sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description:
      "間隔。 Tailwind gap-0/1/2/4/6/8 に static map。 詳細は Foundations/Spacing。",
  },
  {
    name: "align",
    type: '"start" | "center" | "end" | "stretch" | "baseline"',
    description: "items-* 相当。 cross axis の揃え。",
  },
  {
    name: "justify",
    type: '"start" | "center" | "end" | "between" | "around" | "evenly"',
    description: "justify-* 相当。 main axis の揃え。",
  },
  {
    name: "wrap",
    type: "boolean",
    default: "false",
    description: "true で flex-wrap。 親幅を超えたら折り返す。",
  },
];

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-surface-sunken text-fg-muted text-xs">
      {children}
    </div>
  );
}

export function StackDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Stack">
        flex container の薄いラッパー。 direction / gap / align / justify / wrap
        を semantic enum で受ける。 1 階層の flex を書くたびに class 並べるのを
        減らすのが目的。
      </DocHeader>

      <DocSection
        title="Usage"
        description="default は column / gap=md。 縦積みの最頻パターン。"
      >
        <Example
          code={`<Stack>
  <Box>1</Box>
  <Box>2</Box>
  <Box>3</Box>
</Stack>`}
        >
          <Stack>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
          </Stack>
        </Example>
      </DocSection>

      <DocSection
        title="Direction"
        description="4 種。 reverse は順序を保ったまま逆向きに並べる。"
      >
        <Example
          code={DIRECTIONS.map(
            (d) => `<Stack direction="${d}" gap="sm">...</Stack>`,
          ).join("\n")}
        >
          <div className="flex flex-col gap-4">
            {DIRECTIONS.map((d) => (
              <div key={d} className="flex flex-col gap-1">
                <span className="font-mono text-fg-muted text-[11px]">
                  {d}
                </span>
                <Stack direction={d} gap="sm">
                  <Box>1</Box>
                  <Box>2</Box>
                  <Box>3</Box>
                </Stack>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Gap"
        description="6 段階。 詳細は Foundations/Spacing の Stack gap section。"
      >
        <Example
          code={GAPS.map(
            (g) => `<Stack direction="row" gap="${g}">...</Stack>`,
          ).join("\n")}
        >
          <div className="flex flex-col gap-3">
            {GAPS.map((g) => (
              <div
                key={g}
                className="grid grid-cols-[4rem_1fr] items-center gap-3"
              >
                <span className="font-mono text-fg-muted text-[11px]">
                  {g}
                </span>
                <Stack direction="row" gap={g}>
                  <Box>1</Box>
                  <Box>2</Box>
                  <Box>3</Box>
                </Stack>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Align"
        description="cross axis の揃え (row なら縦、 column なら横)。"
      >
        <Example
          code={ALIGNS.map(
            (a) => `<Stack direction="row" align="${a}">...</Stack>`,
          ).join("\n")}
        >
          <div className="flex flex-col gap-3">
            {ALIGNS.map((a) => (
              <div
                key={a}
                className="grid grid-cols-[5rem_1fr] items-center gap-3"
              >
                <span className="font-mono text-fg-muted text-[11px]">{a}</span>
                <div className="h-16 rounded-sm bg-surface-muted px-2">
                  <Stack direction="row" align={a} gap="sm" className="h-full">
                    <Box>sm</Box>
                    <div className="flex h-14 w-10 items-center justify-center rounded-sm border border-border bg-surface-sunken text-fg-muted text-xs">
                      lg
                    </div>
                    <Box>sm</Box>
                  </Stack>
                </div>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Justify"
        description="main axis の揃え。 between / around / evenly は spacing が分配される。"
      >
        <Example
          code={JUSTIFIES.map(
            (j) => `<Stack direction="row" justify="${j}">...</Stack>`,
          ).join("\n")}
        >
          <div className="flex flex-col gap-3">
            {JUSTIFIES.map((j) => (
              <div
                key={j}
                className="grid grid-cols-[5rem_1fr] items-center gap-3"
              >
                <span className="font-mono text-fg-muted text-[11px]">{j}</span>
                <div className="rounded-sm bg-surface-muted p-1">
                  <Stack direction="row" justify={j} gap="sm">
                    <Box>1</Box>
                    <Box>2</Box>
                    <Box>3</Box>
                  </Stack>
                </div>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Wrap"
        description="親幅を超えたら折り返す。 tag や badge を横に並べる時に。"
      >
        <Example
          code={`<Stack direction="row" gap="sm" wrap>
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  ...
</Stack>`}
        >
          <div className="max-w-xs rounded-sm border border-border-muted p-2">
            <Stack direction="row" gap="sm" wrap>
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Ark UI</Badge>
              <Badge>Vite</Badge>
              <Badge>Hono</Badge>
              <Badge>Drizzle</Badge>
              <Badge>Better-Auth</Badge>
            </Stack>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Common patterns"
        description="ui-lab で頻出する組み合わせ。"
      >
        <Example
          code={`<Stack direction="row" align="center" justify="between">
  <Heading>Title</Heading>
  <Button>Action</Button>
</Stack>`}
        >
          <div className="flex flex-col gap-6">
            <div className="rounded-md border border-border p-4">
              <Stack direction="row" align="center" justify="between">
                <span className="font-semibold text-fg">Title</span>
                <Button size="sm">Action</Button>
              </Stack>
            </div>
            <div className="rounded-md border border-border p-4">
              <Stack gap="xs">
                <span className="text-fg-muted text-xs">Label</span>
                <span className="text-fg">Value</span>
              </Stack>
            </div>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
