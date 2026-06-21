import { Button } from "@/components/ui/button";

export default function ButtonLoadingDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button loading>Save</Button>
      <Button loading loadingText="Saving…" colorPalette="success">
        Save
      </Button>
    </div>
  );
}
