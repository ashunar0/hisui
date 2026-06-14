import { Field } from "@/components/ui/field";

export function FieldDemo() {
  return (
    <div className="flex flex-col gap-8">
      <BasicField />
      <InvalidField />
      <TextareaAndSelectField />
    </div>
  );
}

function BasicField() {
  return (
    <Field.Root required>
      <Field.Label>
        ワークスペース名
        <Field.RequiredIndicator />
      </Field.Label>
      <Field.Input placeholder="acme-team" />
      <Field.HelperText>
        URL に使われる識別子。小文字英数字とハイフンのみ。
      </Field.HelperText>
    </Field.Root>
  );
}

function InvalidField() {
  return (
    <Field.Root invalid>
      <Field.Label>メールアドレス</Field.Label>
      <Field.Input
        type="email"
        defaultValue="not-an-email"
        placeholder="you@example.com"
      />
      <Field.ErrorText>有効なメールアドレスを入力してください。</Field.ErrorText>
    </Field.Root>
  );
}

function TextareaAndSelectField() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Field.Root>
        <Field.Label>備考 (Textarea)</Field.Label>
        <Field.Textarea
          rows={4}
          placeholder="チームの紹介を簡潔に書いてね"
        />
        <Field.HelperText>500 文字まで</Field.HelperText>
      </Field.Root>
      <Field.Root disabled>
        <Field.Label>プラン (Select, disabled)</Field.Label>
        <Field.Select defaultValue="pro">
          <option value="free">Free</option>
          <option value="pro">Pro</option>
          <option value="team">Team</option>
        </Field.Select>
        <Field.HelperText>支払い管理者のみ変更可能。</Field.HelperText>
      </Field.Root>
    </div>
  );
}
