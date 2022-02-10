import { Component, OnInit } from '@angular/core';
import {DateUtilService} from '../../service/date-util.service';

@Component({
  selector: 'app-timelive',
  templateUrl: './timelive.component.html',
  styleUrls: ['./timelive.component.css']
})
export class TimeliveComponent implements OnInit {

  output: string;

  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }


  onChange(value: string) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}
