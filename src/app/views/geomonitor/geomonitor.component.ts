import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-geomonitor',
  templateUrl: './geomonitor.component.html',
  styleUrls: ['./geomonitor.component.css'],
  standalone: true,
  imports: [SidebarComponent]
})
export class GeomonitorComponent implements OnInit {
  private map: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadLeaflet();
    }
  }

  private async loadLeaflet(): Promise<void> {
    const L = await import('leaflet');
    this.initMap(L);
  }

  private initMap(L: any): void {
    this.map = L.map('map').setView([37.7749, -122.4194], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    const points: [number, number][] = [
      [37.7749, -122.4194],
      [37.7849, -122.4094],
      [37.7649, -122.4294]
    ];

    points.forEach(point => {
      L.circleMarker(point, { color: 'red', radius: 8 }).addTo(this.map);
    });
  }
}
