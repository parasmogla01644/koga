import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ERRORS } from '@shared/constants/errorMessage.constants';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss'],
})
export class ErrorMsgComponent implements OnInit {
  @Input() controlName!: string;
  @Input() groupName!: FormGroup;
  @Input() patternErrorMsg!: string;

  constructor() {}

  ngOnInit(): void {}

  get errorMsg() {
    let msg = '';
    if (
      this.groupName?.controls?.[this.controlName].touched &&
      this.groupName?.controls?.[this.controlName].errors
    ) {
      let errors: any = this.groupName?.controls?.[this.controlName].errors;
      if (errors?.required) {
        msg = ERRORS.REQUIRED;
      } else if (errors.email) {
        msg = ERRORS.EMAIL;
      } else if (errors?.pattern) {
        msg = this.patternErrorMsg;
      } else if (errors?.phone) {
        msg = ERRORS.PHONE;
      }
    }
    return msg;
  }
}
