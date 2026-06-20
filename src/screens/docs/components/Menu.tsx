import {
  ChevronDown,
  Copy,
  LogOut,
  Settings,
  Trash2,
  User,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Menu } from "@/components/ui/menu";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Menu.Root",
    description:
      "外枠。 onSelect で item 選択を拾う。 controlled には open / onOpenChange。",
  },
  {
    name: "Menu.Trigger",
    description: "開閉ボタン。 asChild で Button / IconButton 等にラップ。",
  },
  {
    name: "Menu.Content",
    description:
      "中身。 内部で Portal + Positioner を自動 mount。 floating surface (multi-layer shadow)。",
  },
  {
    name: "Menu.Item",
    description: "1 つの選択肢。 value 必須。 onSelect / disabled 個別指定可。",
  },
  {
    name: "Menu.ItemGroup / ItemGroupLabel",
    description: "items を group 化して group label を出す。",
  },
  {
    name: "Menu.CheckboxItem",
    description: "trail に check が立つ item。 trueonValueChange で個別管理。",
  },
  {
    name: "Menu.RadioItemGroup / RadioItem",
    description: "排他 group。 value + onValueChange で string を管理。",
  },
  {
    name: "Menu.Separator",
    description: "item 群の区切り線。 my-1 border-t border-border-muted。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "onSelect",
    type: "(details: { value: string }) => void",
    description: "Item の value を選択した時。 Menu 全体で 1 つの handler。",
  },
  {
    name: "open / onOpenChange",
    type: "boolean / (d: { open: boolean }) => void",
    description: "controlled mode の表示状態。",
  },
  {
    name: "positioning",
    type: "{ placement?: Placement, gutter?: number, ... }",
    description: "Floating UI に渡す。 placement で出る向き、 gutter で距離。",
  },
  {
    name: "closeOnSelect",
    type: "boolean",
    default: "true",
    description: "item 選択時に閉じるか。 CheckboxItem では false 推奨。",
  },
];

function CheckboxExample() {
  const [bookmarks, setBookmarks] = useState(true);
  const [history, setHistory] = useState(false);
  return (
    <Menu.Root closeOnSelect={false}>
      <Menu.Trigger asChild>
        <Button variant="outline">
          View
          <ChevronDown className="size-4" />
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.CheckboxItem
          value="bookmarks"
          checked={bookmarks}
          onCheckedChange={(d) =>
            setBookmarks(d === "indeterminate" ? false : d)
          }
        >
          <Menu.ItemText>Bookmarks</Menu.ItemText>
        </Menu.CheckboxItem>
        <Menu.CheckboxItem
          value="history"
          checked={history}
          onCheckedChange={(d) =>
            setHistory(d === "indeterminate" ? false : d)
          }
        >
          <Menu.ItemText>History</Menu.ItemText>
        </Menu.CheckboxItem>
      </Menu.Content>
    </Menu.Root>
  );
}

