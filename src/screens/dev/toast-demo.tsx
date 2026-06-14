import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

export function ToastDemo() {
  return (
    <div className="flex flex-col gap-8">
      <Types />
      <WithAction />
      <PromiseFlow />
    </div>
  );
}

function Types() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        types (success / error / warning / info / loading / neutral、 icon色で
        type を表現、 bottom-end placement、 max=3)
      </p>
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={() =>
            toaster.create({
              title: "Saved successfully",
              description: "Your changes are live.",
              type: "success",
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toaster.create({
              title: "Couldn't save",
              description: "Network error. Try again.",
              type: "error",
            })
          }
        >
          Error
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toaster.create({
              title: "Storage almost full",
              description: "Free up space to keep syncing.",
              type: "warning",
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toaster.create({
              title: "Build started",
              description: "We'll notify you when it's done.",
              type: "info",
            })
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toaster.create({
              title: "Uploading...",
              type: "loading",
              duration: 2500,
            })
          }
        >
          Loading
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toaster.create({
              title: "Reminder",
              description: "Just a neutral toast.",
            })
          }
        >
          Neutral
        </Button>
      </div>
    </div>
  );
}

function WithAction() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        with action (ActionTrigger を action.label / action.onClick から自動配置、
        Undo パターン)
      </p>
      <Button
        variant="outline"
        onClick={() =>
          toaster.create({
            title: "Email archived",
            description: '"Q3 planning sync" was moved to archive.',
            action: {
              label: "Undo",
              onClick: () =>
                toaster.create({
                  type: "success",
                  title: "Restored",
                }),
            },
            duration: 5000,
          })
        }
      >
        Archive email
      </Button>
    </div>
  );
}

function PromiseFlow() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-fg-muted">
        promise (toaster.promise で loading → success/error を 1 つの toast で
        遷移、 fake fetch でランダムに 70% 成功)
      </p>
      <Button
        variant="outline"
        onClick={() => {
          const promise = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
              if (Math.random() < 0.7) {
                resolve("acme-prod-v1.2.0");
              } else {
                reject(new Error("Deploy failed"));
              }
            }, 2000);
          });
          toaster.promise(promise, {
            loading: {
              title: "Deploying...",
              description: "Building and pushing to production.",
            },
            success: (release) => ({
              title: "Deployed",
              description: `Released ${release} to production.`,
            }),
            error: {
              title: "Deploy failed",
              description: "Check logs and retry.",
            },
          });
        }}
      >
        Trigger deploy
      </Button>
    </div>
  );
}
