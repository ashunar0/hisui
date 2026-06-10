import { Check, ChevronDown, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, createListCollection } from "@/components/ui/select";

const STATUS_FILTER = createListCollection({
  items: [
    { label: "すべて", value: "all" },
    { label: "完了", value: "完了" },
    { label: "進行中", value: "進行中" },
    { label: "保留", value: "保留" },
  ],
});

type Props = {
  search: string;
  onSearchChange: (value: string) => void;
  status: string;
  onStatusChange: (value: string) => void;
};

export function RecentDealsToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2 pb-4">
      <div className="relative max-w-xs flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-fg-muted" />
        <Input
          placeholder="顧客名 or 案件名で検索"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-8 pl-8"
        />
      </div>
      <Select.Root
        collection={STATUS_FILTER}
        value={[status]}
        onValueChange={(d) => onStatusChange(d.value[0])}
        positioning={{ placement: "bottom-start" }}
      >
        <Select.Trigger>
          <div className="flex items-center gap-2">
            <Filter className="size-4 text-fg-muted" />
            <Select.ValueText placeholder="ステータス" />
          </div>
          <Select.Indicator>
            <ChevronDown className="size-4" />
          </Select.Indicator>
        </Select.Trigger>
        <Select.Content>
          {STATUS_FILTER.items.map((item) => (
            <Select.Item key={item.value} item={item}>
              <Select.ItemText>{item.label}</Select.ItemText>
              <Select.ItemIndicator>
                <Check className="size-4" />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
