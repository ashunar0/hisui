import { Input } from "@/components/ui/input";

export default function InputTypeVariationsDemo() {
  return (
    <div className="flex max-w-sm flex-col gap-3">
      <Input type="email" placeholder="you@example.com" />
      <Input type="password" placeholder="••••••••" />
      <Input type="number" placeholder="42" />
      <Input type="date" />
    </div>
  );
}
