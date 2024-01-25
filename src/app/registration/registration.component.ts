import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  reg! :FormGroup;
  constructor(private form:FormBuilder) {

   }
  ngOnInit(): void {
    this.reg=this.form.group({
      fullname: "",
      lastname: "",
      mobile: "",
      email: ""
    }
    )
  }
  submit() {
    console.log(this.reg.value,"successfull")
}

}
