import { createTreeCollection } from "@ark-ui/react/collection";
import {
  Bell,
  File,
  Folder,
  Inbox,
  Settings,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { TreeView } from "@/components/ui/tree-view";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

interface FileNode {
  id: string;
  name: string;
  children?: FileNode[];
}

const fileCollection = createTreeCollection<FileNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "src",
        name: "src",
        children: [
          {
            id: "src/components",
            name: "components",
            children: [
              { id: "src/components/button.tsx", name: "button.tsx" },
              { id: "src/components/card.tsx", name: "card.tsx" },
              { id: "src/components/tree-view.tsx", name: "tree-view.tsx" },
            ],
          },
          { id: "src/main.tsx", name: "main.tsx" },
        ],
      },
      { id: "package.json", name: "package.json" },
      { id: "tsconfig.json", name: "tsconfig.json" },
    ],
  },
});

function renderFileNode(node: FileNode, indexPath: number[]) {
  if (node.children) {
    return (
      <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchIndicator />
            <Folder
              className="size-4 shrink-0 text-fg-muted"
              strokeWidth={1.75}
            />
            <TreeView.BranchText>{node.name}</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            {node.children.map((child, i) =>
              renderFileNode(child, [...indexPath, i]),
            )}
          </TreeView.BranchContent>
        </TreeView.Branch>
      </TreeView.NodeProvider>
    );
  }
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      <TreeView.Item>
        <File className="size-4 shrink-0 text-fg-muted" strokeWidth={1.75} />
        <TreeView.ItemText>{node.name}</TreeView.ItemText>
      </TreeView.Item>
    </TreeView.NodeProvider>
  );
}

interface PermNode {
  id: string;
  name: string;
  children?: PermNode[];
}

const permCollection = createTreeCollection<PermNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "billing",
        name: "Billing",
        children: [
          { id: "billing:read", name: "Read invoices" },
          { id: "billing:write", name: "Edit invoices" },
          { id: "billing:refund", name: "Issue refunds" },
        ],
      },
      {
        id: "team",
        name: "Team",
        children: [
          { id: "team:read", name: "View members" },
          { id: "team:invite", name: "Invite members" },
          { id: "team:remove", name: "Remove members" },
        ],
      },
    ],
  },
});

function renderPermNode(node: PermNode, indexPath: number[]) {
  if (node.children) {
    return (
      <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchIndicator />
            <TreeView.NodeCheckbox />
            <TreeView.BranchText>{node.name}</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            {node.children.map((child, i) =>
              renderPermNode(child, [...indexPath, i]),
            )}
          </TreeView.BranchContent>
        </TreeView.Branch>
      </TreeView.NodeProvider>
    );
  }
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      <TreeView.Item>
        <TreeView.NodeCheckbox />
        <TreeView.ItemText>{node.name}</TreeView.ItemText>
      </TreeView.Item>
    </TreeView.NodeProvider>
  );
}

interface NavNode {
  id: string;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  children?: NavNode[];
}

const navCollection = createTreeCollection<NavNode>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    icon: Inbox,
    children: [
      { id: "inbox", name: "Inbox", icon: Inbox },
      { id: "starred", name: "Starred", icon: Star },
      {
        id: "team",
        name: "Team",
        icon: Users,
        children: [
          { id: "team/asahi", name: "asahi", icon: Users },
          { id: "team/zundamon", name: "zundamon", icon: Users },
        ],
      },
      { id: "alerts", name: "Alerts", icon: Bell },
      { id: "security", name: "Security", icon: ShieldCheck },
      { id: "settings", name: "Settings", icon: Settings },
    ],
  },
});

function renderNavNode(node: NavNode, indexPath: number[]) {
  const Icon = node.icon;
  if (node.children) {
    return (
      <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchIndicator />
            <Icon className="size-4 shrink-0" strokeWidth={1.75} />
            <TreeView.BranchText>{node.name}</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            {node.children.map((child, i) =>
              renderNavNode(child, [...indexPath, i]),
            )}
          </TreeView.BranchContent>
        </TreeView.Branch>
      </TreeView.NodeProvider>
    );
  }
  return (
    <TreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      <TreeView.Item className="justify-between">
        <span className="flex min-w-0 items-center gap-1.5">
          <Icon className="size-4 shrink-0" strokeWidth={1.75} />
          <TreeView.ItemText>{node.name}</TreeView.ItemText>
        </span>
        <TreeView.ItemIndicator />
      </TreeView.Item>
    </TreeView.NodeProvider>
  );
}

