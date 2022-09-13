import { Injectable } from '@angular/core';
import { Todo } from 'src/app/Interfaces/TodoInterface';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  url: string = 'http://127.0.0.1:8000/api/todos';
  
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
    return this.httpClient.put(this.url + '/' + todo.id, todo)
  }

  deleteTodo(todo: any): Observable<ArrayBuffer> {
    return this.httpClient.delete(this.url + '/' + todo.id, todo)
  }
}
