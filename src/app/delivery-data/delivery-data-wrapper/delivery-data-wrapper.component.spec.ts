import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDataWrapperComponent } from './delivery-data-wrapper.component';

describe('DeliveryDataWrapperComponent', () => {
  let component: DeliveryDataWrapperComponent;
  let fixture: ComponentFixture<DeliveryDataWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryDataWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryDataWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
