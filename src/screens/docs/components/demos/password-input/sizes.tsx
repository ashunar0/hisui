"use client";

import { PasswordInput } from "@/components/ui/password-input";

const SIZES = ["xs", "sm", "md", "lg"] as const;

export default function PasswordInputSizesDemo() {
  return (
    <div className="flex w-72 flex-col gap-3">
      {SIZES.map((s) => (
        <PasswordInput.Root key={s} size={s}>
          <PasswordInput.Control>
            <PasswordInput.Input
              placeholder={`${s} size`}
              defaultValue="hunter2"
            />
            <PasswordInput.VisibilityTrigger />
          </PasswordInput.Control>
        </PasswordInput.Root>
      ))}
    </div>
  );
}
