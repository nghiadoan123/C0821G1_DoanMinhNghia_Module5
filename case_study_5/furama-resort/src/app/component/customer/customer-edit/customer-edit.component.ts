import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Customer} from '../../../model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  id: number;
  customerForm: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((praMap: ParamMap) => {
      this.id = +praMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
  }


  private getCustomer(id: number) {
    this.customerService.findById(id).subscribe(customer => {
      console.log(customer);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id, [Validators.required]),
        name: new FormControl(customer.name, [Validators.required]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern('^\\+84\\d{9}$')]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
        gender: new FormControl(customer.gender, [Validators.required]),
        birthDay: new FormControl(customer.birthDay, [Validators.required]),
        codeNumber: new FormControl(customer.codeNumber, [Validators.required, Validators.pattern('^\\KH-\\d{4,}$')]),
        customerType: new FormControl(customer.customerType, [Validators.required])
      });
    });
  }


  update(id: number) {
    const customer = this.customerForm.value;
    this.customerService.update(id, customer).subscribe(customerData => {
      alert('update success');
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
