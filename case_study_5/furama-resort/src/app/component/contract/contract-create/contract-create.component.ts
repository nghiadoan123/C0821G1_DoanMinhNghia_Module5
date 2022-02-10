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
  idCustomers: number [] = [];
  nameCustomers: string [] = [];
  codeNumberCustomers: string [] = [];
  birthDayCustomers: string [] = [];
  idCardCustomers: string [] = [];
  genderCustomers: string [] = [];
  phoneCustomers: string [] = [];
  emailCustomers: string [] = [];
  addressCustomers: string [] = [];
  customerTypeCustomers: string [] = [];

  idFacilities: number [] = [];
  nameFacilities: string [] = [];
  codeServiceFacilities: string [] = [];
  areaFacilities: number [] = [];
  costFacilities: number [] = [];
  numberOfPersonFacilities: number [] = [];
  standardRoomFacilities: string [] = [];
  descriptionFacilities: string [] = [];
  poolAreaFacilities: number [] = [];
  numberOfFloorFacilities: number [] = [];
  rentalTypeFacilities: string [] = [];
  serviceTypeFacilities: string [] = [];
  imageFacilities: string [] = [];
  contractForm = new FormGroup({
    // id: new FormControl(),
    checkIn: new FormControl('', [Validators.required]),
    checkOut: new FormControl('', [Validators.required, Validators.email]),
    deposit: new FormControl('', [Validators.required]),
    totalMoney: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9}$')]),
    customer: new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      codeNumber: new FormControl(),
      birthDay: new FormControl(),
      gender: new FormControl(),
      idCard: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      customerType: new FormControl(),
    }),
    facility: new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      codeService: new FormControl(),
      area: new FormControl(),
      cost: new FormControl(),
      numberOfPerson: new FormControl(),
      standardRoom: new FormControl(),
      description: new FormControl(),
      poolArea: new FormControl(),
      numberOfFloor: new FormControl(),
      rentalType: new FormControl(),
      serviceType: new FormControl(),
      image: new FormControl(),
    }),
  });
  private idFacility: number;

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customer => {
      customer.forEach(value => {
        this.idCustomers.push(value.id);
        this.nameCustomers.push(value.name);
        this.codeNumberCustomers.push(value.codeNumber);
        this.birthDayCustomers.push(value.birthDay);
        this.idCardCustomers.push(value.idCard);
        this.genderCustomers.push(value.gender);
        this.phoneCustomers.push(value.phone);
        this.emailCustomers.push(value.email);
        this.addressCustomers.push(value.address);
        this.customerTypeCustomers.push(value.customerType);
      });
    });
    this.facilityService.getAll().subscribe(facility => {
      facility.forEach(value => {
        this.idFacilities.push(value.id);
        this.nameFacilities.push(value.name);
        this.codeServiceFacilities.push(value.codeService);
        this.areaFacilities.push(value.area);
        this.costFacilities.push(value.cost);
        this.numberOfPersonFacilities.push(value.numberOfPerson);
        this.standardRoomFacilities.push(value.standardRoom);
        this.standardRoomFacilities.push(value.standardRoom);
        this.descriptionFacilities.push(value.description);
        this.poolAreaFacilities.push(value.poolArea);
        this.numberOfFloorFacilities.push(value.numberOfFloor);
        this.rentalTypeFacilities.push(value.rentalType);
        this.serviceTypeFacilities.push(value.serviceType);
        this.imageFacilities.push(value.image);
      });
    });
  }

  create() {
    const contract = this.contractForm.value;
    this.contractService.save(contract).subscribe(contractData => {
      console.log(contractData);
      this.router.navigate(['/contract/list']);
    });
  }
}
