import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss']
})
export class ProductBlockComponent implements OnInit {

  openContactPopup: boolean = false;
  constructor( private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  openModal( event: any) {
    this.openContactPopup = true;
    event.stopPropagation();
  }

  closeModal() {
    this.openContactPopup = false;
    this.cd.detectChanges();
  }

}
