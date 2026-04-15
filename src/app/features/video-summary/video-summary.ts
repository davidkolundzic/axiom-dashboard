import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-video-summary',
  imports: [],
  templateUrl: './video-summary.html',
  styleUrl: './video-summary.scss',
})
export class VideoSummaryComponent {
  overview = signal('Video Summary Overview');
  title = signal('Video Summary');
  subtitle = signal('Summarize and analyze your video content with ease');

}
