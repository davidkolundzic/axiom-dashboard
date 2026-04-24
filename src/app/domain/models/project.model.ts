import { ProjectStatus, ProjectType } from "@domain";

export interface Project {
    id: string;
    workspaceId: string;
    name: string;
    type: ProjectType;
    status: ProjectStatus;
    language: string;
    durationSeconds: number;
    createdAt: string;
    updatedAt: string;
    videoAssetId?: string;
}
