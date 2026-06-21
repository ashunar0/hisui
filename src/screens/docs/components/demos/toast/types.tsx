import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

export default function ToastTypesDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        size="sm"
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
        size="sm"
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
        size="sm"
        onClick={() =>
          toaster.create({ title: "Storage almost full", type: "warning" })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          toaster.create({ title: "Build started", type: "info" })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        size="sm"
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
        size="sm"
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
