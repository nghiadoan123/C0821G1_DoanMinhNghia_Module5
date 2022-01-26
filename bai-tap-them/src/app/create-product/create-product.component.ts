import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  id: number;
  name: string;
  gender: number;
  point: number;

  product: Product;
  @Output()
  eventEmitter = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit(): void {
  }


  sendToList() {
    this.product = new Product(this.id, this.name, this.gender, this.point);
    this.eventEmitter.emit(this.product);
    console.log(this.product);
  }
}
