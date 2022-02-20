import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../../model/customer';
import {Facility} from '../../../model/facility';
import {CustomerService} from '../../../service/customer/customer.service';
import {FacilityService} from '../../../service/facility/facility.service';
import {ContractService} from '../../../service/contract/contract.service';
import {Contract} from '../../../model/contract';
import {Router} from '@angular/router';


function checkDate(date: any) {
  const currentDate = new Date();
  const dateImport = new Date(date);
  if (dateImport > currentDate) {
    return true;
  } else {
    return false;
  }
}

function checkEndDateToStartDate(checkIn, checkOut) {
  const inputCheckIn = new  Date(checkIn);
  const inputCheckOut = new Date(checkOut);
  if (inputCheckOut > inputCheckIn) {
    return true;
  } else {
    return false;
  }
}

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractForm = new FormGroup({
    // id: new FormControl(),
    // checkInOut: new FormGroup({
    //   checkIn: new FormControl('', [Validators.required]),
    //   checkOut: new FormControl('', [Validators.required])
    // }, checkDay),
    checkIn: new FormControl('', [Validators.required, this.checkValidDate]),
    checkOut: new FormControl('', [Validators.required, this.checkValidDate]),
    deposit: new FormControl('', [Validators.required]),
    totalMoney: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    facility: new FormControl('', [Validators.required]),
  }, this.compareCheckInCheckOut);
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
    }, error => console.log(error));
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

  checkValidDate(abstractControl: AbstractControl) {
    return checkDate(abstractControl.value) ? null : {futureDate : true};
  }

  compareCheckInCheckOut(abstractControl: AbstractControl) {
    return checkEndDateToStartDate(abstractControl.value.checkIn, abstractControl.value.checkOut) ? null : { checkInOut: true };
  }
}
