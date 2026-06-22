"use client";

import { SegmentGroup } from "@/components/ui/segment-group";

export default function SegmentGroupUsageDemo() {
  return (
    <SegmentGroup.Root defaultValue="week">
      <SegmentGroup.Indicator />
      <SegmentGroup.Item value="day">
        <SegmentGroup.ItemText>Day</SegmentGroup.ItemText>
      </SegmentGroup.Item>
      <SegmentGroup.Item value="week">
        <SegmentGroup.ItemText>Week</SegmentGroup.ItemText>
      </SegmentGroup.Item>
      <SegmentGroup.Item value="month">
        <SegmentGroup.ItemText>Month</SegmentGroup.ItemText>
      </SegmentGroup.Item>
    </SegmentGroup.Root>
  );
}
