import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    productName: new FormControl(),
    categoryId: new  FormControl(),
    description:  new FormControl(),
    rating: new FormControl(),
    price: new FormControl(),
    isAvailable: new FormControl(),
    productImg: new FormControl(''),
    color: new FormControl(),
    reviews: new  FormControl(),
  });

  constructor(private productsService: ProductsService,
              private route: Router) { }

  ngOnInit(): void {
  }

  createProduct() {
    const product = this.productForm.value;
    console.log(product);
    this.productsService.createProduct(product).subscribe(data => {
      console.log(data);
    });
    this.productForm.reset();
    this.route.navigate(['/products']);
  }
}
