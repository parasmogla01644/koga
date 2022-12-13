import { AbstractControl, FormGroup } from '@angular/forms';

export class RegularExpressionConstant {
  static EMAIL: RegExp = /^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  static PASSWORD: string =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}';
  static PHONE: string = '^(\\+?d{1,4}[s-])?(?!0+s+,?$)\\d{9}s*,?$';
}

export function noWhitespaceValidator(control: AbstractControl) {
  let val = control?.value?.trim();
  let isValid = true;
  if (val?.length < 1) {
    isValid = false;
  }
  return isValid ? null : { minlength: true };
}

export function passwordMatchValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl: any = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
