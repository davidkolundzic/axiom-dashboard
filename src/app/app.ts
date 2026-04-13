import { Component, signal } from '@angular/core';
import { DashboardShellComponent } from './layout/dashboard-shell/dashboard-shell';

@Component({
  selector: 'app-root',
  imports: [ DashboardShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('axiom-dashboard');
}
