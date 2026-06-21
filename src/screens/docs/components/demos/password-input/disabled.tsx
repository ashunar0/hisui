import { PasswordInput } from "@/components/ui/password-input";

export default function PasswordInputDisabledDemo() {
  return (
    <div className="w-72">
      <PasswordInput.Root disabled>
        <PasswordInput.Label>Locked</PasswordInput.Label>
        <PasswordInput.Control>
          <PasswordInput.Input defaultValue="locked" />
          <PasswordInput.VisibilityTrigger />
        </PasswordInput.Control>
      </PasswordInput.Root>
    </div>
  );
}
