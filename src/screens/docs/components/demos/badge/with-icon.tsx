import { Check, Sparkles, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function BadgeWithIconDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge colorPalette="success">
        <Check className="size-3" />
        Verified
      </Badge>
      <Badge colorPalette="danger" variant="solid">
        <X className="size-3" />
        Failed
      </Badge>
      <Badge colorPalette="info" variant="outline">
        <Sparkles className="size-3" />
        New
      </Badge>
    </div>
  );
}
