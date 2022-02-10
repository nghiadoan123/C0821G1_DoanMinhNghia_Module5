import {Injectable} from '@angular/core';
import {Category} from '../../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    {
      id: 1,
      name: 'IPhone'
    }, {
      id: 2,
      name: 'Samsung',
    }, {
      id: 3,
      name: 'LG',
    }
  ]

  constructor() {
  }

  getAll() {
    return this.categories;
  }

  save(category) {
    this.categories.push(category);
  }

  findById(id: number) {
    return this.categories.find(category => category.id === id);
  }
  update(id: number, category: any) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === id) {
        this.categories[i] = category;
      }
    }
  }

  delete(id: number) {
    this.categories = this.categories.filter(category => {
      return category.id !== id;
    });
  }
}
