"use client";

import { Card } from "@/components/ui/card";

const VARIANTS = ["elevated", "outline", "subtle"] as const;

export default function CardVariantsDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {VARIANTS.map((v) => (
        <Card.Root key={v} variant={v}>
          <Card.Header>
            <Card.Title>{v}</Card.Title>
            <Card.Description>variant={v}</Card.Description>
          </Card.Header>
          <Card.Body>
            <p className="text-fg-soft text-sm">Sample body text.</p>
          </Card.Body>
        </Card.Root>
      ))}
    </div>
  );
}
