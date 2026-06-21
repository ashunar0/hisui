import { Button } from "@/components/ui/button";
import { Steps } from "@/components/ui/steps";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Steps.Root",
    description:
      "外枠。 count で総 step 数。 step (controlled) / defaultStep で現在 step を管理。",
  },
  {
    name: "Steps.List",
    description: "Item を並べる行。 orientation で horizontal / vertical 切替。",
  },
  {
    name: "Steps.Item",
    description: "1 step。 index 必須。 Trigger + Separator を中に置く。",
  },
  {
    name: "Steps.Trigger",
    description:
      "step 切替 button。 Indicator + Label を中に。 current 中は cursor:default で click 無効化。",
  },
  {
    name: "Steps.Indicator",
    description:
      "丸い番号 / Check icon の表示。 data-current / data-complete で見た目切替。",
  },
  {
    name: "Steps.CompleteIndicator",
    description:
      "完了済 step で Check icon を出す helper。 group-data-[complete]:block で表示制御済み。",
  },
  {
    name: "Steps.Separator",
    description: "Item 間の線。 完了済区間で fg 色に変わる。",
  },
  {
    name: "Steps.Content",
    description: "各 step の中身 panel。 index で対応 step を指定。",
  },
  {
    name: "Steps.CompletedContent",
    description: "全 step 完了後に出す success 画面。",
  },
  {
    name: "Steps.PrevTrigger / NextTrigger",
    description: "Back / Next button。 端で自動 disabled。 NextTrigger は最後で Complete 扱い。",
  },
  {
    name: "Steps.Progress",
    description: 'Context API の text 表示 ("Step N of Total" 等) を出す helper。',
  },
];

const PROPS: PropRow[] = [
  {
    name: "count",
    type: "number",
    description: "必須。 総 step 数。",
  },
  {
    name: "step",
    type: "number",
    description: "controlled mode の現在 step (0-indexed)。",
  },
  {
    name: "defaultStep",
    type: "number",
    default: "0",
    description: "uncontrolled mode の初期 step。",
  },
  {
    name: "onStepChange",
    type: "(details: { step: number }) => void",
    description: "step が変わった時に呼ばれる。",
  },
  {
    name: "onStepComplete",
    type: "() => void",
    description: "全 step 完了時に呼ばれる。",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "List の並び。 vertical で sidebar 風。",
  },
  {
    name: "linear",
    type: "boolean",
    default: "false",
    description: "true で完了済以外の step を click で飛ばせない。",
  },
];

const WIZARD = [
  { title: "Account", description: "Email & password" },
  { title: "Profile", description: "Tell us about you" },
  { title: "Confirm", description: "Review and submit" },
];

