import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Stack } from "@/components/ui/stack";

const SIZES = ["sm", "md", "lg"] as const;

export function CardSizes() {
  return (
    <Stack className="w-full max-w-md">
      {SIZES.map((size) => (
        <Card.Root key={size} size={size}>
          <Card.Header>
            <Heading size="md">Card - {size}</Heading>
          </Card.Header>
          <Card.Body className="text-fg-muted">
            This is the card body. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </Card.Body>
        </Card.Root>
      ))}
    </Stack>
  );
}
