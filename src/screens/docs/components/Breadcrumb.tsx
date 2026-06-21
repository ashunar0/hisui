import { Folder, Home, Slash } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "Breadcrumb.Root",
    description: "nav 要素。 aria-label=Breadcrumb を持つ landmark。",
  },
  {
    name: "Breadcrumb.List",
    description: "ol。 flex + wrap + gap で item を横並びにする。",
  },
  {
    name: "Breadcrumb.Item",
    description: "li。 inline-flex で link / separator を 1 単位に。",
  },
  {
    name: "Breadcrumb.Link",
    description:
      "a 要素。 通常は text-fg-muted、 hover で text-fg。 href / onClick を渡す。",
  },
  {
    name: "Breadcrumb.CurrentLink",
    description:
      "span + aria-current=page。 末尾の現在地。 font-medium + text-fg で強調。",
  },
  {
    name: "Breadcrumb.Separator",
    description:
      "role=presentation の span。 default は ChevronRight。 children で記号差し替え。",
  },
  {
    name: "Breadcrumb.Ellipsis",
    description:
      "省略 button。 中段を畳む時に使う。 default は MoreHorizontal icon。",
  },
];

const PROPS: PropRow[] = [
  {
    name: "Root",
    type: "HTMLAttributes<HTMLElement>",
    default: "—",
    description:
      "標準 nav prop をそのまま受ける。 aria-label は default で Breadcrumb。",
  },
  {
    name: "List",
    type: "HTMLAttributes<HTMLOListElement>",
    default: "—",
    description: "標準 ol prop。",
  },
  {
    name: "Item",
    type: "LiHTMLAttributes<HTMLLIElement>",
    default: "—",
    description: "標準 li prop。",
  },
  {
    name: "Link",
    type: "AnchorHTMLAttributes<HTMLAnchorElement>",
    default: "—",
    description: "標準 a prop。 href / onClick を渡す。",
  },
  {
    name: "CurrentLink",
    type: "HTMLAttributes<HTMLSpanElement>",
    default: "—",
    description:
      "span。 aria-current=page を固定で付与。 children に現在ページ名を渡す。",
  },
  {
    name: "Separator",
    type: "HTMLAttributes<HTMLSpanElement>",
    default: "—",
    description:
      "children を渡すと icon / 記号を差し替えできる。 渡さなければ ChevronRight。",
  },
  {
    name: "Ellipsis",
    type: "ButtonHTMLAttributes<HTMLButtonElement>",
    default: "—",
    description:
      "button。 onClick を渡せば畳んだ階層を展開する menu / popover に繋げられる。",
  },
];

export function BreadcrumbDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="Breadcrumb">
        現在地までの階層を辿るナビゲーション。 plain HTML primitive
        (zag-js は使わない) で、 nav / ol / li / a / span の構造をそのまま露出。
        Separator / Ellipsis は icon の差し替えだけサポート。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="末尾は CurrentLink、 途中は Link + Separator の繰り返し。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[12rem_1fr] gap-3">
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
        description="Link を辿って末尾だけ CurrentLink にする。 Separator は default の ChevronRight。"
      >
        <Example
          code={`<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    <Breadcrumb.Item>
      <Breadcrumb.CurrentLink>Breadcrumb</Breadcrumb.CurrentLink>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>`}
        >
          <Breadcrumb.Root>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink>Breadcrumb</Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Custom separator"
        description="Separator に children を渡すと icon や記号に切り替えられる。 slash / dot がよく使われる。"
      >
        <Example
          code={`<Breadcrumb.Separator>
  <Slash className="size-3" />
</Breadcrumb.Separator>

<Breadcrumb.Separator>·</Breadcrumb.Separator>`}
        >
          <div className="flex flex-col gap-2">
            <Breadcrumb.Root>
              <Breadcrumb.List>
                <Breadcrumb.Item>
                  <Breadcrumb.Link href="#">Workspace</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator>
                  <Slash className="size-3" />
                </Breadcrumb.Separator>
                <Breadcrumb.Item>
                  <Breadcrumb.Link href="#">Projects</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator>
                  <Slash className="size-3" />
                </Breadcrumb.Separator>
                <Breadcrumb.Item>
                  <Breadcrumb.CurrentLink>ui-lab</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
              </Breadcrumb.List>
            </Breadcrumb.Root>
            <Breadcrumb.Root>
              <Breadcrumb.List>
                <Breadcrumb.Item>
                  <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator>·</Breadcrumb.Separator>
                <Breadcrumb.Item>
                  <Breadcrumb.Link href="#">Guides</Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator>·</Breadcrumb.Separator>
                <Breadcrumb.Item>
                  <Breadcrumb.CurrentLink>Theming</Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
              </Breadcrumb.List>
            </Breadcrumb.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection
        title="With icon"
        description="Link / CurrentLink の中に icon を直接入れる。 inline-flex + gap-1.5 で揃う。"
      >
        <Example
          code={`<Breadcrumb.Link href="/" className="inline-flex items-center gap-1.5">
  <Home className="size-3.5" />
  Home
</Breadcrumb.Link>`}
        >
          <Breadcrumb.Root>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link
                  href="#"
                  className="inline-flex items-center gap-1.5"
                >
                  <Home className="size-3.5" />
                  Home
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link
                  href="#"
                  className="inline-flex items-center gap-1.5"
                >
                  <Folder className="size-3.5" />
                  src
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink className="inline-flex items-center gap-1.5">
                  <Folder className="size-3.5" />
                  components
                </Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Collapsed"
        description="長い階層は Ellipsis で畳む。 onClick で Menu / Popover を出して展開するパターンが想定。"
      >
        <Example
          code={`<Breadcrumb.Item>
  <Breadcrumb.Ellipsis onClick={() => openMenu()} />
</Breadcrumb.Item>`}
        >
          <Breadcrumb.Root>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Ellipsis />
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Settings</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink>Billing</Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        </Example>
      </DocSection>

      <DocSection title="Props">
        <PropsTable rows={PROPS} />
      </DocSection>
    </div>
  );
}
