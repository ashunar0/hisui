import {
  Bell,
  Bold,
  Heart,
  Italic,
  Plus,
  Search,
  Trash2,
  Underline,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const VARIANTS = [
  "solid",
  "subtle",
  "outline",
  "ghost",
  "surface",
  "plain",
] as const;
const PALETTES = ["neutral", "success", "danger", "warning", "info"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

const PROPS: PropRow[] = [
  {
    name: "aria-label",
    type: "string",
    description: "必須。 視覚的に label が無いので screen reader 用に必ず指定。",
  },
  {
    name: "variant",
    type: '"solid" | "subtle" | "outline" | "ghost" | "surface" | "plain"',
    default: '"ghost"',
    description:
      "見た目のスタイル。 Button と同じ map を共有。 default は ghost (toolbar 並列前提)。",
  },
  {
    name: "colorPalette",
    type: '"neutral" | "success" | "danger" | "warning" | "info"',
    default: '"neutral"',
    description: "意味を表す色。 semantic token に紐づき light/dark 両対応。",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg"',
    default: '"md"',
    description: "正方形のサイズ。 size-6 / 7 / 8 / 10。",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Spinner を表示し disabled 化。",
  },
  {
    name: "asChild",
    type: "boolean",
    default: "false",
    description: "子要素にスタイルを移譲 (Link を IconButton 見た目にする)。",
  },
];

export function IconButtonDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="IconButton">
        icon だけを置く正方形ボタン。 toolbar / nav header / list row の action
        で使う。 Button と同じ variant × colorPalette × size の 3 軸で、 default
        variant だけ <code>ghost</code> (並列に置く前提)。
      </DocHeader>

      <DocSection
        title="Usage"
        description="default は ghost / neutral / md。 aria-label が必須。"
      >
        <Example
          code={`<IconButton aria-label="Add">
  <Plus className="size-4" />
</IconButton>`}
        >
          <IconButton aria-label="Add">
            <Plus className="size-4" />
          </IconButton>
        </Example>
      </DocSection>

      <DocSection
        title="Variants"
        description="6 種。 Button と同じ map。 toolbar 並列は ghost、 単発 CTA は solid / outline。"
      >
        <Example
          code={VARIANTS.map(
            (v) =>
              `<IconButton variant="${v}" aria-label="Bell"><Bell className="size-4" /></IconButton>`,
          ).join("\n")}
        >
          <div className="flex flex-wrap items-center gap-3">
            {VARIANTS.map((v) => (
              <IconButton key={v} variant={v} aria-label={`Bell ${v}`}>
                <Bell className="size-4" />
              </IconButton>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Color palettes"
        description="意味を表す 5 色。 例は subtle で比較。"
      >
        <Example
          code={PALETTES.map(
            (p) =>
              `<IconButton variant="subtle" colorPalette="${p}" aria-label="Heart"><Heart className="size-4" /></IconButton>`,
          ).join("\n")}
        >
          <div className="flex flex-wrap items-center gap-3">
            {PALETTES.map((p) => (
              <IconButton
                key={p}
                variant="subtle"
                colorPalette={p}
                aria-label={`Heart ${p}`}
              >
                <Heart className="size-4" />
              </IconButton>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Sizes"
        description="size-6 / 7 / 8 / 10。 icon は size-3.5 〜 size-5 で連動させる。"
      >
        <Example
          code={SIZES.map(
            (s) =>
              `<IconButton size="${s}" aria-label="Search"><Search /></IconButton>`,
          ).join("\n")}
        >
          <div className="flex flex-wrap items-center gap-3">
            {SIZES.map((s) => (
              <IconButton key={s} size={s} aria-label={`Search ${s}`}>
                <Search
                  className={
                    s === "xs"
                      ? "size-3.5"
                      : s === "sm"
                        ? "size-3.5"
                        : s === "md"
                          ? "size-4"
                          : "size-5"
                  }
                />
              </IconButton>
            ))}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Toolbar"
        description="ghost variant を横に並べる典型パターン。 Separator で group 化。"
      >
        <Example
          code={`<div className="inline-flex items-center gap-1 rounded-md border border-border p-1">
  <IconButton aria-label="Bold"><Bold className="size-4" /></IconButton>
  <IconButton aria-label="Italic"><Italic className="size-4" /></IconButton>
  <IconButton aria-label="Underline"><Underline className="size-4" /></IconButton>
</div>`}
        >
          <div className="inline-flex items-center gap-1 rounded-md border border-border p-1">
            <IconButton aria-label="Bold">
              <Bold className="size-4" />
            </IconButton>
            <IconButton aria-label="Italic">
              <Italic className="size-4" />
            </IconButton>
            <IconButton aria-label="Underline">
              <Underline className="size-4" />
            </IconButton>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Destructive"
        description="削除系は colorPalette=danger + variant=ghost で row 内に控えめに置く。"
      >
        <Example
          code={`<IconButton colorPalette="danger" aria-label="Delete">
  <Trash2 className="size-4" />
</IconButton>
<IconButton variant="subtle" colorPalette="danger" aria-label="Delete">
  <Trash2 className="size-4" />
</IconButton>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <IconButton colorPalette="danger" aria-label="Delete">
              <Trash2 className="size-4" />
            </IconButton>
            <IconButton
              variant="subtle"
              colorPalette="danger"
              aria-label="Delete subtle"
            >
              <Trash2 className="size-4" />
            </IconButton>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Loading"
        description="loading で built-in Spinner に差し替え。"
      >
        <Example
          code={`<IconButton loading aria-label="Saving">
  <Plus className="size-4" />
</IconButton>`}
        >
          <IconButton loading aria-label="Saving">
            <Plus className="size-4" />
          </IconButton>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
