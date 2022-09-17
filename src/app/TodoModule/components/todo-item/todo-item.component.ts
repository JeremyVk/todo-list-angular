import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/TodoModule/Interfaces/TodoInterface';
import { TodoServiceService } from 'src/app/TodoModule/services/TodoService/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor(private todoService: TodoServiceService) { }

  isEditing: boolean = false;

  @Input() todo: Todo = {};
  @Output() todoDeleted = new EventEmitter<Todo>();
  


  ngOnInit(): void {
    this.isEditing = false;
  }

  ngOnChange(changes: SimpleChanges) {
    console.log(changes);
  }


  sendCompletedTodo() {
    this.todo.completed = this.todo.completed ? false : true
    this.todoService.changeTodo(this.todo).subscribe(res => {
    })
  }

  deleteTodo(todo: any) {
    this.todoService.deleteTodo(todo.todo).subscribe(res => {
    this.todoDeleted.emit(this.todo);
    })
  }

  toggleIsEditing() {
    this.isEditing = !this.isEditing
    console.log(this.isEditing)
  }

  updateContent() {
    this.todoService.changeTodo(this.todo).subscribe(res => {
      this.toggleIsEditing();
    })
  }

}
