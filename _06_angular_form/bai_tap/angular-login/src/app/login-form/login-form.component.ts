import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  contactForm = new FormGroup({
    email: new FormControl('',[Validators.email]),
    passWord: new FormControl('',[Validators.minLength(6)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
