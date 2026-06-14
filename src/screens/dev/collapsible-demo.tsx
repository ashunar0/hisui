import { Collapsible } from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  return (
    <div className="flex flex-col gap-6">
      <Collapsible.Root>
        <Collapsible.Trigger>
          <Collapsible.Indicator />
          Show advanced options
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div className="mt-3 flex flex-col gap-3 rounded-md border border-border bg-surface-muted p-4 text-sm text-fg-soft">
            <p>環境変数や CORS 等、普段触らないやつをここに集めるパターン。</p>
            <p>height は --height CSS 変数経由でアニメーション。</p>
            <p>data-[state=open]:animate-accordion-down で展開。</p>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root defaultOpen>
        <Collapsible.Trigger>
          <Collapsible.Indicator />
          defaultOpen で初期展開
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div className="mt-3 rounded-md border border-border bg-surface-muted p-4 text-sm text-fg-soft">
            最初から開いた状態で mount。
          </div>
        </Collapsible.Content>
      </Collapsible.Root>

      <Collapsible.Root disabled>
        <Collapsible.Trigger>
          <Collapsible.Indicator />
          Disabled (clickable 不可)
        </Collapsible.Trigger>
        <Collapsible.Content>
          <div className="mt-3 rounded-md border border-border bg-surface-muted p-4 text-sm text-fg-soft">
            開けない。
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
}
