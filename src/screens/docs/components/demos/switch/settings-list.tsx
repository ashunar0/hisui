"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const SETTINGS = [
  { key: "notifications", label: "Email notifications", default: true },
  { key: "marketing", label: "Marketing emails", default: false },
  { key: "weekly", label: "Weekly digest", default: true },
];

export default function SwitchSettingsListDemo() {
  const [state, setState] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(SETTINGS.map((s) => [s.key, s.default])),
  );
  return (
    <div className="flex max-w-md flex-col gap-3 rounded-md border border-border p-4">
      {SETTINGS.map((s) => (
        <Switch.Root
          key={s.key}
          checked={state[s.key]}
          onCheckedChange={(d) =>
            setState((p) => ({ ...p, [s.key]: d.checked }))
          }
          className="justify-between w-full"
        >
          <Switch.Label>{s.label}</Switch.Label>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
        </Switch.Root>
      ))}
    </div>
  );
}
