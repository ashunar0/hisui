import { Collapsible } from "@/components/ui/collapsible";

export default function CollapsibleUsageDemo() {
  return (
    <div className="max-w-xl">
      <p className="text-fg-soft text-sm leading-relaxed">
        ui-lab は React の design system 練習場。 primitive を 3 階層に
        分けて、画面まで組み立てる sandbox。
      </p>
      <Collapsible.Root>
        <Collapsible.Content>
          <p className="mt-2 text-fg-soft text-sm leading-relaxed">
            Tailwind v4 + Ark UI + lucide-react で構成。 semantic tokens
            を index.css の @theme で定義、 .dark セレクタで上書き。
            primitive 側は生の neutral-XXX を直接書かない。
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
  );
}
