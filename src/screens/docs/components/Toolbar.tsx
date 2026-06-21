import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Redo2,
  Underline,
  Undo2,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { Toolbar } from "@/components/ui/toolbar";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Toolbar.Root",
    description:
      "role=toolbar の bordered container。 inline-flex + gap-1 + p-1 で button が並ぶ rail。 orientation=vertical で縦にも。",
  },
  {
    name: "Toolbar.Separator",
    description:
      "vertical Separator + h-5 + mx-1 を当てた group 区切り。 plain 1px line で 2 group を分ける。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description:
      "横並び (default) か縦並び。 aria-orientation も自動で同期。",
  },
  {
    name: "aria-label",
    type: "string",
    default: "—",
    description:
      "toolbar の用途を screen reader に伝える。 Text formatting 等。",
  },
];

export function ToolbarDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Toolbar">
        IconButton / ToggleGroup / button 等を 1 列に並べる bordered rail。
        zag-js は使わず plain HTML + role=toolbar の単純 wrapper。 group の
        区切りには Toolbar.Separator を挟む。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="中身は何でも置ける。 IconButton と ToggleGroup を組み合わせるのが定型。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[12rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Rich text editor"
        description="IconButton + ToggleGroup を Separator で区切る典型例。 a11y のために Toolbar.Root に aria-label を必ず付ける。"
      >
        <Example
          code={`<Toolbar.Root aria-label="Text formatting">
  <IconButton aria-label="Undo"><Undo2 /></IconButton>
  <IconButton aria-label="Redo"><Redo2 /></IconButton>
  <Toolbar.Separator />
  <ToggleGroup.Root multiple>
    <ToggleGroup.Item value="bold" aria-label="Bold"><Bold /></ToggleGroup.Item>
    ...
  </ToggleGroup.Root>
  <Toolbar.Separator />
  <ToggleGroup.Root defaultValue={["left"]}>
    ...alignment items
  </ToggleGroup.Root>
</Toolbar.Root>`}
        >
          <Toolbar.Root aria-label="Text formatting">
            <IconButton aria-label="Undo">
              <Undo2 className="size-4" />
            </IconButton>
            <IconButton aria-label="Redo">
              <Redo2 className="size-4" />
            </IconButton>
            <Toolbar.Separator />
            <ToggleGroup.Root multiple>
              <ToggleGroup.Item value="bold" aria-label="Bold">
                <Bold className="size-4" />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="italic" aria-label="Italic">
                <Italic className="size-4" />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="underline" aria-label="Underline">
                <Underline className="size-4" />
              </ToggleGroup.Item>
            </ToggleGroup.Root>
            <Toolbar.Separator />
            <ToggleGroup.Root defaultValue={["left"]}>
              <ToggleGroup.Item value="left" aria-label="Align left">
                <AlignLeft className="size-4" />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="center" aria-label="Align center">
                <AlignCenter className="size-4" />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="right" aria-label="Align right">
                <AlignRight className="size-4" />
              </ToggleGroup.Item>
            </ToggleGroup.Root>
            <Toolbar.Separator />
            <ToggleGroup.Root>
              <ToggleGroup.Item value="ul" aria-label="Bullet list">
                <List className="size-4" />
              </ToggleGroup.Item>
              <ToggleGroup.Item value="ol" aria-label="Numbered list">
                <ListOrdered className="size-4" />
              </ToggleGroup.Item>
            </ToggleGroup.Root>
          </Toolbar.Root>
        </Example>
      </DocSection>

      <DocSection
        title="View switcher"
        description="ToggleGroup single で view を切替 + 普通の button を Separator で分ける。 dashboard 上部に置く想定。"
      >
        <Example
          code={`<Toolbar.Root aria-label="Workspace toolbar">
  <ToggleGroup.Root defaultValue={["grid"]}>
    <ToggleGroup.Item value="grid">Grid</ToggleGroup.Item>
    <ToggleGroup.Item value="list">List</ToggleGroup.Item>
    <ToggleGroup.Item value="kanban">Kanban</ToggleGroup.Item>
  </ToggleGroup.Root>
  <Toolbar.Separator />
  <button>Filter</button>
  <button>Sort</button>
</Toolbar.Root>`}
        >
          <Toolbar.Root aria-label="Workspace toolbar">
            <ToggleGroup.Root defaultValue={["grid"]}>
              <ToggleGroup.Item value="grid">Grid</ToggleGroup.Item>
              <ToggleGroup.Item value="list">List</ToggleGroup.Item>
              <ToggleGroup.Item value="kanban">Kanban</ToggleGroup.Item>
            </ToggleGroup.Root>
            <Toolbar.Separator />
            <button
              type="button"
              className="inline-flex h-8 items-center rounded px-3 font-medium text-fg text-sm hover:bg-hover"
            >
              Filter
            </button>
            <button
              type="button"
              className="inline-flex h-8 items-center rounded px-3 font-medium text-fg text-sm hover:bg-hover"
            >
              Sort
            </button>
          </Toolbar.Root>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
