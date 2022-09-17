import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/TodoModule/Interfaces/UserInterface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  user: User = {};
  confirmPassword: string = '';

 loginForm: FormGroup;

 
  constructor(private fb: FormBuilder) { 
    this.loginForm = fb.group({
      username: this.fb.control(this.user.username, [Validators.required, Validators.minLength(5)]),
      email: this.fb.control(this.user.email, [Validators.email, Validators.required])
    })
  }

  ngOnInit(): void {
   
  }
  sendUser() {
    console.log(this.loginForm)
  }
}
