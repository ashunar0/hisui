import { Check, ChevronDown, X } from "lucide-react";
import { Combobox, useListCollection } from "@/components/ui/combobox";

export function ComboboxDemo() {
  return (
    <div className="flex flex-col gap-8">
      <BasicFramework />
      <GroupedCity />
      <MultipleSkills />
    </div>
  );
}

const FRAMEWORKS = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "Solid" },
  { value: "angular", label: "Angular" },
  { value: "qwik", label: "Qwik" },
  { value: "ember", label: "Ember" },
  { value: "preact", label: "Preact" },
  { value: "lit", label: "Lit" },
  { value: "alpine", label: "Alpine.js" },
];

function BasicFramework() {
  const { collection, filter } = useListCollection({
    initialItems: FRAMEWORKS,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
    filter: (itemText, filterText) =>
      itemText.toLowerCase().includes(filterText.toLowerCase()),
  });

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        basic single (useListCollection で filter、Empty fallback、ItemIndicator
        で選択チェック)
      </p>
      <div className="w-72">
        <Combobox.Root
          collection={collection}
          onInputValueChange={(e) => filter(e.inputValue)}
          openOnClick
        >
          <Combobox.Label>Framework</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Search frameworks..." />
            <Combobox.Trigger>
              <ChevronDown className="size-4" />
            </Combobox.Trigger>
          </Combobox.Control>
          <Combobox.Content>
            <Combobox.Empty>No results</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>
                  <Check className="size-4" />
                </Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Root>
      </div>
    </div>
  );
}

type City = { value: string; label: string; country: string };

const CITIES: City[] = [
  { value: "tokyo", label: "Tokyo", country: "Japan" },
  { value: "osaka", label: "Osaka", country: "Japan" },
  { value: "kyoto", label: "Kyoto", country: "Japan" },
  { value: "fukuoka", label: "Fukuoka", country: "Japan" },
  { value: "nyc", label: "New York", country: "USA" },
  { value: "sf", label: "San Francisco", country: "USA" },
  { value: "la", label: "Los Angeles", country: "USA" },
  { value: "london", label: "London", country: "UK" },
  { value: "manchester", label: "Manchester", country: "UK" },
  { value: "berlin", label: "Berlin", country: "Germany" },
  { value: "munich", label: "Munich", country: "Germany" },
];

function GroupedCity() {
  const { collection, filter } = useListCollection<City>({
    initialItems: CITIES,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
    filter: (itemText, filterText) =>
      itemText.toLowerCase().includes(filterText.toLowerCase()),
  });

  const groups = collection.items.reduce<Record<string, City[]>>((acc, c) => {
    (acc[c.country] ??= []).push(c);
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        grouped (ItemGroup + ItemGroupLabel で国別、 ClearTrigger で全消し)
      </p>
      <div className="w-72">
        <Combobox.Root
          collection={collection}
          onInputValueChange={(e) => filter(e.inputValue)}
          openOnClick
        >
          <Combobox.Label>City</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Search cities..." />
            <Combobox.ClearTrigger>
              <X className="size-3.5" />
            </Combobox.ClearTrigger>
            <Combobox.Trigger>
              <ChevronDown className="size-4" />
            </Combobox.Trigger>
          </Combobox.Control>
          <Combobox.Content>
            <Combobox.Empty>No cities</Combobox.Empty>
            {Object.entries(groups).map(([country, cities]) => (
              <Combobox.ItemGroup key={country}>
                <Combobox.ItemGroupLabel>{country}</Combobox.ItemGroupLabel>
                {cities.map((city) => (
                  <Combobox.Item key={city.value} item={city}>
                    <Combobox.ItemText>{city.label}</Combobox.ItemText>
                    <Combobox.ItemIndicator>
                      <Check className="size-4" />
                    </Combobox.ItemIndicator>
                  </Combobox.Item>
                ))}
              </Combobox.ItemGroup>
            ))}
          </Combobox.Content>
        </Combobox.Root>
      </div>
    </div>
  );
}

const SKILLS = [
  { value: "ts", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "node", label: "Node.js" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "python", label: "Python" },
  { value: "postgres", label: "PostgreSQL" },
  { value: "docker", label: "Docker" },
];

function MultipleSkills() {
  const { collection, filter } = useListCollection({
    initialItems: SKILLS,
    itemToString: (item) => item.label,
    itemToValue: (item) => item.value,
    filter: (itemText, filterText) =>
      itemText.toLowerCase().includes(filterText.toLowerCase()),
  });

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        multiple (multiple prop で複数選択、Context render-prop で選択数を Label
        横に表示)
      </p>
      <div className="w-72">
        <Combobox.Root
          collection={collection}
          onInputValueChange={(e) => filter(e.inputValue)}
          multiple
          openOnClick
          defaultValue={["ts", "react"]}
        >
          <div className="flex items-baseline justify-between">
            <Combobox.Label>Skills</Combobox.Label>
            <Combobox.Context>
              {(api) =>
                api.value.length > 0 && (
                  <span className="text-[11px] text-fg-muted">
                    {api.value.length} selected
                  </span>
                )
              }
            </Combobox.Context>
          </div>
          <Combobox.Control>
            <Combobox.Input placeholder="Add skills..." />
            <Combobox.Trigger>
              <ChevronDown className="size-4" />
            </Combobox.Trigger>
          </Combobox.Control>
          <Combobox.Content>
            <Combobox.Empty>No skills</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
                <Combobox.ItemIndicator>
                  <Check className="size-4" />
                </Combobox.ItemIndicator>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Root>
      </div>
    </div>
  );
}
