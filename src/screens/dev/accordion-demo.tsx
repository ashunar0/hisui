import { Accordion } from "@/components/ui/accordion";

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

export function AccordionDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-xs text-fg-muted">Single (default)</p>
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

      <div>
        <p className="mb-2 text-xs text-fg-muted">Multiple</p>
        <Accordion.Root multiple defaultValue={["what", "stack"]}>
          {FAQ.slice(0, 3).map((item) => (
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
    </div>
  );
}
