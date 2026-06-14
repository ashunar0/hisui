import { RatingGroup } from "@/components/ui/rating-group";

export function RatingGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <RatingGroup.Root defaultValue={3} count={5}>
        <RatingGroup.Label>Rate this primitive</RatingGroup.Label>
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

      <RatingGroup.Root defaultValue={3.5} count={5} allowHalf>
        <RatingGroup.Label>Half star (allowHalf=true)</RatingGroup.Label>
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

      <RatingGroup.Root defaultValue={4} count={5} readOnly>
        <RatingGroup.Label>Read only (4.0 固定表示)</RatingGroup.Label>
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
  );
}
