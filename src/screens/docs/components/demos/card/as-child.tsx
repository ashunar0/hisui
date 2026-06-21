import { Card } from "@/components/ui/card";

export default function CardAsChildDemo() {
  return (
    <div className="max-w-sm">
      <Card.Root asChild>
        <a
          href="#card-link"
          className="block hover:border-fg-subtle"
          onClick={(e) => e.preventDefault()}
        >
          <Card.Header>
            <Card.Title>Clickable</Card.Title>
            <Card.Description>Whole card is a link.</Card.Description>
          </Card.Header>
        </a>
      </Card.Root>
    </div>
  );
}
