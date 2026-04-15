import { RecentItemStatus } from "./recent-item-status.constants";

export interface RecentItem {
    name: string;
    category: string;
    status: RecentItemStatus;
    updatedAt: string;
    owner: string;
}
