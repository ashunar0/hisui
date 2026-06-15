import {
  AlertTriangle,
  Check,
  CircleDot,
  Info,
  Sparkles,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const VARIANTS = ["solid", "subtle", "outline", "surface", "plain"] as const;
const PALETTES = ["neutral", "success", "danger", "warning", "info"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

export function BadgeDemo() {
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
        5 variants (solid / subtle / outline / surface / plain)。 Chakra UI v3
        と prop 互換。 default は variant=subtle / colorPalette=neutral / size=md。
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {VARIANTS.map((v) => (
          <Badge key={v} variant={v}>
            {v}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function Matrix() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        variant × colorPalette の 5 × 5 matrix。 colorPalette は semantic
        token (neutral / success / danger / warning / info) で light/dark 両対応。
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
                    <Badge variant={v} colorPalette={p}>
                      Label
                    </Badge>
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
        4 sizes (xs / sm / md / lg)。 px / py / font-size をスケール。
      </p>
      <div className="flex flex-wrap items-end gap-2">
        {SIZES.map((s) => (
          <Badge key={s} size={s} colorPalette="info">
            size={s}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function InContext() {
  const rows = [
    {
      name: "Acme Corp",
      value: "$12,400",
      palette: "success" as const,
      label: "Paid",
      icon: <Check className="size-3" />,
    },
    {
      name: "Globex",
      value: "$3,200",
      palette: "warning" as const,
      label: "Due in 3d",
      icon: <AlertTriangle className="size-3" />,
    },
    {
      name: "Initech",
      value: "$8,750",
      palette: "danger" as const,
      label: "Overdue",
      icon: <X className="size-3" />,
    },
    {
      name: "Hooli",
      value: "$1,500",
      palette: "neutral" as const,
      label: "Draft",
      icon: null,
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        実用パターン。 heading 横 count chip (solid + info) / list row の status
        (subtle + 各 palette + 左 icon) / inline tag (outline) を組合せ。
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">Inbox</h3>
          <Badge variant="solid" colorPalette="info" size="sm">
            12
          </Badge>
          <Badge variant="outline" size="sm">
            <Sparkles className="size-3" />
            Beta
          </Badge>
          <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-fg-muted">
            <CircleDot className="size-3" /> Live
          </span>
        </div>
        <div className="overflow-hidden rounded-lg border border-border">
          {rows.map((row, i) => (
            <div
              key={row.name}
              className={
                "flex items-center justify-between gap-3 px-3 py-2.5" +
                (i > 0 ? " border-t border-border" : "")
              }
            >
              <span className="text-sm">{row.name}</span>
              <div className="flex items-center gap-3">
                <span className="tabular-nums text-sm text-fg-muted">
                  {row.value}
                </span>
                <Badge colorPalette={row.palette} size="sm">
                  {row.icon}
                  {row.label}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" colorPalette="info" size="sm">
            <Info className="size-3" />
            v2.4.0
          </Badge>
          <Badge variant="outline" colorPalette="success" size="sm">
            stable
          </Badge>
          <Badge variant="outline" colorPalette="warning" size="sm">
            deprecated
          </Badge>
        </div>
      </div>
    </div>
  );
}
