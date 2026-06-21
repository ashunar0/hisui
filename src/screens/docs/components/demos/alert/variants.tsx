import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Megaphone,
} from "lucide-react";
import { Alert } from "@/components/ui/alert";

const VARIANTS = [
  { value: "neutral", Icon: Megaphone },
  { value: "success", Icon: CheckCircle2 },
  { value: "danger", Icon: AlertCircle },
  { value: "warning", Icon: AlertTriangle },
  { value: "info", Icon: Info },
] as const;

export default function AlertVariantsDemo() {
  return (
    <div className="flex flex-col gap-3">
      {VARIANTS.map(({ value, Icon }) => (
        <Alert.Root key={value} variant={value}>
          <Alert.Icon>
            <Icon />
          </Alert.Icon>
          <Alert.Title>{value}</Alert.Title>
          <Alert.Description>variant={value} の例文。</Alert.Description>
        </Alert.Root>
      ))}
    </div>
  );
}
