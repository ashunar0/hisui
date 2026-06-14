import { Collapsible } from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  return (
    <div className="flex flex-col gap-8">
      <ShowMoreText />
      <AdvancedOptions />
      <DisabledState />
    </div>
  );
}

function ShowMoreText() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        show more (Context render-prop で open / closed に応じて Trigger ラベルを
        Show more ↔ Show less に swap)
      </p>
      <div className="max-w-xl">
        <p className="text-sm leading-relaxed text-fg-soft">
          ui-lab は React の design system 練習場なのだ。 3 階層 (ui /
          components / screens) で primitive を試して、画面に組み立てるサンドボックス。
        </p>
        <Collapsible.Root>
          <Collapsible.Content>
            <p className="mt-2 text-sm leading-relaxed text-fg-soft">
              Tailwind v4 + Ark UI + lucide-react で構成。 semantic tokens (bg /
              fg / surface / border / hover / ...) を index.css の @theme で定義、
              .dark セレクタで上書き。 component 側は生の neutral-XXX を直接書かない。
              一つずつ primitive を refactor して dot-namespace に揃え、 Ark UI
              の全 sub-component を export する方針。
            </p>
          </Collapsible.Content>
          <Collapsible.Trigger className="mt-2">
            <Collapsible.Indicator />
            <Collapsible.Context>
              {(api) => (api.open ? "Show less" : "Show more")}
            </Collapsible.Context>
          </Collapsible.Trigger>
        </Collapsible.Root>
      </div>
    </div>
  );
}

function AdvancedOptions() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        advanced options (filter panel 風、 chevron Indicator + bordered content)
      </p>
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
    </div>
  );
}

function DisabledState() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        disabled (clickable 不可、 data-disabled で opacity-50 + cursor-not-allowed)
      </p>
      <Collapsible.Root disabled>
        <Collapsible.Trigger>
          <Collapsible.Indicator />
          Disabled section
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
