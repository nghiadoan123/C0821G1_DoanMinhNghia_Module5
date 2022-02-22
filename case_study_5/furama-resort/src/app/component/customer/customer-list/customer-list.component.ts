import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {Customer} from '../../../model/customer';
import {Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';
import {CustomerEditComponent} from '../customer-edit/customer-edit.component';
import {CustomerCreateComponent} from '../customer-create/customer-create.component';
import {ViewEncapsulation} from '@angular/compiler/src/core';
import {CustomerTypeService} from '../../../service/customer_type/customer-type.service';
import {CustomerType} from '../../../model/customer-type';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  private customerTypes: CustomerType[];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router,
              public dialog: MatDialog) {
  }

  customers: Customer[] = [];
  sortedData: Customer[];
  name: any;

  id: number;
  // id1: number;
  public key = '';
  public reverse = false;
  page = 1;

  ngOnInit(): void {
    this.getAll();
    this.sortedData = this.customers.slice();
  }

  getAll() {
    this.customerService.getAll().subscribe(list => {
      console.log(list);
      this.customers = list;
      // this.sortedData = this.customers.slice();
    });
  }

  // getId(id: number) {
  //   this.id1 = id;
  // }

  // delete(id: number) {
  //   this.customerService.delete(id).subscribe(customer => {
  //     console.log(customer);
  //     // alert('delete success');
  //     this.router.navigate(['/customer/list']);
  //     this.customerService.getAll();
  //   }), error('error');
  // }
  Search() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.customers = this.customers.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  openDialogDelete(customer: Customer) {
    // @ts-ignore
    const dialogRef = this.dialog.open(CustomerDeleteComponent, {data: customer}, this.getAllCustometType());
    this.getAllCustometType();
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.customerService.getAll();
      }
    }, error1 => {
    }, () => {
      this.getAll();
    });
  }

  openDialogEdit(customer: Customer) {
    // @ts-ignore
    const dialogRef = this.dialog.open(CustomerEditComponent, {data: customer}, this.getAllCustometType());
    this.getAllCustometType();
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'edit') {
        this.customerService.getAll();
      }
    }, error1 => {

    }, () => {
      this.getAll();
    });
  }

  getAllCustometType() {
    this.customerTypeService.getAll().subscribe(value => {
      this.customerTypes = value;
    });
  }

  openDialogCreate() {
    const dialogRef = this.dialog.open(CustomerCreateComponent, {data: this.getAllCustometType()});
    this.getAllCustometType();
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'create') {
        this.customerService.getAll();
      }
    }, error1 => {
    }, () => {
      this.getAll();
    });
  }
}
