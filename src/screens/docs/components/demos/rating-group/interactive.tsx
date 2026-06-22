"use client";

import { RatingGroup } from "@/components/ui/rating-group";

export default function RatingGroupInteractiveDemo() {
  return (
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
  );
}
