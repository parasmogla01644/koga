import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaddleComponent } from './saddle.component';

describe('SaddleComponent', () => {
  let component: SaddleComponent;
  let fixture: ComponentFixture<SaddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaddleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
