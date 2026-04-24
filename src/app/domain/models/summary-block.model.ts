import { SummaryBlockType } from "@domain/constants";

export interface SummaryBlock {
    id: string;
    projectId: string;
    title: string;
    items: string[];
    type: SummaryBlockType;
}
