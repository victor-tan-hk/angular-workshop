import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public getFromParent: string; 
  @Output() public sendValue: EventEmitter<string>;

  constructor() { 
    this.sendValue = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  newValueChange(event) {
    this.sendValue.emit(event.target.value);
  }

}
