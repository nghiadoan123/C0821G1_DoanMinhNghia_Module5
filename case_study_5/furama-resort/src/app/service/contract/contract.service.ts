import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Facility} from '../../model/facility';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../../model/contract';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(`${API_URL}/contracts`);
  }
  save(contract): Observable<Contract> {
    return this.httpClient.post<Contract>(`${API_URL}/contracts`, contract);
  }

  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(`${API_URL}/contracts/${id}`);
  }
  delete(id: number) {
    return this.httpClient.delete<Contract>(`${API_URL}/contracts/${id}`);
  }
}
