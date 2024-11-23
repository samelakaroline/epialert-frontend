import { Component, inject, Input } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interface';
import { DataService } from '../../services/data-service.service';
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
  user: UserInterface | undefined;
  userService: DataService = inject(DataService);

  menuOpen = false;
  // Método para alternar o estado do menu hambúrguer
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  constructor() {
    // Retorna um usuário específico
    this.userService.getUser(1).then((user) => (this.user = user));
  }
}
