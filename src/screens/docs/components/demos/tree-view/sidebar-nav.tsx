"use client";

import { createTreeCollection } from "@ark-ui/react/collection";
import {
  Bell,
  Inbox,
  Settings,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { TreeView } from "@/components/ui/tree-view";

interface NavNode {
  id: string;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  children?: NavNode[];
}

const collection = createTreeCollection<NavNode>({
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

function renderNode(node: NavNode, indexPath: number[]) {
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
              renderNode(child, [...indexPath, i]),
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

export default function TreeViewSidebarNavDemo() {
  return (
    <div className="w-64">
      <TreeView.Root
        collection={collection}
        defaultExpandedValue={["team"]}
        defaultSelectedValue={["inbox"]}
      >
        <TreeView.Label>Workspace</TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((child, i) =>
            renderNode(child, [i]),
          )}
        </TreeView.Tree>
      </TreeView.Root>
    </div>
  );
}
