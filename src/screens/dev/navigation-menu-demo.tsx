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
              <span className="text-sm font-medium">{card.title}</span>
            </div>
            <span className="text-xs text-fg-muted">{card.body}</span>
          </NavigationMenu.Link>
        );
      })}
    </div>
  );
}

export function NavigationMenuDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          top nav (Trigger hover で大きい panel が下に展開、 Viewport + Positioner)
        </span>
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
      </div>
    </div>
  );
}
