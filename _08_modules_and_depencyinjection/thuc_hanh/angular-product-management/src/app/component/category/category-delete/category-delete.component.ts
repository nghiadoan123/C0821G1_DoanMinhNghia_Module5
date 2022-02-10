import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../service/category/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
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

  delete() {
    this.categoryService.delete(this.id);
    this.router.navigate(['/category/list']);
    alert('delete success');
  }

}
