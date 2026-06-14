import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex flex-col gap-8">
      <BasicSwitches />
      <SettingsList />
    </div>
  );
}

function BasicSwitches() {
  return (
    <div className="flex flex-col gap-3">
      <Switch.Root>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Off (default)</Switch.Label>
      </Switch.Root>
      <Switch.Root defaultChecked>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>On (defaultChecked)</Switch.Label>
      </Switch.Root>
      <Switch.Root disabled>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Disabled</Switch.Label>
      </Switch.Root>
      <Switch.Root disabled defaultChecked>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Label>Disabled + checked</Switch.Label>
      </Switch.Root>
    </div>
  );
}

const SETTINGS = [
  {
    id: "product-updates",
    title: "Product updates",
    description: "New features, improvements, and changes.",
    defaultChecked: true,
  },
  {
    id: "weekly-digest",
    title: "Weekly digest",
    description: "Summary of activity from last week, every Monday.",
    defaultChecked: true,
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Promotions, offers, and event invites.",
    defaultChecked: false,
  },
];

function SettingsList() {
  return (
    <div className="flex flex-col divide-y divide-border-muted">
      {SETTINGS.map((item) => (
        <Switch.Root
          key={item.id}
          defaultChecked={item.defaultChecked}
          className="w-full justify-between gap-4 py-4 first:pt-0 last:pb-0"
        >
          <div className="flex flex-col gap-0.5">
            <Switch.Label className="text-fg">{item.title}</Switch.Label>
            <span className="text-xs text-fg-muted">{item.description}</span>
          </div>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>
      ))}
    </div>
  );
}
