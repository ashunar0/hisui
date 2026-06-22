"use client";

import { Accordion } from "@/components/ui/accordion";

export default function AccordionDisabledDemo() {
  return (
    <Accordion.Root collapsible>
      <Accordion.Item value="shipping">
        <Accordion.ItemTrigger>
          How long does shipping take?
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          Standard shipping is 3-5 business days within the US, and 7-14 days
          internationally. Express options are available at checkout.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="support" disabled>
        <Accordion.ItemTrigger>
          How do I contact support? (locked)
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          Email support@example.com or use the in-app chat.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
