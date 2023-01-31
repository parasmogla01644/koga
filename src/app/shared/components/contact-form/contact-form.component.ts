import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactFormGroup!: FormGroup;

  constructor( private _fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactFormGroup = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.minLength(5)],
    });
  }

}
