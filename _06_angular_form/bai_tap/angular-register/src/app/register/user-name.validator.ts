import {AbstractControl, Validators} from '@angular/forms';

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return (v.password === v.confirmPassword) ? null : {
    passwordnotmatch: true
  };
}

// tslint:disable-next-line:label-position
pw: this.fb.group({
  password: ['', Validators.required],
  confirmPassword: ['', Validators.required]
}, {
  validator: comparePassword
})

