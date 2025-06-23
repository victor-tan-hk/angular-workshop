import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Demonstrating getting property data from InputEvent
  // This tells us the key related to that event
  
  processFirstTextField(event: Event) { 

    // Approach #1 syntax to cast event to InputEvent 
    let iEvent = (<InputEvent> event);
    console.log("The key typed in the first text field is : ", iEvent.data);

  }

  // Demonstrating getting value property from HTMLInputElement
  // This tells us the content of the text field, the most
  // common use case

  processSecondTextField(event: Event) {

    // Approach #1 syntax to cast event.target to HTMLInputElement 
    let hie = (<HTMLInputElement> event.target);
    console.log("The content of the second text field is : " + hie.value);
  }

  // Demonstrating getting value and checked property 
  // from HTMLInputElement
  processCheckBox(event: Event) {
    
     // Approach #2 syntax to cast event.target to HTMLInputElement 
    let hie = event.target as HTMLInputElement;
    console.log("The value of the check box is : " + hie.value);
    console.log("Is the checkbox checked  ? : " + hie.checked);
  }

  // Demonstrating innertext property 
  // from HTMLButtonElement
  processNormalButton(event: Event) {

    // Approach #2 syntax to cast event.target to a different class 
    let be = event.target as HTMLButtonElement;

    // Most of the time, when user clicks on a button
    // we are not interested in the button itself, we just
    // wnat to perform some action
    // However, we can also access properties on the button
    // as well like type and innerText 
    console.log("The button type is : " + be.type);
    console.log("Button text is : " + be.innerText);
  }


}
