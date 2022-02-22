import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Student} from '../../model/student';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(API_URL + `/students`);
  }
  save(student): Observable<Student> {
    return this.httpClient.post<Student>(`${API_URL}/students`, student);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${API_URL}/students/${id}`);
  }

  update(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${API_URL}/students/${id}`, student);
  }

  delete(id: number) {
    return this.httpClient.delete<Student>(`${API_URL}/students/${id}`);
  }
}
