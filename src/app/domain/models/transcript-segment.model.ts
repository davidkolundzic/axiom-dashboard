export interface TranscriptSegment {
    id: string;
    projectId: string;
    speaker: string;
    startSeconds: number;
    endSeconds: number;
    text: string;
}
