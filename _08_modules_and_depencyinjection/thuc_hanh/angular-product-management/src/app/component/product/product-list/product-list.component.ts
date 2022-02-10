import { Component, OnInit } from '@angular/core';
import {Product} from '../../../model/product';
import {ProductService} from '../../../service/product.service';
import {CategoryService} from '../../../service/category/category.service';
import {Category} from '../../../model/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  constructor(private productService: ProductService,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
    // this.getAllCategory();
  }
  getAll(){
    this.products = this.productService.getAll();
  }
  // getAllCategory(){
  //   this.categories = this.categoryService.getAll();
  // }
}
