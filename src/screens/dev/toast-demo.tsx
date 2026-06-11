import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

export function ToastDemo() {
  return (
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
  );
}
