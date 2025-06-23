
/* Need to import the following modules
- Input in order to use  the @Input decorator 
- Output in order to use the @Output decorator
- EventEmitter in order to use the EventEmitter module
*/
import { PropertyRead } from '@angular/compiler';
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

  /*   This is no longer needed */
  // @Output()
  // textChanged: EventEmitter<string> = new EventEmitter();

  /*   We now only have one @Output property to 
  transmit newly updated counter value back to parent */
  @Output()
  counterChanged: EventEmitter<number> = new EventEmitter();

  // Normal property
  childText = '';

  processTextChange(value: string) {

    /*  No longer need to do this */
    // this.textChanged.emit(value);

    /* We can just change the value of the 
    normal property */
    this.childText = value;

  }

  /*   Now we just change the value of the normal property 
    directly and transmit this back as an event to the 
    parent template via counterChanged*/

  incCounter() {
    this.childCounter++;
    this.counterChanged.emit(this.childCounter);
  }

  decCounter() {
    this.childCounter--;
    this.counterChanged.emit(this.childCounter);
  }




}
