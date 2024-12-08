import { Component } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-stacked-column-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './stacked-column-chart.component.html',
  styleUrls: ['./stacked-column-chart.component.css'],
})
export class StackedColumnChartComponent {
  public chartOptions = {
    series: [
      {
        name: 'Resolvidos',
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: 'Não Resolvidos',
        data: [13, 23, 20, 8, 13, 27],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    } as ApexChart,
    xaxis: {
      categories: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6'],
    } as ApexXAxis,
    yaxis: {
      title: {
        text: 'Número de Alertas',
      },
    } as ApexYAxis,
    legend: {
      position: 'top',
    } as ApexLegend,
    plotOptions: {
      bar: {
        horizontal: false,
      },
    } as ApexPlotOptions,
    dataLabels: {
      enabled: true,
    } as ApexDataLabels,
    title: {
      text: 'Alertas por Semana (Resolvidos e Não Resolvidos)',
    } as ApexTitleSubtitle,
  };
}
