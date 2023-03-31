import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {


  @Input() highlightColor: string = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor: any;
  constructor() { }


  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.backgroundColor = "gray"
    this.backgroundColor =this.highlightColor;
  }
}
