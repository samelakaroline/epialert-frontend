import { Component, inject, Input } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
  faBell,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faBell = faBell;
  faAngleDown = faAngleDown;

  @Input() pageTitle: string = '';
  user: UserInterface = {
    id: 1,
    name: 'Fulano de Tal',
    email: 'fulanodetal@email.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
  };

  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor() {}
}
