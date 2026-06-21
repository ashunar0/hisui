import { Button } from "@/components/ui/button";

export default function ButtonAsChildDemo() {
  return (
    <Button asChild>
      <a href="/docs">Go to docs</a>
    </Button>
  );
}
