import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Project } from '@domain';
import { catchError, map, of, startWith } from 'rxjs';
import { ProjectsServices } from './projects.services';

type ProjectsVm = {
  projects: Project[];
  loading: boolean;
  error: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class ProjectsStore {
  readonly #api = inject(ProjectsServices);
  readonly #initialVm: ProjectsVm = { projects: [], loading: true, error: null };

  readonly vm = toSignal(
    this.#api.getProjects().pipe(
      map((projects): ProjectsVm => ({ projects, loading: false, error: null })),
      startWith(this.#initialVm),
      catchError(() =>
        of<ProjectsVm>({
          projects: [],
          loading: false,
          error: 'Failed to load projects.',
        })
      )
    ),
    {
      initialValue: this.#initialVm,
    }
  );

  readonly projects = computed(() => this.vm()?.projects ?? []);
  readonly loading = computed(() => this.vm()?.loading ?? true);
  readonly error = computed(() => this.vm()?.error ?? null);
}
