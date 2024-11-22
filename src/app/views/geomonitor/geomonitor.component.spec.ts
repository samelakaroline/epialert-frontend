import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeomonitorComponent } from './geomonitor.component';

describe('GeomonitorComponent', () => {
  let component: GeomonitorComponent;
  let fixture: ComponentFixture<GeomonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeomonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeomonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
