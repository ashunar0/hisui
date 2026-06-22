"use client";

import { Table } from "@/components/ui/table";
import { PLANS } from "./data";

const SIZES = ["sm", "md", "lg"] as const;

export default function TableSizesDemo() {
  return (
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
  );
}
