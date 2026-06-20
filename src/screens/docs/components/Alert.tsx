import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  Megaphone,
} from "lucide-react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const VARIANTS = ["neutral", "success", "danger", "warning", "info"] as const;

const PARTS = [
  {
    name: "Alert.Root",
    description:
      "外枠。 role=alert + grid 2 col layout (icon | content)。 variant で色を切替。",
  },
  {
    name: "Alert.Icon",
    description:
      "左カラムの icon 枠。 lucide-react を size-5 で入れる前提。 variant の色が data-alert-icon 経由で当たる。",
  },
  {
    name: "Alert.Title",
    description: "右カラム 1 行目。 font-medium で短く強い見出し。",
  },
  {
    name: "Alert.Description",
    description: "Title の下の説明文。 opacity-90 で少し落とす。",
  },
  {
    name: "Alert.Actions",
    description: "右カラム最下段。 Button を flex-wrap で並べる action row。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "variant",
    type: '"neutral" | "success" | "danger" | "warning" | "info"',
    default: '"neutral"',
    description:
      "意味を表す色。 border / bg / text / icon が semantic token に紐づく。",
  },
];

const VARIANT_ICONS = {
  neutral: Megaphone,
  success: CheckCircle2,
  danger: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

export function AlertDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Alert">
        画面内に固定で出す通知。 success / danger / warning / info の意味色 +
        neutral の 5 variant。 Toast (一時通知) と違い inline で居座る用途。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="grid 2 col。 左に Icon、 右に Title / Description / Actions が縦積み。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[10rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Usage"
        description="default は neutral。 Title だけでも成立。"
      >
        <Example
          code={`<Alert.Root>
  <Alert.Icon><Megaphone /></Alert.Icon>
  <Alert.Title>New version available</Alert.Title>
  <Alert.Description>Reload the page to apply updates.</Alert.Description>
</Alert.Root>`}
        >
          <Alert.Root>
            <Alert.Icon>
              <Megaphone />
            </Alert.Icon>
            <Alert.Title>New version available</Alert.Title>
            <Alert.Description>
              Reload the page to apply updates.
            </Alert.Description>
          </Alert.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Variants"
        description="5 種。 各色に合った icon を選ぶのが定石。"
      >
        <Example
          code={VARIANTS.map(
            (v) => `<Alert.Root variant="${v}">...</Alert.Root>`,
          ).join("\n")}
        >
          <div className="flex flex-col gap-3">
            {VARIANTS.map((v) => {
              const Icon = VARIANT_ICONS[v];
              return (
                <Alert.Root key={v} variant={v}>
                  <Alert.Icon>
                    <Icon />
                  </Alert.Icon>
                  <Alert.Title>{v}</Alert.Title>
                  <Alert.Description>variant={v} の例文。</Alert.Description>
                </Alert.Root>
              );
            })}
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="Title only"
        description="Description を省くとコンパクトな 1 行 banner に。"
      >
        <Example
          code={`<Alert.Root variant="info">
  <Alert.Icon><Info /></Alert.Icon>
  <Alert.Title>Read-only mode is active.</Alert.Title>
</Alert.Root>`}
        >
          <Alert.Root variant="info">
            <Alert.Icon>
              <Info />
            </Alert.Icon>
            <Alert.Title>Read-only mode is active.</Alert.Title>
          </Alert.Root>
        </Example>
      </DocSection>

      <DocSection
        title="With actions"
        description="Alert.Actions に Button を並べる。 確認 / dismiss の 2 button が典型。"
      >
        <Example
          code={`<Alert.Root variant="warning">
  <Alert.Icon><AlertTriangle /></Alert.Icon>
  <Alert.Title>Subscription expires in 3 days</Alert.Title>
  <Alert.Description>Renew now to avoid service interruption.</Alert.Description>
  <Alert.Actions>
    <Button size="sm" colorPalette="warning">Renew</Button>
    <Button size="sm" variant="ghost">Remind later</Button>
  </Alert.Actions>
</Alert.Root>`}
        >
          <Alert.Root variant="warning">
            <Alert.Icon>
              <AlertTriangle />
            </Alert.Icon>
            <Alert.Title>Subscription expires in 3 days</Alert.Title>
            <Alert.Description>
              Renew now to avoid service interruption.
            </Alert.Description>
            <Alert.Actions>
              <Button size="sm" colorPalette="warning">
                Renew
              </Button>
              <Button size="sm" variant="ghost">
                Remind later
              </Button>
            </Alert.Actions>
          </Alert.Root>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
