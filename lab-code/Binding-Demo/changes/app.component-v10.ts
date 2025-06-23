import { Component } from '@angular/core';

/* No longer need to import FormsModule here
as the import is performed in app.module.ts */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  initialValue = 'cat';

  basicBoxContent = '';

/*   Constructor is called when component is 
  loaded */
  constructor() {
    this.resetBasicTextBox();
  }

/*   When basicBoxContent is changed
   the updated value is immediately
   reflected into the basicbox text field
   due to two way binding */
  resetBasicTextBox() {
    this.basicBoxContent = this.initialValue;
  }



}
