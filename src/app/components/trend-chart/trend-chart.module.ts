import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexChartsModule } from 'ng-apexcharts';
import { TrendChartComponent } from './trend-chart.component';

@NgModule({
  declarations: [TrendChartComponent],
  imports: [CommonModule, NgApexChartsModule],
  exports: [TrendChartComponent]
})
export class TrendChartModule {}
