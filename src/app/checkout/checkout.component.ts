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
  userForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.userForm = this._fb.group({
      firstName: ['', [Validators.required, noWhitespaceValidator]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(RegularExpressionConstant?.EMAIL),
        ],
      ],
      phone: ['', [Validators.required]],
      postCode: ['', [Validators.required]],
      houseNumber: [''],
      streetName: [''],
      landMark: ['', [Validators.required]],
    });
  }
}
