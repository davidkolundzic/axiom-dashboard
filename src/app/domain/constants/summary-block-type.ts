export const SUMMARY_BLOCK_TYPES = {
    overview: 'overview',
    keyTakeaways: 'key-takeaways',
    actionItems: 'action-items',
    risks: 'risks'
} as const;

export type SummaryBlockType = (typeof SUMMARY_BLOCK_TYPES)[keyof typeof SUMMARY_BLOCK_TYPES];