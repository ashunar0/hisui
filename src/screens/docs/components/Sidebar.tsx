import {
  ChevronsLeftRight,
  Home,
  Inbox,
  MoreHorizontal,
  Settings,
  Star,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Menu } from "@/components/ui/menu";
import { Sidebar } from "@/components/ui/sidebar";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Sidebar.Provider",
    description:
      "open / setOpen / toggle を Context で配る。 default は viewport ≥ 1024px で open。 必ず Root を含む木構造の上に置く。",
  },
  {
    name: "Sidebar.Root",
    description:
      "<aside>。 width / closed margin は CSS 変数 --sidebar-w (default 16rem) 連動。 幅を変えたい時は className=\"[--sidebar-w:12rem]\" のように Tailwind の arbitrary property 記法で上書き。",
  },
  {
    name: "Sidebar.Trigger",
    description:
      "open/close toggle button。 PanelLeft icon。 main area の header に置く想定。",
  },
  {
    name: "Sidebar.Header / Footer",
    description:
      "上下の固定エリア。 p-3 だけ当たってる。 ロゴや user menu を置く。",
  },
  {
    name: "Sidebar.Content",
    description:
      "<nav>。 flex-1 + min-h-0 で残りスペースを埋め、 中身が溢れたら scroll。",
  },
  {
    name: "Sidebar.Group",
    description:
      "Group label + MenuItem 群。 label prop で「Pinned」「Channels」等の小見出し。",
  },
  {
    name: "Sidebar.MenuItem / MenuButton / MenuAction",
    description:
      "1 つの nav 行。 MenuButton が link、 MenuAction が右端 absolute の kebab 等。 MenuItem に group/menu-item class で hover 時 MenuAction を opacity-100 に。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "Provider",
    type: "—",
    default: "—",
    description:
      "useState + matchMedia で開閉状態を持つ。 useSidebar() で外から取れる。",
  },
  {
    name: "Root --sidebar-w",
    type: "CSS length",
    default: '"16rem"',
    description:
      "サイドバー幅 + 閉じ時の margin-left の元値。 className の w-N で直接 width を変えると closed margin と非同期になるので、 className=\"[--sidebar-w:12rem]\" のように Tailwind arbitrary property で CSS 変数を上書きする。",
  },
  {
    name: "MenuButton.active",
    type: "boolean",
    default: "false",
    description: "active=true で bg-surface-sunken + font-semibold + 強い icon stroke。",
  },
  {
    name: "MenuButton.asChild",
    type: "boolean",
    default: "false",
    description: "Slot で別 component (router Link 等) に差し替え。",
  },
  {
    name: "MenuAction.asChild",
    type: "boolean",
    default: "false",
    description: "Menu.Trigger を Slot で MenuAction に差し替えるパターンで使う。",
  },
];

