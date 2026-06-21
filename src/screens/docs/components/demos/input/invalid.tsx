import { Input } from "@/components/ui/input";

export default function InputInvalidDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <Input invalid placeholder="outline invalid" />
      <Input variant="subtle" invalid placeholder="subtle invalid" />
      <Input variant="flushed" invalid placeholder="flushed invalid" />
    </div>
  );
}
