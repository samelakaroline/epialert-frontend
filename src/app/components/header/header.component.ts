import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() pageTitle: string = 'Home';
  @Input() user = {
    name: 'Duck UI',
    email: 'duckui@demo.com',
    avatar: 'https://via.placeholder.com/40',
  };
}
