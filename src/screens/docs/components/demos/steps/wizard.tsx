"use client";

import { Button } from "@/components/ui/button";
import { Steps } from "@/components/ui/steps";

const WIZARD = [
  { title: "Account", description: "Email & password" },
  { title: "Profile", description: "Tell us about you" },
  { title: "Confirm", description: "Review and submit" },
];

export default function StepsWizardDemo() {
  return (
    <div className="w-full max-w-xl">
      <Steps.Root count={WIZARD.length}>
        <Steps.List>
          {WIZARD.map((step, i) => (
            <Steps.Item key={step.title} index={i}>
              <Steps.Trigger>
                <Steps.Indicator>
                  <Steps.CompleteIndicator />
                  <span className="group-data-complete:hidden">{i + 1}</span>
                </Steps.Indicator>
                <div className="flex flex-col items-start">
                  <span className="font-medium text-fg text-sm">
                    {step.title}
                  </span>
                  <span className="text-fg-muted text-xs">
                    {step.description}
                  </span>
                </div>
              </Steps.Trigger>
              {i < WIZARD.length - 1 && <Steps.Separator />}
            </Steps.Item>
          ))}
        </Steps.List>

        {WIZARD.map((step, i) => (
          <Steps.Content key={step.title} index={i}>
            <h3 className="font-semibold text-fg text-base">{step.title}</h3>
            <p className="mt-1 text-fg-muted text-sm">{step.description}</p>
            <p className="mt-4 text-fg-soft text-sm">
              Step {i + 1} の中身ダミー。 実際は form が入る。
            </p>
          </Steps.Content>
        ))}
        <Steps.CompletedContent>
          <h3 className="font-semibold text-fg text-base">All set!</h3>
          <p className="mt-1 text-fg-muted text-sm">
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
