import { Splitter } from "@/components/ui/splitter";

export default function SplitterBasicDemo() {
  return (
    <div className="h-48 w-full">
      <Splitter.Root
        panels={[
          { id: "sidebar", minSize: 15, maxSize: 40 },
          { id: "main" },
        ]}
        defaultSize={[25, 75]}
      >
        <Splitter.Panel id="sidebar">
          <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-fg-soft text-sm">
            <div className="font-medium text-fg">Sidebar</div>
            <div className="text-fg-muted text-xs">min 15% / max 40%</div>
          </div>
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="sidebar:main">
          <Splitter.ResizeTriggerIndicator />
        </Splitter.ResizeTrigger>
        <Splitter.Panel id="main">
          <div className="flex h-full flex-col gap-1 p-3 text-fg-soft text-sm">
            <div className="font-medium text-fg">Main</div>
            <div className="text-fg-muted text-xs">
              trigger を掴んで左右に drag。
            </div>
          </div>
        </Splitter.Panel>
      </Splitter.Root>
    </div>
  );
}
