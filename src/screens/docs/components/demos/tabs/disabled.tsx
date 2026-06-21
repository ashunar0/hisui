import { Tabs } from "@/components/ui/tabs";

export default function TabsDisabledDemo() {
  return (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Indicator />
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
        <Tabs.Trigger value="settings" disabled>
          Settings (locked)
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  );
}
