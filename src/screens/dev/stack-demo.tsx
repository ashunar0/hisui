import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Stack } from "@/components/ui/stack";

const GAPS = ["none", "xs", "sm", "md", "lg", "xl"] as const;

export function StackDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Directions />
      <Gaps />
      <AlignAndJustify />
      <WrapAndSeparator />
    </div>
  );
}

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 min-w-12 items-center justify-center rounded-md border border-border bg-surface-sunken px-3 text-sm">
      {children}
    </div>
  );
}

function Directions() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        4 directions (row / column / row-reverse / column-reverse)。 default は
        column / gap=md。
      </p>
      <div className="grid grid-cols-2 gap-4">
        {(["column", "row", "column-reverse", "row-reverse"] as const).map(
          (d) => (
            <div
              key={d}
              className="flex flex-col gap-2 rounded-lg border border-border p-3"
            >
              <span className="text-xs text-fg-muted">{d}</span>
              <Stack direction={d} gap="sm">
                <Box>1</Box>
                <Box>2</Box>
                <Box>3</Box>
              </Stack>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

function Gaps() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        6 gap tokens (none / xs / sm / md / lg / xl)。 Tailwind の gap-0/1/2/4/6/8
        に static map。
      </p>
      <div className="flex flex-col gap-3">
        {GAPS.map((g) => (
          <div key={g} className="flex items-center gap-4">
            <span className="w-12 shrink-0 text-xs text-fg-muted">{g}</span>
            <Stack direction="row" gap={g}>
              <Box>A</Box>
              <Box>B</Box>
              <Box>C</Box>
            </Stack>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlignAndJustify() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        align (cross axis) + justify (main axis) の組合せ。 row direction で
        align=center + justify=between が toolbar 定番パターン。
      </p>
      <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
        <Stack
          direction="row"
          gap="sm"
          align="center"
          justify="between"
          className="w-full"
        >
          <div className="flex items-center gap-2">
            <Box>Logo</Box>
            <Badge colorPalette="info" size="sm">
              Beta
            </Badge>
          </div>
          <Stack direction="row" gap="xs">
            <Button size="sm" variant="ghost">
              Docs
            </Button>
            <Button size="sm">Get started</Button>
          </Stack>
        </Stack>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1 rounded-lg border border-border p-3">
          <span className="text-xs text-fg-muted">
            align=end / justify=center
          </span>
          <Stack
            direction="row"
            gap="sm"
            align="end"
            justify="center"
            className="h-24 rounded-md bg-surface-sunken p-2"
          >
            <div className="h-8 w-6 rounded bg-info-solid" />
            <div className="h-16 w-6 rounded bg-info-solid" />
            <div className="h-10 w-6 rounded bg-info-solid" />
            <div className="h-20 w-6 rounded bg-info-solid" />
          </Stack>
        </div>
        <div className="flex flex-col gap-1 rounded-lg border border-border p-3">
          <span className="text-xs text-fg-muted">
            align=baseline + 異 size text
          </span>
          <Stack direction="row" gap="sm" align="baseline">
            <span className="font-semibold text-3xl">$42</span>
            <span className="text-fg-muted text-sm">/ month</span>
            <Badge size="xs">USD</Badge>
          </Stack>
        </div>
      </div>
    </div>
  );
}

function WrapAndSeparator() {
  const tags = [
    "Design",
    "Engineering",
    "Marketing",
    "Sales",
    "Support",
    "Operations",
    "Finance",
    "Legal",
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        wrap=true で折り返し。 separator は API として持たないが、 children
        の間に Separator primitive を挟めば同等。
      </p>
      <Stack direction="row" gap="xs" wrap className="max-w-md">
        {tags.map((t) => (
          <Badge key={t} variant="outline">
            {t}
          </Badge>
        ))}
      </Stack>
    </div>
  );
}
