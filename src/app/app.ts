import { Component, inject, signal } from '@angular/core';
import { DashboardShellComponent } from './layout/dashboard-shell/dashboard-shell';
import { ThemeService } from '@layout/theme.service';

@Component({
  selector: 'app-root',
  imports: [ DashboardShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('axiom-dashboard');
  readonly themeService = inject(ThemeService);

  constructor() {    
    this.themeService.initTheme();
  }

}
