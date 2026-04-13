import { Component, inject, input, output } from '@angular/core';
import { APP_NAV_ITEMS } from '@layout/nav/app-nav.config';
import { AppNavItem } from '@layout/nav/app-nav.model';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  mobile = input.required<boolean>();
  navigate = output<void>();

  // Inject the navigation items from the configuration 
  // this will be an array of AppNavItem objects defined in app-nav.config.ts
  readonly #navItems: AppNavItem[] = inject(APP_NAV_ITEMS);

  get navItems(): AppNavItem[] {
    // Filter the navigation items to include only those that are active
    return this.#navItems.filter(item => item.active);
  }

  onNavigate() {
    this.navigate.emit();
  }
}
