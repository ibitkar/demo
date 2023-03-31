import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  counter = 0;
  @Input() parentCount: any;
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('ngOnInit',this.parentCount);


  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit',this.parentCount);
  }



  valueChanged() {
    this.counter += 1;
    this.valueChange.emit(this.counter)
  }
}
