import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Stack } from "@/components/ui/stack";

const GoogleIcon = () => (
  <img src="/google-color.svg" alt="" className="size-4" />
);

export function Login() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-canvas px-4">
      <Card.Root className="w-full max-w-sm">
      <Card.Header className="items-center">
        <Card.Title>ログイン</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack className="w-full">
          <Field.Root className="gap-0">
            <Field.Label>メールアドレス</Field.Label>
            <Input
              type="email"
              variant="flushed"
              placeholder="name@example.com"
            />
          </Field.Root>
          <Field.Root className="gap-0">
            <Field.Label>パスワード</Field.Label>
            <PasswordInput variant="flushed" placeholder="8文字以上" />
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer className="flex-col gap-4">
        <Button className="w-full rounded-lg">ログイン</Button>
        <div className="flex w-full items-center gap-3 text-sm text-fg-muted">
          <div className="h-px flex-1 bg-border" />
          <span>or</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <Button variant="outline" className="w-full gap-2 rounded-lg">
          <GoogleIcon />
          Google でログイン
        </Button>
        <p className="mt-2 text-sm text-fg-muted">
          アカウントをお持ちでない方は
          <a
            href="/signup"
            className="ml-1 font-medium text-blue-600 hover:underline"
          >
            新規登録
          </a>
        </p>
      </Card.Footer>
      </Card.Root>
    </div>
  );
}
