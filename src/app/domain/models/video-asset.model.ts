export interface VideoAsset {
    id: string;
    projectId: string;
    speaker: string;
    startSecond: number;
    endSecond: number;
    text: string;
    highlighted?: boolean;
}
