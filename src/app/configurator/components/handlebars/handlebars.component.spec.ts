import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlebarsComponent } from './handlebars.component';

describe('HandlebarsComponent', () => {
  let component: HandlebarsComponent;
  let fixture: ComponentFixture<HandlebarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlebarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandlebarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
