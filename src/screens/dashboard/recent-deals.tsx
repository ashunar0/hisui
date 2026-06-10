import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, useTableSort } from "@/components/ui/table";

type Status = "完了" | "進行中" | "保留";

type Deal = {
  id: string;
  customer: string;
  title: string;
  amount: string;
  status: Status;
  date: string;
};

const DEALS: Deal[] = [
  {
    id: "1",
    customer: "Acme Inc",
    title: "Enterprise 契約",
    amount: "¥1,200,000",
    status: "完了",
    date: "6/8",
  },
  {
    id: "2",
    customer: "Beta Co",
    title: "Pro プラン更新",
    amount: "¥480,000",
    status: "進行中",
    date: "6/9",
  },
  {
    id: "3",
    customer: "Delta Labs",
    title: "従量プラン拡張",
    amount: "¥215,000",
    status: "保留",
    date: "6/9",
  },
  {
    id: "4",
    customer: "Gamma Studio",
    title: "Pro プラン新規",
    amount: "¥98,000",
    status: "完了",
    date: "6/10",
  },
  {
    id: "5",
    customer: "Sigma Works",
    title: "Enterprise 商談",
    amount: "¥1,800,000",
    status: "進行中",
    date: "6/10",
  },
];

const STATUS_VARIANT: Record<Status, "success" | "info" | "warning"> = {
  完了: "success",
  進行中: "info",
  保留: "warning",
};

const parseAmount = (amount: string) => Number(amount.replace(/[^\d]/g, ""));

export function RecentDeals() {
  const { sortKey, direction, toggle, sortedRows } = useTableSort(DEALS, {
    accessors: {
      customer: (d) => d.customer,
      amount: (d) => parseAmount(d.amount),
      status: (d) => d.status,
      date: (d) => d.date,
    },
    defaultKey: "date",
    defaultDirection: "desc",
  });

  return (
    <Card.Root>
      <div className="flex flex-col px-5 py-4">
        <div className="flex items-center gap-2 pb-4">
          <h3 className="font-semibold text-fg text-md">最近の案件</h3>
          <p className="text-fg-muted text-xs">直近の取引</p>
        </div>
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.SortableHead
                active={sortKey === "customer"}
                direction={direction}
                onToggle={() => toggle("customer")}
              >
                顧客
              </Table.SortableHead>
              <Table.Head>案件</Table.Head>
              <Table.SortableHead
                active={sortKey === "amount"}
                direction={direction}
                onToggle={() => toggle("amount")}
              >
                金額
              </Table.SortableHead>
              <Table.SortableHead
                active={sortKey === "status"}
                direction={direction}
                onToggle={() => toggle("status")}
              >
                ステータス
              </Table.SortableHead>
              <Table.SortableHead
                active={sortKey === "date"}
                direction={direction}
                onToggle={() => toggle("date")}
              >
                日付
              </Table.SortableHead>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sortedRows.map((deal) => (
              <Table.Row key={deal.id}>
                <Table.Cell className="font-medium">{deal.customer}</Table.Cell>
                <Table.Cell className="text-fg-soft">{deal.title}</Table.Cell>
                <Table.Cell className="text-right tabular-nums">
                  {deal.amount}
                </Table.Cell>
                <Table.Cell>
                  <Badge variant={STATUS_VARIANT[deal.status]}>
                    {deal.status}
                  </Badge>
                </Table.Cell>
                <Table.Cell className="text-fg-muted">{deal.date}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </Card.Root>
  );
}
