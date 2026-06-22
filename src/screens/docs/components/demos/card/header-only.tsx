"use client";

import { Card } from "@/components/ui/card";

export default function CardHeaderOnlyDemo() {
  return (
    <div className="max-w-sm">
      <Card.Root>
        <Card.Header>
          <Card.Title>Quick note</Card.Title>
          <Card.Description>Short snippet, no body.</Card.Description>
        </Card.Header>
      </Card.Root>
    </div>
  );
}
