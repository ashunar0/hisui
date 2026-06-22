"use client";

import { Table } from "@/components/ui/table";

const ROWS = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Row ${i + 1}`,
  value: ((i + 1) * 137) % 1000,
}));

export default function TableStickyHeaderDemo() {
  return (
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
          {ROWS.map((r) => (
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
  );
}
