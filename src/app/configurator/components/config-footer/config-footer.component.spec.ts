import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFooterComponent } from './config-footer.component';

describe('ConfigFooterComponent', () => {
  let component: ConfigFooterComponent;
  let fixture: ComponentFixture<ConfigFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
