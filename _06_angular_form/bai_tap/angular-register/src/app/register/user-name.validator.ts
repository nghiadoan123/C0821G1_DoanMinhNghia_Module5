import {AbstractControl, FormGroup, Validators} from '@angular/forms';

export function comparePassword(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // if (matchingControl.errors && !matchingControl.errors.mustMatch) {
    //   // return if another validator has already found an error on the matchingControl
    //   return;
    // }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}

// tslint:disable-next-line:label-position
// pw: this.fb.group({
// //   password: ['', Validators.required],
// //   confirmPassword: ['', Validators.required]
// // }, {
// //   validator: comparePassword
// // })

