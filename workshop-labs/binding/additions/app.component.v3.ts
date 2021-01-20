import { Component } from '@angular/core';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myPlace: string = "Kuala Lumpur";
  disableFirstButton: boolean = false;


  onFirstButtonClick(event: MouseEvent) {
    console.log(event.type);
    console.log("The mouse button that was clicked was " + event.button);
    console.log("Mouse was clicked at x-coordinate : " + event.clientX);
    console.log("Mouse was clicked at y-coordinate : " + event.clientY);
    console.log("Button name is  : " + (<HTMLButtonElement> event.target).name);
    console.log("Function performed by button is  : " + (<HTMLButtonElement> event.target).type);
  	console.log("Button text is : " + (<HTMLElement> event.target).innerText);
    console.log("The event is : ", event);
  }

  getFixedString(): string {
    return 'Java and C++';
  }
}
