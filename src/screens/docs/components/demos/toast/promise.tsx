import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

export default function ToastPromiseDemo() {
  return (
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
  );
}
