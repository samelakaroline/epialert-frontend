import { Component, inject, Input } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interface';
import { DataService } from '../../services/data-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
  faBell,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
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

  constructor() {
    // Retorna um usuário específico
    this.userService.getUser(1).then((user) => (this.user = user));
  }
}
