import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import * as moment from 'moment';
import {Customer} from '../../../model/customer';
import {CustomerTypeService} from '../../../service/customer_type/customer-type.service';
import {CustomerType} from '../../../model/customer-type';


function checkDate(birthDay: any) {
  const today = new Date();
  const birthDate = new Date(birthDay);
  let age = today.getFullYear() - birthDate.getFullYear();
  console.log(age);
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  console.log(age);
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

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
    phone: new FormControl('', [Validators.required, Validators.pattern('^(09[01]\\d{7})|(((84)[(90)(91)])\\d{8}$)')]),
    idCard: new FormControl('', [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
    gender: new FormControl('', [Validators.required]),
    birthDay: new FormControl('', [Validators.required, this.checkAge18]),
    codeNumber: new FormControl('', [Validators.required, Validators.pattern('^\\KH-\\d{4,}$')]),
    customerType: new FormControl('', [Validators.required])
  });
  public customers: Customer[];
  public customerTypes: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private dialogRef: MatDialogRef<CustomerCreateComponent>,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }

  create() {
    this.getAllCustomerType();
    const customer = this.customerForm.value;
    this.customerService.save(customer).subscribe(customerData => {
      console.log(customerData);
      this.router.navigate(['/customer/list']);
      this.dialogRef.close('create');
      this.getAll();
    });
  }

  getAll() {
    this.customerService.getAll().subscribe(list => {
      console.log(list);
      this.customers = list;
      // this.sortedData = this.customers.slice();
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypes = value;
    });
  }

  checkAge18(abstractControl: AbstractControl) {
    return checkDate(abstractControl.value) ? null : {checkBirthDay: true};
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
