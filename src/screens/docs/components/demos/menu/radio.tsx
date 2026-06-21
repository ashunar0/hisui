import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/ui/menu";

const THEMES = ["light", "dark", "system"];

export default function MenuRadioDemo() {
  const [value, setValue] = useState("system");
  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Theme: {value}
          <ChevronDown className="size-4" />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.RadioItemGroup
          value={value}
          onValueChange={(d) => setValue(d.value)}
        >
          {THEMES.map((v) => (
            <Menu.RadioItem key={v} value={v}>
              <Menu.ItemText>{v}</Menu.ItemText>
            </Menu.RadioItem>
          ))}
        </Menu.RadioItemGroup>
      </Menu.Content>
    </Menu.Root>
  );
}
