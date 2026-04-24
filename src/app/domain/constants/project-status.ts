export const PROJECT_STATUSES = {
    draft: 'draft',
    processing: 'processing',
    ready: 'ready',
    failed: 'failed'
} as const;

export type ProjectStatus = (typeof PROJECT_STATUSES)[keyof typeof PROJECT_STATUSES];