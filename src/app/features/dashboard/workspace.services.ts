import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Workspace } from '@domain/models/workspace.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceServices {
  readonly #httpClient = inject(HttpClient);

  getWorkspaces(): Observable<Workspace[]> {
    // This will be replaced with an actual API call in the future
    return this.#httpClient.get<Workspace[]>('/api/workspace');
  }
}
