import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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

  constructor(private readonly router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url === '/checkout' ? 'checkout' : '';
  }

  gotoCheckout() {
    this.router.navigate(['checkout']);
  }

  openModal( event: any ) {
    this.showInfoModal = true;
    event.stopPropagation();
  }

  closeModal() {
    this.showInfoModal = false;
    this.cd.detectChanges();
  }

  openSubsModal( event: any ) {
    this.showSubsDetailPopup = true;
    event.stopPropagation();
  }

  closeSubsModal() {
    this.showSubsDetailPopup = false;
    this.cd.detectChanges();
  }

  saveDetails() {
    // TODO: have to change var name after functionality discussion.
    this.pay = true;
  }
}
