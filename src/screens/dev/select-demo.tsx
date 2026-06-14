import { Check, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, createListCollection } from "@/components/ui/select";

export function SelectDemo() {
  return (
    <div className="flex flex-col gap-6">
      <BasicSelect />
      <GroupedSelect />
      <ClearableSelect />
    </div>
  );
}

const FRAMEWORKS = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte", disabled: true },
  ],
});

function BasicSelect() {
  return (
    <Select.Root collection={FRAMEWORKS} defaultValue={["react"]}>
      <Select.Label>Framework</Select.Label>
      <Select.Control className="mt-1.5">
        <Select.Trigger className="w-56">
          <Select.ValueText placeholder="Select a framework" />
          <Select.Indicator>
            <ChevronDown className="size-4" />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Select.Content className="w-56">
        {FRAMEWORKS.items.map((item) => (
          <Select.Item key={item.value} item={item}>
            <Select.ItemText>{item.label}</Select.ItemText>
            <Select.ItemIndicator>
              <Check className="size-4" />
            </Select.ItemIndicator>
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

const COUNTRIES = createListCollection({
  items: [
    { label: "Japan", value: "jp", region: "Asia" },
    { label: "South Korea", value: "kr", region: "Asia" },
    { label: "Singapore", value: "sg", region: "Asia" },
    { label: "Germany", value: "de", region: "Europe" },
    { label: "France", value: "fr", region: "Europe" },
    { label: "United States", value: "us", region: "Americas" },
    { label: "Brazil", value: "br", region: "Americas" },
  ],
});

const COUNTRY_GROUPS = ["Asia", "Europe", "Americas"] as const;

function GroupedSelect() {
  return (
    <Select.Root collection={COUNTRIES} defaultValue={["jp"]}>
      <Select.Label>Country</Select.Label>
      <Select.Control className="mt-1.5">
        <Select.Trigger className="w-56">
          <Select.ValueText placeholder="Select a country" />
          <Select.Indicator>
            <ChevronDown className="size-4" />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Select.Content className="w-56">
        {COUNTRY_GROUPS.map((region) => (
          <Select.ItemGroup key={region}>
            <Select.ItemGroupLabel>{region}</Select.ItemGroupLabel>
            {COUNTRIES.items
              .filter((item) => item.region === region)
              .map((item) => (
                <Select.Item key={item.value} item={item}>
                  <Select.ItemText>{item.label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check className="size-4" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
          </Select.ItemGroup>
        ))}
      </Select.Content>
    </Select.Root>
  );
}

const PRIORITIES = createListCollection({
  items: [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
    { label: "Urgent", value: "urgent" },
  ],
});

function ClearableSelect() {
  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        alert(`priority = ${data.get("priority") ?? "(none)"}`);
      }}
    >
      <Select.Root collection={PRIORITIES} name="priority">
        <Select.Label>Priority (form submit + clearable)</Select.Label>
        <Select.Control className="mt-1.5 gap-2">
          <Select.Trigger className="w-56">
            <Select.ValueText placeholder="No priority" />
            <Select.Indicator>
              <ChevronDown className="size-4" />
            </Select.Indicator>
          </Select.Trigger>
          <Select.ClearTrigger>
            <X className="size-4" />
            <span className="sr-only">Clear priority</span>
          </Select.ClearTrigger>
        </Select.Control>
        <Select.HiddenSelect />
        <Select.Content className="w-56">
          {PRIORITIES.items.map((item) => (
            <Select.Item key={item.value} item={item}>
              <Select.ItemText>{item.label}</Select.ItemText>
              <Select.ItemIndicator>
                <Check className="size-4" />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Button size="sm" type="submit" className="w-fit">
        Submit
      </Button>
    </form>
  );
}
