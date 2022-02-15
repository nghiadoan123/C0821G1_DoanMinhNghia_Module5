import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityService} from '../../../service/facility/facility.service';

@Component({
  selector: 'app-facility-delete',
  templateUrl: './facility-delete.component.html',
  styleUrls: ['./facility-delete.component.css']
})
export class FacilityDeleteComponent implements OnInit {
  facilityForm: FormGroup;
  id: number;

  constructor(private facilityService: FacilityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((praMap: ParamMap) => {
      this.id = +praMap.get('id');
      this.getFacility(this.id);
    });
  }

  ngOnInit(): void {
  }


  delete(id: number) {
    id = this.id;
    this.facilityService.delete(id).subscribe(facility => {
      console.log(facility);
      alert('delete success');
      this.router.navigate(['/facility/list']);
    });
  }

  private getFacility(id: number) {
    this.facilityService.findById(id).subscribe(getFacility => {
      console.log(getFacility);
      this.facilityForm = new FormGroup({
        id: new FormControl(getFacility.id),
        name: new FormControl(getFacility.name),
        codeService: new FormControl(getFacility.codeService),
        area: new FormControl(getFacility.area),
        cost: new FormControl(getFacility.cost),
        numberOfPerson: new FormControl(getFacility.numberOfPerson),
        standardRoom: new FormControl(getFacility.standardRoom),
        description: new FormControl(getFacility.description),
        poolArea: new FormControl(getFacility.poolArea),
        numberOfFloor: new FormControl(getFacility.numberOfFloor),
        rentalType: new FormControl(getFacility.rentalType),
        serviceType: new FormControl(getFacility.serviceType),
        image: new FormControl(getFacility.image),
      });
    });
  }
}
