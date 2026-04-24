import { Project } from "@domain";

export function getMockProjectById(id: string): Project | undefined {
    return mockProjects.find(project => project.id === id);
}

export const mockProjects: Project[] = [
    {
    id: 'p1',
    workspaceId: 'w1',
    name: 'Product Demo Q2',
    type: 'demo',
    status: 'ready',
    language: 'en',
    durationSeconds: 1120,
    createdAt: '2026-04-10T10:00:00Z',
    updatedAt: '2026-04-10T10:30:00Z',
    videoAssetId: 'v1'
  },
  {
    id: 'p2',
    workspaceId: 'w1',
    name: 'Customer Interview #12',
    type: 'interview',
    status: 'processing',
    language: 'en',
    durationSeconds: 2450,
    createdAt: '2026-04-12T09:00:00Z',
    updatedAt: '2026-04-12T09:10:00Z',
    videoAssetId: 'v2'
  },
  {
    id: 'p3',
    workspaceId: 'w1',
    name: 'Webinar Recording',
    type: 'webinar',
    status: 'ready',
    language: 'de',
    durationSeconds: 3600,
    createdAt: '2026-04-08T14:00:00Z',
    updatedAt: '2026-04-08T15:00:00Z',
    videoAssetId: 'v3'
  },
  {
    id: 'p4',
    workspaceId: 'w1',
    name: 'Sales Call Review',
    type: 'meeting',
    status: 'failed',
    language: 'en',
    durationSeconds: 890,
    createdAt: '2026-04-11T11:00:00Z',
    updatedAt: '2026-04-11T11:20:00Z',
    videoAssetId: 'v4'
  }
];