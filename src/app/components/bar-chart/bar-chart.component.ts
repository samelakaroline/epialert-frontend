import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ApexXAxis, ApexYAxis, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  public chartOptions = {
    series: [
      {
        name: 'Quantidade de Alertas',
        data: [45, 60, 30, 20, 35], // Dados mockados para cada categoria
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    } as ApexChart,
    xaxis: {
      categories: ['Gripe', 'Covid-19', 'Dengue', 'Zika Vírus', 'Chikungunya'],
    } as ApexXAxis,
    yaxis: {
      title: {
        text: 'Quantidade de Alertas',
      },
    } as ApexYAxis,
    title: {
      text: 'Distribuição de Alertas por Categoria',
    } as ApexTitleSubtitle,
  };
}
