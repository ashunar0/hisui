import { Splitter } from "@/components/ui/splitter";

export function SplitterDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          horizontal sidebar + main (sidebar min 15% / max 40%)
        </span>
        <div className="h-48">
          <Splitter.Root
            panels={[
              { id: "sidebar", minSize: 15, maxSize: 40 },
              { id: "main" },
            ]}
            defaultSize={[25, 75]}
          >
            <Splitter.Panel id="sidebar">
              <div className="flex h-full flex-col gap-1 bg-surface-muted p-3 text-sm text-fg-soft">
                <div className="font-medium text-fg">Sidebar</div>
                <div className="text-xs text-fg-muted">min 15% / max 40%</div>
              </div>
            </Splitter.Panel>
            <Splitter.ResizeTrigger id="sidebar:main">
              <Splitter.ResizeTriggerIndicator />
            </Splitter.ResizeTrigger>
            <Splitter.Panel id="main">
              <div className="flex h-full flex-col gap-1 p-3 text-sm text-fg-soft">
                <div className="font-medium text-fg">Main</div>
                <div className="text-xs text-fg-muted">
                  trigger を掴んで左右にドラッグするのだ。
                </div>
              </div>
            </Splitter.Panel>
          </Splitter.Root>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          vertical 3-panel (editor + preview + console)
        </span>
        <div className="h-72">
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
              <div className="flex h-full flex-col gap-1 p-3 text-sm text-fg-soft">
                <div className="font-medium text-fg">Editor</div>
              </div>
            </Splitter.Panel>
            <Splitter.ResizeTrigger id="editor:preview">
              <Splitter.ResizeTriggerIndicator />
            </Splitter.ResizeTrigger>
            <Splitter.Panel id="preview">
              <div className="flex h-full flex-col gap-1 bg-surface-muted p-3 text-sm text-fg-soft">
                <div className="font-medium text-fg">Preview</div>
              </div>
            </Splitter.Panel>
            <Splitter.ResizeTrigger id="preview:console">
              <Splitter.ResizeTriggerIndicator />
            </Splitter.ResizeTrigger>
            <Splitter.Panel id="console">
              <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-sm text-fg-soft">
                <div className="font-medium text-fg">Console</div>
                <div className="font-mono text-xs text-fg-muted">$ pnpm dev</div>
              </div>
            </Splitter.Panel>
          </Splitter.Root>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          nested IDE 風 (horizontal sidebar + 右が vertical で main + terminal に分割)
        </span>
        <div className="h-80">
          <Splitter.Root
            panels={[
              { id: "files", minSize: 15, maxSize: 35 },
              { id: "workspace" },
            ]}
            defaultSize={[22, 78]}
          >
            <Splitter.Panel id="files">
              <div className="flex h-full flex-col gap-2 bg-surface-muted p-3 text-sm text-fg-soft">
                <div className="text-xs uppercase tracking-wide text-fg-muted">
                  Explorer
                </div>
                <div className="font-mono text-xs leading-relaxed">
                  src/
                  <br />
                  ├ components/
                  <br />
                  ├ screens/
                  <br />
                  └ lib/
                </div>
              </div>
            </Splitter.Panel>
            <Splitter.ResizeTrigger id="files:workspace">
              <Splitter.ResizeTriggerIndicator />
            </Splitter.ResizeTrigger>
            <Splitter.Panel id="workspace" className="overflow-hidden">
              <Splitter.Root
                orientation="vertical"
                panels={[
                  { id: "editor", minSize: 30 },
                  { id: "terminal", minSize: 15 },
                ]}
                defaultSize={[72, 28]}
                className="h-full rounded-none border-0"
              >
                <Splitter.Panel id="editor">
                  <div className="flex h-full flex-col gap-1 p-3 text-sm text-fg-soft">
                    <div className="text-xs uppercase tracking-wide text-fg-muted">
                      Editor
                    </div>
                    <div className="font-mono text-xs leading-relaxed">
                      <span className="text-fg-subtle">1</span>{" "}
                      <span className="text-fg">import</span>{" "}
                      <span className="text-fg-soft">{`{ Splitter } from "@/components/ui/splitter";`}</span>
                    </div>
                  </div>
                </Splitter.Panel>
                <Splitter.ResizeTrigger id="editor:terminal">
                  <Splitter.ResizeTriggerIndicator />
                </Splitter.ResizeTrigger>
                <Splitter.Panel id="terminal">
                  <div className="flex h-full flex-col gap-1 bg-surface-sunken p-3 text-sm text-fg-soft">
                    <div className="text-xs uppercase tracking-wide text-fg-muted">
                      Terminal
                    </div>
                    <div className="font-mono text-xs text-fg-muted">
                      $ pnpm dev
                      <br />
                      <span className="text-fg-subtle">
                        VITE ready in 181 ms
                      </span>
                    </div>
                  </div>
                </Splitter.Panel>
              </Splitter.Root>
            </Splitter.Panel>
          </Splitter.Root>
        </div>
      </div>
    </div>
  );
}
