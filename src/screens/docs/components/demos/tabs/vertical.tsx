import { Tabs } from "@/components/ui/tabs";
import { TABS } from "./data";

export default function TabsVerticalDemo() {
  return (
    <Tabs.Root defaultValue="overview" orientation="vertical">
      <div className="flex gap-6">
        <Tabs.List className="flex-col">
          <Tabs.Indicator />
          {TABS.map((t) => (
            <Tabs.Trigger
              key={t.value}
              value={t.value}
              className="w-full justify-start"
            >
              {t.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="flex-1">
          {TABS.map((t) => (
            <Tabs.Content key={t.value} value={t.value}>
              <p className="text-fg-soft text-sm">{t.body}</p>
            </Tabs.Content>
          ))}
        </div>
      </div>
    </Tabs.Root>
  );
}
