import { Button } from "@/components/ui/button";
import { Steps } from "@/components/ui/steps";

export default function StepsCompactDemo() {
  return (
    <div className="w-full max-w-md">
      <Steps.Root count={4} defaultStep={1}>
        <div className="flex items-center justify-between">
          <Steps.List>
            {Array.from({ length: 4 }).map((_, i) => (
              <Steps.Item key={i} index={i}>
                <Steps.Trigger>
                  <Steps.Indicator>
                    <Steps.CompleteIndicator />
                    <span className="group-data-complete:hidden">{i + 1}</span>
                  </Steps.Indicator>
                </Steps.Trigger>
                {i < 3 && <Steps.Separator />}
              </Steps.Item>
            ))}
          </Steps.List>
          <Steps.Context>
            {(api) => (
              <span className="ml-3 text-fg-muted text-xs tabular-nums">
                Step {api.value + 1} of {api.count}
              </span>
            )}
          </Steps.Context>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Steps.PrevTrigger asChild>
            <Button variant="outline" size="sm">
              Back
            </Button>
          </Steps.PrevTrigger>
          <Steps.NextTrigger asChild>
            <Button size="sm">Next</Button>
          </Steps.NextTrigger>
        </div>
      </Steps.Root>
    </div>
  );
}
