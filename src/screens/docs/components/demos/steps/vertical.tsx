"use client";

import { Button } from "@/components/ui/button";
import { Steps } from "@/components/ui/steps";

const WIZARD = [
  { title: "Account", description: "Email & password" },
  { title: "Profile", description: "Tell us about you" },
  { title: "Confirm", description: "Review and submit" },
];

export default function StepsVerticalDemo() {
  return (
    <div className="w-full max-w-2xl">
      <Steps.Root count={WIZARD.length} orientation="vertical">
        <div className="flex gap-6">
          <Steps.List className="w-48">
            {WIZARD.map((step, i) => (
              <Steps.Item key={step.title} index={i}>
                <Steps.Trigger>
                  <Steps.Indicator>
                    <Steps.CompleteIndicator />
                    <span className="group-data-complete:hidden">{i + 1}</span>
                  </Steps.Indicator>
                  <span className="font-medium text-fg text-sm">
                    {step.title}
                  </span>
                </Steps.Trigger>
                {i < WIZARD.length - 1 && <Steps.Separator />}
              </Steps.Item>
            ))}
          </Steps.List>
          <div className="flex-1">
            {WIZARD.map((step, i) => (
              <Steps.Content key={step.title} index={i}>
                <h3 className="font-semibold text-fg text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-fg-muted text-sm">{step.description}</p>
              </Steps.Content>
            ))}
            <Steps.CompletedContent>
              <h3 className="font-semibold text-fg text-base">Done!</h3>
            </Steps.CompletedContent>
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
          </div>
        </div>
      </Steps.Root>
    </div>
  );
}
