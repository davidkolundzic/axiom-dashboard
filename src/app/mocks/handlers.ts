import { http, HttpResponse, delay } from 'msw';
import { getMockProjectById, mockProjects } from './data/mock-projects';
import { mockWorkspace } from './data/mock-workspace';

export const handlers = [

  http.get('/api/workspace', async () => {
    await delay(500);
    return HttpResponse.json({mockWorkspace});
  }),  

  http.get('/api/projects', async () => {
    await delay(700);
    return HttpResponse.json(mockProjects);
  }),

  http.get('/api/projects/:id', async (req) => {
    const { id } = req.params;
    await delay(500);
    if (!id || typeof id !== 'string') { // Validate that id is a string and is not empty -- this is important to prevent potential issues with invalid input
      return HttpResponse.json({ error: 'Invalid project ID' }, { status: 400 });
    }
    const project = getMockProjectById(id);
    if (project) {
      return HttpResponse.json(project);
    }
    return HttpResponse.json({ error: 'Project not found' }, { status: 404 });
  }),
  // Add more handlers for other endpoints as needed
];
