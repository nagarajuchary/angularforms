import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrationComponent, LoginComponent, BookingComponent, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  reg!: FormGroup;
  constructor(private form: FormBuilder) {

  }
  ngOnInit(): void {
    this.reg = this.form.group({
      fullname: "",
      lastname: "",
      mobile: "",
      email: ""
    }
    )
  }
  submit() {
    console.log(this.reg.value, "successfull")
  }
}