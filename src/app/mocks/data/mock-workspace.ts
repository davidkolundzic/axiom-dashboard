import { Workspace, PLANS, PLAN_MAP } from "@domain";

export const mockWorkspace: Workspace = {
    id: 'workspace-1',
    name: 'My Workspace',
    plan: 'pro', // 'pro' as per the PLAN_MAP
    membersCount: 5,
    minutesUsed: 320,
    minutesLimit: 5000
};