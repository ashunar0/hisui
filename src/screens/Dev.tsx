import type { ReactNode } from "react";
import { Link } from "react-router";
import { Bold, Check, ChevronDown, Italic, Link2, Underline } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Combobox, useListCollection } from "@/components/ui/combobox";
import { Dialog } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Field } from "@/components/ui/field";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { NumberInput } from "@/components/ui/number-input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { toaster } from "@/components/ui/toast";
import { Tooltip } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";

export function Dev() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-12 px-6 py-12">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold tracking-tight">Dev sandbox</h1>
          <p className="text-sm text-fg-muted">Primitives playground</p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/" className="text-sm text-fg-muted hover:text-fg">
            ← home
          </Link>
        </div>
      </header>

      <Section
        title="Dialog"
        description="Modal overlay with backdrop, title, description."
      >
        <div className="flex flex-wrap gap-3">
          <BasicDialog />
          <DestructiveDialog />
          <FormDialog />
        </div>
      </Section>

      <Section
        title="Toast"
        description="Bottom-right notifications. Icon色で type を表現。"
      >
        <ToastDemo />
      </Section>

      <Section
        title="Tooltip"
        description="Hover で出る短いヒント。bg-fg + text-bg の反転コントラスト。"
      >
        <TooltipDemo />
      </Section>

      <Section
        title="Checkbox"
        description="Checked / indeterminate / disabled。Tooltip と同じ bg-fg + text-bg の世界観。"
      >
        <CheckboxDemo />
      </Section>

      <Section
        title="Radio Group"
        description="checked 時 ring が黒くなって中に小さな dot。Checkbox と統一感。"
      >
        <RadioGroupDemo />
      </Section>

      <Section
        title="Combobox"
        description="入力で絞り込める select。useListCollection で filter logic を委譲。"
      >
        <ComboboxDemo />
      </Section>

      <Section
        title="Accordion"
        description="border-bottom 区切りの折りたたみ。multiple で複数同時展開も可能。"
      >
        <AccordionDemo />
      </Section>

      <Section
        title="Progress"
        description="Linear と Circular。indeterminate も対応 (value={null})。"
      >
        <ProgressDemo />
      </Section>

      <Section
        title="Number Input"
        description="入力 + 縦並び stepper。min/max/step 対応、disabled もサポート。"
      >
        <NumberInputDemo />
      </Section>

      <Section
        title="Slider"
        description="単一値 / range (2 thumb) / disabled。Track は Progress と統一感、Thumb は outline ring 型。"
      >
        <SliderDemo />
      </Section>
    </div>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-sm font-semibold tracking-tight text-fg">
          {title}
        </h2>
        <p className="text-xs text-fg-muted">{description}</p>
      </div>
      <div className="rounded-md border border-border bg-surface p-6">
        {children}
      </div>
    </section>
  );
}

function BasicDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Basic</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Enable two-factor auth?</Dialog.Title>
        <Dialog.Description>
          You'll be asked for a code from your authenticator app on every sign
          in.
        </Dialog.Description>
        <div className="mt-6 flex justify-end gap-2">
          <Dialog.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger asChild>
            <Button>Enable</Button>
          </Dialog.CloseTrigger>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}

function DestructiveDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="outline">Destructive</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>Delete this workspace?</Dialog.Title>
        <Dialog.Description>
          This permanently deletes all data, members, and integrations. This
          action cannot be undone.
        </Dialog.Description>
        <div className="mt-6 flex justify-end gap-2">
          <Dialog.CloseTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger asChild>
            <Button className="bg-red-600 text-white hover:bg-red-700">
              Delete workspace
            </Button>
          </Dialog.CloseTrigger>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}

function SliderDemo() {
  return (
    <div className="flex w-80 flex-col gap-8">
      <Slider.Root defaultValue={[50]}>
        <div className="flex items-center justify-between">
          <Slider.Label>Volume</Slider.Label>
          <Slider.ValueText />
        </div>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0} />
        </Slider.Control>
      </Slider.Root>

      <Slider.Root defaultValue={[20, 80]} min={0} max={100}>
        <div className="flex items-center justify-between">
          <Slider.Label>Price range</Slider.Label>
          <Slider.ValueText />
        </div>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0} />
          <Slider.Thumb index={1} />
        </Slider.Control>
      </Slider.Root>

      <Slider.Root defaultValue={[30]} disabled>
        <Slider.Label>Disabled</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumb index={0} />
        </Slider.Control>
      </Slider.Root>
    </div>
  );
}

function NumberInputDemo() {
  return (
    <div className="flex flex-wrap gap-6">
      <NumberInput.Root defaultValue="1">
        <NumberInput.Label>Quantity</NumberInput.Label>
        <NumberInput.Control>
          <NumberInput.Input />
          <NumberInput.Stepper />
        </NumberInput.Control>
      </NumberInput.Root>

      <NumberInput.Root defaultValue="50" min={0} max={100} step={5}>
        <NumberInput.Label>Percent (0-100, step 5)</NumberInput.Label>
        <NumberInput.Control>
          <NumberInput.Input />
          <NumberInput.Stepper />
        </NumberInput.Control>
      </NumberInput.Root>

      <NumberInput.Root defaultValue="3" disabled>
        <NumberInput.Label>Disabled</NumberInput.Label>
        <NumberInput.Control>
          <NumberInput.Input />
          <NumberInput.Stepper />
        </NumberInput.Control>
      </NumberInput.Root>
    </div>
  );
}

