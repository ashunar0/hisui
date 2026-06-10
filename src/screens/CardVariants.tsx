import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stack } from "@/components/ui/stack";

const VARIANTS = ["subtle", "outline", "elevated"] as const;

export function CardVariants() {
  return (
    <Stack direction="row" className="flex-wrap">
      {VARIANTS.map((variant) => (
        <Card.Root key={variant} variant={variant} className="w-80">
          <Card.Body className="flex flex-col gap-2">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Image src="https://picsum.photos/200/300" />
              <Avatar.Fallback name="Nue Camp" />
            </Avatar.Root>
            <Card.Title className="mb-2">Nue Camp</Card.Title>
            <Card.Description>
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Card.Description>
          </Card.Body>
          <Card.Footer className="justify-end gap-2">
            <Button variant="outline">View</Button>
            <Button>Join</Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </Stack>
  );
}
