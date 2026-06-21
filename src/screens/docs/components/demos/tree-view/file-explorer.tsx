import { createTreeCollection } from "@ark-ui/react/collection";
import { File, Folder } from "lucide-react";
import { TreeView } from "@/components/ui/tree-view";

interface FileNode {
  id: string;
  name: string;
  children?: FileNode[];
}

const collection = createTreeCollection<FileNode>({
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

function renderNode(node: FileNode, indexPath: number[]) {
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
        <File className="size-4 shrink-0 text-fg-muted" strokeWidth={1.75} />
        <TreeView.ItemText>{node.name}</TreeView.ItemText>
      </TreeView.Item>
    </TreeView.NodeProvider>
  );
}

export default function TreeViewFileExplorerDemo() {
  return (
    <div className="w-72">
      <TreeView.Root
        collection={collection}
        defaultExpandedValue={["src", "src/components"]}
      >
        <TreeView.Label>Files</TreeView.Label>
        <TreeView.Tree>
          {collection.rootNode.children?.map((child, i) =>
            renderNode(child, [i]),
          )}
        </TreeView.Tree>
      </TreeView.Root>
    </div>
  );
}
