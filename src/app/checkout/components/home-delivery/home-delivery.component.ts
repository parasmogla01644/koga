import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-delivery',
  templateUrl: './home-delivery.component.html',
  styleUrls: ['./home-delivery.component.scss'],
})
export class HomeDeliveryComponent implements OnInit {
  showAddressForm: boolean = false;
  addressForm!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addressForm = this._fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      postCode: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  saveAddress() {
    if (this.addressForm.valid) {
      console.log(this.addressForm.value);
    } else {
      console.error('Please enter a valid details');
    }
  }

  toggleAddresForm() {
    this.showAddressForm = !this.showAddressForm;
  }
}
