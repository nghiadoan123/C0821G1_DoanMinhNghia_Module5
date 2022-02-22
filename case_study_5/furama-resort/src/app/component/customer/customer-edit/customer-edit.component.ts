import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../../../model/customer';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CustomerTypeService} from '../../../service/customer_type/customer-type.service';
import {CustomerType} from '../../../model/customer-type';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  // id: number;
  customerForm: FormGroup;
  customerTypes: CustomerType[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<CustomerEditComponent>,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    // activatedRoute.paramMap.subscribe((praMap: ParamMap) => {
    //   this.id = +praMap.get('id');
    //   this.getCustomer(this.id);
    // });
  }

  ngOnInit(): void {
    this.getAllCustometType();
    this.customerForm = new FormGroup({
            id: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            address: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required, Validators.pattern('^(09[01]\\d{7})|(((84)[(90)(91)])\\d{8}$)')]),
            idCard: new FormControl('', [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
            gender: new FormControl('', [Validators.required]),
            birthDay: new FormControl('', [Validators.required]),
            codeNumber: new FormControl('', [Validators.required, Validators.pattern('^\\KH-\\d{4,}$')]),
            customerType: new FormControl('', [Validators.required])
          });
    if (this.data){
      this.customerForm.controls.id.setValue(this.data.id);
      this.customerForm.controls.name.setValue(this.data.name);
      this.customerForm.controls.email.setValue(this.data.email);
      this.customerForm.controls.address.setValue(this.data.address);
      this.customerForm.controls.phone.setValue(this.data.phone);
      this.customerForm.controls.idCard.setValue(this.data.idCard);
      this.customerForm.controls.gender.setValue(this.data.gender);
      this.customerForm.controls.birthDay.setValue(this.data.birthDay);
      this.customerForm.controls.codeNumber.setValue(this.data.codeNumber);
      this.customerForm.controls.customerType.setValue(this.data.customerType);
    }

  }


  // private getCustomer(id: number) {
  //   this.customerService.findById(id).subscribe(customer => {
  //     console.log(customer);
  //     this.customerForm = new FormGroup({
  //       id: new FormControl(customer.id, [Validators.required]),
  //       name: new FormControl(customer.name, [Validators.required]),
  //       email: new FormControl(customer.email, [Validators.required, Validators.email]),
  //       address: new FormControl(customer.address, [Validators.required]),
  //       phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^\\+84\\d{9}$')]),
  //       idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
  //       gender: new FormControl(customer.gender, [Validators.required]),
  //       birthDay: new FormControl(customer.birthDay, [Validators.required]),
  //       codeNumber: new FormControl(customer.codeNumber, [Validators.required, Validators.pattern('^\\KH-\\d{4,}$')]),
  //       customerType: new FormControl(customer.customerType, [Validators.required])
  //     });
  //   });
  // }


  update(id: number) {
    this.getAllCustometType();
    const customer = this.customerForm.value;
    this.customerService.update(customer).subscribe(customerData => {
      alert('update success');
      this.dialogRef.close('edit');
    }, error => {
    }, () => {
      this.router.navigate(['/customer/list']);
    });
  }

  getAllCustometType(){
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypes = value;
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
