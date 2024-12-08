import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ChartComponent,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
} from 'ng-apexcharts';

@Component({
  selector: 'app-alerts-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './alerts-chart.component.html',
  styleUrls: ['./alerts-chart.component.css'],
})
export class AlertsChartComponent {
  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Alta',
      data: [5, 7, 6, 8, 9, 10, 11],
    },
    {
      name: 'Média',
      data: [4, 5, 6, 6, 7, 6, 8],
    },
    {
      name: 'Baixa',
      data: [10, 12, 15, 14, 16, 15, 18],
    },
  ];

  chartOptions: {
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    title: ApexTitleSubtitle;
    dataLabels: ApexDataLabels;
  } = {
    chart: {
      type: 'bar', // Garantindo que 'type' é definido corretamente
      height: 350,
    },
    xaxis: {
      categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    },
    yaxis: {
      title: {
        text: 'Quantidade de Alertas',
      },
    },
    title: {
      text: 'Taxa de Alertas Semanais',
      align: 'center',
    },
    dataLabels: {
      enabled: false,
    },
  };
}
