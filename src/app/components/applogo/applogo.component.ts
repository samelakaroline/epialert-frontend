import { Component } from '@angular/core';

@Component({
  selector: 'app-applogo',
  standalone: true,
  template: `<div class="app-logo">EpyAlert</div>`,
  styles: [`
    .app-logo {
      font-size: 24px;
      font-weight: bold;
      color: #0078d4;
    }
  `],
})
export class AppLogoComponent {}
