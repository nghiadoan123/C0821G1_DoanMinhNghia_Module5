import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../../model/student';
import {Tutor} from '../../model/tutor';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Tutor[]> {
    return this.httpClient.get<Tutor[]>(API_URL + `/tutors`);
  }
}
