import { Heading } from "@/components/ui/heading";

const TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export default function HeadingAsTagDemo() {
  return (
    <div className="flex flex-col gap-2">
      {TAGS.map((t) => (
        <Heading key={t} as={t}>
          {t} tag
        </Heading>
      ))}
    </div>
  );
}
