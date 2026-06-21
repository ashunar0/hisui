import { RatingGroup } from "@/components/ui/rating-group";

export default function RatingGroupAllowHalfDemo() {
  return (
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
            <span className="font-semibold text-2xl text-fg tabular-nums">
              {api.value.toFixed(1)}
            </span>
          )}
        </RatingGroup.Context>
      </div>
    </RatingGroup.Root>
  );
}
