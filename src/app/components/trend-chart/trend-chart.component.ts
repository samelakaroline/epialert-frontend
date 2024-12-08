import { Component, Input, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexChart, ApexXAxis, ApexDataLabels, ApexStroke } from 'ng-apexcharts';

export type ChartOptions = {
  series: any;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-trend-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './trend-chart.component.html',
  styleUrls: ['./trend-chart.component.css'],
})
export class TrendChartComponent implements OnInit {
  @Input() chartType: string = 'line';

  public chartData: ChartOptions = {
    series: [
      {
        name: 'Dados de Alerta',
        data: [5, 15, 15, 10, 50],
      },
    ],
    chart: {
      type: 'line',
      height: 350,
    },
    xaxis: {
      categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
  };

  ngOnInit() {
    this.loadChartData();
  }

  loadChartData() {
    this.chartData.chart.type = this.chartType as 'line' | 'bar';
  }
}
