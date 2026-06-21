import { SegmentGroup } from "@/components/ui/segment-group";

const LABELS = ["General", "Billing", "Members", "Security"] as const;

export default function SegmentGroupVerticalDemo() {
  return (
    <SegmentGroup.Root orientation="vertical" defaultValue="general">
      <SegmentGroup.Indicator />
      {LABELS.map((label) => (
        <SegmentGroup.Item key={label} value={label.toLowerCase()}>
          <SegmentGroup.ItemText>{label}</SegmentGroup.ItemText>
        </SegmentGroup.Item>
      ))}
    </SegmentGroup.Root>
  );
}
