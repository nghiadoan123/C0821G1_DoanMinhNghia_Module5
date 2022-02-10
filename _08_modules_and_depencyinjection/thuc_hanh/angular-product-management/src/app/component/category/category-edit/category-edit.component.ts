import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../../service/category/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  id: number;
  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = Number(paraMap.get('id'));
      const category = this.categoryService.findById(this.id);
      this.categoryForm = new FormGroup({
        id: new FormControl(category.id),
        name: new FormControl(category.name)
      });
    });
  }

  ngOnInit(): void {
  }

  edit() {
    this.categoryService.update(this.id, this.categoryForm.value);
    alert('Cập nhật thành công');
    // router.naviagte có nhiệm vụ điều hướng đến trang khác giống với redirect
    this.router.navigate(['/category/list']);
  }
}
