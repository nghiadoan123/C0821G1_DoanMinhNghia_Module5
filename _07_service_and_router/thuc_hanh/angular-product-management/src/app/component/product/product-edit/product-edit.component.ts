import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../service/product.service';
import {ActivatedRoute, convertToParamMap, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    // có the viet code từ dòng 20-27 bỏ trong ngOnInit vẫn chạy được
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
      this.id = Number(paramMap.get('id'));
      const product = this.getProduct(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      });
    } );
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product);
    alert('Cập nhật thành công');
    // router.naviagte có nhiệm vụ điều hướng đến trang khác giống với redirect
    this.router.navigate(['/product/list']);
  }

}
