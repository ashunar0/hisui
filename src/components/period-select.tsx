import { Calendar, Check, ChevronDown } from "lucide-react";
import { Select, createListCollection } from "@/components/ui/select";

export type Period = "day" | "week" | "month" | "year";

const COLLECTION = createListCollection({
  items: [
    { label: "日", value: "day" },
    { label: "週", value: "week" },
    { label: "月", value: "month" },
    { label: "年", value: "year" },
  ],
});

export type PeriodSelectProps = {
  defaultValue?: Period;
  value?: Period;
  onValueChange?: (value: Period) => void;
};

export function PeriodSelect({
  defaultValue = "week",
  value,
  onValueChange,
}: PeriodSelectProps) {
  return (
    <Select.Root
      collection={COLLECTION}
      defaultValue={value === undefined ? [defaultValue] : undefined}
      value={value === undefined ? undefined : [value]}
      onValueChange={(d) => onValueChange?.(d.value[0] as Period)}
      positioning={{ placement: "bottom-end" }}
    >
      <Select.Trigger className="border-transparent bg-surface-sunken hover:bg-surface-sunken-hover">
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-fg-muted" />
          <Select.ValueText placeholder="期間" />
        </div>
        <Select.Indicator>
          <ChevronDown className="size-4" />
        </Select.Indicator>
      </Select.Trigger>
      <Select.Content>
        {COLLECTION.items.map((item) => (
          <Select.Item key={item.value} item={item}>
            <Select.ItemText>{item.label}</Select.ItemText>
            <Select.ItemIndicator>
              <Check className="size-4" />
            </Select.ItemIndicator>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
