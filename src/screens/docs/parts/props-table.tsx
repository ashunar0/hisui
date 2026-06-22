"use client";

import { Table } from "@/components/ui/table";
import { InlineCode } from "./code";

export type PropRow = {
  name: string;
  type: string;
  default?: string;
  description: string;
};

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <Table.Root variant="line" size="sm">
      <Table.Header>
        <Table.Row>
          <Table.Head>Prop</Table.Head>
          <Table.Head>Type</Table.Head>
          <Table.Head>Default</Table.Head>
          <Table.Head>Description</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={row.name}>
            <Table.Cell className="whitespace-nowrap">
              <InlineCode className="text-fg">{row.name}</InlineCode>
            </Table.Cell>
            <Table.Cell>
              <InlineCode className="text-info-fg">{row.type}</InlineCode>
            </Table.Cell>
            <Table.Cell>
              {row.default ? (
                <InlineCode>{row.default}</InlineCode>
              ) : (
                <span className="text-fg-subtle">—</span>
              )}
            </Table.Cell>
            <Table.Cell className="text-fg-muted text-xs leading-relaxed">
              {row.description}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
