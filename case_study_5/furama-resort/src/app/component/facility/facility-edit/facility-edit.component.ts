import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../service/facility/facility.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;

  constructor(private facilityService: FacilityService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = +paraMap.get('id');
      this.facilityService.findById(this.id).subscribe(facility => {
        console.log(facility);
        this.facilityForm = new FormGroup({
          id: new FormControl(facility.id, [Validators.required]),
          name: new FormControl(facility.name, [Validators.required]),
          codeService: new FormControl(facility.codeService,  [Validators.pattern('^\\SV-\\d{4,}$')]),
          area: new FormControl(facility.area, [Validators.required, Validators.min(10)]),
          cost: new FormControl(facility.cost, [Validators.required, Validators.min(0)]),
          numberOfPerson: new FormControl(facility.numberOfPerson, [Validators.required, Validators.min(1)]),
          standardRoom: new FormControl(facility.standardRoom, [Validators.required]),
          description: new FormControl(facility.description, [Validators.required]),
          poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.min(1)]),
          numberOfFloor: new FormControl(facility.numberOfFloor, [Validators.required, Validators.min(1)]),
          rentalType: new FormControl(facility.rentalType, [Validators.required]),
          serviceType: new FormControl(facility.serviceType, [Validators.required]),
          image: new FormControl(facility.image, [Validators.required]),
        });
      });
    });
  }

  ngOnInit(): void {
  }

  update(id: any) {
    const facility = this.facilityForm.value;
    this.facilityService.update(id, facility).subscribe(facilityData => {
      alert('edit success');
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
