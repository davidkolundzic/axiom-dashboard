import { Plan } from "@domain";

export interface Workspace {
    id: string;
    name: string;
    plan: Plan;
    membersCount: number;
    minutesUsed: number;
    minutesLimit: number;
}
