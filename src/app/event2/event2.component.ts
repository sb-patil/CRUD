import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event2',
  templateUrl: './event2.component.html',
  styleUrls: ['./event2.component.css']
})
export class Event2Component implements OnInit {

  inputText="";
  name:string="";

  submit(value:string):void{
    this.name +=`name ${value} \n`
  }
  ngOnInit() {
  }

}
