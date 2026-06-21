import { Accordion } from "@/components/ui/accordion";

const FAQ = [
  {
    value: "shipping",
    q: "How long does shipping take?",
    a: "Standard shipping is 3-5 business days within the US, and 7-14 days internationally. Express options are available at checkout.",
  },
  {
    value: "returns",
    q: "What is the return policy?",
    a: "Items can be returned within 30 days of delivery for a full refund, as long as they are unused and in original packaging.",
  },
  {
    value: "support",
    q: "How do I contact support?",
    a: "Email support@example.com or use the in-app chat. We typically respond within 24 hours on business days.",
  },
] as const;

export default function AccordionMultipleDemo() {
  return (
    <Accordion.Root multiple defaultValue={["shipping", "support"]}>
      {FAQ.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemTrigger>
            {item.q}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item.a}</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
