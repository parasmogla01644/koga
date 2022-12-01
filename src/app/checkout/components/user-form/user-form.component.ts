import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {
//   noWhitespaceValidator,
//   RegularExpressionConstant,
// } from '@vaildators/validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() groupName!: FormGroup;
  // userForm!: FormGroup;

  // constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    // this.initForm();
  }

  // initForm() {
  //   this.userForm = this._fb.group({
  //     firstName: ['', [Validators.required, noWhitespaceValidator]],
  //     middleName: [''],
  //     lastName: ['', [Validators.required]],
  //     email: [
  //       '',
  //       [
  //         Validators.required,
  //         Validators.pattern(RegularExpressionConstant?.EMAIL),
  //       ],
  //     ],
  //     phone: ['', [Validators.required]],
  //     postCode: ['', [Validators.required]],
  //     houseNumber: [''],
  //     streetName: [''],
  //     landMark: ['', [Validators.required]],
  //   });
  // }
}
