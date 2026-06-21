import { RatingGroup } from "@/components/ui/rating-group";
import { DocHeader, DocSection } from "../parts/doc-page";
import { Example } from "../parts/example";
import { type PropRow, PropsTable } from "../parts/props-table";

const PARTS = [
  {
    name: "RatingGroup.Root",
    description:
      "外枠。 value / defaultValue / count / allowHalf / readOnly / disabled を受ける。 flex flex-col gap-1.5 が default。",
  },
  {
    name: "RatingGroup.Label",
    description: "見出し text。 text-sm + font-medium。",
  },
  {
    name: "RatingGroup.Control",
    description:
      "star 列の wrapper。 flex + gap で間隔調整。 data-disabled で opacity-50。",
  },
  {
    name: "RatingGroup.Item",
    description:
      "1 つの star。 background 用 + foreground 用の Star を 2 つ重ね、 group-data-highlighted で foreground を opacity 0→1 に。 group-data-half で clip-path で半分塗り。",
  },
  {
    name: "RatingGroup.Context",
    description:
      "render-prop で api を取り出す。 api.items を map して Item を render するのが基本 pattern。 api.value で現在値も読める。",
  },
  {
    name: "RatingGroup.HiddenInput",
    description:
      "form value を提出する hidden input。 form 連携が必要なら Control 内に置く。",
  },
];

const ROOT_PROPS: PropRow[] = [
  {
    name: "value",
    type: "number",
    default: "—",
    description: "controlled。 onValueChange とセットで使う。",
  },
  {
    name: "defaultValue",
    type: "number",
    default: "0",
    description: "uncontrolled 初期値。 allowHalf なら 0.5 単位も可。",
  },
  {
    name: "count",
    type: "number",
    default: "5",
    description: "総 star 数。",
  },
  {
    name: "allowHalf",
    type: "boolean",
    default: "false",
    description: "0.5 刻みで選べるように。 half 状態は clip-path で半分塗り。",
  },
  {
    name: "readOnly",
    type: "boolean",
    default: "false",
    description: "クリック不可だが見た目は通常 (review 表示など)。",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "クリック不可 + opacity-50。 form 入力を完全に止めたい時。",
  },
];

