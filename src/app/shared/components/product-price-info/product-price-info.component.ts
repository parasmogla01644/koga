import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-price-info',
  templateUrl: './product-price-info.component.html',
  styleUrls: ['./product-price-info.component.scss'],
})
export class ProductPriceInfoComponent implements OnInit {
  @Input() priceConfig: any = {
    price: 4000.99,
    vat: 434.32,
    totalPrice: 4435.31,
  };
  @Input() description: boolean = false;
  @Input() usp: boolean = false;
  @Input() social: boolean = false;
  @Input() accept: boolean = false;
  @Input() isDisable: boolean = true;
  showInfoModal: boolean = false;
  showSubsDetailPopup: boolean = false;
  currentRoute!: string;
  pay: boolean = false;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url === '/checkout' ? 'checkout' : '';
  }

  gotoCheckout() {
    this.router.navigate(['checkout']);
  }

  openModal() {
    this.showInfoModal = true;
  }

  closeModal() {
    this.showInfoModal = false;
  }

  openSubsModal() {
    this.showSubsDetailPopup = true;
  }

  closeSubsModal() {
    this.showSubsDetailPopup = false;
  }

  saveDetails() {
    // TODO: have to change var name after functionality discussion.
    this.pay = true;
  }
}
