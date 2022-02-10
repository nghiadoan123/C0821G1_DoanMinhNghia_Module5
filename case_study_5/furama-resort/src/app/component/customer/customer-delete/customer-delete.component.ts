import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  id: number;
  customerForm: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((praMap: ParamMap) =>{
      this.id = + praMap.get('id');
      this.getCustomer(this.id);
    });
  }

  ngOnInit(): void {
  }


  delete(id: number) {
    id = this.id;
    this.customerService.delete(id).subscribe(customer =>{
      console.log(customer);
      alert('delete success');
      this.router.navigate(['/customer/list']);
    });
  }

  private getCustomer(id: number) {
    this.customerService.findById(id).subscribe(getCustomer => {
      console.log(getCustomer);
      this.customerForm = new FormGroup({
        id: new FormControl(getCustomer.id),
        name: new FormControl(getCustomer.name),
        email: new FormControl(getCustomer.email),
        address: new FormControl(getCustomer.address),
        phone: new FormControl(getCustomer.phone),
        idCard: new FormControl(getCustomer.idCard),
        gender: new FormControl(getCustomer.gender),
        birthDay: new FormControl(getCustomer.birthDay),
        codeNumber: new FormControl(getCustomer.codeNumber),
        customerType: new FormControl(getCustomer.customerType)
      });
    });
  }
}
