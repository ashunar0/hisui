import { Textarea } from "@/components/ui/textarea";

export default function TextareaInvalidDemo() {
  return (
    <div className="flex max-w-md flex-col gap-3">
      <Textarea invalid placeholder="outline invalid" />
      <Textarea variant="subtle" invalid placeholder="subtle invalid" />
      <Textarea variant="flushed" invalid placeholder="flushed invalid" />
    </div>
  );
}
