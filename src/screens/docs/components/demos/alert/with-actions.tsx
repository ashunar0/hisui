"use client";

import { AlertTriangle } from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function AlertWithActionsDemo() {
  return (
    <Alert.Root variant="warning">
      <Alert.Icon>
        <AlertTriangle />
      </Alert.Icon>
      <Alert.Title>Subscription expires in 3 days</Alert.Title>
      <Alert.Description>
        Renew now to avoid service interruption.
      </Alert.Description>
      <Alert.Actions>
        <Button size="sm" colorPalette="warning">
          Renew
        </Button>
        <Button size="sm" variant="ghost">
          Remind later
        </Button>
      </Alert.Actions>
    </Alert.Root>
  );
}
