export const PLANS = ['free', 'pro', 'business'] as const;

export type Plan = (typeof PLANS)[number];

export const PLAN_MAP = Object.fromEntries(PLANS.map(plan => [plan, plan] as const)) as Record<Plan, Plan>;

export const isPlan = (value: string): value is Plan => {
    return PLANS.includes(value as Plan);
}