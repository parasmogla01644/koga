import { Component, OnInit } from '@angular/core';
import { StepperService } from '@service/stepper.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  priceConfig: any = {
    price: 4000.99,
    totalPrice: 4000.99,
  };
  constructor(private readonly stepperService: StepperService) {}

  ngOnInit(): void {}
}
