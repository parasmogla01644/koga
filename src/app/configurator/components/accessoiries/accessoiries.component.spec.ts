import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoiriesComponent } from './accessoiries.component';

describe('AccessoiriesComponent', () => {
  let component: AccessoiriesComponent;
  let fixture: ComponentFixture<AccessoiriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoiriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
