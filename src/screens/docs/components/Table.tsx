import { Badge } from "@/components/ui/badge";
import { Table, useTableSort } from "@/components/ui/table";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

type Plan = {
  id: string;
  name: string;
  seats: number;
  mrr: number;
  status: "active" | "trial" | "churned";
};

const PLANS: Plan[] = [
  { id: "1", name: "Acme Inc", seats: 24, mrr: 1200, status: "active" },
  { id: "2", name: "Globex", seats: 8, mrr: 480, status: "trial" },
  { id: "3", name: "Initech", seats: 56, mrr: 3360, status: "active" },
  { id: "4", name: "Hooli", seats: 3, mrr: 180, status: "churned" },
  { id: "5", name: "Pied Piper", seats: 12, mrr: 720, status: "active" },
];

const STATUS_PALETTE: Record<Plan["status"], "success" | "info" | "danger"> = {
  active: "success",
  trial: "info",
  churned: "danger",
};

const VARIANTS = ["line", "outline", "striped"] as const;
const SIZES = ["sm", "md", "lg"] as const;

const PARTS = [
  {
    name: "Table.Root",
    description:
      "外枠。 variant / size / stickyHeader / interactive を Context で全 part に流す。 内部で w-full overflow-x-auto の div + table。",
  },
  {
    name: "Table.Header / Body / Footer",
    description:
      "thead / tbody / tfoot の薄 wrapper。 variant で border / divide / striped を切替。 Footer は bg-surface-sunken + font-medium で合計行向け。",
  },
  {
    name: "Table.Row",
    description:
      "tr。 interactive (default true) で hover:bg-hover。 striped variant では even row が tinted。",
  },
  {
    name: "Table.Head / Cell",
    description:
      "th / td。 size に応じて padding / height を Context から受ける。",
  },
  {
    name: "Table.SortableHead",
    description:
      "ソート可能な th。 active / direction / onToggle を渡すと chevron icon を切替表示。 useTableSort と組み合わせる。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "variant",
    type: '"line" | "outline" | "striped"',
    default: '"line"',
    description:
      "line = 行間 border のみ、 outline = 全体を border で囲む、 striped = even row 塗り。",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Head height と Cell padding を Context で全 part にスケール。",
  },
  {
    name: "stickyHeader",
    type: "boolean",
    default: "false",
    description:
      "thead に sticky top-0 を当てる。 親に max-h + overflow-y-auto 必須。",
  },
  {
    name: "interactive",
    type: "boolean",
    default: "true",
    description: "false で行 hover を切る。 read-only な data 表示に。",
  },
];

