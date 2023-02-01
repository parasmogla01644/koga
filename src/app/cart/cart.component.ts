import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  priceConfig = {
    price: 4000.99,
    totalPrice: 4000.99,
  };
  constructor() {}

  ngOnInit(): void {}
}