function RadioExample() {
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
          {["light", "dark", "system"].map((v) => (
            <Menu.RadioItem key={v} value={v}>
              <Menu.ItemText>{v}</Menu.ItemText>
            </Menu.RadioItem>
          ))}
        </Menu.RadioItemGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

export function MenuDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Menu">
        click で開く dropdown menu。 floating な Content 上に Item を縦に並べる。
        Group / Checkbox / Radio / Separator / Shortcut 等の sub-component を
        組み合わせて context menu / app menu / settings menu を組む。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に Trigger と Content。 Content に Item 群を並べる。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[16rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Usage"
        description="Trigger を Button、 Item に icon + Text + Kbd を並べる典型 dropdown。"
      >
        <Example
          code={`<Menu.Root>
  <Menu.Trigger asChild>
    <Button variant="outline">Actions <ChevronDown /></Button>
  </Menu.Trigger>
  <Menu.Content>
    <Menu.Item value="profile">
      <User className="size-4" />
      <Menu.ItemText>Profile</Menu.ItemText>
      <Kbd>⌘P</Kbd>
    </Menu.Item>
    <Menu.Item value="settings">
      <Settings className="size-4" />
      <Menu.ItemText>Settings</Menu.ItemText>
    </Menu.Item>
    <Menu.Separator />
    <Menu.Item value="logout">
      <LogOut className="size-4" />
      <Menu.ItemText>Log out</Menu.ItemText>
    </Menu.Item>
  </Menu.Content>
</Menu.Root>`}
        >
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline">
                Actions <ChevronDown className="size-4" />
              </Button>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.Item value="profile">
                <User className="size-4" />
                <Menu.ItemText>Profile</Menu.ItemText>
                <Kbd>⌘P</Kbd>
              </Menu.Item>
              <Menu.Item value="settings">
                <Settings className="size-4" />
                <Menu.ItemText>Settings</Menu.ItemText>
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item value="logout">
                <LogOut className="size-4" />
                <Menu.ItemText>Log out</Menu.ItemText>
              </Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Groups"
        description="ItemGroup + ItemGroupLabel で見出し付きの section を作る。"
      >
        <Example
          code={`<Menu.ItemGroup>
  <Menu.ItemGroupLabel>Account</Menu.ItemGroupLabel>
  <Menu.Item value="profile">Profile</Menu.Item>
  <Menu.Item value="billing">Billing</Menu.Item>
</Menu.ItemGroup>
<Menu.Separator />
<Menu.ItemGroup>
  <Menu.ItemGroupLabel>Danger</Menu.ItemGroupLabel>
  <Menu.Item value="delete" className="text-danger-fg">
    <Trash2 className="size-4" />
    <Menu.ItemText>Delete account</Menu.ItemText>
  </Menu.Item>
</Menu.ItemGroup>`}
        >
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline">
                Account <ChevronDown className="size-4" />
              </Button>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Account</Menu.ItemGroupLabel>
                <Menu.Item value="profile">
                  <Menu.ItemText>Profile</Menu.ItemText>
                </Menu.Item>
                <Menu.Item value="billing">
                  <Menu.ItemText>Billing</Menu.ItemText>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.Separator />
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel>Danger</Menu.ItemGroupLabel>
                <Menu.Item value="delete" className="text-danger-fg">
                  <Trash2 className="size-4" />
                  <Menu.ItemText>Delete account</Menu.ItemText>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Checkbox items"
        description="trail に check が立つ多選択。 closeOnSelect=false で連続 toggle 可能に。"
      >
        <Example
          code={`<Menu.Root closeOnSelect={false}>
  <Menu.CheckboxItem
    value="bookmarks"
    checked={bookmarks}
    onCheckedChange={(d) => setBookmarks(d === "indeterminate" ? false : d)}
  >
    <Menu.ItemText>Bookmarks</Menu.ItemText>
  </Menu.CheckboxItem>
  ...
</Menu.Root>`}
        >
          <CheckboxExample />
        </Example>
      </DocSection>

      <DocSection
        title="Radio items"
        description="排他 group。 RadioItemGroup の value + onValueChange で 1 つだけ選ばせる。"
      >
        <Example
          code={`<Menu.RadioItemGroup value={value} onValueChange={(d) => setValue(d.value)}>
  {["light", "dark", "system"].map((v) => (
    <Menu.RadioItem key={v} value={v}>
      <Menu.ItemText>{v}</Menu.ItemText>
    </Menu.RadioItem>
  ))}
</Menu.RadioItemGroup>`}
        >
          <RadioExample />
        </Example>
      </DocSection>

      <DocSection
        title="Item handlers"
        description="onSelect は Root に 1 つ置く方法と、 Item 個別の 2 通り。 個別の方が明示的で読みやすい。"
      >
        <Example
          code={`<Menu.Item value="copy" onSelect={() => navigator.clipboard.writeText("…")}>
  <Copy className="size-4" />
  <Menu.ItemText>Copy</Menu.ItemText>
</Menu.Item>`}
        >
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button variant="outline">
                Edit <ChevronDown className="size-4" />
              </Button>
            </Menu.Trigger>
            <Menu.Content>
              <Menu.Item
                value="copy"
                onSelect={() => navigator.clipboard.writeText("sample")}
              >
                <Copy className="size-4" />
                <Menu.ItemText>Copy</Menu.ItemText>
              </Menu.Item>
              <Menu.Item value="delete" disabled>
                <Trash2 className="size-4" />
                <Menu.ItemText>Delete (disabled)</Menu.ItemText>
              </Menu.Item>
            </Menu.Content>
          </Menu.Root>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
