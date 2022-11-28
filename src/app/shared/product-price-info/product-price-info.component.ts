import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-price-info',
  templateUrl: './product-price-info.component.html',
  styleUrls: ['./product-price-info.component.scss']
})
export class ProductPriceInfoComponent implements OnInit {

  constructor() { }
  @Input() description:boolean=false;  
  @Input() usp:boolean=false;  
  @Input() social:boolean=false;  
  ngOnInit(): void {
  }

}
