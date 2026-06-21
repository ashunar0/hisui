import { Kbd } from "@/components/ui/kbd";

export default function KbdSizesDemo() {
  return (
    <div className="flex items-end gap-3">
      <Kbd className="h-4 min-w-4 text-[10px]">K</Kbd>
      <Kbd>K</Kbd>
      <Kbd className="h-6 min-w-6 text-xs">K</Kbd>
    </div>
  );
}
