import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  parentVariable :string  = 'Initial parent value';
  valueFromChild: string = '';

  changeParentVariable(event) {
    this.parentVariable = event.target.value;
  }

  receiveFromChild(valueOfevent: string) {
    this.valueFromChild = valueOfevent;
  }

}
