import { Component, output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class TopbarComponent {
  menuClick = output<void>();

  onMenuClick() {
    this.menuClick.emit();
  }
}
