"use client";

import { createTreeCollection } from "@ark-ui/react/collection";
import { TreeView } from "@/components/ui/tree-view";

interface PermNode {
  id: string;
  name: string;
  children?: PermNode[];
}

const collection = createTreeCollection<PermNode>({
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

function renderNode(node: PermNode, indexPath: number[]) {
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
              renderNode(child, [...indexPath, i]),
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

export default function TreeViewCheckboxTreeDemo() {
  return (
    <div className="w-80">
      <TreeView.Root
        collection={collection}
        selectionMode="multiple"
        defaultExpandedValue={["billing", "team"]}
        defaultSelectedValue={["billing:read", "team:read", "team:invite"]}
      >
        <TreeView.Label>Role permissions</TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((child, i) =>
            renderNode(child, [i]),
          )}
        </TreeView.Tree>
      </TreeView.Root>
    </div>
  );
}
