import { Progress } from "@/components/ui/progress";

const FILES = [
  { label: "design-tokens.json", value: 20 },
  { label: "components.zip", value: 65 },
  { label: "README.md", value: 90 },
];

export default function ProgressLinearDemo() {
  return (
    <div className="flex max-w-md flex-col gap-4">
      {FILES.map((item) => (
        <Progress.Root key={item.label} value={item.value}>
          <div className="flex items-center justify-between">
            <Progress.Label>{item.label}</Progress.Label>
            <Progress.ValueText />
          </div>
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      ))}
    </div>
  );
}