function ProgressDemo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-xs text-fg-muted">Linear</p>
        {[
          { label: "Uploading file 1", value: 20 },
          { label: "Storage used", value: 65 },
          { label: "Almost done", value: 90 },
        ].map((item) => (
          <Progress.Root key={item.label} value={item.value}>
            <div className="flex items-center justify-between">
              <Progress.Label>{item.label}</Progress.Label>
              <Progress.ValueText />
            </div>
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
        ))}
        <Progress.Root value={null}>
          <Progress.Label>Indeterminate</Progress.Label>
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-xs text-fg-muted">Circular</p>
        <div className="flex items-center gap-6">
          {[25, 50, 75, 100, null].map((value, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2"
            >
              <Progress.Root value={value}>
                <Progress.Circle>
                  <Progress.CircleTrack />
                  <Progress.CircleRange />
                </Progress.Circle>
              </Progress.Root>
              <span className="text-xs text-fg-muted tabular-nums">
                {value === null ? "—" : `${value}%`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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

function AccordionDemo() {
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

const ALL_FRAMEWORKS = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
  { value: "angular", label: "Angular" },
  { value: "qwik", label: "Qwik" },
  { value: "ember", label: "Ember" },
  { value: "preact", label: "Preact" },
  { value: "lit", label: "Lit" },
  { value: "alpine", label: "Alpine.js" },
];

function ComboboxDemo() {
  const { collection, filter } = useListCollection({
    initialItems: ALL_FRAMEWORKS,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
    filter: (itemText, filterText) =>
      itemText.toLowerCase().includes(filterText.toLowerCase()),
  });

  return (
    <div className="w-72">
      <Combobox.Root
        collection={collection}
        onInputValueChange={(e) => filter(e.inputValue)}
        openOnClick
      >
        <Combobox.Label>Framework</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Search frameworks..." />
          <Combobox.Trigger>
            <ChevronDown className="size-4" />
          </Combobox.Trigger>
        </Combobox.Control>
        <Combobox.Content>
          <Combobox.Empty>No results</Combobox.Empty>
          {collection.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check className="size-4" />
              </Combobox.ItemIndicator>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Root>
    </div>
  );
}

function RadioGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup.Root defaultValue="comfortable">
        <RadioGroup.Label>Density</RadioGroup.Label>
        {[
          { value: "compact", text: "Compact" },
          { value: "comfortable", text: "Comfortable" },
          { value: "spacious", text: "Spacious" },
        ].map((opt) => (
          <RadioGroup.Item key={opt.value} value={opt.value}>
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{opt.text}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>

      <RadioGroup.Root defaultValue="email">
        <RadioGroup.Label>Notification (1 disabled)</RadioGroup.Label>
        {[
          { value: "email", text: "Email" },
          { value: "sms", text: "SMS", disabled: true },
          { value: "push", text: "Push" },
        ].map((opt) => (
          <RadioGroup.Item
            key={opt.value}
            value={opt.value}
            disabled={opt.disabled}
          >
            <RadioGroup.ItemControl />
            <RadioGroup.ItemText>{opt.text}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}

function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <Checkbox.Root>
        <Checkbox.Control />
        <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root defaultChecked>
        <Checkbox.Control />
        <Checkbox.Label>Remember me on this device</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root checked="indeterminate">
        <Checkbox.Control />
        <Checkbox.Label>Select all (3 of 5 selected)</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root disabled>
        <Checkbox.Control />
        <Checkbox.Label>Disabled option</Checkbox.Label>
      </Checkbox.Root>
      <Checkbox.Root disabled defaultChecked>
        <Checkbox.Control />
        <Checkbox.Label>Disabled checked</Checkbox.Label>
      </Checkbox.Root>
    </div>
  );
}

function TooltipDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Simple hint</Tooltip.Content>
      </Tooltip.Root>

      <div className="flex items-center gap-1 rounded-md border border-border bg-surface p-1">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Bold className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Bold (⌘B)</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Italic className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Italic (⌘I)</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Underline className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Underline (⌘U)</Tooltip.Content>
        </Tooltip.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <IconButton>
              <Link2 className="size-4" />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>Insert link (⌘K)</Tooltip.Content>
        </Tooltip.Root>
      </div>
    </div>
  );
}

function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
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
        onClick={() =>
          toaster.create({
            title: "Storage almost full",
            description: "Free up space to keep syncing.",
            type: "warning",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Build started",
            description: "We'll notify you when it's done.",
            type: "info",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
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
  );
}

function FormDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Form</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>New project</Dialog.Title>
        <Dialog.Description>
          Give it a name and a short description.
        </Dialog.Description>
        <form
          className="mt-5 flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input placeholder="Acme launch" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Description</Field.Label>
            <Textarea placeholder="Short summary" rows={3} />
          </Field.Root>
          <div className="mt-2 flex justify-end gap-2">
            <Dialog.CloseTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.CloseTrigger>
            <Dialog.CloseTrigger asChild>
              <Button type="submit">Create</Button>
            </Dialog.CloseTrigger>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
