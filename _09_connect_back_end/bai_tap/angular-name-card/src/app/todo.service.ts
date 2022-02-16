import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {Todo} from './todo';
import {map} from 'rxjs/operators';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly API_URL = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
  }

  getTodos(count = 10): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL).pipe(map(data => data.filter((todo, i) => i < count)));
  }

  updateTodo(todo: { todo: Todo; completed: boolean }): Observable<Todo> {
    return this.http.patch<Todo>(`${this.API_URL}/${todo.todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  createTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.API_URL, todo);
  }

  // getAll(): Observable<Todo[]> {
  //   return this.http.get<Todo[]>(API_URL + '/todo');
  // }
  //
  // save(category): Observable<Todo> {
  //   return this.http.post<Todo>(API_URL + '/todo', category);
  // }
  //
  // findById(id: number): Observable<Todo> {
  //   return this.http.get<Todo>(`${API_URL}/todo/${id}`);
  // }
  //
  // update(id: number, todo: Todo): Observable<Todo> {
  //   return this.http.put<Todo>(`${API_URL}/todo/${id}`, todo);
  // }
  //
  // delete(id: number): Observable<Todo> {
  //   return this.http.delete<Todo>(`${API_URL}/todo/${id}`);
  // }

}
