import { TranscriptSegment } from '@domain';

export const mockTranscript: readonly TranscriptSegment[]  = [
    {
    id: 't1',
    projectId: 'p1',
    speaker: 'Host',
    startSeconds: 0,
    endSeconds: 6,
    text: 'Welcome everyone to our product demo.',
  },
  {
    id: 't2',
    projectId: 'p1',
    speaker: 'Host',
    startSeconds: 6,
    endSeconds: 12,
    text: 'Today we will walk through the main features of our platform.',
  },
  {
    id: 't3',
    projectId: 'p1',
    speaker: 'Guest',
    startSeconds: 12,
    endSeconds: 20,
    text: 'Thanks for having me, I am excited to show what we built.',
  },
  {
    id: 't4',
    projectId: 'p1',
    speaker: 'Host',
    startSeconds: 20,
    endSeconds: 32,
    text: 'Let’s start with the dashboard and key metrics overview.',
  },
  {
    id: 't5',
    projectId: 'p1',
    speaker: 'Guest',
    startSeconds: 32,
    endSeconds: 45,
    text: 'You can see real-time processing and insights here.',
  }
];