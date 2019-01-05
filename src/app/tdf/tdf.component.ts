import { Component, OnInit } from '@angular/core';
import { $$ } from 'protractor';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
 
  onSubmit(value:any):void{
    console.log(value);
   
  }
  ngOnInit() {
  }

}
