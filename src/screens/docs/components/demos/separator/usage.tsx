import { Separator } from "@/components/ui/separator";

export default function SeparatorUsageDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <p className="text-fg text-sm">Section 1</p>
      <Separator />
      <p className="text-fg text-sm">Section 2</p>
      <Separator />
      <p className="text-fg text-sm">Section 3</p>
    </div>
  );
}
