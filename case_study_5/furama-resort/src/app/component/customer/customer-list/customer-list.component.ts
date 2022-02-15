import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {Customer} from '../../../model/customer';
import {Router} from '@angular/router';
import {error} from '@angular/compiler/src/util';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  customers: Customer[] = [];
  sortedData: Customer[];
  name: any;

  id: number;
  id1: number;
  public key = '';
  public reverse = false;
  page = 1;
  converse: true;

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

  getId(id: number) {
    this.id1 = id;
  }

  delete(id: number) {
    this.customerService.delete(id).subscribe(customer => {
      console.log(customer);
      // alert('delete success');
      this.router.navigate(['/customer/list']);
      this.customerService.getAll();
    }), error('error');
  }
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
}
