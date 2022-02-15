import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../../service/facility/facility.service';
import {Facility} from '../../../model/facility';
import {error} from '@angular/compiler/src/util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  constructor(private facilityService: FacilityService,
              private router: Router) {
  }
  facilityList: Facility[] = [];
  name: any;
  public key = '';
  public reverse = false;
  page = 1;
  id1: number;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.facilityService.getAll().subscribe(facilityList => {
      console.log(facilityList);
      this.facilityList = facilityList;
    });
  }

  getId(id: number){
    this.id1 = id;
  }
  delete(id: number) {
    this.facilityService.delete(id).subscribe(facility => {
      console.log(facility);
      // alert('delete success');
      this.router.navigate(['/facility/list']);
      this.facilityService.getAll();
    }), error('error');
  }

  Search() {
    if (this.name === '') {
      this.ngOnInit();
    } else {
      this.facilityList = this.facilityList.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
