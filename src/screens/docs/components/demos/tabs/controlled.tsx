import { useState } from "react";
import { Tabs } from "@/components/ui/tabs";
import { TABS } from "./data";

export default function TabsControlledDemo() {
  const [value, setValue] = useState("activity");
  return (
    <div className="flex flex-col gap-3">
      <Tabs.Root value={value} onValueChange={(d) => setValue(d.value)}>
        <Tabs.List>
          <Tabs.Indicator />
          {TABS.map((t) => (
            <Tabs.Trigger key={t.value} value={t.value}>
              {t.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {TABS.map((t) => (
          <Tabs.Content key={t.value} value={t.value} className="pt-2">
            <p className="text-fg-soft text-sm">{t.body}</p>
          </Tabs.Content>
        ))}
      </Tabs.Root>
      <p className="text-fg-muted text-xs">selected: {value}</p>
    </div>
  );
}
