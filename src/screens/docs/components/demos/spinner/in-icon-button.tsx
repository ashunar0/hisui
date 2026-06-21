import { IconButton } from "@/components/ui/icon-button";
import { Spinner } from "@/components/ui/spinner";

export default function SpinnerInIconButtonDemo() {
  return (
    <IconButton aria-label="Refreshing" disabled>
      <Spinner />
    </IconButton>
  );
}
