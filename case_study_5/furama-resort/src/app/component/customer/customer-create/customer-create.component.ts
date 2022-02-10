import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerForm = new FormGroup({
    // id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9}$')]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
    gender: new FormControl('', [Validators.required]),
    birthDay: new FormControl('', [Validators.required]),
    codeNumber: new FormControl('', [Validators.required, Validators.pattern('^\\KH-\\d{4,}$')]),
    customerType: new FormControl('', [Validators.required])
  });


  constructor(private customerService: CustomerService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  create() {
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(customerData => {
      console.log(customerData);
      this.router.navigate(['/customer/list']);
    });
  }
  get email() {
    return this.customerForm.get('email');
  }

  get name() {
    return this.customerForm.get('name');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get phone() {
    return this.customerForm.get('phone');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get birthDay() {
    return this.customerForm.get('birthDay');
  }

  get codeNumber() {
    return this.customerForm.get('codeNumber');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }
}
