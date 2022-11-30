import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelsComponent } from './wheels.component';

describe('WheelsComponent', () => {
  let component: WheelsComponent;
  let fixture: ComponentFixture<WheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
