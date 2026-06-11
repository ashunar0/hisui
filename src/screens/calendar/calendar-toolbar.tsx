import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";

type Props = {
  current: Date;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
};

export function CalendarToolbar({ current, onPrev, onNext, onToday }: Props) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-lg font-semibold tracking-tight">
        {current.getFullYear()}年 {current.getMonth() + 1}月
      </h2>
      <div className="ml-auto flex items-center gap-1">
        <IconButton aria-label="前の月" onClick={onPrev}>
          <ChevronLeft className="size-4" />
        </IconButton>
        <Button variant="outline" size="sm" onClick={onToday}>
          今日
        </Button>
        <IconButton aria-label="次の月" onClick={onNext}>
          <ChevronRight className="size-4" />
        </IconButton>
      </div>
    </div>
  );
}
