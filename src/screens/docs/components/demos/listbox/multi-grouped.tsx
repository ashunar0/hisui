import { Listbox, createListCollection } from "@/components/ui/listbox";

const COUNTRIES = [
  {
    region: "Asia",
    countries: [
      { label: "Japan", value: "jp" },
      { label: "South Korea", value: "kr" },
      { label: "Singapore", value: "sg" },
      { label: "Thailand", value: "th" },
    ],
  },
  {
    region: "Europe",
    countries: [
      { label: "Germany", value: "de" },
      { label: "France", value: "fr" },
      { label: "Spain", value: "es" },
    ],
  },
  {
    region: "Americas",
    countries: [
      { label: "United States", value: "us" },
      { label: "Canada", value: "ca" },
      { label: "Brazil", value: "br" },
    ],
  },
];

const collection = createListCollection({
  items: COUNTRIES.flatMap((g) => g.countries),
});

export default function ListboxMultiGroupedDemo() {
  return (
    <Listbox.Root
      collection={collection}
      selectionMode="multiple"
      defaultValue={["jp", "de"]}
      className="w-64"
    >
      <Listbox.Label>Available regions (multi)</Listbox.Label>
      <Listbox.Content>
        {COUNTRIES.map((group) => (
          <Listbox.ItemGroup key={group.region}>
            <Listbox.ItemGroupLabel>{group.region}</Listbox.ItemGroupLabel>
            {group.countries.map((item) => (
              <Listbox.Item key={item.value} item={item}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.ItemGroup>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  );
}
