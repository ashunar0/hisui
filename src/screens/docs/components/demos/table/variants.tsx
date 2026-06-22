"use client";

import { Badge } from "@/components/ui/badge";
import { Table } from "@/components/ui/table";
import { PLANS, STATUS_PALETTE } from "./data";

const VARIANTS = ["line", "outline", "striped"] as const;

export default function TableVariantsDemo() {
  return (
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
