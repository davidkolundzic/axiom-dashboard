import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  overview = signal('Overview');
  title = signal('Available for Frontend Contracts');
  subtitle = signal('A concise view of projects, skills, and delivery experience for product teams and hiring managers.');
}
