import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertsChartComponent } from '../../components/alerts-chart/alerts-chart.component';
import {
  faSquareCheck,
  faTriangleExclamation,
  faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, FontAwesomeModule, AlertsChartComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  faSquareCheck = faSquareCheck;
  faTriangleExclamation = faTriangleExclamation;
  faSquarePollVertical = faSquarePollVertical;
}
