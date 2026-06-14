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
              {
                id: "src/components/ui",
                name: "ui",
                children: [
                  { id: "src/components/ui/button.tsx", name: "button.tsx" },
                  { id: "src/components/ui/card.tsx", name: "card.tsx" },
                  {
                    id: "src/components/ui/tree-view.tsx",
                    name: "tree-view.tsx",
                  },
                ],
              },
              { id: "src/components/app-sidebar.tsx", name: "app-sidebar.tsx" },
            ],
          },
          {
            id: "src/screens",
            name: "screens",
            children: [
              { id: "src/screens/Dashboard.tsx", name: "Dashboard.tsx" },
              { id: "src/screens/Mail.tsx", name: "Mail.tsx" },
            ],
          },
          { id: "src/main.tsx", name: "main.tsx" },
        ],
      },
      {
        id: "public",
        name: "public",
        children: [{ id: "public/favicon.svg", name: "favicon.svg" }],
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
      {
        id: "settings",
        name: "Workspace settings",
        children: [
          { id: "settings:general", name: "General" },
          { id: "settings:integrations", name: "Integrations" },
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

export function TreeViewDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex w-72 flex-col gap-2">
        <span className="text-xs text-fg-muted">
          file explorer (selected highlight、 BranchIndicator で chevron 回転)
        </span>
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

      <div className="flex w-80 flex-col gap-2">
        <span className="text-xs text-fg-muted">
          checkbox tree (selectionMode=multiple、 parent が子状態で indeterminate)
        </span>
        <TreeView.Root
          collection={permCollection}
          selectionMode="multiple"
          defaultExpandedValue={["billing", "team"]}
          defaultSelectedValue={["billing:read", "team:read", "team:invite"]}
        >
          <TreeView.Label>Role permissions</TreeView.Label>
          <TreeView.Tree>
            {permCollection.rootNode.children?.map((child, i) =>
              renderPermNode(child, [i]),
            )}
          </TreeView.Tree>
        </TreeView.Root>
      </div>

      <div className="flex w-64 flex-col gap-2">
        <span className="text-xs text-fg-muted">
          sidebar nav + ItemIndicator (selected leaf に右 dot)
        </span>
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
    </div>
  );
}
