import { Splitter } from "@/components/ui/splitter";

export default function SplitterCollapsibleDemo() {
  return (
    <div className="h-48 w-full">
      <Splitter.Root
        panels={[
          { id: "list" },
          { id: "detail", minSize: 20, collapsible: true },
        ]}
        defaultSize={[60, 40]}
      >
        <Splitter.Panel id="list">
          <div className="flex h-full flex-col gap-1 p-3 text-fg-soft text-sm">
            <div className="font-medium text-fg">List</div>
            <div className="text-fg-muted text-xs">
              detail panel を端まで drag すると畳まる。
            </div>
          </div>
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="list:detail">
          <Splitter.ResizeTriggerIndicator />
        </Splitter.ResizeTrigger>
        <Splitter.Panel id="detail">
          <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-fg-soft text-sm">
            <div className="font-medium text-fg">Detail</div>
            <div className="text-fg-muted text-xs">collapsible</div>
          </div>
        </Splitter.Panel>
      </Splitter.Root>
    </div>
  );
}
