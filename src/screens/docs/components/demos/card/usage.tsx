"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CardUsageDemo() {
  return (
    <div className="max-w-md">
      <Card.Root>
        <Card.Header>
          <Card.Title>Workspace</Card.Title>
          <Card.Description>
            Manage members and permissions.
          </Card.Description>
        </Card.Header>
        <Card.Body>
          <p className="text-fg-soft text-sm">Body content goes here.</p>
        </Card.Body>
        <Card.Footer>
          <Button>Save</Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
}
