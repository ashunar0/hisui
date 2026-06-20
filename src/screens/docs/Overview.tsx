import {
  Boxes,
  CircleDashed,
  Component,
  Layers,
  Palette,
  Ruler,
  Sparkles,
  Type,
} from "lucide-react";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const STATS = [
  { label: "Ark UI primitives", value: "42" },
  { label: "自作 primitives", value: "22" },
  { label: "semantic tokens", value: "20+" },
];

const NEXT = [
  {
    to: "/docs/foundations/colors",
    icon: Palette,
    title: "Colors",
    description: "semantic token と light / dark の対応を一覧する。",
  },
  {
    to: "/docs/foundations/typography",
    icon: Type,
    title: "Typography",
    description: "font-family、 Heading scale、 weight、 fg token の方針。",
  },
  {
    to: "/docs/foundations/spacing",
    icon: Ruler,
    title: "Spacing",
    description: "4px grid の scale と Stack gap enum の対応表。",
  },
  {
    to: "/docs/foundations/shadow",
    icon: Layers,
    title: "Shadow",
    description: "hairline + drop + halo の 3 層構成と mid / high の 2 段階。",
  },
  {
    to: "/docs/foundations/radius",
    icon: CircleDashed,
    title: "Radius",
    description: "rounded-* の 7 段階と nesting ルール。",
  },
];

export function Overview() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Badge variant="subtle" colorPalette="info" size="sm">
            <Sparkles className="size-3" />
            Design system
          </Badge>
        </div>
        <div className="flex flex-col gap-2">
          <Heading as="h1" size="3xl">
            ui-lab
          </Heading>
          <p className="text-fg-muted leading-relaxed">
            Ark UI + Tailwind v4 で組んだ React デザインシステムの練習場。Chakra
            UI v3 互換の prop API と semantic token で light / dark 両対応。この
            docs 自体も ui-lab の primitive で出来ている。
          </p>
        </div>
        <div className="flex flex-wrap gap-6 pt-2">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-semibold text-2xl tabular-nums">
                {s.value}
              </span>
              <span className="text-fg-muted text-xs">{s.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section className="flex flex-col gap-4">
        <Heading as="h2" size="sm" className="text-fg-soft">
          はじめに
        </Heading>
        <div className="grid gap-4 sm:grid-cols-2">
          {NEXT.map(({ to, icon: Icon, title, description }) => (
            <Link key={to} to={to} className="group">
              <Card.Root
                variant="outline"
                className="h-full group-hover:border-fg-subtle"
              >
                <Card.Header>
                  <Icon className="size-5 text-fg-muted" />
                  <Card.Title className="text-base">{title}</Card.Title>
                  <Card.Description>{description}</Card.Description>
                </Card.Header>
              </Card.Root>
            </Link>
          ))}
          <Card.Root variant="subtle" className="h-full">
            <Card.Header>
              <Component className="size-5 text-fg-subtle" />
              <Card.Title className="text-base text-fg-muted">
                Components
              </Card.Title>
              <Card.Description>
                各 primitive の props と live example。順次追加予定。
              </Card.Description>
            </Card.Header>
          </Card.Root>
        </div>
      </section>

      <footer className="flex items-center gap-2 border-t border-border pt-6 text-fg-muted text-xs">
        <Boxes className="size-3.5" />
        <span>
          開発用の playground は{" "}
          <Link to="/dev" className="underline hover:text-fg">
            Dev sandbox
          </Link>{" "}
          にある。
        </span>
      </footer>
    </div>
  );
}
