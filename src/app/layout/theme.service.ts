import { computed, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly #storageKey = 'app-theme';

  readonly theme = signal<Theme>('light');
  readonly isDarkMode = computed(() => this.theme() === 'dark');
  readonly isLightMode = computed(() => this.theme() === 'light');

  initTheme() {
    const persisted = localStorage.getItem(this.#storageKey) as Theme | null;
    const system = this.readSystemTheme();
    const resolved = persisted ?? system ?? 'light';
    this.#applyTheme(resolved, false);
  }
  #applyTheme(theme: Theme, persist: boolean): void {
    this.theme.set( theme);
    const root = document.documentElement;
    root.dataset['theme'] = theme;
    root.dataset['bsTheme'] = theme;
    if (persist) {
      localStorage.setItem(this.#storageKey, theme);
    }
  }

  readSystemTheme(): Theme {
    return globalThis.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light';
  }

  setTheme(theme: Theme) {
    this.#applyTheme(theme, true);
  }

  toggleTheme() {
    console.log('Toggling theme', this.theme());
    this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
    this.#applyTheme(this.theme(), true);
  }
}
