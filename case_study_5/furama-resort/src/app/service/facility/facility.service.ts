import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Facility} from '../../model/facility';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>(`${API_URL}/facilities`);
  }
  save(facility): Observable<Facility> {
    return this.httpClient.post<Facility>(`${API_URL}/facilities`, facility);
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>(`${API_URL}/facilities/${id}`);
  }

  update(id: number, facility: Facility): Observable<Facility> {
    return this.httpClient.put<Facility>(`${API_URL}/facilities/${id}`, facility);
  }

  delete(id: number) {
    return this.httpClient.delete<Facility>(`${API_URL}/facilities/${id}`);
  }
}
