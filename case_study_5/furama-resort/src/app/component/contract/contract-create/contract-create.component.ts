import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer';
import {Facility} from '../../../model/facility';
import {CustomerService} from '../../../service/customer/customer.service';
import {FacilityService} from '../../../service/facility/facility.service';
import {ContractService} from '../../../service/contract/contract.service';
import {Contract} from '../../../model/contract';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm = new FormGroup({
    // id: new FormControl(),
    checkIn: new FormControl('', [Validators.required]),
    checkOut: new FormControl('', [Validators.required, Validators.email]),
    deposit: new FormControl('', [Validators.required]),
    totalMoney: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9}$')]),
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
  });
  customers: Customer[] = [];
  facilities: Facility[] = [];
  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllFacility();

  }

  create() {
    const contract = this.contractForm.value;
    this.contractService.save(contract).subscribe(contractData => {
      console.log(contractData);
      this.router.navigate(['/contract/list']);
    });
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }
  getAllFacility() {
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }
}
