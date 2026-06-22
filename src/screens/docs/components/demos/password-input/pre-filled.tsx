"use client";

import { PasswordInput } from "@/components/ui/password-input";

export default function PasswordInputPreFilledDemo() {
  return (
    <div className="w-72">
      <PasswordInput.Root defaultVisible>
        <PasswordInput.Label>Saved password</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input defaultValue="hunter2" />
          <PasswordInput.VisibilityTrigger />
        </PasswordInput.Control>
      </PasswordInput.Root>
    </div>
  );
}