export function StepsDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Steps">
        多段 form / onboarding / wizard の進行管理。 number の Indicator +
        Separator + Content の組み合わせで、 horizontal の wizard も vertical
        の sidebar 型 form もこの 1 primitive で組める。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に List (Item × N) と Content × N と CompletedContent、 Prev / NextTrigger。 Item 内に Trigger (Indicator + label) と Separator。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[18rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Usage"
        description="3 step wizard。 Account / Profile / Confirm の Indicator + Label と、 Content × N + CompletedContent + Prev / Next。"
      >
        <Example
          code={`<Steps.Root count={WIZARD.length}>
  <Steps.List>
    {WIZARD.map((step, i) => (
      <Steps.Item key={step.title} index={i}>
        <Steps.Trigger>
          <Steps.Indicator>
            <Steps.CompleteIndicator />
            <span className="group-data-complete:hidden">{i + 1}</span>
          </Steps.Indicator>
          <div><span>{step.title}</span><span>{step.description}</span></div>
        </Steps.Trigger>
        {i < WIZARD.length - 1 && <Steps.Separator />}
      </Steps.Item>
    ))}
  </Steps.List>
  {WIZARD.map((step, i) => (
    <Steps.Content key={step.title} index={i}>...</Steps.Content>
  ))}
  <Steps.CompletedContent>...</Steps.CompletedContent>
  <Steps.PrevTrigger asChild><Button variant="outline">Back</Button></Steps.PrevTrigger>
  <Steps.NextTrigger asChild><Button>Next</Button></Steps.NextTrigger>
</Steps.Root>`}
        >
          <div className="w-full max-w-xl">
            <Steps.Root count={WIZARD.length}>
              <Steps.List>
                {WIZARD.map((step, i) => (
                  <Steps.Item key={step.title} index={i}>
                    <Steps.Trigger>
                      <Steps.Indicator>
                        <Steps.CompleteIndicator />
                        <span className="group-data-complete:hidden">
                          {i + 1}
                        </span>
                      </Steps.Indicator>
                      <div className="flex flex-col items-start">
                        <span className="font-medium text-fg text-sm">
                          {step.title}
                        </span>
                        <span className="text-fg-muted text-xs">
                          {step.description}
                        </span>
                      </div>
                    </Steps.Trigger>
                    {i < WIZARD.length - 1 && <Steps.Separator />}
                  </Steps.Item>
                ))}
              </Steps.List>

              {WIZARD.map((step, i) => (
                <Steps.Content key={step.title} index={i}>
                  <h3 className="font-semibold text-fg text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-fg-muted text-sm">
                    {step.description}
                  </p>
                  <p className="mt-4 text-fg-soft text-sm">
                    Step {i + 1} の中身ダミー。 実際は form が入る。
                  </p>
                </Steps.Content>
              ))}
              <Steps.CompletedContent>
                <h3 className="font-semibold text-fg text-base">All set!</h3>
                <p className="mt-1 text-fg-muted text-sm">
                  Wizard finished. Reset to try again.
                </p>
              </Steps.CompletedContent>

              <div className="flex justify-between gap-2">
                <Steps.PrevTrigger asChild>
                  <Button variant="outline" size="sm">
                    Back
                  </Button>
                </Steps.PrevTrigger>
                <Steps.NextTrigger asChild>
                  <Button size="sm">Next</Button>
                </Steps.NextTrigger>
              </div>
            </Steps.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Compact (number only)"
        description="数字だけの軽量 indicator + Context で 'Step N / Total'。 sub-form の進捗表示に。"
      >
        <Example
          code={`<Steps.Root count={4} defaultStep={1}>
  <Steps.List>...</Steps.List>
  <Steps.Context>{(api) => <span>Step {api.step + 1} of {api.count}</span>}</Steps.Context>
</Steps.Root>`}
        >
          <div className="w-full max-w-md">
            <Steps.Root count={4} defaultStep={1}>
              <div className="flex items-center justify-between">
                <Steps.List>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Steps.Item key={i} index={i}>
                      <Steps.Trigger>
                        <Steps.Indicator>
                          <Steps.CompleteIndicator />
                          <span className="group-data-complete:hidden">
                            {i + 1}
                          </span>
                        </Steps.Indicator>
                      </Steps.Trigger>
                      {i < 3 && <Steps.Separator />}
                    </Steps.Item>
                  ))}
                </Steps.List>
                <Steps.Context>
                  {(api) => (
                    <span className="ml-3 text-fg-muted text-xs tabular-nums">
                      Step {api.step + 1} of {api.count}
                    </span>
                  )}
                </Steps.Context>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <Steps.PrevTrigger asChild>
                  <Button variant="outline" size="sm">
                    Back
                  </Button>
                </Steps.PrevTrigger>
                <Steps.NextTrigger asChild>
                  <Button size="sm">Next</Button>
                </Steps.NextTrigger>
              </div>
            </Steps.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Vertical"
        description="orientation=vertical で sidebar 配置。 左に Steps、 右に Content の 2 column。"
      >
        <Example
          code={`<Steps.Root count={WIZARD.length} orientation="vertical">
  <div className="flex gap-6">
    <Steps.List className="w-48">...</Steps.List>
    <div className="flex-1">{...Content...}</div>
  </div>
</Steps.Root>`}
        >
          <div className="w-full max-w-2xl">
            <Steps.Root count={WIZARD.length} orientation="vertical">
              <div className="flex gap-6">
                <Steps.List className="w-48">
                  {WIZARD.map((step, i) => (
                    <Steps.Item key={step.title} index={i}>
                      <Steps.Trigger>
                        <Steps.Indicator>
                          <Steps.CompleteIndicator />
                          <span className="group-data-complete:hidden">
                            {i + 1}
                          </span>
                        </Steps.Indicator>
                        <span className="font-medium text-fg text-sm">
                          {step.title}
                        </span>
                      </Steps.Trigger>
                      {i < WIZARD.length - 1 && <Steps.Separator />}
                    </Steps.Item>
                  ))}
                </Steps.List>
                <div className="flex-1">
                  {WIZARD.map((step, i) => (
                    <Steps.Content key={step.title} index={i}>
                      <h3 className="font-semibold text-fg text-base">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-fg-muted text-sm">
                        {step.description}
                      </p>
                    </Steps.Content>
                  ))}
                  <Steps.CompletedContent>
                    <h3 className="font-semibold text-fg text-base">Done!</h3>
                  </Steps.CompletedContent>
                  <div className="mt-4 flex justify-end gap-2">
                    <Steps.PrevTrigger asChild>
                      <Button variant="outline" size="sm">
                        Back
                      </Button>
                    </Steps.PrevTrigger>
                    <Steps.NextTrigger asChild>
                      <Button size="sm">Next</Button>
                    </Steps.NextTrigger>
                  </div>
                </div>
              </div>
            </Steps.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
