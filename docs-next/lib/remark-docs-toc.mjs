import { valueToEstree } from "estree-util-value-to-estree";
import { visit } from "unist-util-visit";

function mdastText(node) {
  if (!node) return "";
  if (node.type === "text" || node.type === "inlineCode") return node.value ?? "";
  if (Array.isArray(node.children)) return node.children.map(mdastText).join("");
  return "";
}

function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * remark plugin。 MDX 文書から h2 を抽出して、
 * 先頭に `<OnThisPage initialItems={[...]} />` JSX を挿入する。
 * これにより SSR 時点で toc が確定し、 hydration 後に DOM scan で同期される。
 *
 * 想定: `OnThisPage` は mdxComponents map 経由で解決される (import 不要)。
 */
export default function remarkDocsToc() {
  return (tree) => {
    const items = [];
    visit(tree, "heading", (node) => {
      if (node.depth !== 2) return;
      const text = mdastText(node).trim();
      if (text) items.push({ id: slugify(text), text });
    });

    // body 全体を <DocsShell toc={[...]}>...</DocsShell> で包む。
    // mdxjsEsm (import / export) は root に残し、 それ以外を shell の children に移す。
    const esm = [];
    const body = [];
    for (const node of tree.children) {
      if (node.type === "mdxjsEsm") esm.push(node);
      else body.push(node);
    }

    const tocAttr = {
      type: "mdxJsxAttribute",
      name: "toc",
      value:
        items.length === 0
          ? null
          : {
              type: "mdxJsxAttributeValueExpression",
              value: JSON.stringify(items),
              data: {
                estree: {
                  type: "Program",
                  sourceType: "module",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: valueToEstree(items),
                    },
                  ],
                },
              },
            },
    };

    const shell = {
      type: "mdxJsxFlowElement",
      name: "DocsShell",
      attributes: items.length === 0 ? [] : [tocAttr],
      children: body,
    };

    tree.children = [...esm, shell];
  };
}
