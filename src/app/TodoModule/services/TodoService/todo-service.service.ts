import { Injectable } from '@angular/core';
import { Todo } from 'src/app/TodoModule/Interfaces/TodoInterface';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  url: string = environment.url;
  
  constructor(private httpClient: HttpClient) { }

  addTodo(todo: Todo) {
    return this.httpClient.post(this.url, todo)
  }

  getAllTodos() {
    return this.httpClient.get<{'hydra:member': Array<Todo>}>(this.url).pipe(map( elt =>
      elt['hydra:member']
      ));
  }

  changeTodo(todo: any) {
    return this.httpClient.put(`${this.url}/${todo.id}`, todo)
  }

  deleteTodo(todo: any): Observable<ArrayBuffer> {
    return this.httpClient.delete(`${this.url}/${todo.id}`, todo)
  }
}
