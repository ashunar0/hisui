"use client";

import { Tabs } from "@/components/ui/tabs";
import { TABS } from "./data";

export default function TabsBasicDemo() {
  return (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Indicator />
        {TABS.map((t) => (
          <Tabs.Trigger key={t.value} value={t.value}>
            {t.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {TABS.map((t) => (
        <Tabs.Content key={t.value} value={t.value} className="pt-3">
          <p className="text-fg-soft text-sm">{t.body}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
