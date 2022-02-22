import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Customer} from '../../../model/customer';
import {CustomerTypeService} from '../../../service/customer_type/customer-type.service';
import {CustomerType} from '../../../model/customer-type';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  id: number;

  customerForm: FormGroup;
  private customers: Customer[];
  private customerTypes: CustomerType[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private dialogRef: MatDialogRef<CustomerDeleteComponent>) {
    // activatedRoute.paramMap.subscribe((praMap: ParamMap) => {
    //   this.id = +praMap.get('id');
    //   this.getCustomer(this.id);
    // });
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),
      idCard: new FormControl(''),
      gender: new FormControl(''),
      birthDay: new FormControl(''),
      codeNumber: new FormControl(''),
      customerType: new FormControl('')
    });
    if (this.data) {
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
    this.getAllCustometType();
  }


  delete(id: number) {
    // id = this.id;
    this.customerService.delete(id).subscribe(customer => {
      console.log(customer);
      // alert('delete success');
      this.dialogRef.close('delete'); // bien delete la bien nam ben trang list dong 77
      alert('delete success');
      this.customerService.getAll().subscribe(list => {
        console.log(list);
        this.customers = list;
        // this.sortedData = this.customers.slice();
      });
    }, error => {
    }, () => {
      this.router.navigate(['/customer/list']);
    });
  }
  getAll() {
    this.customerService.getAll().subscribe(list => {
      console.log(list);
      this.customers = list;
      // this.sortedData = this.customers.slice();
    });
  }

  getAllCustometType(){
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypes = value;
    });
  }

  // private getCustomer(id: number) {
  //   this.customerService.findById(id).subscribe(getCustomer => {
  //     console.log(getCustomer);
  //     this.customerForm = new FormGroup({
  //       id: new FormControl(getCustomer.id),
  //       name: new FormControl(getCustomer.name),
  //       email: new FormControl(getCustomer.email),
  //       address: new FormControl(getCustomer.address),
  //       phone: new FormControl(getCustomer.phone),
  //       idCard: new FormControl(getCustomer.idCard),
  //       gender: new FormControl(getCustomer.gender),
  //       birthDay: new FormControl(getCustomer.birthDay),
  //       codeNumber: new FormControl(getCustomer.codeNumber),
  //       customerType: new FormControl(getCustomer.customerType)
  //     });
  //   });
  //   if (this.data){
  //     this.customerForm.controls.id.setValue(this.data.id);
  //   }
  // }
}
