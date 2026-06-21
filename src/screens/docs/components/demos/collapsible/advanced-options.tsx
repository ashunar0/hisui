import { Collapsible } from "@/components/ui/collapsible";

export default function CollapsibleAdvancedOptionsDemo() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>
        <Collapsible.Indicator />
        Show advanced options
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className="mt-3 flex flex-col gap-3 rounded-md border border-border bg-surface-muted p-4 text-fg-soft text-sm">
          <p>環境変数や CORS 等、普段触らない設定をここに集める。</p>
          <p>height は --height CSS 変数経由で animation。</p>
          <p>data-[state=open] と組み合わせて accordion-down 等を当てる。</p>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
