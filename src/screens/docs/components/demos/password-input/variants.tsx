import { PasswordInput } from "@/components/ui/password-input";

const VARIANTS = ["outline", "subtle", "flushed"] as const;

export default function PasswordInputVariantsDemo() {
  return (
    <div className="flex w-72 flex-col gap-4">
      {VARIANTS.map((v) => (
        <PasswordInput.Root key={v} variant={v}>
          <PasswordInput.Label>{v}</PasswordInput.Label>
          <PasswordInput.Control>
            <PasswordInput.Input
              placeholder={`${v} variant`}
              defaultValue="hunter2"
            />
            <PasswordInput.VisibilityTrigger />
          </PasswordInput.Control>
        </PasswordInput.Root>
      ))}
    </div>
  );
}
