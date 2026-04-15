import { Component, computed, inject, output } from '@angular/core';
import { ThemeService } from '@layout/theme.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class TopbarComponent {

  readonly themeService = inject(ThemeService);
  theme = this.themeService.theme;

  menuClick = output<void>();

  readonly isLight = this.themeService.isLightMode;
  readonly themeToggleLabel = computed(() => this.isLight() ? 'Switch to dark mode' : 'Switch to light mode');

  onMenuClick() {
    this.menuClick.emit();
  }
}
