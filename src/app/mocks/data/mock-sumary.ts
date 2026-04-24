import { SummaryBlock } from "@domain";

export const mockSummary= [
 {
    id: 's1',
    projectId: 'p1',
    title: 'Overview',
    type: 'overview',
    items: [
      'Product demo walkthrough',
      'Introduction to key platform features',
      'Focus on dashboard and analytics'
    ]
  },
  {
    id: 's2',
    projectId: 'p1',
    title: 'Key Takeaways',
    type: 'key-takeaways',
    items: [
      'Real-time processing is core feature',
      'Dashboard provides actionable insights',
      'Platform designed for scalability'
    ]
  },
  {
    id: 's3',
    projectId: 'p1',
    title: 'Action Items',
    type: 'action-items',
    items: [
      'Prepare onboarding documentation',
      'Schedule follow-up demo with stakeholders',
      'Collect feedback from initial users'
    ]
  }
] as const satisfies readonly SummaryBlock[];