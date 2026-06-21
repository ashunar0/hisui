import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "toaster (singleton)",
    description:
      "createToaster で作る global instance。 placement / max を指定。 .create() で 1 つ追加、 .promise() で loading→success/error 遷移。",
  },
  {
    name: "<Toaster />",
    description:
      "App root に 1 つだけ mount。 全 toast の render を担う。 ui-lab では App.tsx に既に置いてある。",
  },
  {
    name: "Toast.Root",
    description:
      "1 つの toast 表面。 --x / --y / --opacity を translate と opacity に流すのが必須 (Ark UI の地雷)。",
  },
  {
    name: "Toast.Title / Description",
    description: "見出し + 補足。 a11y のため aria-labelledby / describedby に自動接続。",
  },
  {
    name: "Toast.ActionTrigger",
    description: "Undo 等の action button。 toast.create({ action: { label, onClick } }) で自動配置。",
  },
  {
    name: "Toast.CloseTrigger",
    description: "× で閉じる button。 default で X icon が入る。",
  },
];

const CREATE_PROPS: PropRow[] = [
  {
    name: "title",
    type: "string",
    description: "見出し。 大体必須。",
  },
  {
    name: "description",
    type: "string",
    description: "補足 1 行。 任意。",
  },
  {
    name: "type",
    type: '"success" | "error" | "warning" | "info" | "loading"',
    description: "icon と意味を決める。 省略で neutral (icon 無し)。",
  },
  {
    name: "duration",
    type: "number",
    default: "5000",
    description: "ms。 loading 系は短め、 action 付きは長めにしたい時に。",
  },
  {
    name: "action",
    type: "{ label: string; onClick: () => void }",
    description: "trailing の Undo 風 button。 ActionTrigger に自動配置。",
  },
  {
    name: "id",
    type: "string",
    description: "省略可。 同 id で .update() / .remove() できる。",
  },
];

const CREATE_TOASTER_PROPS: PropRow[] = [
  {
    name: "placement",
    type: '"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end"',
    description: "画面のどこに積むか。 ui-lab は bottom-end。",
  },
  {
    name: "max",
    type: "number",
    description: "同時表示の上限。 超えたら古い順に押し出す。 ui-lab は 3。",
  },
  {
    name: "overlap",
    type: "boolean",
    default: "false",
    description: "重ねるか並べるか。 false で縦 / 横にスタック。",
  },
  {
    name: "gap",
    type: "number",
    description: "toast 間の隙間 (px)。",
  },
];

export function ToastDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Toast">
        画面の隅に積む通知。 success / error / 進行中などを邪魔せず伝える。
        toaster.create() で 1 行追加するだけで、 描画は App root の Toaster
        が引き受ける imperative API。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="App root に Toaster を 1 つ mount し、 toaster.create() で imperative に追加する。 個別 toast は内部で Toast.Root + Title + Description + Action + Close で組まれる。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[16rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Setup"
        description="createToaster で singleton を作り、 Toaster component を root に置く。 ui-lab では既にやってある。"
      >
        <Example
          code={`// components/ui/toast.tsx
export const toaster = createToaster({ placement: "bottom-end", max: 3 });

export function Toaster() { return <ArkToaster toaster={toaster}>{...}</ArkToaster>; }

// App.tsx
import { Toaster } from "@/components/ui/toast";
function App() {
  return (<><Routes>...</Routes><Toaster /></>);
}`}
        >
          <p className="text-fg-muted text-xs">
            App.tsx で 1 度だけ Toaster を mount すれば、 どこからでも toaster.create() で発火できるのだ。
          </p>
        </Example>
      </DocSection>

      <DocSection
        title="Types"
        description="success / error / warning / info / loading / neutral。 type で icon が切り替わる。"
      >
        <Example
          code={`toaster.create({ title: "Saved", description: "Live now.", type: "success" });
toaster.create({ title: "Failed", type: "error" });
toaster.create({ title: "Reminder" }); // neutral`}
        >
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toaster.create({
                  title: "Saved successfully",
                  description: "Your changes are live.",
                  type: "success",
                })
              }
            >
              Success
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toaster.create({
                  title: "Couldn't save",
                  description: "Network error. Try again.",
                  type: "error",
                })
              }
            >
              Error
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toaster.create({
                  title: "Storage almost full",
                  type: "warning",
                })
              }
            >
              Warning
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toaster.create({
                  title: "Build started",
                  type: "info",
                })
              }
            >
              Info
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toaster.create({
                  title: "Uploading...",
                  type: "loading",
                  duration: 2500,
                })
              }
            >
              Loading
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                toaster.create({
                  title: "Reminder",
                  description: "Just a neutral toast.",
                })
              }
            >
              Neutral
            </Button>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="With action"
        description="Undo パターン。 action.label + action.onClick を渡すと自動で ActionTrigger が並ぶ。"
      >
        <Example
          code={`toaster.create({
  title: "Email archived",
  description: '"Q3 planning sync" was moved to archive.',
  action: {
    label: "Undo",
    onClick: () => toaster.create({ type: "success", title: "Restored" }),
  },
  duration: 5000,
});`}
        >
          <Button
            variant="outline"
            onClick={() =>
              toaster.create({
                title: "Email archived",
                description: "Q3 planning sync was moved to archive.",
                action: {
                  label: "Undo",
                  onClick: () =>
                    toaster.create({
                      type: "success",
                      title: "Restored",
                    }),
                },
                duration: 5000,
              })
            }
          >
            Archive email
          </Button>
        </Example>
      </DocSection>

      <DocSection
        title="Promise flow"
        description="toaster.promise() で loading → success/error を 1 つの toast で遷移。 fetch のように非同期処理を直接渡せる。"
      >
        <Example
          code={`toaster.promise(fetchData(), {
  loading: { title: "Deploying...", description: "..." },
  success: (release) => ({ title: "Deployed", description: \`Released \${release}\` }),
  error: { title: "Deploy failed" },
});`}
        >
          <Button
            variant="outline"
            onClick={() => {
              const promise = new Promise<string>((resolve, reject) => {
                setTimeout(() => {
                  if (Math.random() < 0.7) {
                    resolve("acme-prod-v1.2.0");
                  } else {
                    reject(new Error("Deploy failed"));
                  }
                }, 2000);
              });
              toaster.promise(promise, {
                loading: {
                  title: "Deploying...",
                  description: "Building and pushing to production.",
                },
                success: (release) => ({
                  title: "Deployed",
                  description: `Released ${release} to production.`,
                }),
                error: {
                  title: "Deploy failed",
                  description: "Check logs and retry.",
                },
              });
            }}
          >
            Trigger deploy
          </Button>
        </Example>
      </DocSection>

      <DocSection title="toaster.create() options">
        <PropsTable rows={CREATE_PROPS} />
      </DocSection>

      <DocSection title="createToaster() options">
        <PropsTable rows={CREATE_TOASTER_PROPS} />
      </DocSection>
    </div>
  );
}
