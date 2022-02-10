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

  // sortData(sort: Sort) {
  //   const data = this.customers.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }
  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'id':
  //         return compare(a.id, b.id, isAsc);
  //       case 'name':
  //         return compare(a.name, b.name, isAsc);
  //       case 'codeNumber':
  //         return compare(a.codeNumber, b.codeNumber, isAsc);
  //       case 'customerType':
  //         return compare(a.customerType, b.customerType, isAsc);
  //       case 'birthDay':
  //         return compare(a.birthDay, b.birthDay, isAsc);
  //       case 'gender':
  //         return compare(a.gender, b.gender, isAsc);
  //       default:
  //         return 0;
  //     }
  //   });
  //   function compare(a: number | string, b: number | string, isAsc: boolean) {
  //     return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  //   }
  // }
  count = 0;
  name: any;

  public key = '';
  public reverse = false;
  page = 1;

  ngOnInit(): void {
    this.getAll();
    this.sortedData = this.customers.slice();
  }

  getAll() {
    this.customerService.getAll().subscribe(customerList => {
      console.log(customerList);
      this.customers = customerList;
      // this.sortedData = this.customers.slice();
    });
  }

  delete(id: number) {
    this.customerService.delete(id).subscribe(customer => {
      console.log(customer);
      alert('delete success');
      this.router.navigate(['/customer/list']);
      this.customerService.getAll();
    }), error('error');
  }

  increateCount() {
    this.count++;
    console.log(this.count);
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
