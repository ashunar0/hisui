import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";

export function PasswordInputDemo() {
  return (
    <div className="flex flex-col gap-6">
      <BasicPassword />
      <WithLabelPassword />
      <VariantsPassword />
    </div>
  );
}

function BasicPassword() {
  return (
    <PasswordInput.Root>
      <PasswordInput.Control>
        <PasswordInput.Input placeholder="パスワードを入力" />
        <PasswordInput.VisibilityTrigger />
      </PasswordInput.Control>
    </PasswordInput.Root>
  );
}

function WithLabelPassword() {
  return (
    <Field.Root>
      <Field.Label>新しいパスワード</Field.Label>
      <PasswordInput.Root>
        <PasswordInput.Control>
          <PasswordInput.Input placeholder="8文字以上、記号 1 文字以上" />
          <PasswordInput.VisibilityTrigger />
        </PasswordInput.Control>
      </PasswordInput.Root>
      <Field.HelperText>
        VisibilityTrigger で表示 / 非表示を切替。Indicator が data-state で
        Eye / EyeOff を切替。
      </Field.HelperText>
    </Field.Root>
  );
}

function VariantsPassword() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-fg-muted">outline (default)</span>
        <PasswordInput.Root>
          <PasswordInput.Control>
            <PasswordInput.Input placeholder="••••••••" />
            <PasswordInput.VisibilityTrigger />
          </PasswordInput.Control>
        </PasswordInput.Root>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-fg-muted">subtle</span>
        <PasswordInput.Root>
          <PasswordInput.Control>
            <PasswordInput.Input
              placeholder="••••••••"
              className="border-transparent bg-hover focus:bg-surface"
            />
            <PasswordInput.VisibilityTrigger />
          </PasswordInput.Control>
        </PasswordInput.Root>
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-xs text-fg-muted">flushed (Login 画面で使用)</span>
        <PasswordInput.Root>
          <PasswordInput.Control>
            <PasswordInput.Input
              placeholder="••••••••"
              className="rounded-none border-0 border-b bg-transparent focus:border-fg-soft focus:ring-0"
            />
            <PasswordInput.VisibilityTrigger />
          </PasswordInput.Control>
        </PasswordInput.Root>
      </div>
    </div>
  );
}