const PARTS = [
  {
    name: "TreeView.Root",
    description:
      "外枠。 collection / selectionMode / defaultExpandedValue / defaultSelectedValue を受ける。",
  },
  {
    name: "TreeView.Tree",
    description:
      "node 列の bordered container。 紙のような card に node を並べる。",
  },
  {
    name: "TreeView.NodeProvider",
    description:
      "各 node を render する時の wrapper。 node と indexPath を渡す (再帰 render の boilerplate)。",
  },
  {
    name: "TreeView.Branch / BranchControl / BranchIndicator / BranchText / BranchContent / BranchIndentGuide",
    description:
      "children を持つ node。 BranchControl が行、 BranchContent が展開部分、 BranchIndentGuide が縦線。 BranchIndicator は file tree convention で右向き chevron + open で 90deg 回転 (Collapsible/Accordion とは別 pattern)。",
  },
  {
    name: "TreeView.Item / ItemText / ItemIndicator",
    description:
      "leaf node。 ItemIndicator は selected で表示される dot。 file explorer / nav どちらにも。",
  },
  {
    name: "TreeView.NodeCheckbox / NodeCheckboxIndicator",
    description:
      "checkbox tree 用の checkbox。 親 node は子の状態によって indeterminate になる。 Check / Minus は group-data 経由で切替。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "collection",
    type: "TreeCollection<T>",
    default: "—",
    description:
      "createTreeCollection({ nodeToValue, nodeToString, rootNode }) で作る tree データ。 これが必須。",
  },
  {
    name: "selectionMode",
    type: '"single" | "multiple"',
    default: '"single"',
    description: "leaf を 1 つだけ選ぶか、 NodeCheckbox で複数選ぶか。",
  },
  {
    name: "defaultExpandedValue",
    type: "string[]",
    default: "[]",
    description: "初期表示で開いておく branch の value。",
  },
  {
    name: "defaultSelectedValue",
    type: "string[]",
    default: "[]",
    description: "初期 selected の node value。",
  },
  {
    name: "expandOnClick",
    type: "boolean",
    default: "true",
    description:
      "BranchControl 全体をクリックで expand。 false で BranchIndicator だけ反応にも。",
  },
];

export function TreeViewDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="TreeView">
        階層 list を render する primitive。 data は createTreeCollection で
        作って Root に collection prop で渡す。 再帰 render は NodeProvider +
        Branch / Item の組み合わせで自分で書く (Ark UI の規約)。 selectionMode
        で single / multiple、 NodeCheckbox で 3 状態 (checked /
        indeterminate / unchecked) も対応。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="render 関数を 1 つ書いて、 children を再帰呼び出しするのが基本パターン。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[18rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="File explorer"
        description="children を持つ node = Branch、 ない node = Item。 BranchIndicator は file tree convention で chevron を rotate-90 (右→下)。"
      >
        <Example
          code={`const collection = createTreeCollection<FileNode>({
  nodeToValue: (n) => n.id,
  nodeToString: (n) => n.name,
  rootNode: { id: "ROOT", name: "", children: [...] },
});

function render(node, indexPath) {
  if (node.children) {
    return (
      <TreeView.NodeProvider node={node} indexPath={indexPath}>
        <TreeView.Branch>
          <TreeView.BranchControl>
            <TreeView.BranchIndicator />
            <Folder /> <TreeView.BranchText>{node.name}</TreeView.BranchText>
          </TreeView.BranchControl>
          <TreeView.BranchContent>
            <TreeView.BranchIndentGuide />
            {node.children.map((c, i) => render(c, [...indexPath, i]))}
          </TreeView.BranchContent>
        </TreeView.Branch>
      </TreeView.NodeProvider>
    );
  }
  return (
    <TreeView.NodeProvider node={node} indexPath={indexPath}>
      <TreeView.Item>
        <File /> <TreeView.ItemText>{node.name}</TreeView.ItemText>
      </TreeView.Item>
    </TreeView.NodeProvider>
  );
}

<TreeView.Root collection={collection} defaultExpandedValue={["src"]}>
  <TreeView.Label>Files</TreeView.Label>
  <TreeView.Tree>
    {collection.rootNode.children?.map((c, i) => render(c, [i]))}
  </TreeView.Tree>
</TreeView.Root>`}
        >
          <div className="w-72">
            <TreeView.Root
              collection={fileCollection}
              defaultExpandedValue={["src", "src/components"]}
            >
              <TreeView.Label>Files</TreeView.Label>
              <TreeView.Tree>
                {fileCollection.rootNode.children?.map((child, i) =>
                  renderFileNode(child, [i]),
                )}
              </TreeView.Tree>
            </TreeView.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Checkbox tree"
        description="selectionMode=multiple + NodeCheckbox で permission UI 風に。 親は子の選択状態に応じて自動で checked / indeterminate / unchecked を切替。"
      >
        <Example
          code={`<TreeView.Root
  collection={permCollection}
  selectionMode="multiple"
  defaultSelectedValue={["billing:read", "team:read"]}
>
  ...
  <TreeView.NodeCheckbox />
  ...
</TreeView.Root>`}
        >
          <div className="w-80">
            <TreeView.Root
              collection={permCollection}
              selectionMode="multiple"
              defaultExpandedValue={["billing", "team"]}
              defaultSelectedValue={[
                "billing:read",
                "team:read",
                "team:invite",
              ]}
            >
              <TreeView.Label>Role permissions</TreeView.Label>
              <TreeView.Tree>
                {permCollection.rootNode.children?.map((child, i) =>
                  renderPermNode(child, [i]),
                )}
              </TreeView.Tree>
            </TreeView.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Sidebar nav"
        description="ItemIndicator を leaf の右端に置くと、 selected な行に dot が出る。 Item を justify-between にして label と Indicator を両端配置。"
      >
        <Example
          code={`<TreeView.Item className="justify-between">
  <span className="flex items-center gap-1.5">
    <Icon /> <TreeView.ItemText>{name}</TreeView.ItemText>
  </span>
  <TreeView.ItemIndicator />
</TreeView.Item>`}
        >
          <div className="w-64">
            <TreeView.Root
              collection={navCollection}
              defaultExpandedValue={["team"]}
              defaultSelectedValue={["inbox"]}
            >
              <TreeView.Label>Workspace</TreeView.Label>
              <TreeView.Tree>
                {navCollection.rootNode.children?.map((child, i) =>
                  renderNavNode(child, [i]),
                )}
              </TreeView.Tree>
            </TreeView.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
