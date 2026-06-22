"use client";

import { Calendar, List, Map } from "lucide-react";
import { SegmentGroup } from "@/components/ui/segment-group";

export default function SegmentGroupIconTextDemo() {
  return (
    <SegmentGroup.Root defaultValue="list">
      <SegmentGroup.Indicator />
      <SegmentGroup.Item value="list">
        <List className="size-4" />
        <SegmentGroup.ItemText>List</SegmentGroup.ItemText>
      </SegmentGroup.Item>
      <SegmentGroup.Item value="calendar">
        <Calendar className="size-4" />
        <SegmentGroup.ItemText>Calendar</SegmentGroup.ItemText>
      </SegmentGroup.Item>
      <SegmentGroup.Item value="map">
        <Map className="size-4" />
        <SegmentGroup.ItemText>Map</SegmentGroup.ItemText>
      </SegmentGroup.Item>
    </SegmentGroup.Root>
  );
}
