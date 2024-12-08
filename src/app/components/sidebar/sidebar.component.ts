import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faTh,
  faUserGroup,
  faMapLocationDot,
  faGear,
  faBell, // Novo ícone para Alerts
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'], // Correção: styleUrls em vez de styleUrl
})
export class SidebarComponent {
  faHouse = faHouse;
  faTh = faTh;
  faUserGroup = faUserGroup;
  faMapLocationDot = faMapLocationDot;
  faGear = faGear;
  faBell = faBell; // Novo ícone de Alerts
}
