import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import {ProductsService} from '../products.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productId = 0;
  product: Product;
  productForm: FormGroup;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.id = data.id;
      this.productsService.viewProduct(this.id).subscribe(dataView => {
        this.product = dataView;
      });
    });
    this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      productName: new FormControl(this.product.productName),
      categoryId: new FormControl(this.product.categoryId),
      description: new FormControl(this.product.description),
      rating: new FormControl(this.product.rating),
      price: new FormControl(this.product.price),
      isAvailable: new FormControl(this.product.isAvailable),
      productImg: new FormControl(this.product.productImg),
      color: new FormControl(this.product.color),
      reviews: new FormControl(this.product.reviews),
    });
  }

  updateProduct(id: number) {
    this.product = this.productForm.value;
    this.productsService.updateProduct(id, this.product).subscribe(dataProduct => {
      console.log(dataProduct);
    });
  }
}
