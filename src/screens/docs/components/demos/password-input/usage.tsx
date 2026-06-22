"use client";

import { PasswordInput } from "@/components/ui/password-input";

export default function PasswordInputUsageDemo() {
  return (
    <div className="w-72">
      <PasswordInput.Root>
        <PasswordInput.Label>Password</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input placeholder="Enter password" />
          <PasswordInput.VisibilityTrigger />
        </PasswordInput.Control>
      </PasswordInput.Root>
    </div>
  );
}
