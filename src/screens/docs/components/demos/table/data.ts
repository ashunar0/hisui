export type Plan = {
  id: string;
  name: string;
  seats: number;
  mrr: number;
  status: "active" | "trial" | "churned";
};

export const PLANS: Plan[] = [
  { id: "1", name: "Acme Inc", seats: 24, mrr: 1200, status: "active" },
  { id: "2", name: "Globex", seats: 8, mrr: 480, status: "trial" },
  { id: "3", name: "Initech", seats: 56, mrr: 3360, status: "active" },
  { id: "4", name: "Hooli", seats: 3, mrr: 180, status: "churned" },
  { id: "5", name: "Pied Piper", seats: 12, mrr: 720, status: "active" },
];

export const STATUS_PALETTE: Record<
  Plan["status"],
  "success" | "info" | "danger"
> = {
  active: "success",
  trial: "info",
  churned: "danger",
};
