import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // boolean variables for controlling 
  // dynamic binding of classes
  isItDangerous = false;
  isItSpecial = false;
  isItLarge = false;

  // for controlling disabled status of green button
  isDisabled = false;

  // to store contents of first text box
  firstTextBox = "";

  processFirstBox(hie: HTMLInputElement) {
    this.firstTextBox = hie.value;
  }

  // The current image name to display
  imageName = "cat";

  // The list of all image names
  animalNames = ['cat','dog','horse'];

/*   Check the content of the text field
  against the list of image names, and if
  it matches one of the items in the list,
  set the current image name to that item
 */   
  processAnimalBox(hie: HTMLInputElement) {
    for (const name of this.animalNames) {
      if (hie.value === name)
        this.imageName = name;
    }
  }


}