export function SidebarDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Sidebar">
        ui-lab 独自の app shell サイドバー。 Ark UI / Chakra UI には同名 primitive
        が無いので shadcn 風に自作。 Provider が open 状態を保持、 viewport
        ≥ 1024px で auto-open。 Trigger で手動 toggle、 MenuItem +
        MenuAction の hover-revealed kebab pattern もサポート。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Provider が必須。 中で Root + main を flex 並列に置き、 main 側に Trigger を置く構成が定型。"
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
        title="Basic"
        description="Provider + Root + Header / Content / Footer + Group + MenuButton の最小 compose。"
      >
        <Example
          code={`<Sidebar.Provider>
  <div className="flex h-full">
    <Sidebar.Root>
      <Sidebar.Header>...</Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.MenuItem>
            <Sidebar.MenuButton active href="/">
              <Home /> Home
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
          ...
        </Sidebar.Group>
      </Sidebar.Content>
      <Sidebar.Footer>
        <Sidebar.MenuButton href="/settings">
          <Settings /> Settings
        </Sidebar.MenuButton>
      </Sidebar.Footer>
    </Sidebar.Root>
    <main>...</main>
  </div>
</Sidebar.Provider>`}
        >
          <div className="relative h-72 overflow-hidden rounded-lg border border-border">
            <Sidebar.Provider>
              <div className="flex h-full">
                <Sidebar.Root className="[--sidebar-w:12rem]">
                  <Sidebar.Header>
                    <span className="font-semibold text-sm">ui-lab</span>
                  </Sidebar.Header>
                  <Sidebar.Content>
                    <Sidebar.Group>
                      <Sidebar.MenuItem>
                        <Sidebar.MenuButton active href="#">
                          <Home className="size-4" />
                          Home
                        </Sidebar.MenuButton>
                      </Sidebar.MenuItem>
                      <Sidebar.MenuItem>
                        <Sidebar.MenuButton href="#">
                          <Inbox className="size-4" />
                          Inbox
                        </Sidebar.MenuButton>
                      </Sidebar.MenuItem>
                      <Sidebar.MenuItem>
                        <Sidebar.MenuButton href="#">
                          <Users className="size-4" />
                          Team
                        </Sidebar.MenuButton>
                      </Sidebar.MenuItem>
                    </Sidebar.Group>
                  </Sidebar.Content>
                  <Sidebar.Footer>
                    <Sidebar.MenuButton href="#">
                      <Settings className="size-4" />
                      Settings
                    </Sidebar.MenuButton>
                  </Sidebar.Footer>
                </Sidebar.Root>
                <main className="flex-1 p-4">
                  <p className="text-fg-muted text-sm">main area</p>
                </main>
              </div>
            </Sidebar.Provider>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="With toggle trigger"
        description="Trigger を main area header に置いて開閉。 default は viewport ≥ 1024px で open。 PanelLeft icon を click で toggle。"
      >
        <Example
          code={`<main>
  <header>
    <Sidebar.Trigger />
    ...
  </header>
  ...
</main>`}
        >
          <div className="relative h-72 overflow-hidden rounded-lg border border-border">
            <Sidebar.Provider>
              <div className="flex h-full">
                <Sidebar.Root className="[--sidebar-w:12rem]">
                  <Sidebar.Header>
                    <span className="font-semibold text-sm">Workspace</span>
                  </Sidebar.Header>
                  <Sidebar.Content>
                    <Sidebar.Group label="Pinned">
                      <Sidebar.MenuItem>
                        <Sidebar.MenuButton active href="#">
                          <Star className="size-4" />
                          Starred
                        </Sidebar.MenuButton>
                      </Sidebar.MenuItem>
                    </Sidebar.Group>
                    <Sidebar.Group label="Channels">
                      <Sidebar.MenuItem>
                        <Sidebar.MenuButton href="#">
                          general
                        </Sidebar.MenuButton>
                      </Sidebar.MenuItem>
                      <Sidebar.MenuItem>
                        <Sidebar.MenuButton href="#">
                          design
                        </Sidebar.MenuButton>
                      </Sidebar.MenuItem>
                      <Sidebar.MenuItem>
                        <Sidebar.MenuButton href="#">eng</Sidebar.MenuButton>
                      </Sidebar.MenuItem>
                    </Sidebar.Group>
                  </Sidebar.Content>
                </Sidebar.Root>
                <main className="flex-1">
                  <header className="flex h-12 items-center gap-2 border-border border-b px-3">
                    <Sidebar.Trigger />
                    <ChevronsLeftRight className="size-3 text-fg-muted" />
                    <span className="text-fg-muted text-sm">
                      toggle で開閉
                    </span>
                  </header>
                  <div className="p-4">
                    <p className="text-fg-muted text-sm">main area</p>
                  </div>
                </main>
              </div>
            </Sidebar.Provider>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="MenuAction with Menu"
        description="MenuItem 内に MenuAction を置くと右端に hover で出る kebab に。 Menu.Trigger asChild で Sidebar.MenuAction に Menu を接続できる。"
      >
        <Example
          code={`<Sidebar.MenuItem>
  <Sidebar.MenuButton active={...} href="#">...</Sidebar.MenuButton>
  <Menu.Root>
    <Menu.Trigger asChild>
      <Sidebar.MenuAction>
        <MoreHorizontal />
      </Sidebar.MenuAction>
    </Menu.Trigger>
    <Menu.Content>
      <Menu.Item value="mute">Mute</Menu.Item>
      ...
    </Menu.Content>
  </Menu.Root>
</Sidebar.MenuItem>`}
        >
          <SidebarWithMenuAction />
        </Example>
      </DocSection>

      <DocSection title="Notable props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}

function SidebarWithMenuAction() {
  const [active, setActive] = useState("design");
  const items = [
    { key: "general", label: "general" },
    { key: "design", label: "design" },
    { key: "eng", label: "engineering" },
    { key: "random", label: "random" },
  ];
  return (
    <div className="relative h-72 overflow-hidden rounded-lg border border-border">
      <Sidebar.Provider>
        <div className="flex h-full">
          <Sidebar.Root className="[--sidebar-w:14rem]">
            <Sidebar.Header>
              <span className="font-semibold text-sm">Channels</span>
            </Sidebar.Header>
            <Sidebar.Content>
              <Sidebar.Group>
                {items.map((it) => (
                  <Sidebar.MenuItem key={it.key}>
                    <Sidebar.MenuButton
                      active={active === it.key}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(it.key);
                      }}
                    >
                      # {it.label}
                    </Sidebar.MenuButton>
                    <Menu.Root>
                      <Menu.Trigger asChild>
                        <Sidebar.MenuAction aria-label="その他">
                          <MoreHorizontal className="size-4" />
                        </Sidebar.MenuAction>
                      </Menu.Trigger>
                      <Menu.Content>
                        <Menu.Item value="mute">Mute</Menu.Item>
                        <Menu.Item value="pin">Pin</Menu.Item>
                        <Menu.Item
                          value="leave"
                          className="text-danger-fg"
                        >
                          Leave
                        </Menu.Item>
                      </Menu.Content>
                    </Menu.Root>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Group>
            </Sidebar.Content>
          </Sidebar.Root>
          <main className="flex-1 p-4">
            <p className="text-fg-muted text-sm">
              # {items.find((i) => i.key === active)?.label}
            </p>
          </main>
        </div>
      </Sidebar.Provider>
    </div>
  );
}
