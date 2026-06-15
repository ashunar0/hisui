import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Sparkles,
  XCircle,
} from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function AlertDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Variants />
      <WithActions />
      <Minimal />
    </div>
  );
}

function Variants() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        5 variants (neutral / info / success / warning / danger)。 icon + title +
        description の grid 構成。
      </p>
      <div className="flex flex-col gap-3">
        <Alert.Root variant="neutral">
          <Alert.Icon>
            <Sparkles />
          </Alert.Icon>
          <Alert.Title>New workspace template available</Alert.Title>
          <Alert.Description>
            Start projects faster with the updated onboarding template.
          </Alert.Description>
        </Alert.Root>
        <Alert.Root variant="info">
          <Alert.Icon>
            <Info />
          </Alert.Icon>
          <Alert.Title>Scheduled maintenance on Saturday</Alert.Title>
          <Alert.Description>
            Dashboards will be read-only between 02:00 and 04:00 UTC.
          </Alert.Description>
        </Alert.Root>
        <Alert.Root variant="success">
          <Alert.Icon>
            <CheckCircle2 />
          </Alert.Icon>
          <Alert.Title>Payment received</Alert.Title>
          <Alert.Description>
            Invoice #4271 was paid in full. A receipt has been emailed to you.
          </Alert.Description>
        </Alert.Root>
        <Alert.Root variant="warning">
          <Alert.Icon>
            <AlertTriangle />
          </Alert.Icon>
          <Alert.Title>Storage is almost full</Alert.Title>
          <Alert.Description>
            You&apos;re using 92% of your plan&apos;s storage. Uploads will pause
            at 100%.
          </Alert.Description>
        </Alert.Root>
        <Alert.Root variant="danger">
          <Alert.Icon>
            <XCircle />
          </Alert.Icon>
          <Alert.Title>Couldn&apos;t sync your changes</Alert.Title>
          <Alert.Description>
            Network request failed. Retrying automatically in 30 seconds.
          </Alert.Description>
        </Alert.Root>
      </div>
    </div>
  );
}

function WithActions() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        with Actions (CTA / dismiss を本文の下に並べる)。 outline button で
        variant の色味を邪魔しないように。
      </p>
      <div className="flex flex-col gap-3">
        <Alert.Root variant="info">
          <Alert.Icon>
            <Info />
          </Alert.Icon>
          <Alert.Title>Try the new calendar view</Alert.Title>
          <Alert.Description>
            Week and month layouts are now available for all teams.
          </Alert.Description>
          <Alert.Actions>
            <Button size="sm" variant="outline">
              Open calendar
            </Button>
            <Button size="sm" variant="ghost">
              Not now
            </Button>
          </Alert.Actions>
        </Alert.Root>
        <Alert.Root variant="danger">
          <Alert.Icon>
            <AlertTriangle />
          </Alert.Icon>
          <Alert.Title>Your trial ends in 3 days</Alert.Title>
          <Alert.Description>
            Add a payment method to keep your team active after Friday.
          </Alert.Description>
          <Alert.Actions>
            <Button size="sm" variant="outline">
              Add payment method
            </Button>
          </Alert.Actions>
        </Alert.Root>
      </div>
    </div>
  );
}

function Minimal() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        Title だけ / Description だけ (Title 省略) の minimal パターン。 inline
        の banner 用途。
      </p>
      <div className="flex flex-col gap-3">
        <Alert.Root variant="success">
          <Alert.Icon>
            <CheckCircle2 />
          </Alert.Icon>
          <Alert.Title>Settings saved.</Alert.Title>
        </Alert.Root>
        <Alert.Root variant="warning">
          <Alert.Icon>
            <AlertTriangle />
          </Alert.Icon>
          <Alert.Description>
            Email verification is still pending. Check your inbox for the link.
          </Alert.Description>
        </Alert.Root>
      </div>
    </div>
  );
}
