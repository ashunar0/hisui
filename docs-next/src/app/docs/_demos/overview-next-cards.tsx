"use client";

import {
  CircleDashed,
  Component,
  Layers,
  Palette,
  Ruler,
  Type,
} from "lucide-react";
import Link from "next/link";
import { Card } from "@hisui/components/ui/card";

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

export default function OverviewNextCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {NEXT.map(({ to, icon: Icon, title, description }) => (
        <Link key={to} href={to} className="group">
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
            各 primitive の props と live example。 順次追加予定。
          </Card.Description>
        </Card.Header>
      </Card.Root>
    </div>
  );
}