export function RatingGroupDoc() {
  return (
    <div className="flex flex-col gap-10">
      <DocHeader title="RatingGroup">
        星評価 UI。 count で星の数、 value で現在値を持つ。 allowHalf で 0.5
        単位の表現に対応。 Item は半透明の outline star と塗り潰し star を
        重ねる構造で、 highlighted / half の data 属性で foreground を出し分け。
      </DocHeader>

      <DocSection
        title="Anatomy"
        description="Control の中で Context render-prop を回して Item を並べるのが基本契約。"
      >
        <ul className="flex flex-col gap-2 rounded-md border border-border p-4">
          {PARTS.map((p) => (
            <li key={p.name} className="grid grid-cols-[14rem_1fr] gap-3">
              <span className="font-mono text-fg text-xs">{p.name}</span>
              <span className="text-fg-muted text-xs leading-relaxed">
                {p.description}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      <DocSection
        title="Interactive"
        description="defaultValue + count で開始。 Context render-prop で現在値を text 表示する pattern が定型。"
      >
        <Example
          code={`<RatingGroup.Root defaultValue={3} count={5}>
  <RatingGroup.Label>Rate this primitive</RatingGroup.Label>
  <div className="flex items-center gap-3">
    <RatingGroup.Control>
      <RatingGroup.Context>
        {(api) =>
          api.items.map((index) => (
            <RatingGroup.Item key={index} index={index} />
          ))
        }
      </RatingGroup.Context>
      <RatingGroup.HiddenInput />
    </RatingGroup.Control>
    <RatingGroup.Context>
      {(api) => (
        <span>{api.value.toFixed(1)} / {api.count}</span>
      )}
    </RatingGroup.Context>
  </div>
</RatingGroup.Root>`}
        >
          <RatingGroup.Root defaultValue={3} count={5} className="w-fit">
            <RatingGroup.Label>Rate this primitive</RatingGroup.Label>
            <div className="flex items-center gap-3">
              <RatingGroup.Control>
                <RatingGroup.Context>
                  {(api) =>
                    api.items.map((index) => (
                      <RatingGroup.Item key={index} index={index} />
                    ))
                  }
                </RatingGroup.Context>
                <RatingGroup.HiddenInput />
              </RatingGroup.Control>
              <RatingGroup.Context>
                {(api) => (
                  <span className="text-fg-muted text-sm tabular-nums">
                    {api.value.toFixed(1)} / {api.count}
                  </span>
                )}
              </RatingGroup.Context>
            </div>
          </RatingGroup.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Allow half + larger"
        description="allowHalf を渡すと 0.5 単位で選べる。 Item の className で svg サイズを上書きすれば大きく見せられる。"
      >
        <Example
          code={`<RatingGroup.Root defaultValue={3.5} count={5} allowHalf>
  <RatingGroup.Control className="gap-1.5">
    <RatingGroup.Context>
      {(api) =>
        api.items.map((i) => (
          <RatingGroup.Item key={i} index={i} className="[&>svg]:size-8" />
        ))
      }
    </RatingGroup.Context>
  </RatingGroup.Control>
</RatingGroup.Root>`}
        >
          <RatingGroup.Root
            defaultValue={3.5}
            count={5}
            allowHalf
            className="w-fit"
          >
            <RatingGroup.Label>Overall</RatingGroup.Label>
            <div className="flex items-center gap-3">
              <RatingGroup.Control className="gap-1.5">
                <RatingGroup.Context>
                  {(api) =>
                    api.items.map((index) => (
                      <RatingGroup.Item
                        key={index}
                        index={index}
                        className="[&>svg]:size-8"
                      />
                    ))
                  }
                </RatingGroup.Context>
                <RatingGroup.HiddenInput />
              </RatingGroup.Control>
              <RatingGroup.Context>
                {(api) => (
                  <span className="font-semibold text-2xl text-fg tabular-nums">
                    {api.value.toFixed(1)}
                  </span>
                )}
              </RatingGroup.Context>
            </div>
          </RatingGroup.Root>
        </Example>
      </DocSection>

      <DocSection
        title="Read only / disabled"
        description="readOnly はクリック不可だが見た目は通常 (review 表示)。 disabled は + opacity-50 で「触れない」感を出す。"
      >
        <Example
          code={`<RatingGroup.Root defaultValue={4.5} count={5} allowHalf readOnly>...</RatingGroup.Root>
<RatingGroup.Root defaultValue={2} count={5} disabled>...</RatingGroup.Root>`}
        >
          <div className="flex flex-wrap gap-8">
            <RatingGroup.Root
              defaultValue={4.5}
              count={5}
              allowHalf
              readOnly
            >
              <RatingGroup.Label>Read only (4.5)</RatingGroup.Label>
              <RatingGroup.Control>
                <RatingGroup.Context>
                  {(api) =>
                    api.items.map((index) => (
                      <RatingGroup.Item key={index} index={index} />
                    ))
                  }
                </RatingGroup.Context>
                <RatingGroup.HiddenInput />
              </RatingGroup.Control>
            </RatingGroup.Root>

            <RatingGroup.Root defaultValue={2} count={5} disabled>
              <RatingGroup.Label>Disabled</RatingGroup.Label>
              <RatingGroup.Control>
                <RatingGroup.Context>
                  {(api) =>
                    api.items.map((index) => (
                      <RatingGroup.Item key={index} index={index} />
                    ))
                  }
                </RatingGroup.Context>
                <RatingGroup.HiddenInput />
              </RatingGroup.Control>
            </RatingGroup.Root>
          </div>
        </Example>
      </DocSection>

      <DocSection title="Root props">
        <PropsTable rows={ROOT_PROPS} />
      </DocSection>
    </div>
  );
}
