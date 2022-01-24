import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public numberOne = 0;
  public numberTwo = 0;
  public result = 0;
  public  total = '';
  constructor() { }

  ngOnInit(): void {
  }
  sum(): void{
    (this.result) = Number(this.numberOne ) + Number(this.numberTwo) ;
    this.total = this.result + '';
  }

  sub(): void{
    this.result = Number(this.numberOne ) - Number(this.numberTwo) ;
    this.total = this.result + '';
  }
  mul(): void{
    this.result = Number(this.numberOne ) * Number(this.numberTwo) ;
    this.total = this.result + '';
  }
  div(): void{
    if (Number(this.numberTwo) === 0){
      this.total = 'NaN';
    }else {
      this.result = Number(this.numberOne ) / Number(this.numberTwo) ;
      this.total =  this.result + '';
    }
  }
}
