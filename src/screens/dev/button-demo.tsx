import { useState } from "react";
import { ArrowRight, Download, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VARIANTS = ["solid", "subtle", "outline", "ghost", "surface", "plain"] as const;
const PALETTES = ["neutral", "success", "danger", "warning", "info"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Variants />
      <Matrix />
      <Sizes />
      <Loading />
      <WithIcon />
    </div>
  );
}

function Variants() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        6 variants (solid / subtle / outline / ghost / surface / plain)。 Chakra
        UI v3 と prop 互換。 default は variant=solid / colorPalette=neutral /
        size=md。
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {VARIANTS.map((v) => (
          <Button key={v} variant={v}>
            {v}
          </Button>
        ))}
      </div>
    </div>
  );
}

function Matrix() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        variant × colorPalette の 6 × 5 matrix。 Badge と同じ semantic palette。
        subtle / outline / ghost / surface の hover は bg-(color)-border or
        bg-(color)-subtle で接触感。
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
                    <Button variant={v} colorPalette={p} size="sm">
                      Button
                    </Button>
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
        4 sizes (xs / sm / md / lg)。 h-7 / h-8 / h-10 / h-12 にスケール。
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {SIZES.map((s) => (
          <Button key={s} size={s}>
            size={s}
          </Button>
        ))}
      </div>
    </div>
  );
}

function Loading() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        loading=true で Spinner を表示、 disabled + aria-busy も自動付与。
        loadingText で文言差替。
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Button loading>Loading</Button>
        <Button loading variant="outline">
          Outline loading
        </Button>
        <Button loading colorPalette="danger">
          Deleting
        </Button>
        <Button loading loadingText="Saving...">
          Save
        </Button>
        <Button
          onClick={() => {
            setLoading(true);
            window.setTimeout(() => setLoading(false), 1500);
          }}
          loading={loading}
          loadingText="Submitting"
        >
          Click to submit
        </Button>
      </div>
    </div>
  );
}

function WithIcon() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        children に icon を直接置く (Chakra v3 流、 leftIcon prop は廃止)。 gap は
        size に応じて自動 (gap-2 / gap-1.5)。
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <Button>
          <Plus className="size-4" />
          New project
        </Button>
        <Button variant="outline">
          <Download className="size-4" />
          Download
        </Button>
        <Button variant="ghost">
          Learn more
          <ArrowRight className="size-4" />
        </Button>
        <Button colorPalette="danger" variant="outline">
          <Trash2 className="size-4" />
          Delete
        </Button>
      </div>
    </div>
  );
}
