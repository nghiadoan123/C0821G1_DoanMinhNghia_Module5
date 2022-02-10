import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from '../country';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // form: FormGroup;

  error = '';
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  countryList = new Array();

  // @ts-ignore
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    passWord: new FormControl('', [Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.minLength(6)]),
    country: new FormControl(),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('\\+84\\d{9,10}')])
  });



  getCountryList() {
    return [
      this.countryList.push(new Country(1, 'VN')),
      this.countryList.push(new Country(2, 'America')),
      this.countryList.push(new Country(3, 'England'))
    ];
  }

  get numVal() {
    return this.registerForm.get('numVal');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get pass() {
    return this.registerForm.get('passWord');
  }

  get confirm() {
    return this.registerForm.get('confirmPassword');
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
    //   pw: this.fb.group({
    //     password: ['', Validators.required],
    //     confirmPassword: ['', Validators.required]
    //   })
    // });
  }

  onSubmit() {
    if (this.pass !== this.confirm) {
      this.error = ' pass confirm is not duplicate';
    }
    console.log(this.registerForm.value);
    console.log(this.error);
  }
}
