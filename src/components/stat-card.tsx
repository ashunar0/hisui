import { TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export type StatCardProps = {
  label: string;
  value: string;
  delta: number;
  isPositive: boolean;
};

export function StatCard({ label, value, delta, isPositive }: StatCardProps) {
  const TrendIcon = delta > 0 ? TrendingUp : TrendingDown;
  return (
    <Card.Root>
      <div className="flex flex-col gap-3 p-5">
        <span className="text-sm text-fg-muted">{label}</span>
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-semibold text-2xl text-fg tabular-nums">
            {value}
          </span>
          <Badge
            variant={isPositive ? "success" : "danger"}
            className="tabular-nums"
          >
            <TrendIcon className="size-3" />
            {Math.abs(delta).toFixed(1)}%
          </Badge>
        </div>
      </div>
    </Card.Root>
  );
}
