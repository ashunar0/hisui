"use client";

import { SegmentGroup } from "@/components/ui/segment-group";

export default function SegmentGroupDisabledDemo() {
  return (
    <SegmentGroup.Root defaultValue="free">
      <SegmentGroup.Indicator />
      <SegmentGroup.Item value="free">
        <SegmentGroup.ItemText>Free</SegmentGroup.ItemText>
      </SegmentGroup.Item>
      <SegmentGroup.Item value="pro" disabled>
        <SegmentGroup.ItemText>Pro (locked)</SegmentGroup.ItemText>
      </SegmentGroup.Item>
      <SegmentGroup.Item value="enterprise">
        <SegmentGroup.ItemText>Enterprise</SegmentGroup.ItemText>
      </SegmentGroup.Item>
    </SegmentGroup.Root>
  );
}
