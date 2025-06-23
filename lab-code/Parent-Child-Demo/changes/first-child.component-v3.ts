
/* Need to import the following modules
- Input in order to use  the @Input decorator 
- Output in order to use the @Output decorator
- EventEmitter in order to use the EventEmitter module
*/
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first-child',
  imports: [],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.css'
})
export class FirstChildComponent {

  /*   All properties marked with @Input will be bound 
    to a parent component property and receive data from it */
  @Input()
  childCounter: number = 0;

  /*   All properties marked with @Output will be of generic
    type EventEmitter with a specific type (string, number)
    and then bound to a template statement in the parent template
    that will in turn reference a method in the parent component  */
  @Output()
  textChanged: EventEmitter<string> = new EventEmitter();

  processTextChange(value: string) {
    
    /*     Call the emit method on the EventEmitter object 
        to send the value parameter to the parent template */
    this.textChanged.emit(value);
  }

}
