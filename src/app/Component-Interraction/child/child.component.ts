import { Component, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  parentData;

  @Output()
  childEvent = new EventEmitter()
  myEvent(){
    this.childEvent.emit("how are you");
  }

}