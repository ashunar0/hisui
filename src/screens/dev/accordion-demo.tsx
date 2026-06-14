import { Bell, Lock, Plus, User } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    value: "what",
    question: "What is ui-lab?",
    answer:
      "A practice ground for React design systems — 3 階層 (ui / components / screens) で primitive を試して、画面に組み立てるサンドボックス。",
  },
  {
    value: "stack",
    question: "What's the stack?",
    answer: "Vite + React 19 + Tailwind v4 + Ark UI + lucide-react.",
  },
  {
    value: "tokens",
    question: "How are colors handled?",
    answer:
      "semantic tokens (bg / fg / surface / border / hover / ...) を index.css の @theme で定義、.dark セレクタで上書き。コンポーネントは生の neutral-XXX を直接書かない。",
  },
  {
    value: "philosophy",
    question: "What's the design philosophy?",
    answer:
      "outline 寄り / 多層 shadow / shadcn っぽさ回避。1 ステップずつ A/B/C で選んで作る。",
  },
];

const SETTINGS_GROUPS = [
  {
    value: "account",
    icon: User,
    title: "Account",
    body: "Username / display name / avatar / email を管理。",
  },
  {
    value: "notifications",
    icon: Bell,
    title: "Notifications",
    body: "メール通知 / push / Slack / digest の頻度設定。",
  },
  {
    value: "security",
    icon: Lock,
    title: "Security",
    body: "Password / 2FA / active sessions / API tokens。",
  },
];

export function AccordionDemo() {
  return (
    <div className="flex flex-col gap-8">
      <SingleFaq />
      <MultipleSettings />
      <PlusMinusFaq />
    </div>
  );
}

function SingleFaq() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        single (default、chevron が open で 180° 回転)
      </p>
      <Accordion.Root defaultValue={["what"]}>
        {FAQ.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger>
              {item.question}
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>{item.answer}</Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

function MultipleSettings() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        multiple (複数同時 open、Trigger に左 icon、設定 group の畳み込みパターン)
      </p>
      <Accordion.Root multiple defaultValue={["account", "security"]}>
        {SETTINGS_GROUPS.map((group) => (
          <Accordion.Item key={group.value} value={group.value}>
            <Accordion.ItemTrigger>
              <span className="flex items-center gap-2">
                <group.icon className="size-4 text-fg-muted" />
                {group.title}
              </span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>{group.body}</Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

function PlusMinusFaq() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        plus / minus (ItemContext render-prop で open 状態に応じて icon を差替、
        Indicator の rotate を打ち消す)
      </p>
      <Accordion.Root>
        {FAQ.slice(0, 3).map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.ItemTrigger>
              {item.question}
              <Accordion.ItemIndicator className="data-[state=open]:rotate-0">
                <Accordion.ItemContext>
                  {(api) => (
                    <Plus
                      className={cn(
                        "size-4 transition-transform",
                        api.expanded && "rotate-45",
                      )}
                    />
                  )}
                </Accordion.ItemContext>
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>{item.answer}</Accordion.ItemContent>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}

