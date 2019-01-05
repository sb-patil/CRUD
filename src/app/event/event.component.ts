import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  textValue = 'initial value';
  log = '';

  logText(value: string): void {
    {
    this.log += `Text changed to '${value}'\n`;
  }
}
  ngOnInit() {
    
  }

}
