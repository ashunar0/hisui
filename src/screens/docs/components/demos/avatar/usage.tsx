import { Avatar } from "@/components/ui/avatar";

export default function AvatarUsageDemo() {
  return (
    <Avatar.Root>
      <Avatar.Image src="https://i.pravatar.cc/100?u=asahi" alt="Asahi" />
      <Avatar.Fallback name="Asahi K" />
    </Avatar.Root>
  );
}
