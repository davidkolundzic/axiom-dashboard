import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard-shell',
  imports: [],
  templateUrl: './dashboard-shell.html',
  styleUrl: './dashboard-shell.scss',
})
export class DashboardShell {
  readonly sidebarOpen = signal(false);
  
}