export function TableDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Table">
        plain HTML table 上に variant / size / interactive / stickyHeader を
        Context で配る compound。 ソート用に useTableSort hook + SortableHead
        も同梱。 Chakra v3 と part 名 互換 (Root / Header / Body / Footer / Row /
        Head / Cell)。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Header + Body + Footer の 3 段構造。 Row / Head / Cell を中に並べる。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[14rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Variants"
        description="line (default) / outline / striped の 3 種。 layout は同じで枠と背景だけ切替。"
      >
        <Example
          code={VARIANTS.map((v) => `<Table.Root variant="${v}">...</Table.Root>`).join("\n")}
        >
          <div className="flex flex-col gap-6">
            {VARIANTS.map((v) => (
              <div key={v} className="flex flex-col gap-2">
                <span className="text-fg-muted text-xs">variant={v}</span>
                <Table.Root variant={v} size="sm">
                  <Table.Header>
                    <Table.Row>
                      <Table.Head>Name</Table.Head>
                      <Table.Head>Seats</Table.Head>
                      <Table.Head>Status</Table.Head>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {PLANS.slice(0, 3).map((p) => (
                      <Table.Row key={p.id}>
                        <Table.Cell>{p.name}</Table.Cell>
                        <Table.Cell>{p.seats}</Table.Cell>
                        <Table.Cell>
                          <Badge
                            colorPalette={STATUS_PALETTE[p.status]}
                            size="sm"
                          >
                            {p.status}
                          </Badge>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="sm / md / lg の 3 段階。 Head height と Cell padding が連動。"
      >
        <Example
          code={SIZES.map((s) => `<Table.Root size="${s}">...</Table.Root>`).join("\n")}
        >
          <div className="flex flex-col gap-4">
            {SIZES.map((s) => (
              <div key={s} className="flex flex-col gap-2">
                <span className="text-fg-muted text-xs">size={s}</span>
                <Table.Root variant="outline" size={s}>
                  <Table.Header>
                    <Table.Row>
                      <Table.Head>Name</Table.Head>
                      <Table.Head>Seats</Table.Head>
                      <Table.Head className="text-right">MRR</Table.Head>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {PLANS.slice(0, 2).map((p) => (
                      <Table.Row key={p.id}>
                        <Table.Cell>{p.name}</Table.Cell>
                        <Table.Cell>{p.seats}</Table.Cell>
                        <Table.Cell className="text-right tabular-nums">
                          ${p.mrr.toLocaleString()}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </div>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Sortable with footer"
        description="SortableHead + useTableSort で header click ソート。 Footer は合計行に使うのが定番。"
      >
        <Example
          code={`const { sortKey, direction, toggle, sortedRows } = useTableSort(rows, {
  accessors: {
    name: (r) => r.name,
    seats: (r) => r.seats,
    mrr: (r) => r.mrr,
  },
  defaultKey: "mrr",
  defaultDirection: "desc",
});

<Table.Root variant="outline" size="sm">
  <Table.Header>
    <Table.Row>
      <Table.SortableHead
        active={sortKey === "name"}
        direction={direction}
        onToggle={() => toggle("name")}
      >Name</Table.SortableHead>
      ...
    </Table.Row>
  </Table.Header>
  <Table.Body>{sortedRows.map(...)}</Table.Body>
  <Table.Footer>
    <Table.Row>
      <Table.Cell>Total</Table.Cell>
      ...
    </Table.Row>
  </Table.Footer>
</Table.Root>`}
        >
          <SortableTable />
        </Example>
      </DocSection>

      <DocSection
        title="Sticky header"
        description="stickyHeader を true にすると thead が scroll 時に固定。 親に max-h + overflow-y-auto が必要。"
      >
        <Example
          code={`<div className="max-h-48 overflow-y-auto rounded-lg border">
  <Table.Root variant="line" size="sm" stickyHeader>
    <Table.Header>...</Table.Header>
    <Table.Body>...</Table.Body>
  </Table.Root>
</div>`}
        >
          <div className="max-h-48 overflow-y-auto rounded-lg border border-border">
            <Table.Root variant="line" size="sm" stickyHeader>
              <Table.Header>
                <Table.Row>
                  <Table.Head>#</Table.Head>
                  <Table.Head>Name</Table.Head>
                  <Table.Head className="text-right">Value</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Array.from({ length: 30 }, (_, i) => ({
                  id: i + 1,
                  name: `Row ${i + 1}`,
                  value: ((i + 1) * 137) % 1000,
                })).map((r) => (
                  <Table.Row key={r.id}>
                    <Table.Cell className="tabular-nums">{r.id}</Table.Cell>
                    <Table.Cell>{r.name}</Table.Cell>
                    <Table.Cell className="text-right tabular-nums">
                      {r.value}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}

function SortableTable() {
  const { sortKey, direction, toggle, sortedRows } = useTableSort(PLANS, {
    accessors: {
      name: (r) => r.name,
      seats: (r) => r.seats,
      mrr: (r) => r.mrr,
    },
    defaultKey: "mrr",
    defaultDirection: "desc",
  });
  const totalSeats = PLANS.reduce((acc, p) => acc + p.seats, 0);
  const totalMrr = PLANS.reduce((acc, p) => acc + p.mrr, 0);
  return (
    <Table.Root variant="outline" size="sm">
      <Table.Header>
        <Table.Row>
          <Table.SortableHead
            active={sortKey === "name"}
            direction={direction}
            onToggle={() => toggle("name")}
          >
            Name
          </Table.SortableHead>
          <Table.SortableHead
            active={sortKey === "seats"}
            direction={direction}
            onToggle={() => toggle("seats")}
          >
            Seats
          </Table.SortableHead>
          <Table.Head>Status</Table.Head>
          <Table.SortableHead
            active={sortKey === "mrr"}
            direction={direction}
            onToggle={() => toggle("mrr")}
            className="text-right"
          >
            MRR
          </Table.SortableHead>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedRows.map((p) => (
          <Table.Row key={p.id}>
            <Table.Cell>{p.name}</Table.Cell>
            <Table.Cell className="tabular-nums">{p.seats}</Table.Cell>
            <Table.Cell>
              <Badge colorPalette={STATUS_PALETTE[p.status]} size="sm">
                {p.status}
              </Badge>
            </Table.Cell>
            <Table.Cell className="text-right tabular-nums">
              ${p.mrr.toLocaleString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell>Total</Table.Cell>
          <Table.Cell className="tabular-nums">{totalSeats}</Table.Cell>
          <Table.Cell />
          <Table.Cell className="text-right tabular-nums">
            ${totalMrr.toLocaleString()}
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table.Root>
  );
}
