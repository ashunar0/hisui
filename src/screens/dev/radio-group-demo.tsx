import { RadioGroup } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <div className="flex flex-col gap-8">
      <BasicVertical />
      <PlanCards />
      <SegmentedHorizontal />
    </div>
  );
}

const DENSITY = [
  { value: "compact", text: "Compact" },
  { value: "comfortable", text: "Comfortable" },
  { value: "spacious", text: "Spacious", disabled: true },
];

function BasicVertical() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        basic vertical (default で dot 表示、disabled 1 つ)
      </p>
      <RadioGroup.Root defaultValue="comfortable">
        <RadioGroup.Label>Density</RadioGroup.Label>
        {DENSITY.map((opt) => (
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

const PLANS = [
  {
    value: "free",
    name: "Free",
    price: "$0",
    description: "Personal projects と検証用。1 user / 3 projects まで。",
  },
  {
    value: "pro",
    name: "Pro",
    price: "$12",
    description: "Indie hacker 向け。Unlimited projects + 優先 sync。",
  },
  {
    value: "team",
    name: "Team",
    price: "$32",
    description: "Up to 10 seats、SSO、audit log、role 管理。",
  },
];

function PlanCards() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        plan cards (Item を card 化、 data-[state=checked]:border-fg + bg-active
        で選択 highlight、 ItemControl を右上に)
      </p>
      <RadioGroup.Root defaultValue="pro" className="gap-2">
        <RadioGroup.Label>Plan</RadioGroup.Label>
        {PLANS.map((plan) => (
          <RadioGroup.Item
            key={plan.value}
            value={plan.value}
            className="items-start gap-3 rounded-md border border-border bg-surface p-3 transition-colors hover:bg-hover data-[state=checked]:border-fg data-[state=checked]:bg-active/30"
          >
            <RadioGroup.ItemControl className="mt-0.5" />
            <div className="flex flex-1 flex-col">
              <div className="flex items-center justify-between gap-3">
                <RadioGroup.ItemText className="font-medium">
                  {plan.name}
                </RadioGroup.ItemText>
                <span className="text-xs text-fg-muted">{plan.price}/mo</span>
              </div>
              <span className="mt-0.5 text-xs text-fg-soft">
                {plan.description}
              </span>
            </div>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}

const PERIODS = [
  { value: "week", text: "Week" },
  { value: "month", text: "Month" },
  { value: "quarter", text: "Quarter" },
  { value: "year", text: "Year" },
];

function SegmentedHorizontal() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        segmented horizontal (RadioGroup.Indicator で sliding、Tabs と同じ
        --left / --top / --width / --height で移動)
      </p>
      <RadioGroup.Root
        defaultValue="month"
        orientation="horizontal"
        className="relative inline-flex w-fit items-center gap-1 rounded-lg bg-surface-sunken p-1"
      >
        <RadioGroup.Indicator />
        {PERIODS.map((period) => (
          <RadioGroup.Item
            key={period.value}
            value={period.value}
            className="relative z-10 cursor-pointer rounded-md px-3 py-1 text-sm font-medium text-fg-muted transition-colors hover:text-fg-soft data-[state=checked]:text-fg"
          >
            <RadioGroup.ItemText>{period.text}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
