import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../country';
import {comparePassword} from './user-name.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // form: FormGroup;
  registerForm: FormGroup;
  submitted = false;

  constructor() {
  }

  countryList = new Array();

  getCountryList() {
    return [
      this.countryList.push(new Country(1, 'VN')),
      this.countryList.push(new Country(2, 'America')),
      this.countryList.push(new Country(3, 'England'))
    ];
  }

  get email() {
    return this.registerForm.get('email');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  ngOnInit(): void {
    this.getCountryList();
    // this.registerForm = this.fb.group({
    //   email: ['', [Validators.email, Validators.required]],
    //   country: ['', [Validators.required]],
    //   age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
    //   gender: ['', [Validators.required]],
    //   phone: ['', [Validators.required, Validators.pattern('\\+84\\d{9,10}')]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    //   confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    // },  {
    //   validators: comparePassword('password', 'confirmPassword')
    // });
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.min(18), Validators.max(100)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('\\+84\\d{9,10}')]),
      pwGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, this.checkPass)
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

  private checkPass(abstractControl: AbstractControl): any {
    const passWord = abstractControl.value.password;
    const confirmPass = abstractControl.value.confirmPassword;
    return passWord === confirmPass ? null : {checkConfirm: true};
  }
}
