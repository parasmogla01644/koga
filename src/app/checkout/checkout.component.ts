import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  noWhitespaceValidator,
  RegularExpressionConstant,
} from '@vaildators/validators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  deliveryOptionPopup: boolean = false;
  userForm!: FormGroup;

  constructor(private _fb: FormBuilder,  private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this._fb.group({
      name: ['', [Validators.required, noWhitespaceValidator]],
      address: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(RegularExpressionConstant?.EMAIL),
        ],
      ],
      phone: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  openDeliveryOptionPopup( event: any) {
    this.deliveryOptionPopup = true;
    event.stopPropagation();
  }

  closeDeliveryOptionPopup() {
    this.deliveryOptionPopup = false;
    this.cd.detectChanges();
  }
}
