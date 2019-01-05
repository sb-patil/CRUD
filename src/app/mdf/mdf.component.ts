import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent {

  
contactForm = new FormGroup({
  firstname: new FormControl ('',[Validators.required,Validators.minLength(4)]),
  lastname: new FormControl('',Validators.required),
  address: new FormGroup({
     city:new FormControl(),
     state:new FormControl()
  })
});

onSubmit(value:any){
  console.log(value);
}
}
