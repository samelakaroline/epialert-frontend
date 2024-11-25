import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-geomonitor',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './geomonitor.component.html',
  styleUrl: './geomonitor.component.css',
})
export class GeoMonitorComponent {}
