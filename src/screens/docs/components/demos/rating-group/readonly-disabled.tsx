import { RatingGroup } from "@/components/ui/rating-group";

export default function RatingGroupReadonlyDisabledDemo() {
  return (
    <div className="flex flex-wrap gap-8">
      <RatingGroup.Root defaultValue={4.5} count={5} allowHalf readOnly>
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
  );
}
