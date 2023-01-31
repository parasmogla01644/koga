import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent implements OnInit {

  openContactPopup: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.openContactPopup = true;
  }

  closeModal() {
    this.openContactPopup = false;
  }

}
