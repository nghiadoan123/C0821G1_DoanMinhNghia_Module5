import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';
import {Category} from '../site-framework/category';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

// const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {
  }
  getAllProduct(): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl);
  }

  getCategories(): Observable<Category> {
    const categoryUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(categoryUrl);
  }

  createProduct(productBody): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl, productBody);
    // return this.httpClient.post<Product>(API_URL + '/products', productBody);
  }

  viewProduct(productId): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.get<Product>(productUrl);
  }

  updateProduct(productId, productBody): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }

  deleteProduct(productId): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete<Product>(productUrl);
  }

  searchCategoryProduct(categoryId): Observable<Product> {
    const productUrl = 'http://localhost:3000/products?categoryId=' + categoryId;
    return this.httpClient.get<Product>(productUrl);
  }

  searchDateProduct(dateParam): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/date=' + dateParam;
    return this.httpClient.get<Product>(productUrl);
  }

}





