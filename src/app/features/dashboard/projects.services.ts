import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Project, Workspace } from '@domain';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProjectsServices {
  readonly #httpClient = inject(HttpClient);

  getWorkspaces(): Observable<Workspace[]> {
    // This will be replaced with an actual API call in the future
    return this.#httpClient.get<Workspace[]>('/api/workspace');
  }

  getProjects(): Observable<Project[]> {
    // This will be replaced with an actual API call in the future
    return this.#httpClient.get<Project[]>('/api/projects');
  }
}
