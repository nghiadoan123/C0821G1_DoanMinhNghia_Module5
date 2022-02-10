import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Product} from '../product';
import {ProductsService} from '../products.service';
import {Category} from '../../site-framework/category';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {

  searchCategory: number;
  productList: Product;
  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) {
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(data => {
    //   console.log(data);
    //   this.searchCategory = data.id;
    //   console.log(this.searchCategory);
    //   this.productsService.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
    //     console.log(categoryData);
    //     this.productList = categoryData;
    //   });
    //   // this.productsService.getCategories().subscribe(data => {
    //   //   this.categoryList = data;
    // });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap);
      this.searchCategory = Number(paramMap.get('id'));
      console.log(this.searchCategory);
      this.productsService.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
        console.log(categoryData);
        this.productList = categoryData;
      });
      // this.productsService.getCategories().subscribe(data => {
      //   this.categoryList = data;
    });
  }

}
