"use client";

import { List } from "@/components/ui/list";

export default function ListOrderedDemo() {
  return (
    <List.Root as="ol">
      <List.Item>npx hisui-ui init</List.Item>
      <List.Item>npx hisui-ui add button</List.Item>
      <List.Item>import and use</List.Item>
    </List.Root>
  );
}
