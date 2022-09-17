import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '../components/login-page/login-page.component';
import { TodoFormComponent } from '../components/todo-form/todo-form.component';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { TodoListComponent } from '../components/todo-list/todo-list.component';
import { RegisterPageComponent } from '../components/register-page/register-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
