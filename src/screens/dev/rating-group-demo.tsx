import { RatingGroup } from "@/components/ui/rating-group";

export function RatingGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          interactive + Context (value / count を tabular text 表示)
        </span>
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
                <span className="text-sm tabular-nums text-fg-muted">
                  {api.value.toFixed(1)} / {api.count}
                </span>
              )}
            </RatingGroup.Context>
          </div>
        </RatingGroup.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          allowHalf + larger (Item の Star を size-8 に上書き)
        </span>
        <RatingGroup.Root defaultValue={3.5} count={5} allowHalf className="w-fit">
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
                <span className="text-2xl font-semibold tabular-nums text-fg">
                  {api.value.toFixed(1)}
                </span>
              )}
            </RatingGroup.Context>
          </div>
        </RatingGroup.Root>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-fg-muted">
          readOnly + disabled (state demo を 2 つ並べる)
        </span>
        <div className="flex flex-wrap gap-8">
          <RatingGroup.Root defaultValue={4.5} count={5} allowHalf readOnly>
            <RatingGroup.Label>Read only (4.5 固定)</RatingGroup.Label>
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
      </div>
    </div>
  );
}
