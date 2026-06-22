"use client";

import { Check, ChevronDown, X } from "lucide-react";
import { Combobox, useListCollection } from "@/components/ui/combobox";

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

export default function ComboboxGroupedDemo() {
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
  );
}
