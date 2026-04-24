export const PROJECT_TYPES = {
    meeting: 'meeting',
    interview: 'interview',
    webinar: 'webinar',
    demo: 'demo'
} as const;

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES];