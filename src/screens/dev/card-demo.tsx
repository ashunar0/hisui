import { ArrowRight, MoreHorizontal, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconButton } from "@/components/ui/icon-button";

const VARIANTS = ["elevated", "outline", "subtle"] as const;
const SIZES = ["sm", "md", "lg"] as const;

export function CardDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Variants />
      <Sizes />
      <Composition />
      <Pricing />
    </div>
  );
}

function Variants() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        3 variants (elevated / outline / subtle)。 Chakra UI v3 と prop 互換。
        default は outline。
      </p>
      <div className="grid grid-cols-3 gap-3">
        {VARIANTS.map((v) => (
          <Card.Root key={v} variant={v}>
            <Card.Header>
              <Card.Title>{v}</Card.Title>
              <Card.Description>variant={v}</Card.Description>
            </Card.Header>
            <Card.Body>
              <p className="text-sm text-fg-muted">
                Card content goes here. Use Body for the main payload.
              </p>
            </Card.Body>
          </Card.Root>
        ))}
      </div>
    </div>
  );
}

function Sizes() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        3 sizes (sm / md / lg)。 padding が Header / Body / Footer 共通で scale。
      </p>
      <div className="flex flex-col gap-3">
        {SIZES.map((s) => (
          <Card.Root key={s} size={s}>
            <Card.Header>
              <Card.Title>size={s}</Card.Title>
              <Card.Description>
                Header padding と Body padding が連動して伸縮。
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <p className="text-sm">Inner content.</p>
            </Card.Body>
          </Card.Root>
        ))}
      </div>
    </div>
  );
}

function Composition() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Header + Body + Footer の full composition。 Header に Badge + IconButton
        の menu trigger、 Footer に CTA button。
      </p>
      <Card.Root variant="elevated" className="max-w-md">
        <Card.Header>
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-2">
              <Badge variant="outline" colorPalette="info" size="sm">
                <Sparkles className="size-3" />
                New
              </Badge>
              <Card.Title>Weekly digest</Card.Title>
              <Card.Description>
                A summary of activity across your workspace for the past 7 days.
              </Card.Description>
            </div>
            <IconButton variant="ghost" size="sm" aria-label="More">
              <MoreHorizontal />
            </IconButton>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="grid grid-cols-3 gap-3">
            <Stat label="Active" value="48" />
            <Stat label="New" value="12" />
            <Stat label="Resolved" value="23" />
          </div>
        </Card.Body>
        <Card.Footer className="justify-between">
          <span className="text-xs text-fg-muted">Updated 2h ago</span>
          <Button size="sm" variant="outline">
            View report
            <ArrowRight className="size-3.5" />
          </Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-md border border-border bg-surface-sunken p-3">
      <span className="text-xs text-fg-muted">{label}</span>
      <span className="font-semibold text-xl tabular-nums">{value}</span>
    </div>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      features: ["3 projects", "Community support"],
      variant: "outline" as const,
    },
    {
      name: "Pro",
      price: "$24",
      features: ["Unlimited projects", "Priority support", "Analytics"],
      variant: "elevated" as const,
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["SSO / SAML", "Dedicated SE"],
      variant: "outline" as const,
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        pricing 3 plan の card group。 highlight 中央を elevated + ring で強調。
      </p>
      <div className="grid grid-cols-3 gap-3">
        {plans.map((p) => (
          <Card.Root
            key={p.name}
            variant={p.variant}
            className={p.highlight ? "ring-2 ring-fg" : undefined}
          >
            <Card.Header>
              <div className="flex items-center justify-between">
                <Card.Title>{p.name}</Card.Title>
                {p.highlight ? (
                  <Badge variant="solid" colorPalette="info" size="sm">
                    Popular
                  </Badge>
                ) : null}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-3xl">{p.price}</span>
                {p.price.startsWith("$") ? (
                  <span className="text-fg-muted text-sm">/ month</span>
                ) : null}
              </div>
            </Card.Header>
            <Card.Body>
              <ul className="flex flex-col gap-1.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="text-fg-muted">
                    {f}
                  </li>
                ))}
              </ul>
            </Card.Body>
            <Card.Footer>
              <Button
                size="sm"
                variant={p.highlight ? "solid" : "outline"}
                className="w-full"
              >
                Choose {p.name}
              </Button>
            </Card.Footer>
          </Card.Root>
        ))}
      </div>
    </div>
  );
}
