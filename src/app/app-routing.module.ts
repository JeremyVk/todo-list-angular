import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form.component'
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {path: '', component: TodoListComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),

                ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
