import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  onSubmit: (data: { name: string; email: string; note: string }) => void;
};

export function BookingForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, email, note });
      }}
      className="flex flex-col gap-5"
    >
      <Field.Root>
        <Field.Label>お名前</Field.Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="山田 太郎"
          required
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>メールアドレス</Field.Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
        />
      </Field.Root>
      <Field.Root>
        <Field.Label>メモ (任意)</Field.Label>
        <Textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          placeholder="話したい内容や事前共有事項があれば"
        />
      </Field.Root>
      <div className="flex justify-end">
        <Button type="submit" variant="solid" size="md">
          予約を確定する
        </Button>
      </div>
    </form>
  );
}
