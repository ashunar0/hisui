"use client";

import { Megaphone } from "lucide-react";
import { Alert } from "@/components/ui/alert";

export default function AlertUsageDemo() {
  return (
    <Alert.Root>
      <Alert.Icon>
        <Megaphone />
      </Alert.Icon>
      <Alert.Title>New version available</Alert.Title>
      <Alert.Description>Reload the page to apply updates.</Alert.Description>
    </Alert.Root>
  );
}
