"use client";

import { Card } from "@/components/ui/card";

const SIZES = ["sm", "md", "lg"] as const;

export default function CardSizesDemo() {
  return (
    <div className="flex flex-col gap-4">
      {SIZES.map((s) => (
        <Card.Root key={s} size={s}>
          <Card.Header>
            <Card.Title>size={s}</Card.Title>
            <Card.Description>
              Header / Body / Footer の padding が連動する。
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <p className="text-fg-soft text-sm">Body content</p>
          </Card.Body>
        </Card.Root>
      ))}
    </div>
  );
}
