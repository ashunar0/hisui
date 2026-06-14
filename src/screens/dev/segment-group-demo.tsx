import { SegmentGroup } from "@/components/ui/segment-group";

export function SegmentGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">period selector</span>
        <SegmentGroup.Root defaultValue="month">
          <SegmentGroup.Indicator />
          <SegmentGroup.Item value="day">
            <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
          <SegmentGroup.Item value="week">
            <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
          <SegmentGroup.Item value="month">
            <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
          <SegmentGroup.Item value="year">
            <SegmentGroup.ItemText>Year</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        </SegmentGroup.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">プラン (disabled item あり)</span>
        <SegmentGroup.Root defaultValue="pro">
          <SegmentGroup.Indicator />
          <SegmentGroup.Item value="free">
            <SegmentGroup.ItemText>Free</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
          <SegmentGroup.Item value="pro">
            <SegmentGroup.ItemText>Pro</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
          <SegmentGroup.Item value="enterprise" disabled>
            <SegmentGroup.ItemText>Enterprise</SegmentGroup.ItemText>
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        </SegmentGroup.Root>
      </div>
    </div>
  );
}
