/// Define a constant array of recent item statuses
export const RECENT_ITEM_STATUSES = [
    'Active', 'Pending', 'Review', 'Completed'] as const;

/// Define a type that can only be one of the values in RECENT_ITEM_STATUSES    
export type RecentItemStatus = (typeof RECENT_ITEM_STATUSES)[number];