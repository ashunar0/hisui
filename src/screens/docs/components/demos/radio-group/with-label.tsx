import { RadioGroup } from "@/components/ui/radio-group";

const PLANS = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
];

export default function RadioGroupWithLabelDemo() {
  return (
    <RadioGroup.Root defaultValue="pro">
      <RadioGroup.Label>Plan</RadioGroup.Label>
      {PLANS.map((p) => (
        <RadioGroup.Item key={p.value} value={p.value}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{p.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
