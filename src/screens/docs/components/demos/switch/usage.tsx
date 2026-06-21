import { Switch } from "@/components/ui/switch";

export default function SwitchUsageDemo() {
  return (
    <Switch.Root defaultChecked>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Wi-Fi</Switch.Label>
    </Switch.Root>
  );
}
