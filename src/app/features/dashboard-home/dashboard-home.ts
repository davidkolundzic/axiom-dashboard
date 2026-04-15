import { Component, computed, signal } from '@angular/core';
import { ACTIVITIES_MOCK, RECENT_ITEMS_MOCK, STAT_CARD_MOCK } from './dashboard-data.mock';

@Component({
  selector: 'app-dashboard-home',
  imports: [],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.scss',
})
export class DashboardHomeComponent {
  overview = signal('Overview');
  title = signal('Business Dashboard');
  subtitle = signal('A reusable Angular dashboard starter for internal tools, fintech-style products and amin apps.');

  stats = signal(STAT_CARD_MOCK);
  activities = signal(ACTIVITIES_MOCK);
  recentItems = signal(RECENT_ITEMS_MOCK);
  
  readonly completionRate = computed(() => '82%');
}
