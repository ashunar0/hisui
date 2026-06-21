import { Splitter } from "@/components/ui/splitter";

export default function SplitterVerticalDemo() {
  return (
    <div className="h-72 w-full">
      <Splitter.Root
        orientation="vertical"
        panels={[
          { id: "editor", minSize: 30 },
          { id: "preview", minSize: 20 },
          { id: "console", minSize: 15 },
        ]}
        defaultSize={[50, 30, 20]}
      >
        <Splitter.Panel id="editor">
          <div className="flex h-full flex-col gap-1 p-3 text-fg-soft text-sm">
            <div className="font-medium text-fg">Editor</div>
          </div>
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="editor:preview">
          <Splitter.ResizeTriggerIndicator />
        </Splitter.ResizeTrigger>
        <Splitter.Panel id="preview">
          <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-fg-soft text-sm">
            <div className="font-medium text-fg">Preview</div>
          </div>
        </Splitter.Panel>
        <Splitter.ResizeTrigger id="preview:console">
          <Splitter.ResizeTriggerIndicator />
        </Splitter.ResizeTrigger>
        <Splitter.Panel id="console">
          <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-fg-soft text-sm">
            <div className="font-medium text-fg">Console</div>
            <div className="font-mono text-fg-muted text-xs">$ pnpm dev</div>
          </div>
        </Splitter.Panel>
      </Splitter.Root>
    </div>
  );
}
