import { Collapsible } from "@/components/ui/collapsible";

export default function CollapsibleDisabledDemo() {
  return (
    <Collapsible.Root disabled>
      <Collapsible.Trigger>
        <Collapsible.Indicator />
        Disabled section
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className="mt-3 rounded-md border border-border bg-surface-muted p-4 text-fg-soft text-sm">
          開けない。
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
