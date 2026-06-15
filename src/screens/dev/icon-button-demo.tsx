import {
  Bell,
  Bold,
  Heart,
  Italic,
  MoreHorizontal,
  Plus,
  Search,
  Star,
  Trash2,
  Underline,
} from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";

const VARIANTS = ["solid", "subtle", "outline", "ghost", "surface", "plain"] as const;
const PALETTES = ["neutral", "success", "danger", "warning", "info"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

export function IconButtonDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Variants />
      <Matrix />
      <Sizes />
      <InContext />
    </div>
  );
}

function Variants() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Button と同じ variant / colorPalette / size を共有。 default は
        variant=ghost (Button は solid だが IconButton は toolbar 並列前提)。
        aria-label 必須。
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {VARIANTS.map((v) => (
          <IconButton key={v} variant={v} aria-label={v}>
            <Heart className="size-4" />
          </IconButton>
        ))}
      </div>
    </div>
  );
}

function Matrix() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        variant × colorPalette の 6 × 5 matrix。 Button と同じ map を流用。
      </p>
      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-sunken">
              <th className="px-3 py-2 text-left font-medium text-fg-soft text-xs">
                variant ↓ / palette →
              </th>
              {PALETTES.map((p) => (
                <th
                  key={p}
                  className="px-3 py-2 text-left font-medium text-fg-soft text-xs"
                >
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {VARIANTS.map((v, i) => (
              <tr key={v} className={i > 0 ? "border-t border-border" : ""}>
                <td className="px-3 py-2 text-fg-muted text-xs">{v}</td>
                {PALETTES.map((p) => (
                  <td key={p} className="px-3 py-2">
                    <IconButton
                      variant={v}
                      colorPalette={p}
                      size="sm"
                      aria-label={`${v} ${p}`}
                    >
                      <Star className="size-3.5" />
                    </IconButton>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Sizes() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        4 sizes (xs / sm / md / lg)。 size-6 / size-7 / size-8 / size-10 の
        正方形固定。
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {SIZES.map((s) => (
          <IconButton key={s} size={s} aria-label={`size ${s}`}>
            <Bell className="size-4" />
          </IconButton>
        ))}
      </div>
    </div>
  );
}

function InContext() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        toolbar (text editor 風 outline + 排他 toggle) / inline action (Card
        の右上 More menu) / loading (送信中) / danger (destructive icon-only) の
        実用パターン。
      </p>
      <div className="flex flex-col gap-3">
        <div className="inline-flex w-fit items-center gap-1 rounded-lg border border-border bg-surface p-1">
          <IconButton variant="ghost" aria-label="Bold">
            <Bold className="size-4" />
          </IconButton>
          <IconButton variant="ghost" aria-label="Italic">
            <Italic className="size-4" />
          </IconButton>
          <IconButton variant="ghost" aria-label="Underline">
            <Underline className="size-4" />
          </IconButton>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-lg border border-border p-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Inbox</span>
            <span className="text-xs text-fg-muted">12 new</span>
          </div>
          <div className="flex items-center gap-1">
            <IconButton aria-label="検索">
              <Search className="size-4" />
            </IconButton>
            <IconButton aria-label="新規">
              <Plus className="size-4" />
            </IconButton>
            <IconButton aria-label="その他">
              <MoreHorizontal className="size-4" />
            </IconButton>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IconButton loading aria-label="Saving">
            <Bell className="size-4" />
          </IconButton>
          <IconButton colorPalette="danger" aria-label="削除">
            <Trash2 className="size-4" />
          </IconButton>
          <IconButton
            variant="outline"
            colorPalette="danger"
            aria-label="削除 outline"
          >
            <Trash2 className="size-4" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
