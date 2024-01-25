import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
login!:FormGroup;
constructor(private form:FormBuilder){}
ngOnInit(): void {
  this.login=this.form.group({
    username:"",
    password:""
  })
}
lform(){
  alert("login successful")
  console.log(this.login.value)
}
}
