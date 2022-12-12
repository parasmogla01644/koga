import { Component, OnInit } from '@angular/core';
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

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this._fb.group({
      name: ['', [Validators.required, noWhitespaceValidator]],
      address: ['', [Validators.required]],
      // middleName: [''],
      // lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(RegularExpressionConstant?.EMAIL),
        ],
      ],
      phone: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      // houseNumber: [''],
      // streetName: [''],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
  }

  openDeliveryOptionPopup() {
    this.deliveryOptionPopup = true;
  }

  closeDeliveryOptionPopup() {
    this.deliveryOptionPopup = false;
  }
}
