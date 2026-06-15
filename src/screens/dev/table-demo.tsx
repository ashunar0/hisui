import { Badge } from "@/components/ui/badge";
import { Table, useTableSort } from "@/components/ui/table";

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

export function TableDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Variants />
      <Sizes />
      <SortableWithFooter />
      <Sticky />
    </div>
  );
}

function Variants() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        3 variants (line / outline / striped)。 default は line。 outline は
        全体を border で囲む、 striped は even row を bg-surface-sunken/50。
      </p>
      {(["line", "outline", "striped"] as const).map((v) => (
        <div key={v} className="flex flex-col gap-2">
          <span className="text-xs text-fg-muted">variant={v}</span>
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
                    <Badge colorPalette={STATUS_PALETTE[p.status]} size="sm">
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
  );
}

function Sizes() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        3 sizes (sm / md / lg)。 Head height と Cell padding が連動。
      </p>
      {(["sm", "md", "lg"] as const).map((s) => (
        <div key={s} className="flex flex-col gap-2">
          <span className="text-xs text-fg-muted">size={s}</span>
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
  );
}

function SortableWithFooter() {
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
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        SortableHead + useTableSort (ui-lab 独自、 Chakra に無い) + Footer
        (Chakra v3 互換) の合わせ技。 Header click でソート方向切替、 Footer に
        合計行。
      </p>
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
    </div>
  );
}

function Sticky() {
  const rows = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Row ${i + 1}`,
    value: ((i + 1) * 137) % 1000,
  }));
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        stickyHeader=true で thead が scroll 時に top:0 で固定。 親に max-h
        + overflow-y-auto が必要。
      </p>
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
            {rows.map((r) => (
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
    </div>
  );
}
