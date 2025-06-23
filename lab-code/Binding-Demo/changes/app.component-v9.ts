import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Need to import FormsModule in order to 
// use NgModel
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  initialValue = 'cat';

  firstTextFieldContent = '';
  secondTextFieldContent = '';

  /*   Constructor is called when component is 
    loaded */
  constructor() {
    this.resetTextFields();
  }

  processFirstTextField(hie: HTMLInputElement) {
    this.firstTextFieldContent = hie.value;
  }

  resetTextFields() {
    this.firstTextFieldContent = this.initialValue;

    /*   When secondTextFieldContent is changed
     the updated value is immediately
     reflected into the text field
     due to NgModel two way binding without the need for 
     additoinal property binding */

    this.secondTextFieldContent = this.initialValue;

  }

}
