import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  imports: [GrandChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {

/*  These properties and method serve no purpose 
    in this component except as intermediary 
    placeholders for values transmitted up and down the 
    component hierarchy 
*/
  @Input() tempString: String = "";
  @Output() textChanged: EventEmitter<string> = new EventEmitter();

  processChangeFromChild(val: string) {
    this.textChanged.emit(val);
  }


}
