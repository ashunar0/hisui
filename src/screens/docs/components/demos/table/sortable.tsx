import { Badge } from "@/components/ui/badge";
import { Table, useTableSort } from "@/components/ui/table";
import { PLANS, STATUS_PALETTE } from "./data";

export default function TableSortableDemo() {
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
