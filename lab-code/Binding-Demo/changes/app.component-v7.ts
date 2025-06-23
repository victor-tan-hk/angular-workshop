import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

/*   With template reference variable, the parameter of the method
  is already of the correct type such as HTMLInputElement
  no need to further cast it as in the case of passing $event
 */
  processFirstTextField(hie: HTMLInputElement) {
    console.log("The content of first text field is : " + hie.value);
  }

  processCheckBox(hie: HTMLInputElement) {
    console.log("The value of the checkbox is : " + hie.value);
    console.log("Is the checkbox checked ? : " + hie.checked);
  }

}
