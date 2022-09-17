import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TodoServiceService } from 'src/app/TodoModule/services/TodoService/todo-service.service';
import { Todo } from 'src/app/TodoModule/Interfaces/TodoInterface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo: Todo = {};
  allTodos: Array<Todo> = [];

  @Output() todoCreated = new EventEmitter<Todo>();


  constructor(private router: Router, private todoService: TodoServiceService) { }


  ngOnInit(): void {
  }

  sendTodo() {
    if (!this.todo.content || this.todo.content?.length == 0) {
      return
    }
    this.todo.createdAt = new Date();
    this.todoService.addTodo(this.todo).subscribe(res => {
    this.todoCreated.emit(res);
    this.todo = {};
  });
  }

}
