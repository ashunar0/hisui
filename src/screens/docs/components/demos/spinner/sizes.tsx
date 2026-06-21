import { Spinner } from "@/components/ui/spinner";

export default function SpinnerSizesDemo() {
  return (
    <div className="flex items-end gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-5" />
      <Spinner className="size-8" />
    </div>
  );
}
