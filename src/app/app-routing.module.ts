import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './TodoModule/components/login-page/login-page.component';
import { RegisterPageComponent } from './TodoModule/components/register-page/register-page.component';
import { TodoFormComponent } from './TodoModule/components/todo-form/todo-form.component'
import { TodoListComponent } from './TodoModule/components/todo-list/todo-list.component';

const routes: Routes = [
  {path: '', component: TodoListComponent },
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent}
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
