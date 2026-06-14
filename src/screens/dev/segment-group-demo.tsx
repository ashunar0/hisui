import { Calendar, Grid2x2, List } from "lucide-react";
import { SegmentGroup } from "@/components/ui/segment-group";

export function SegmentGroupDemo() {
  return (
    <div className="flex flex-col gap-8">
      <PeriodSelector />
      <ViewType />
      <VerticalWithLabel />
    </div>
  );
}

function PeriodSelector() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        period selector (基本 horizontal、 Indicator が選択 item に sliding)
      </p>
      <SegmentGroup.Root defaultValue="month">
        <SegmentGroup.Indicator />
        {[
          { value: "day", label: "Day" },
          { value: "week", label: "Week" },
          { value: "month", label: "Month" },
          { value: "year", label: "Year" },
        ].map((p) => (
          <SegmentGroup.Item key={p.value} value={p.value}>
            <SegmentGroup.ItemText>{p.label}</SegmentGroup.ItemText>
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    </div>
  );
}

function ViewType() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        view type with icons (Grid / List / Calendar、 icon + text を Item に並べる)
      </p>
      <SegmentGroup.Root defaultValue="grid">
        <SegmentGroup.Indicator />
        {[
          { value: "grid", icon: Grid2x2, label: "Grid" },
          { value: "list", icon: List, label: "List" },
          { value: "calendar", icon: Calendar, label: "Calendar" },
        ].map((v) => (
          <SegmentGroup.Item key={v.value} value={v.value}>
            <v.icon className="size-4" />
            <SegmentGroup.ItemText>{v.label}</SegmentGroup.ItemText>
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    </div>
  );
}

function VerticalWithLabel() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        vertical + Label (orientation=vertical で縦並び、 Label で section header、
        Enterprise を disabled)
      </p>
      <SegmentGroup.Root
        defaultValue="pro"
        orientation="vertical"
        className="w-40"
      >
        <SegmentGroup.Label className="px-2 py-1">Plan</SegmentGroup.Label>
        <SegmentGroup.Indicator />
        {[
          { value: "free", label: "Free" },
          { value: "pro", label: "Pro" },
          { value: "enterprise", label: "Enterprise", disabled: true },
        ].map((p) => (
          <SegmentGroup.Item
            key={p.value}
            value={p.value}
            disabled={p.disabled}
            className="justify-start"
          >
            <SegmentGroup.ItemText>{p.label}</SegmentGroup.ItemText>
          </SegmentGroup.Item>
        ))}
      </SegmentGroup.Root>
    </div>
  );
}
