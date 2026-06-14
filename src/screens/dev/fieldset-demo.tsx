import { Field } from "@/components/ui/field";
import { Fieldset } from "@/components/ui/fieldset";

export function FieldsetDemo() {
  return (
    <div className="flex max-w-md flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          Profile section (Legend + HelperText + Field 2 個)
        </span>
        <Fieldset.Root>
          <Fieldset.Legend>Profile</Fieldset.Legend>
          <Fieldset.HelperText>
            ここで設定した情報はチームメンバーに公開されます。
          </Fieldset.HelperText>
          <Field.Root>
            <Field.Label>Display name</Field.Label>
            <Field.Input defaultValue="あさひ" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Bio</Field.Label>
            <Field.Textarea
              rows={3}
              placeholder="自分について教えてくださいなのだ"
            />
          </Field.Root>
        </Fieldset.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          With ErrorText (invalid=true で error message を root に表示)
        </span>
        <Fieldset.Root invalid>
          <Fieldset.Legend>Payment</Fieldset.Legend>
          <Field.Root>
            <Field.Label>Card number</Field.Label>
            <Field.Input placeholder="4242 4242 4242 4242" />
          </Field.Root>
          <Field.Root>
            <Field.Label>CVV</Field.Label>
            <Field.Input placeholder="123" />
          </Field.Root>
          <Fieldset.ErrorText>
            このカードは使えません。別のカードを試してください。
          </Fieldset.ErrorText>
        </Fieldset.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          disabled fieldset (中の Field 全部に disabled が伝播)
        </span>
        <Fieldset.Root disabled>
          <Fieldset.Legend>Notifications</Fieldset.Legend>
          <Fieldset.HelperText>
            Pro plan にアップグレードするとカスタマイズできるようになります。
          </Fieldset.HelperText>
          <Field.Root>
            <Field.Label>Daily digest email</Field.Label>
            <Field.Input defaultValue="asahi@example.com" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Slack webhook</Field.Label>
            <Field.Input placeholder="https://hooks.slack.com/..." />
          </Field.Root>
        </Fieldset.Root>
      </div>
    </div>
  );
}
