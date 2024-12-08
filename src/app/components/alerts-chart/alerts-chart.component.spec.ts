import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsChartComponent } from './alerts-chart.component';

describe('AlertsChartComponent', () => {
  let component: AlertsChartComponent;
  let fixture: ComponentFixture<AlertsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
