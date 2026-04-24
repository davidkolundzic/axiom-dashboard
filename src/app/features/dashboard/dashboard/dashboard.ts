import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectsStore } from '../projects.store';

@Component({
  selector: 'app-dashboard',
  imports: [JsonPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  readonly projectsStore = inject(ProjectsStore);

  readonly projects = this.projectsStore.projects;
  readonly loading = this.projectsStore.loading;
  readonly error = this.projectsStore.error;

}
