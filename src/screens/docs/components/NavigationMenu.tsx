import {
  BookOpen,
  Briefcase,
  ChartLine,
  Code2,
  GraduationCap,
  Layers,
  LifeBuoy,
  Newspaper,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "NavigationMenu.Root",
    description:
      "外枠。 inline-flex で top nav bar 全体を包む。 内側に List と ViewportPositioner を並べる。",
  },
  {
    name: "NavigationMenu.List",
    description: "Item を横並びで並べる bar。 surface + border の rounded container。",
  },
  {
    name: "NavigationMenu.Item",
    description:
      "1 メニュー。 value 必須 ([[reference_ark_ui_navigation_menu]])。 Trigger + Content か、 Link 単体。",
  },
  {
    name: "NavigationMenu.Trigger",
    description:
      "hover で Content を出す button。 chevron が data-state=open で 180° 回転。",
  },
  {
    name: "NavigationMenu.Content",
    description:
      "Trigger 配下の panel 中身。 内部で animation。 ViewportPositioner + Viewport がこれを描画する。",
  },
  {
    name: "NavigationMenu.Link",
    description:
      "click すると遷移する nav 項目。 Trigger のかわりに Item に単独で置くと static link。",
  },
  {
    name: "NavigationMenu.ViewportPositioner",
    description:
      "Viewport の placement を持つ wrapper。 z-50 で他要素より前に。 Root の末尾に置くのが必須。",
  },
  {
    name: "NavigationMenu.Viewport",
    description:
      "全 Item の Content を切替表示する共通 surface。 shadow + border + open/close animation 内蔵。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "value",
    type: "string",
    description: "controlled mode の現在 open Item の value。",
  },
  {
    name: "defaultValue",
    type: "string",
    description: "uncontrolled mode の初期 open value。",
  },
  {
    name: "onValueChange",
    type: "(details: { value: string }) => void",
    description: "open Item が変わった時に呼ばれる。",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "List の並び方向。 vertical で sidebar 風に。",
  },
  {
    name: "openDelay",
    type: "number",
    default: "200",
    description: "hover してから Content を開くまでの ms。",
  },
  {
    name: "closeDelay",
    type: "number",
    default: "300",
    description: "離れてから閉じるまでの ms。",
  },
];

interface Card {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const PRODUCTS: Card[] = [
  {
    title: "Analytics",
    body: "Real-time funnel と cohort で usage を可視化。",
    icon: ChartLine,
  },
  {
    title: "Workflows",
    body: "if-this-then-that で trigger / action を組む。",
    icon: Workflow,
  },
  {
    title: "Code reviews",
    body: "AI が PR の差分にコメントを残す。",
    icon: Code2,
  },
  {
    title: "Status pages",
    body: "incident と uptime を顧客向けに公開。",
    icon: Sparkles,
  },
];

const SOLUTIONS: Card[] = [
  { title: "Startups", body: "0→1 のチーム向けプラン", icon: Briefcase },
  { title: "Enterprise", body: "SSO / 監査ログ / SLA", icon: Layers },
  { title: "Education", body: "学生 / 教員 50% off", icon: GraduationCap },
  { title: "Community", body: "OSS / 非営利は無料", icon: Users },
];

const RESOURCES: Card[] = [
  { title: "Docs", body: "API リファレンス + ガイド", icon: BookOpen },
  { title: "Blog", body: "プロダクト update と長文記事", icon: Newspaper },
  { title: "Support", body: "Slack / Email でサポート", icon: LifeBuoy },
];

function CardGrid({ cards, cols }: { cards: Card[]; cols: string }) {
  return (
    <div className={`grid w-[480px] gap-2 p-3 ${cols}`}>
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <NavigationMenu.Link
            key={card.title}
            href="#"
            className="flex h-auto flex-col items-start gap-1 rounded-md px-3 py-2.5"
          >
            <div className="flex items-center gap-2 text-fg">
              <Icon className="size-4 text-fg-muted" strokeWidth={1.75} />
              <span className="font-medium text-sm">{card.title}</span>
            </div>
            <span className="text-fg-muted text-xs">{card.body}</span>
          </NavigationMenu.Link>
        );
      })}
    </div>
  );
}

export function NavigationMenuDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="NavigationMenu">
        marketing site の top nav 向け compound。 hover で大きな card grid を
        持つ panel が下に滑り出る、 Linear / Vercel 風の作り。 Item には必ず
        value、 Viewport は ViewportPositioner で wrap して Root の最後に置く
        のが要点。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Root の中に List (Item × N) と、 末尾に ViewportPositioner > Viewport。 各 Item は value 必須で、 中に Trigger + Content か Link を置く。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[20rem_1fr] gap-3">
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
        description="Products / Solutions / Resources に dropdown panel、 Pricing は直接 Link の典型 top nav。"
      >
        <Example
          code={`<NavigationMenu.Root>
  <NavigationMenu.List>
    <NavigationMenu.Item value="products">
      <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
      <NavigationMenu.Content>
        <CardGrid cards={PRODUCTS} cols="grid-cols-2" />
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item value="pricing">
      <NavigationMenu.Link href="#">Pricing</NavigationMenu.Link>
    </NavigationMenu.Item>
  </NavigationMenu.List>
  <NavigationMenu.ViewportPositioner>
    <NavigationMenu.Viewport />
  </NavigationMenu.ViewportPositioner>
</NavigationMenu.Root>`}
        >
          <NavigationMenu.Root>
            <NavigationMenu.List>
              <NavigationMenu.Item value="products">
                <NavigationMenu.Trigger>Products</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <CardGrid cards={PRODUCTS} cols="grid-cols-2" />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item value="solutions">
                <NavigationMenu.Trigger>Solutions</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <CardGrid cards={SOLUTIONS} cols="grid-cols-2" />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item value="resources">
                <NavigationMenu.Trigger>Resources</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <CardGrid cards={RESOURCES} cols="grid-cols-1" />
                </NavigationMenu.Content>
              </NavigationMenu.Item>
              <NavigationMenu.Item value="pricing">
                <NavigationMenu.Link href="#">Pricing</NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
            <NavigationMenu.ViewportPositioner>
              <NavigationMenu.Viewport />
            </NavigationMenu.ViewportPositioner>
          </NavigationMenu.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Pitfalls"
        description="ハマりやすい 3 点 (zag-js Ark UI の仕様)。"
      >
        <ul className="flex flex-col gap-3 rounded-md border border-border p-4 text-sm">
          <li>
            <p className="font-medium text-fg">Item に value 必須</p>
            <p className="text-fg-muted text-xs">
              無いと open state が紐付かず Content が描画されない。 たとえ Link
              単独の Item でも value を付ける。
            </p>
          </li>
          <li>
            <p className="font-medium text-fg">
              Viewport は ViewportPositioner で wrap
            </p>
            <p className="text-fg-muted text-xs">
              Viewport を生で置くと positioning が effect しない。
              ViewportPositioner で囲って Root の最後に置く。
            </p>
          </li>
          <li>
            <p className="font-medium text-fg">
              Trigger chevron 回転は group class が必要
            </p>
            <p className="text-fg-muted text-xs">
              chevron 側に group-data-[state=open]:rotate-180、 Trigger 側に
              group class を当てないと回転しない。
            </p>
          </li>
        </ul>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
