import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../service/facility/facility.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm = new FormGroup({
    // id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    codeService: new FormControl('',[Validators.required, Validators.pattern('^\\SV-\\d{4,}$')]),
    area: new FormControl('', [Validators.required, Validators.min(10)]),
    cost: new FormControl('', [Validators.required, Validators.min(0)]),
    numberOfPerson: new FormControl('', [Validators.required, Validators.min(1)]),
    standardRoom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.min(1)]),
    numberOfFloor: new FormControl('', [Validators.required, Validators.min(1)]),
    rentalType: new FormControl('', [Validators.required]),
    serviceType: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  constructor(private facilityService: FacilityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  create() {
    const facility = this.facilityForm.value;
    this.facilityService.save(facility).subscribe(facilityData => {
      console.log(facilityData);
      alert('create success');
      this.router.navigate(['facility/list']);
    });
  }
  get name() {
    return this.facilityForm.get('name');
  }

  get codeService() {
    return this.facilityForm.get('codeService');
  }

  get area() {
    return this.facilityForm.get('area');
  }

  get cost() {
    return this.facilityForm.get('cost');
  }

  get numberOfPerson() {
    return this.facilityForm.get('numberOfPerson');
  }

  get standardRoom() {
    return this.facilityForm.get('standardRoom');
  }

  get description() {
    return this.facilityForm.get('description');
  }

  get poolArea() {
    return this.facilityForm.get('poolArea');
  }
  get numberOfFloor() {
    return this.facilityForm.get('numberOfFloor');
  }
  get rentalType() {
    return this.facilityForm.get('rentalType');
  }
  get serviceType() {
    return this.facilityForm.get('serviceType');
  }
  get image() {
    return this.facilityForm.get('image');
  }
}
