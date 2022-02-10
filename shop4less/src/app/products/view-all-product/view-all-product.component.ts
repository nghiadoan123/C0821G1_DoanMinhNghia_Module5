import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';
import {Product} from '../product';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList: Product;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAllProduct().subscribe(data => {
       this.productList = data;
    });
  }

}
