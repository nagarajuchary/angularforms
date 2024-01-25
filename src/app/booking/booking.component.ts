import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{
booking!:FormGroup;
constructor(private form:FormBuilder){
}
ngOnInit(): void {
  this.booking=this.form.group({
    firstname:"",
    lastname:"",
    mobilenumber:"",
    email:"",
    range:"",
    select:"",
    catagories:"",
    color:""
 
  })
}
book(){
  alert()
  console.log(this.booking.value)
}
}
