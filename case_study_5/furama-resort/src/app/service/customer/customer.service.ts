import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer';
// const API_URL = `${environment.apiUrl}`;
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API + `/customer/all`);
  }

  save(customer): Observable<Customer> {
    return this.httpClient.post<Customer>(`${API_URL}/customer/add`, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${API_URL}/customer/${id}`);
  }

  update( customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${API_URL}/customer/update`, customer);
  }

  delete(id: number) {
    return this.httpClient.delete<Customer>(`${API_URL}/customer/delete/${id}`);
  }
}
