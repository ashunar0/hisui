import { Button } from "@/components/ui/button";
import { Steps } from "@/components/ui/steps";

const WIZARD_STEPS = [
  { title: "Account", description: "Email & password" },
  { title: "Profile", description: "Tell us about you" },
  { title: "Confirm", description: "Review and submit" },
];

export function StepsDemo() {
  return (
    <div className="w-full max-w-xl">
      <Steps.Root count={WIZARD_STEPS.length}>
        <Steps.List>
          {WIZARD_STEPS.map((step, i) => (
            <Steps.Item key={step.title} index={i}>
              <Steps.Trigger>
                <Steps.Indicator>
                  <Steps.CompleteIndicator />
                  <span className="group-data-complete:hidden">{i + 1}</span>
                </Steps.Indicator>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-medium text-fg">
                    {step.title}
                  </span>
                  <span className="text-xs text-fg-muted">
                    {step.description}
                  </span>
                </div>
              </Steps.Trigger>
              {i < WIZARD_STEPS.length - 1 && <Steps.Separator />}
            </Steps.Item>
          ))}
        </Steps.List>

        {WIZARD_STEPS.map((step, i) => (
          <Steps.Content key={step.title} index={i}>
            <h3 className="text-base font-semibold text-fg">{step.title}</h3>
            <p className="mt-1 text-sm text-fg-muted">{step.description}</p>
            <p className="mt-4 text-sm text-fg-soft">
              Step {i + 1} の中身ダミー。実際はフォームが入る。
            </p>
          </Steps.Content>
        ))}
        <Steps.CompletedContent>
          <h3 className="text-base font-semibold text-fg">All set! 🎉</h3>
          <p className="mt-1 text-sm text-fg-muted">
            Wizard finished. Reset to try again.
          </p>
        </Steps.CompletedContent>

        <div className="flex justify-between gap-2">
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
