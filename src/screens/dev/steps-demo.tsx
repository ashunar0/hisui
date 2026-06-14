import { Button } from "@/components/ui/button";
import { Steps } from "@/components/ui/steps";

const WIZARD = [
  { title: "Account", description: "Email & password" },
  { title: "Profile", description: "Tell us about you" },
  { title: "Confirm", description: "Review and submit" },
];

export function StepsDemo() {
  return (
    <div className="flex flex-col gap-8">
      <HorizontalWizard />
      <CompactWithCounter />
      <VerticalSidebar />
    </div>
  );
}

function HorizontalWizard() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        horizontal wizard (Account / Profile / Confirm + CompletedContent +
        Back / Next、 description 付きの label)
      </p>
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
                    <span className="text-sm font-medium text-fg">
                      {step.title}
                    </span>
                    <span className="text-xs text-fg-muted">
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
              <h3 className="text-base font-semibold text-fg">{step.title}</h3>
              <p className="mt-1 text-sm text-fg-muted">{step.description}</p>
              <p className="mt-4 text-sm text-fg-soft">
                Step {i + 1} の中身ダミー。実際はフォームが入る。
              </p>
            </Steps.Content>
          ))}
          <Steps.CompletedContent>
            <h3 className="text-base font-semibold text-fg">All set!</h3>
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
    </div>
  );
}

function CompactWithCounter() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        compact (number only、 Context で step N / total を Indicator 横に表示)
      </p>
      <div className="w-full max-w-md">
        <Steps.Root count={4} defaultStep={1}>
          <div className="flex items-center justify-between">
            <Steps.List>
              {Array.from({ length: 4 }).map((_, i) => (
                <Steps.Item key={i} index={i}>
                  <Steps.Trigger>
                    <Steps.Indicator>
                      <Steps.CompleteIndicator />
                      <span className="group-data-complete:hidden">
                        {i + 1}
                      </span>
                    </Steps.Indicator>
                  </Steps.Trigger>
                  {i < 3 && <Steps.Separator />}
                </Steps.Item>
              ))}
            </Steps.List>
            <Steps.Context>
              {(api) => (
                <span className="ml-3 shrink-0 text-xs tabular-nums text-fg-muted">
                  Step {api.value + 1} / {api.count}
                </span>
              )}
            </Steps.Context>
          </div>
          <div className="flex justify-end gap-2">
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
    </div>
  );
}

const ONBOARDING = [
  { title: "Workspace", body: "Create your team workspace." },
  { title: "Invite teammates", body: "Add up to 10 members." },
  { title: "Connect Slack", body: "Get notifications in channel." },
  { title: "Done", body: "You're all set." },
];

function VerticalSidebar() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        vertical (orientation=vertical、 onboarding sidebar 風、 左 nav と右
        content が横並び)
      </p>
      <div className="flex w-full max-w-xl gap-6">
        <Steps.Root
          count={ONBOARDING.length}
          orientation="vertical"
          className="flex-1"
        >
          <Steps.List className="w-48 shrink-0">
            {ONBOARDING.map((step, i) => (
              <Steps.Item key={step.title} index={i}>
                <Steps.Trigger className="items-start">
                  <Steps.Indicator>
                    <Steps.CompleteIndicator />
                    <span className="group-data-complete:hidden">{i + 1}</span>
                  </Steps.Indicator>
                  <span className="text-sm font-medium text-fg">
                    {step.title}
                  </span>
                </Steps.Trigger>
                {i < ONBOARDING.length - 1 && (
                  <Steps.Separator className="ml-3 h-6" />
                )}
              </Steps.Item>
            ))}
          </Steps.List>
          <div className="flex flex-1 flex-col gap-4">
            {ONBOARDING.map((step, i) => (
              <Steps.Content key={step.title} index={i}>
                <h3 className="text-base font-semibold text-fg">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-fg-soft">{step.body}</p>
              </Steps.Content>
            ))}
            <Steps.CompletedContent>
              <h3 className="text-base font-semibold text-fg">Welcome!</h3>
              <p className="mt-1 text-sm text-fg-soft">
                Workspace is ready to use.
              </p>
            </Steps.CompletedContent>
            <div className="flex justify-end gap-2">
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
        </Steps.Root>
      </div>
    </div>
  );
}
