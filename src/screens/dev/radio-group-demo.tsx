import { RadioGroup } from "@/components/ui/radio-group";

export function RadioGroupDemo() {
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
