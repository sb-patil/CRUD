import {  Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector:"[Highlight]"
})
export class CustomDirectiveComponent {

  constructor(private el: ElementRef) { }
 
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('yellow');
  }
 
}