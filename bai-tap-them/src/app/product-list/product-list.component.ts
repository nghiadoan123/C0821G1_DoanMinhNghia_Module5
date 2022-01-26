import {Component, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productList =[];
  productDetail: Product;

  products(){
    this.productList.push(new Product(1, 'nguyen van a', 1, 6));
    this.productList.push(new Product(2, 'nguyen van b', 0, 8));
    this.productList.push(new Product(3, 'nguyen van c', 1, 9));
  }
  constructor() {
  }

  ngOnInit(): void {
    this.products();
  }


  viewDetail(product: Product) {
    this.productDetail = product;
  }

  createForm(product: Product) {
    this.productList.push(product);
  }

  delete(product: Product) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.productList.length ; i++) {
      if (product.id === this.productList[i].id){
        this.productList.splice(i);
      }
    }
  }
}
