import { Component, Input, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Todo } from 'src/app/Interfaces/TodoInterface';
import { TodoServiceService } from 'src/app/services/TodoService/todo-service.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  allTodos: Array<Todo> = [];

  constructor(private todoService: TodoServiceService) { }

  ngOnInit() {
    this.getTodos();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
  }


  getTodos() {
    this.todoService.getAllTodos().subscribe(res => {
      this.allTodos = res;
    })
  }

  todoAdded(todo: object) {
    console.log(todo)
    this.allTodos.push(todo);
  }
}
