import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartWrapperComponent } from './shopping-cart-wrapper.component';

describe('ShoppingCartWrapperComponent', () => {
  let component: ShoppingCartWrapperComponent;
  let fixture: ComponentFixture<ShoppingCartWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
