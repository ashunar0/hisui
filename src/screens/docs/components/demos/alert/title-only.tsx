"use client";

import { Info } from "lucide-react";
import { Alert } from "@/components/ui/alert";

export default function AlertTitleOnlyDemo() {
  return (
    <Alert.Root variant="info">
      <Alert.Icon>
        <Info />
      </Alert.Icon>
      <Alert.Title>Read-only mode is active.</Alert.Title>
    </Alert.Root>
  );
}
